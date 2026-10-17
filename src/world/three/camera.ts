import { PerspectiveCamera, Vector3 } from 'three'

// The viewer's eye. It walks about the deck, but never off it, so the jetty and her stay at a
// distance. Dragging walks: up to go forwards, down to go back, sideways to turn, all the way round.
// Clicking a spot on the deck walks there; scrolling or pinching steps forwards and back; the keys
// W A S D and the arrows walk while held. Right-drag, or two fingers moved up and down, tilts the view
// within safe limits. Easing is gentle throughout.

export type CameraRig = ReturnType<typeof createCameraRig>

// Where the eye may stand: on the deck, inside the side wall, under the roof.
const deck = { min: new Vector3(-2.9, 1.1, -1.75), max: new Vector3(2.5, 2.7, 3.6) }
const tilt = { min: -1.05, max: 0.6 }
// Walking and turning speeds: metres and radians a second.
const WALK = 1.7, TURN = 1.4

export function createCameraRig(camera: PerspectiveCamera, element: HTMLElement, options: { reducedMotion: boolean; groundAt: (x: number, z: number) => number; onMoved: (moved: boolean) => void }){
  // `enabled` is switched off while her work is open.
  const controls = { enabled: true }
  type View = { position: Vector3; yaw: number; pitch: number }
  const view = (): View => ({ position: new Vector3(), yaw: 0, pitch: 0 })
  // Home, where the eye is now, and where it is easing towards.
  const home = view(), now = view(), wanted = view()
  const copy = (to: View, from: View) => { to.position.copy(from.position); to.yaw = from.yaw; to.pitch = from.pitch }

  // Framing depends on the screen's shape: tall screens stand further back and higher, and see wider,
  // so her, the desk and the jetty all stay in view.
  function frame(aspect: number){
    const tall = Math.min(1, Math.max(0, (1.25 - aspect) / 0.75))
    camera.fov = 50 + tall * 18
    camera.updateProjectionMatrix()
    // From the back of the deck: her mat and sketches in front, and her on the jetty over the lake.
    const target = new Vector3(1.8 + tall * 0.6, 0.45, -3.4 - tall * 1.2)
    home.position.set(1.9 + tall * 0.3, 2.3 + tall * 0.4, 3.9 + tall * 0.6).clamp(deck.min, deck.max)
    const to = target.sub(home.position)
    home.yaw = Math.atan2(-to.x, -to.z)
    home.pitch = Math.atan2(to.y, Math.hypot(to.x, to.z))
  }

  function goHome(instant = false){
    copy(wanted, home)
    if (instant || options.reducedMotion) copy(now, home)
  }

  // Flat directions for the current heading: ahead, and to the right.
  const ahead = new Vector3(), right = new Vector3()
  function headings(){
    ahead.set(-Math.sin(wanted.yaw), 0, -Math.cos(wanted.yaw))
    right.set(Math.cos(wanted.yaw), 0, -Math.sin(wanted.yaw))
  }
  function turn(by: number, up: number){
    wanted.yaw += by
    wanted.pitch = Math.min(tilt.max, Math.max(tilt.min, wanted.pitch + up))
  }
  function step(forwards: number, sideways: number){
    headings()
    wanted.position.addScaledVector(ahead, forwards).addScaledVector(right, sideways).clamp(deck.min, deck.max)
    destination = null
  }
  // Held keys or arrows: forwards (1) or back (-1), and turning left (1) or right (-1).
  const held = { forwards: 0, turning: 0 }
  function hold(forwards: number, turning: number){
    held.forwards = forwards
    held.turning = turning
  }
  // A spot on the deck to walk to.
  let destination: Vector3 | null = null
  function walkTo(x: number, z: number){
    destination = new Vector3(x, wanted.position.y, z).clamp(deck.min, deck.max)
  }

  // Pointer: one finger or the left button walks and turns; the right button, or two fingers moved
  // up and down, tilts; pinching steps forwards and back. Sideways, the scene is grabbed: dragging
  // right turns the view left, as if pulling the world round.
  const pointers = new Map<number, { x: number; y: number; button: number }>()
  let pinch = 0
  const spread = () => {
    const [a, b] = [...pointers.values()]
    return Math.hypot(a.x - b.x, a.y - b.y)
  }
  const centre = () => {
    const all = [...pointers.values()]
    return { x: all.reduce((sum, p) => sum + p.x, 0) / all.length, y: all.reduce((sum, p) => sum + p.y, 0) / all.length }
  }
  const onDown = (event: PointerEvent) => {
    if (!controls.enabled) return
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY, button: event.button })
    if (pointers.size === 2) pinch = spread()
  }
  const onMove = (event: PointerEvent) => {
    const pointer = pointers.get(event.pointerId)
    if (!pointer || !controls.enabled) return
    const scale = 1 / Math.max(320, Math.min(element.clientWidth, element.clientHeight))
    if (pointers.size >= 2){
      const before = centre()
      pointer.x = event.clientX
      pointer.y = event.clientY
      const after = centre()
      turn((after.x - before.x) * scale * 2.2, (after.y - before.y) * scale * 2.2)
      const nextSpread = spread()
      step((nextSpread - pinch) * scale * 3, 0)
      pinch = nextSpread
      return
    }
    const dx = event.clientX - pointer.x, dy = event.clientY - pointer.y
    pointer.x = event.clientX
    pointer.y = event.clientY
    if (pointer.button === 2){ turn(dx * scale * 2.2, dy * scale * 2.2); return }
    turn(dx * scale * 2.2, 0)
    step(-dy * scale * 4, 0)
  }
  const onUp = (event: PointerEvent) => { pointers.delete(event.pointerId); if (pointers.size < 2) pinch = 0 }
  const onWheel = (event: WheelEvent) => {
    if (!controls.enabled) return
    event.preventDefault()
    step(Math.max(-0.6, Math.min(0.6, -event.deltaY * 0.004)), 0)
  }
  const onMenu = (event: Event) => event.preventDefault()
  element.addEventListener('pointerdown', onDown)
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp)
  window.addEventListener('pointercancel', onUp)
  element.addEventListener('wheel', onWheel, { passive: false })
  element.addEventListener('contextmenu', onMenu)

  // Keyboard steps: Page Up and Page Down tilt, + and - step forwards and back.
  function nudge(by: number, up: number, zoom: number){
    turn(by, -up)
    if (zoom !== 1) step(zoom < 1 ? 0.4 : -0.4, 0)
  }

  let moved = false
  const look = new Vector3()
  function update(dt: number){
    if (controls.enabled && (held.forwards || held.turning)){
      turn(held.turning * TURN * dt, 0)
      step(held.forwards * WALK * dt, 0)
    }
    if (destination){
      const left = destination.clone().sub(wanted.position)
      const distance = left.length()
      if (distance < 0.02) destination = null
      else wanted.position.addScaledVector(left, Math.min(1, (WALK * dt) / distance))
    }
    const k = options.reducedMotion ? 1 : 1 - Math.exp(-dt * 9)
    now.position.lerp(wanted.position, k)
    now.yaw += (wanted.yaw - now.yaw) * k
    now.pitch += (wanted.pitch - now.pitch) * k
    camera.position.copy(now.position)
    look.set(-Math.sin(now.yaw) * Math.cos(now.pitch), Math.sin(now.pitch), -Math.cos(now.yaw) * Math.cos(now.pitch))
    camera.lookAt(look.add(now.position))
    const away = wanted.position.distanceTo(home.position) + Math.abs(wanted.yaw - home.yaw) + Math.abs(wanted.pitch - home.pitch)
    const nowMoved = away > 0.3
    if (nowMoved !== moved){ moved = nowMoved; options.onMoved(moved) }
  }

  return {
    controls,
    frame,
    goHome,
    nudge,
    hold,
    walkTo,
    update,
    dispose(){
      element.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      element.removeEventListener('wheel', onWheel)
      element.removeEventListener('contextmenu', onMenu)
    }
  }
}
