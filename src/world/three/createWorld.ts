import {
  ACESFilmicToneMapping, Clock, DirectionalLight, Fog, HemisphereLight, Mesh, PCFShadowMap, PCFSoftShadowMap, PerspectiveCamera, Plane, Raycaster,
  SRGBColorSpace, Scene, Vector2, Vector3, WebGLRenderer, type Object3D
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js'
import { createCameraRig } from './camera'
import { buildCat } from './cat'
import { buildDog } from './dog'
import { buildEnvironment, groundHeight, nearShore } from './environment'
import { paintedGradeShader, world } from './materials'
import { buildStudio, seat, type Interactive, type StudioContent } from './studio'
import { blendAtmosphere, copyAtmosphere, createAtmosphere, cycleAtmosphere, moodAtmosphere, type MoodId } from './timeOfDay'

export type { Interactive } from './studio'
export type Selection = { kind: Interactive['kind']; collection?: string }
export type WorldOptions = {
  content: StudioContent
  mood: MoodId
  reducedMotion: boolean
  onHover: (item: { label: string; x: number; y: number } | null) => void
  onSelect: (selection: Selection) => void
  onLight: (kind: 'candle', on: boolean) => void
  onMoved: (moved: boolean) => void
}

// A full day passes in this many seconds when the day cycle is running.
const DAY_SECONDS = 300

export function createWorld(canvas: HTMLCanvasElement, options: WorldOptions){
  const small = Math.min(window.innerWidth, window.innerHeight) < 700
  const quality = small
    ? { grass: 16000, flowers: 360, shadows: 1024, low: true, reflection: 0.45, trees: 0.55 }
    : { grass: 36000, flowers: 800, shadows: 2048, low: false, reflection: 0.7, trees: 1 }

  const renderer = new WebGLRenderer({ canvas, antialias: !small, powerPreference: 'high-performance' })
  let pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25)
  renderer.setPixelRatio(pixelRatio)
  renderer.outputColorSpace = SRGBColorSpace
  renderer.toneMapping = ACESFilmicToneMapping
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap
  // The world moves slowly, so its shadows are redrawn every other frame (and at once on a change).
  renderer.shadowMap.autoUpdate = false

  const scene = new Scene()
  scene.fog = new Fog('#cfe3ee', 60, 750)
  const camera = new PerspectiveCamera(50, 1, 0.05, 2000)

  // Sky light and the sun (or moon), whose shadows fall across the deck and meadow.
  const hemi = new HemisphereLight('#cfe6ff', '#6f8f4f', 1)
  const sun = new DirectionalLight('#ffffff', 2.5)
  sun.castShadow = true
  sun.shadow.mapSize.set(quality.shadows, quality.shadows)
  Object.assign(sun.shadow.camera, { left: -9, right: 12, top: 9, bottom: -7, near: 1, far: 90 })
  sun.shadow.bias = -0.0006
  sun.shadow.normalBias = 0.02
  sun.target.position.set(1, 0, -1)
  scene.add(hemi, sun, sun.target)

  const environment = buildEnvironment(scene, quality)
  environment.setPixelRatio(pixelRatio)
  const studio = buildStudio(scene, quality, options.content)
  environment.hideFromReflection(studio.root)
  const cat = buildCat(scene, Math.random, seat)
  const dog = buildDog(scene, Math.random, cat, new Vector2(3.6, nearShore(3.6) + 0.8))
  const interactives: Interactive[] = [
    ...studio.interactives,
    ...environment.ducks.hits.map(hit => ({ kind: 'duck' as const, label: 'A duck', hit, highlight: [] })),
    { kind: 'cat', label: 'Say hello to the cat', hit: cat.hit, highlight: cat.highlight },
    { kind: 'dog', label: 'Say hello to the dog', hit: dog.hit, highlight: dog.highlight }
  ]

  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(new Vector2(256, 256), 0.32, 0.6, 0.86)
  composer.addPass(bloom)
  composer.addPass(new OutputPass())
  const grade = new ShaderPass(paintedGradeShader)
  composer.addPass(grade)
  const fxaa = new ShaderPass(FXAAShader)
  composer.addPass(fxaa)

  const rig = createCameraRig(camera, canvas, { reducedMotion: options.reducedMotion, groundAt: groundHeight, onMoved: options.onMoved })
  function frame(){
    const width = canvas.clientWidth || window.innerWidth
    const height = canvas.clientHeight || window.innerHeight
    renderer.setSize(width, height, false)
    composer.setSize(width, height)
    bloom.resolution.set(width / 2, height / 2)
    fxaa.material.uniforms.resolution.value.set(1 / (width * pixelRatio), 1 / (height * pixelRatio))
    grade.uniforms.uAspect.value = width / height
    camera.aspect = width / height
    rig.frame(camera.aspect)
  }
  frame()
  rig.goHome(true)
  window.addEventListener('resize', frame)
  // Prepare every shader now, while the world loads, so nothing stutters the first time it comes into
  // view as she looks around.
  try { renderer.compile(scene, camera) } catch (error) { console.warn('Shaders will be prepared as they are needed:', error) }

  // Pointer: find which object, if any, is under it. Only deliberate hit areas count, and anything
  // solid in front of them (her, the desk, a tree) blocks the click.
  const raycaster = new Raycaster()
  const hits = interactives.map(item => item.hit)
  const solid: Object3D[] = []
  scene.traverse(object => { if (object instanceof Mesh && object.castShadow && !hits.includes(object)) solid.push(object) })
  let hovered: Interactive | null = null
  const ndc = new Vector2()
  function pick(clientX: number, clientY: number){
    const rect = canvas.getBoundingClientRect()
    ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1)
    raycaster.setFromCamera(ndc, camera)
    const hit = raycaster.intersectObjects(hits, false).find(item => item.object.parent?.visible !== false)
    if (!hit) return null
    const blocker = raycaster.intersectObjects(solid, false)[0]
    const item = interactives.find(entry => entry.hit === hit.object) ?? null
    // Small things on the desk sit inside their own solid parts, so allow a little overlap.
    if (blocker && blocker.distance < hit.distance - 0.25 && item?.kind !== 'duck') return null
    return item
  }
  function setHovered(next: Interactive | null, x = 0, y = 0){
    if (next !== hovered){
      hovered?.highlight.forEach(material => material.emissive.set('#000000'))
      hovered = next
      hovered?.highlight.forEach(material => material.emissive.set('#3a2a12'))
      canvas.style.cursor = hovered ? 'pointer' : ''
    }
    options.onHover(hovered ? { label: hovered.label, x, y } : null)
  }
  // A click is a short press that barely moves; anything longer is looking around.
  let down: { x: number; y: number; time: number } | null = null
  let dragging = false
  const onPointerMove = (event: PointerEvent) => {
    if (down && Math.hypot(event.clientX - down.x, event.clientY - down.y) > 6) dragging = true
    if (event.pointerType === 'mouse' && !dragging) setHovered(pick(event.clientX, event.clientY), event.clientX, event.clientY)
    else if (dragging) setHovered(null)
  }
  const onPointerDown = (event: PointerEvent) => { down = { x: event.clientX, y: event.clientY, time: performance.now() }; dragging = false }
  const onPointerUp = (event: PointerEvent) => {
    const press = down
    down = null
    if (!press || dragging || performance.now() - press.time > 600) { dragging = false; return }
    const item = pick(event.clientX, event.clientY)
    if (item) select(item)
    else walkOnDeck(event.clientX, event.clientY)
  }
  const onLeave = () => setHovered(null)
  // A click on the deck's floor, with nothing in the way, walks there.
  const floor = new Plane(new Vector3(0, 1, 0), 0), onFloor = new Vector3()
  function walkOnDeck(clientX: number, clientY: number){
    const rect = canvas.getBoundingClientRect()
    ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1)
    raycaster.setFromCamera(ndc, camera)
    if (!raycaster.ray.intersectPlane(floor, onFloor)) return
    if (onFloor.x < -3.6 || onFloor.x > 2.8 || onFloor.z < -2.05 || onFloor.z > 3.85) return
    const blocker = raycaster.intersectObjects(solid, false)[0]
    if (blocker && blocker.distance < camera.position.distanceTo(onFloor) - 0.3) return
    rig.walkTo(onFloor.x, onFloor.z)
  }
  canvas.addEventListener('pointermove', onPointerMove)
  canvas.addEventListener('pointerdown', onPointerDown)
  canvas.addEventListener('pointerup', onPointerUp)
  canvas.addEventListener('pointerleave', onLeave)

  function select(item: Interactive){
    if (item.kind === 'candle'){
      options.onLight(item.kind, studio.toggle(item.kind))
      if (hovered === item) options.onHover(null)
      return
    }
    if (item.kind === 'duck'){ environment.ducks.disturb(item.hit as Mesh); return }
    if (item.kind === 'cat'){ cat.greet(); return }
    if (item.kind === 'dog'){ dog.greet(); return }
    setHovered(null)
    options.onSelect({ kind: item.kind, collection: item.collection })
  }

  // Mood: either a chosen mood, or the day cycle. The scene eases from its current light towards the
  // target, so every change of mood is a smooth transition.
  let mood: MoodId | 'cycle' = options.mood
  let hour = 9
  const target = createAtmosphere()
  const current = moodAtmosphere(options.mood)
  const sunScreen = new Vector3()
  function applyAtmosphere(){
    const a = current
    world.uSunDir.value.copy(a.sunDirection)
    world.uLightDir.value.copy(a.light)
    world.uSunUp.value = a.sunUp * (1 - a.gloom * 0.7)
    world.uSunColor.value.copy(a.sun)
    world.uSunIntensity.value = a.sunIntensity
    world.uHemiSky.value.copy(a.hemiSky)
    world.uHemiGround.value.copy(a.hemiGround)
    world.uHemiIntensity.value = a.hemiIntensity
    world.uFogColor.value.copy(a.fog)
    world.uFogNear.value = a.fogNear
    world.uFogFar.value = a.fogFar
    world.uSkyTop.value.copy(a.skyTop)
    world.uHorizon.value.copy(a.skyHorizon)
    world.uWater.value.copy(a.water)
    world.uStars.value = a.stars
    world.uRain.value = a.rain
    world.uWet.value = a.wet
    world.uGloom.value = a.gloom
    const fog = scene.fog as Fog
    fog.color.copy(a.fog)
    fog.near = a.fogNear
    fog.far = a.fogFar
    hemi.color.copy(a.hemiSky)
    hemi.groundColor.copy(a.hemiGround)
    hemi.intensity = a.hemiIntensity
    sun.color.copy(a.sun)
    sun.intensity = a.sunIntensity * (0.55 + a.isSun * 0.45)
    sun.position.copy(sun.target.position).addScaledVector(a.light, 40)
    environment.applyAtmosphere(a)
    studio.setDarkness(Math.min(1, a.stars * 1.2))
    renderer.toneMappingExposure = a.exposure
    grade.uniforms.uShadowTint.value.copy(a.shadowTint)
    grade.uniforms.uHighlightTint.value.copy(a.highlightTint)
    grade.uniforms.uSaturation.value = a.saturation
    grade.uniforms.uRayColour.value.copy(a.sun)
    // Light shafts only when the sun is actually in view.
    sunScreen.copy(camera.position).addScaledVector(a.sunDirection, 500).project(camera)
    const inView = sunScreen.z < 1 && Math.abs(sunScreen.x) < 1.4 && Math.abs(sunScreen.y) < 1.4 ? 1 : 0
    grade.uniforms.uSun.value.set(sunScreen.x * 0.5 + 0.5, sunScreen.y * 0.5 + 0.5)
    grade.uniforms.uRays.value = a.rays * a.sunUp * inView * (quality.low ? 0 : 1)
  }

  // If the device can't keep up, step quality down in stages, costliest first: soft shadows, the
  // light shafts, the reflection's size, some of the grass, then a little resolution. Fast devices
  // keep everything.
  let sampleTime = 0, sampleFrames = 0, step = 0, shadowEvery = 2
  function adapt(dt: number){
    if (step > 6) return
    sampleTime += dt
    sampleFrames++
    if (sampleFrames < 90) return
    const average = sampleTime / sampleFrames
    sampleTime = 0
    sampleFrames = 0
    if (average < 1 / 48) { step = 7; return }
    // Still slow after every step: keep easing the resolution down, but not below 0.7.
    if (step === 6){
      if (average > 1 / 24 && pixelRatio > 0.7){ pixelRatio = Math.max(0.7, pixelRatio * 0.88); applyPixelRatio() } else step = 7
      return
    }
    step++
    if (step === 1) { renderer.shadowMap.type = PCFShadowMap; shadowEvery = 3 }
    if (step === 2) { quality.low = true; bloom.enabled = false }
    if (step === 3) { pixelRatio = Math.max(0.8, pixelRatio * 0.8); applyPixelRatio() }
    if (step === 4) {
      const target = environment.lake.getRenderTarget()
      target.setSize(Math.max(256, Math.round(target.width * 0.7)), Math.max(160, Math.round(target.height * 0.7)))
    }
    if (step === 5) environment.thinGrass(0.6)
  }

  function applyPixelRatio(){
    renderer.setPixelRatio(pixelRatio)
    composer.setPixelRatio(pixelRatio)
    environment.setPixelRatio(pixelRatio)
    frame()
  }

  const clock = new Clock()
  let elapsed = 0
  let frameId = 0
  let paused = false
  let frames = 0
  function loop(){
    frameId = requestAnimationFrame(loop)
    if (document.hidden || paused) { clock.getDelta(); return }
    const rawDt = clock.getDelta()
    adapt(rawDt)
    const dt = Math.min(rawDt, 1 / 20)
    if (!options.reducedMotion) elapsed += dt
    if (mood === 'cycle'){
      hour = (hour + (dt * 24) / DAY_SECONDS) % 24
      cycleAtmosphere(hour, target)
    }
    blendAtmosphere(current, target, options.reducedMotion ? 1 : Math.min(1, dt * 1.1))
    if (++frames % shadowEvery === 0) renderer.shadowMap.needsUpdate = true
    world.uTime.value = elapsed
    rig.update(dt)
    applyAtmosphere()
    environment.update(elapsed, options.reducedMotion ? 0 : dt, camera.position)
    cat.update(elapsed, options.reducedMotion ? 0 : dt, camera.position)
    dog.update(elapsed, options.reducedMotion ? 0 : dt)
    studio.update(elapsed, dt)
    composer.render()
  }
  moodAtmosphere(options.mood, target)
  copyAtmosphere(current, target)
  applyAtmosphere()
  renderer.shadowMap.needsUpdate = true
  loop()

  return {
    setMood(next: MoodId | 'cycle'){
      mood = next
      if (next !== 'cycle') moodAtmosphere(next, target)
    },
    getHour: () => hour,
    toggle(kind: 'candle'){ options.onLight(kind, studio.toggle(kind)) },
    open(kind: Selection['kind'], collection?: string){ options.onSelect({ kind, collection }) },
    goHome(){ rig.goHome() },
    nudge(turn: number, tilt: number, zoom: number){ rig.nudge(turn, tilt, zoom) },
    // Walking while a key or an on-screen arrow is held.
    hold(forwards: number, turning: number){ rig.hold(forwards, turning) },
    // While her work is open, the world holds still and stops drawing; it resumes exactly as it was.
    setPaused(next: boolean){
      paused = next
      rig.controls.enabled = !next
    },
    dispose(){
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', frame)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointerup', onPointerUp)
      canvas.removeEventListener('pointerleave', onLeave)
      rig.dispose()
      composer.dispose()
      renderer.dispose()
    }
  }
}
