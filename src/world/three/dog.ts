import { CircleGeometry, ConeGeometry, CylinderGeometry, Group, Mesh, MeshBasicMaterial, Scene, SphereGeometry, Vector2, Vector3 } from 'three'
import { groundHeight, nearShore } from './environment'
import { surface } from './materials'
import { contactShadowTexture } from './textures'

// A white Indian Spitz who keeps the cat company: a fluffy coat with a thick ruff, pricked ears, a
// fox-like face and a plume of a tail curled over its back. It trots after the cat wherever it goes
// on land, waits at the head of the jetty while the cat sits out with her, and settles down by the
// cat's bed while it sleeps. When the cat sits or eats, the dog sometimes asks it to play: zoomies
// in a circle round it, then a play-bow, while the cat turns to watch and bats at it. Clicked, it
// spins round with its tail going.

type Cat = { position: Vector3; bed: Vector2; state: () => string; setPlaymate: (at: Vector3 | null) => void }

const TROT = 0.75, RUN = 1.5
const fur = surface('#fbfaf5', { roughness: 1 })
const shade = surface('#ece8de', { roughness: 1 })
const dark = surface('#1b1815', { roughness: 0.35 })
const pink = surface('#e2a0a0', { roughness: 0.6 })
const shadow = new MeshBasicMaterial({ map: contactShadowTexture(), transparent: true, depthWrite: false, opacity: 0.6 })

function leg(length: number, thigh: number, fluff: number){
  const pivot = new Group()
  const bone = new Mesh(new CylinderGeometry(0.026, 0.022, length, 8), fur)
  bone.position.y = -length / 2
  const top = new Mesh(new SphereGeometry(thigh, 10, 8), fur)
  top.scale.set(0.85, 1.3, 1)
  top.position.y = -0.02
  // Feathering down the back of the leg.
  const feather = new Mesh(new SphereGeometry(fluff, 8, 6), shade)
  feather.scale.set(0.8, 1.6, 0.8)
  feather.position.set(0, -length * 0.45, -0.012)
  const paw = new Mesh(new SphereGeometry(0.028, 10, 6), fur)
  paw.scale.set(1, 0.6, 1.3)
  paw.position.set(0, -length, 0.01)
  pivot.add(bone, top, feather, paw)
  return pivot
}

function makeDog(){
  const root = new Group()
  const hip = 0.25
  // The torso pivots at the hips, so the dog can sit, bow and lie down.
  const torso = new Group()
  torso.position.set(0, hip, -0.17)
  const body = new Mesh(new SphereGeometry(0.12, 18, 12), fur)
  body.scale.set(0.95, 0.92, 1.85)
  body.position.set(0, 0.04, 0.17)
  const rump = new Mesh(new SphereGeometry(0.105, 14, 10), fur)
  rump.position.set(0, 0.04, 0.02)
  // The ruff: a thick collar of fur round the neck and chest.
  const ruff = new Mesh(new SphereGeometry(0.13, 16, 12), fur)
  ruff.scale.set(1.12, 1.08, 0.95)
  ruff.position.set(0, 0.09, 0.34)
  const bib = new Mesh(new SphereGeometry(0.09, 12, 10), shade)
  bib.scale.set(1, 1.2, 0.8)
  bib.position.set(0, 0.0, 0.42)
  torso.add(body, rump, ruff, bib)

  const head = new Group()
  head.position.set(0, 0.2, 0.46)
  const skull = new Mesh(new SphereGeometry(0.085, 16, 12), fur)
  skull.scale.set(1.05, 0.95, 1)
  const cheeks = new Mesh(new SphereGeometry(0.08, 14, 10), fur)
  cheeks.scale.set(1.3, 0.9, 0.8)
  cheeks.position.set(0, -0.025, -0.01)
  const muzzle = new Mesh(new SphereGeometry(0.04, 12, 8), fur)
  muzzle.scale.set(0.85, 0.72, 1.7)
  muzzle.position.set(0, -0.028, 0.085)
  const nose = new Mesh(new SphereGeometry(0.014, 10, 8), dark)
  nose.position.set(0, -0.018, 0.152)
  const tongue = new Mesh(new SphereGeometry(0.018, 10, 6), pink)
  tongue.scale.set(0.9, 0.35, 1.3)
  tongue.position.set(0, -0.058, 0.105)
  head.add(skull, cheeks, muzzle, nose, tongue)
  for (const side of [-1, 1]){
    const eye = new Mesh(new SphereGeometry(0.012, 10, 8), dark)
    eye.position.set(side * 0.034, 0.018, 0.07)
    const ear = new Group()
    ear.position.set(side * 0.046, 0.075, -0.01)
    ear.rotation.set(-0.15, 0, -side * 0.28)
    const outer = new Mesh(new ConeGeometry(0.032, 0.075, 8), fur)
    outer.position.y = 0.035
    const inner = new Mesh(new ConeGeometry(0.02, 0.05, 8), pink)
    inner.scale.z = 0.4
    inner.position.set(0, 0.03, 0.013)
    ear.add(outer, inner)
    head.add(eye, ear)
  }
  torso.add(head)

  const fore = [-1, 1].map(side => {
    const limb = leg(hip, 0.04, 0.026)
    limb.position.set(side * 0.055, 0, 0.32)
    torso.add(limb)
    return limb
  })
  const hind = [-1, 1].map(side => {
    const limb = leg(hip, 0.06, 0.032)
    limb.position.set(side * 0.062, hip, -0.15)
    root.add(limb)
    return limb
  })

  // The tail: a plume curled up over the back, in fluffy puffs that wag together.
  const tail = new Group()
  tail.position.set(0, 0.1, -0.06)
  for (let i = 0; i < 10; i++){
    // From the base at the back, up and over, to lie forward along the back.
    const angle = 3.4 - i * 0.32
    const puff = new Mesh(new SphereGeometry(0.058 - i * 0.002, 10, 8), i % 2 ? shade : fur)
    puff.scale.set(1.15, 0.9, 1)
    puff.position.set(0, 0.06 + Math.sin(angle) * 0.11, 0.06 + Math.cos(angle) * 0.11)
    tail.add(puff)
  }
  torso.add(tail)

  root.add(torso)
  // A small-to-medium dog, a little taller and longer than the cat.
  root.scale.setScalar(0.85)
  root.traverse(child => { if (child instanceof Mesh) child.castShadow = true })
  const under = new Mesh(new CircleGeometry(0.22, 18), shadow)
  under.rotation.x = -Math.PI / 2
  under.scale.set(0.65, 1.5, 1)
  under.position.set(0, 0.004, 0.03)
  root.add(under)
  return { root, torso, head, tongue, fore, hind, tail }
}

export function buildDog(scene: Scene, rand: () => number, cat: Cat, jettyHead: Vector2){
  const dog = makeDog()
  scene.add(dog.root)
  const hit = new Mesh(new SphereGeometry(0.34, 8, 6), new MeshBasicMaterial({ visible: false }))
  hit.position.set(0, 0.25, 0.08)
  dog.root.add(hit)

  // Where it may go: the deck and the land, never through the side wall, into the lake or the
  // planters, posts and cushion.
  const keepClear: Array<[number, number, number]> = [[-2.85, -1.45, 0.38], [2.8, -1.97, 0.18], [2.8, 3.77, 0.18], [-2.68, 2.95, 0.42], [2.56, 3.6, 0.22], [-3.14, 3.58, 0.22], [-3.05, 0.35, 0.2]]
  function keepOnLand(p: Vector3){
    if (p.x < -3.2 && p.z > -2.1 && p.z < 3.9) p.x = -3.2
    p.z = Math.min(7, Math.max(p.z, nearShore(p.x) + 0.45))
    p.x = Math.min(9, Math.max(-8, p.x))
    for (const [x, z, r] of keepClear){
      const dx = p.x - x, dz = p.z - z, d = Math.hypot(dx, dz)
      if (d < r && d > 1e-4){ p.x = x + (dx / d) * r; p.z = z + (dz / d) * r }
    }
  }
  const heightAt = (x: number, z: number) => x > -3.6 && x < 2.8 && z > -2.05 && z < 3.85 ? 0 : groundHeight(x, z)

  const p = dog.root.position
  // It starts lying by the cat's bed.
  p.set(cat.bed.x + 0.15, 0, cat.bed.y + 0.75)
  let heading = Math.PI, speed = 0, gait = 0, idle = 4, greet = 0, wag = 0
  let play = 0, cooldown = 12
  const pose = { sit: 0, lie: 1, bow: 0 }
  const target = new Vector3(), toCat = new Vector3()

  function update(time: number, dt: number){
    if (!dt) return
    const catAt = cat.position
    const catState = cat.state()
    const onJetty = catAt.z < jettyHead.y - 0.3
    toCat.set(catAt.x - p.x, 0, catAt.z - p.z)
    const near = toCat.length()
    greet = Math.max(0, greet - dt)
    cooldown -= dt

    // Decide where to be and how to be.
    let want = 0, settle: 'sit' | 'lie' | 'bow' | 'stand' = 'stand', face: number | null = null
    if (greet > 0){
      face = heading + dt * 7
    } else if (play > 0){
      play -= dt
      if (play > 2.2){
        // Zoomies round the cat.
        const angle = time * 2.6
        target.set(catAt.x + Math.cos(angle) * 0.75, 0, catAt.z + Math.sin(angle) * 0.75)
        want = RUN
      } else {
        // A play-bow, facing the cat.
        settle = 'bow'
        face = Math.atan2(toCat.x, toCat.z)
      }
      if (play <= 0 || (catState !== 'sit' && catState !== 'play' && catState !== 'eat')){
        play = 0
        cooldown = 18 + rand() * 18
        cat.setPlaymate(null)
      }
    } else if (onJetty){
      // Waits at the head of the jetty, looking out to where the cat sits with her.
      target.set(jettyHead.x + 0.3, 0, jettyHead.y + 0.45)
      if (p.distanceTo(target) > 0.25) want = TROT
      else { settle = idle > 3 ? 'lie' : 'sit'; face = Math.atan2(catAt.x - p.x, catAt.z - p.z) }
    } else if (catState === 'sleep'){
      // Curls up by the cat's bed.
      target.set(cat.bed.x + 0.15, 0, cat.bed.y + 0.75)
      if (p.distanceTo(target) > 0.25) want = TROT
      else { settle = 'lie'; face = Math.atan2(cat.bed.x - p.x, cat.bed.y - p.z) }
    } else if ((catState === 'sit' || catState === 'eat') && cooldown <= 0 && near < 2){
      play = 7.5
      cat.setPlaymate(p)
    } else {
      // Follows, keeping a friendly distance on its own side of the cat.
      if (near > 1.15){
        target.set(catAt.x, 0, catAt.z).addScaledVector(toCat.normalize(), -0.8)
        want = near > 3 ? RUN : TROT
      } else {
        settle = idle > 2.5 ? 'sit' : 'stand'
        face = Math.atan2(catAt.x - p.x, catAt.z - p.z)
      }
    }

    // Move.
    if (want > 0){
      idle = 0
      const dx = target.x - p.x, dz = target.z - p.z
      if (Math.hypot(dx, dz) > 0.05) face = Math.atan2(dx, dz)
    } else idle += dt
    if (face !== null){
      let turn = face - heading
      turn = Math.atan2(Math.sin(turn), Math.cos(turn))
      heading += turn * Math.min(1, dt * (greet > 0 ? 1 : 6))
      if (greet > 0) heading = face
    }
    const settled = Math.max(pose.sit, pose.lie, pose.bow)
    speed += (want * (1 - settled) - speed) * Math.min(1, dt * 4)
    p.x += Math.sin(heading) * speed * dt
    p.z += Math.cos(heading) * speed * dt
    keepOnLand(p)
    p.y += (heightAt(p.x, p.z) - p.y) * Math.min(1, dt * 8)
    dog.root.rotation.y = heading

    // Pose.
    const rate = Math.min(1, dt * 3)
    pose.sit += ((settle === 'sit' ? 1 : 0) - pose.sit) * rate
    pose.lie += ((settle === 'lie' ? 1 : 0) - pose.lie) * Math.min(1, dt * 1.5)
    pose.bow += ((settle === 'bow' ? 1 : 0) - pose.bow) * Math.min(1, dt * 6)
    const { sit, lie, bow } = pose
    const moving = Math.min(1, speed / TROT)
    gait += dt * (speed * 17 + 0.0001)
    const swing = Math.sin(gait) * 0.55 * moving
    const hop = Math.abs(Math.sin(gait)) * 0.012 * moving + (greet > 0 ? Math.abs(Math.sin(time * 9)) * 0.05 : 0)
    dog.torso.position.y = 0.25 - 0.1 * sit - 0.17 * lie + hop
    dog.torso.rotation.set(-0.55 * sit + 0.42 * bow, 0, 0)
    dog.fore.forEach((limb, side) => {
      limb.rotation.x = 0.55 * sit - 1.45 * lie - 1.1 * bow + (side ? swing : -swing)
      limb.scale.y = 1 + 0.35 * sit - 0.45 * lie - 0.3 * bow
    })
    dog.hind.forEach((limb, side) => {
      limb.position.y = 0.25 - 0.1 * sit - 0.17 * lie
      limb.rotation.x = -1.25 * sit - 1.35 * lie + (side ? -swing : swing)
      limb.scale.y = 1 - 0.25 * sit - 0.35 * lie
    })
    const looking = want > 0 || play > 0 ? 0 : Math.sin(time * 0.5) * 0.4 * (1 - lie)
    dog.head.rotation.set(-0.25 * sit + 0.35 * lie - 0.45 * bow + Math.sin(time * 1.3) * 0.04, looking, play > 0 ? Math.sin(time * 3) * 0.2 : 0)
    dog.tongue.visible = play > 0 || speed > TROT * 0.8 || greet > 0
    // The tail wags harder the happier it is.
    wag += dt * (greet > 0 || play > 0 ? 16 : speed > 0.1 ? 9 : lie > 0.5 ? 1.5 : 4)
    dog.tail.rotation.z = Math.sin(wag) * (greet > 0 || play > 0 ? 0.45 : 0.18) * (1 - lie * 0.7)
  }

  return {
    hit,
    highlight: [fur],
    update,
    greet(){ greet = 1.4 }
  }
}
