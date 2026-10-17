import { CatmullRomCurve3, CircleGeometry, ConeGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, PlaneGeometry, Scene, SphereGeometry, TorusGeometry, TubeGeometry, Vector2, Vector3 } from 'three'
import { PLANKS_TOP, groundHeight, nearShore } from './environment'
import { surface } from './materials'
import { contactShadowTexture, fabricTexture } from './textures'

// A white cat who lives at the studio. It wanders a path from its bed on the deck, down the trail and
// out along the jetty, stopping to eat, to sit and look about, to curl up asleep in its bed, and most
// often to settle beside the artist and watch the lake. Clicked, it stops, sits and looks at you.
// When the dog comes to play while it is sitting or eating, it turns to watch and bats at it.

const WALK = 0.32
const fur = surface('#f4f1ea', { roughness: 0.95 })
const pink = surface('#e2a9a6', { roughness: 0.7 })
const shadow = new MeshBasicMaterial({ map: contactShadowTexture(), transparent: true, depthWrite: false, opacity: 0.6 })

// Its corner of the deck: a round bed with a blanket, food and water bowls on a mat in line beside it,
// and a ball of yarn.
const bedAt = new Vector2(1.85, -0.15)
const bowlsAt = new Vector2(1.12, -0.12)
const yarnAt = new Vector2(2.3, 0.2)

function blot(x: number, z: number, size: number, y = 0.004){
  const mesh = new Mesh(new PlaneGeometry(size, size), shadow)
  mesh.rotation.x = -Math.PI / 2
  mesh.position.set(x, y, z)
  return mesh
}

function buildCorner(scene: Scene){
  const corner = new Group()
  const cloth = fabricTexture()
  cloth.repeat.set(4, 1)
  const rim = new Mesh(new TorusGeometry(0.25, 0.075, 12, 32), surface('#c9a98a', { map: cloth, roughness: 1 }))
  rim.rotation.x = -Math.PI / 2
  rim.scale.z = 0.85
  rim.position.set(bedAt.x, 0.065, bedAt.y)
  const base = new Mesh(new CylinderGeometry(0.31, 0.32, 0.03, 32), surface('#8f6a52', { roughness: 1 }))
  base.position.set(bedAt.x, 0.015, bedAt.y)
  const cushion = new Mesh(new CylinderGeometry(0.25, 0.25, 0.05, 28), surface('#eee3d1', { map: cloth, roughness: 1 }))
  cushion.position.set(bedAt.x, 0.035, bedAt.y)
  // A knitted throw, squared up and folded half under the bed.
  const throwRug = new Mesh(new PlaneGeometry(0.5, 0.4), surface('#a95a46', { map: cloth, roughness: 1, side: DoubleSide }))
  throwRug.rotation.set(-Math.PI / 2, 0, 0)
  throwRug.position.set(bedAt.x + 0.16, 0.003, bedAt.y)

  const mat = new Mesh(new PlaneGeometry(0.46, 0.26), surface('#6f8b7a', { roughness: 1 }))
  mat.rotation.x = -Math.PI / 2
  mat.position.set(bowlsAt.x, 0.003, bowlsAt.y)
  const bowl = (x: number, colour: string, filling: string, water: boolean) => {
    const side = new Mesh(new CylinderGeometry(0.075, 0.056, 0.05, 24, 1, true), surface(colour, { roughness: 0.25, side: DoubleSide }))
    side.position.set(x, 0.03, bowlsAt.y)
    const bottom = new Mesh(new CircleGeometry(0.056, 20), surface(colour, { roughness: 0.25 }))
    bottom.rotation.x = -Math.PI / 2
    bottom.position.set(x, 0.007, bowlsAt.y)
    const fill = new Mesh(new CircleGeometry(0.066, 20), surface(filling, water ? { roughness: 0.05, transparent: true, opacity: 0.85 } : { roughness: 0.9 }))
    fill.rotation.x = -Math.PI / 2
    fill.position.set(x, water ? 0.04 : 0.036, bowlsAt.y)
    corner.add(side, bottom, fill)
    // A little heap of biscuits in the food bowl.
    if (!water) for (let i = 0; i < 9; i++){
      const angle = i * 2.4, reach = 0.012 + (i % 3) * 0.016
      const biscuit = new Mesh(new SphereGeometry(0.011, 6, 4), surface('#8a5a32'))
      biscuit.position.set(x + Math.cos(angle) * reach, 0.04 + (i < 3 ? 0.008 : 0), bowlsAt.y + Math.sin(angle) * reach)
      corner.add(biscuit)
    }
  }
  bowl(bowlsAt.x - 0.1, '#d98e73', '#6e4528', false)
  bowl(bowlsAt.x + 0.1, '#ece6da', '#a9cbd8', true)
  // A ball of yarn, its end trailing.
  const wool = surface('#c4614f', { roughness: 1 })
  const yarn = new Mesh(new SphereGeometry(0.045, 14, 10), wool)
  yarn.position.set(yarnAt.x, 0.045, yarnAt.y)
  corner.add(yarn)
  ;[[0.4, 0.2], [1.3, -0.5], [-0.6, 1.1]].forEach(([x, z]) => {
    const strand = new Mesh(new TorusGeometry(0.046, 0.0035, 4, 24), wool)
    strand.rotation.set(x, 0, z)
    strand.position.copy(yarn.position)
    corner.add(strand)
  })
  const trail = new CatmullRomCurve3([new Vector3(yarnAt.x + 0.03, 0.01, yarnAt.y + 0.03), new Vector3(yarnAt.x + 0.12, 0.004, yarnAt.y + 0.06), new Vector3(yarnAt.x + 0.2, 0.004, yarnAt.y + 0.02)])
  corner.add(new Mesh(new TubeGeometry(trail, 12, 0.0035, 4), wool))
  corner.add(rim, base, cushion, throwRug, mat)
  corner.traverse(child => { if (child instanceof Mesh){ child.castShadow = child !== throwRug && child !== mat; child.receiveShadow = true } })
  corner.add(blot(bedAt.x, bedAt.y, 0.85, 0.002), blot(bowlsAt.x, bowlsAt.y, 0.5, 0.002), blot(yarnAt.x, yarnAt.y, 0.16, 0.003))
  scene.add(corner)
}

function leg(length: number, thigh: number){
  const pivot = new Group()
  const bone = new Mesh(new CylinderGeometry(0.023, 0.019, length, 8), fur)
  bone.position.y = -length / 2
  const top = new Mesh(new SphereGeometry(thigh, 10, 8), fur)
  top.scale.set(0.8, 1.2, 1)
  top.position.y = -0.01
  const paw = new Mesh(new SphereGeometry(0.025, 10, 6), fur)
  paw.scale.set(1, 0.6, 1.35)
  paw.position.set(0, -length, 0.01)
  pivot.add(bone, top, paw)
  return pivot
}

function makeCat(){
  const root = new Group()
  const hip = 0.17
  // The torso pivots at the hips, so the cat can sit up.
  const torso = new Group()
  torso.position.set(0, hip, -0.15)
  const body = new Mesh(new SphereGeometry(0.1, 18, 12), fur)
  body.scale.set(0.9, 0.85, 2.2)
  body.position.set(0, 0.035, 0.14)
  const chest = new Mesh(new SphereGeometry(0.085, 14, 10), fur)
  chest.position.set(0, 0.035, 0.29)
  torso.add(body, chest)

  const head = new Group()
  head.position.set(0, 0.13, 0.39)
  const skull = new Mesh(new SphereGeometry(0.072, 16, 12), fur)
  skull.scale.set(1.05, 0.92, 0.95)
  const muzzle = new Mesh(new SphereGeometry(0.034, 12, 8), fur)
  muzzle.scale.set(1.25, 0.8, 0.9)
  muzzle.position.set(0, -0.026, 0.054)
  const nose = new Mesh(new SphereGeometry(0.009, 8, 6), pink)
  nose.position.set(0, -0.012, 0.084)
  head.add(skull, muzzle, nose)
  const iris = surface('#b5c04a', { roughness: 0.2 })
  const pupil = surface('#1c1a16', { roughness: 0.2 })
  const ears: Group[] = []
  const eyes: Mesh[] = []
  for (const side of [-1, 1]){
    const eye = new Mesh(new SphereGeometry(0.013, 10, 8), iris)
    eye.position.set(side * 0.03, 0.012, 0.058)
    const slit = new Mesh(new SphereGeometry(0.006, 8, 6), pupil)
    slit.scale.set(0.45, 1.5, 0.5)
    slit.position.set(side * 0.031, 0.012, 0.07)
    slit.userData.open = 1.5
    eye.userData.open = 1
    const ear = new Group()
    ear.position.set(side * 0.04, 0.055, -0.005)
    ear.rotation.z = -side * 0.3
    const outer = new Mesh(new ConeGeometry(0.028, 0.06, 8), fur)
    outer.position.y = 0.025
    const inner = new Mesh(new ConeGeometry(0.018, 0.042, 8), pink)
    inner.scale.z = 0.4
    inner.position.set(0, 0.02, 0.012)
    ear.add(outer, inner)
    head.add(eye, slit, ear)
    ears.push(ear)
    eyes.push(eye, slit)
  }
  torso.add(head)

  const fore = [-1, 1].map(side => {
    const limb = leg(hip, 0.035)
    limb.position.set(side * 0.045, 0, 0.29)
    torso.add(limb)
    return limb
  })
  const hind = [-1, 1].map(side => {
    const limb = leg(hip, 0.05)
    limb.position.set(side * 0.05, hip, -0.14)
    root.add(limb)
    return limb
  })

  // The tail: a chain of short pieces, so it can curl and sway.
  const tail: Group[] = []
  let parent: Group = torso
  for (let i = 0; i < 7; i++){
    const piece = new Group()
    piece.position.set(0, 0.05, i ? 0 : -0.07)
    const r = 0.019 - i * 0.0012
    const part = new Mesh(new CylinderGeometry(r - 0.0012, r, 0.05, 8), fur)
    part.position.y = 0.025
    const joint = new Mesh(new SphereGeometry(r, 8, 6), fur)
    piece.add(part, joint)
    parent.add(piece)
    tail.push(piece)
    parent = piece
  }

  root.add(torso)
  root.traverse(child => { if (child instanceof Mesh) child.castShadow = true })
  // A soft shadow where it stands.
  const under = new Mesh(new CircleGeometry(0.2, 18), shadow)
  under.rotation.x = -Math.PI / 2
  under.scale.set(0.6, 1.4, 1)
  under.position.set(0, 0.004, 0.02)
  root.add(under)
  return { root, torso, head, ears, eyes, fore, hind, tail }
}

export function buildCat(scene: Scene, rand: () => number, seat: Vector3){
  buildCorner(scene)
  const cat = makeCat()
  scene.add(cat.root)
  const hit = new Mesh(new SphereGeometry(0.3, 8, 6), new MeshBasicMaterial({ visible: false }))
  hit.position.set(0, 0.2, 0.05)
  cat.root.add(hit)

  // Its path, and the places along it where it likes to stop: the deck by the wall, the bowls, its
  // bed, halfway down the trail, and beside her on the jetty.
  const jettyStart = nearShore(3.6) + 0.8
  const trail = [[2.85, -2.6], [3.1, -3.4], [3.4, -4.6], [3.6, -5.8]].filter(([, z]) => z > jettyStart + 0.2)
  const points = [
    [-1.9, 0.5], [0.3, 0.35], [bowlsAt.x, bowlsAt.y - 0.42], [bedAt.x, bedAt.y], [2.2, -0.4], [2.55, -1.75], ...trail,
    [3.6, jettyStart - 0.3], [seat.x + 0.45, seat.z + 1.1], [seat.x + 0.42, seat.z + 0.55]
  ].map(([x, z]) => new Vector2(x, z))
  const last = points.length - 1
  const BOWLS = 2, BED = 3
  const stops = [0, BOWLS, BED, 5 + Math.ceil(trail.length / 2), last]
  const heightAt = (x: number, z: number) => {
    if (Math.hypot(x - bedAt.x, z - bedAt.y) < 0.24) return 0.06
    if (x > -3.6 && x < 2.8 && z > -2.05) return 0
    if (z < jettyStart && Math.abs(x - 3.6) < 0.7) return PLANKS_TOP
    return groundHeight(x, z)
  }

  type Doing = 'walk' | 'sit' | 'sleep' | 'eat' | 'play'
  let current: Doing = 'sleep'
  // The dog, while it plays nearby.
  let playmate: Vector3 | null = null
  // It starts curled up asleep in its bed.
  let u = BED, goal = BED, rest = 20, greet = 0, gait = 0, speed = 0
  const pose = { sit: 0, lie: 1, eat: 0 }
  let heading = -2.2
  const at = new Vector2()
  function place(){
    const i = Math.min(Math.floor(u), last - 1)
    at.lerpVectors(points[i], points[i + 1], u - i)
  }
  place()
  cat.root.position.set(at.x, heightAt(at.x, at.y), at.y)

  // Walk `distance` along the path towards the goal; returns the direction of travel.
  function walk(distance: number){
    const dir = goal > u ? 1 : -1
    let i = dir > 0 ? Math.floor(u) : Math.ceil(u)
    while (distance > 0 && u !== goal){
      i = dir > 0 ? Math.floor(u) : Math.ceil(u)
      const length = points[i].distanceTo(points[i + dir])
      const left = length - Math.abs(u - i) * length
      if (distance >= left){ u = i + dir; distance -= left }
      else { u += (dir * distance) / length; distance = 0 }
    }
    const from = points[i], to = points[Math.max(0, Math.min(last, i + dir))]
    return Math.atan2(to.x - from.x, to.y - from.y)
  }

  // Where to go next: beside her most often, then its bed, then the bowls, otherwise anywhere.
  function nextStop(){
    const roll = rand()
    const choice = roll < 0.3 ? last : roll < 0.55 ? BED : roll < 0.7 ? BOWLS : stops[Math.floor(rand() * stops.length)]
    return choice === goal ? stops[(stops.indexOf(goal) + 1) % stops.length] : choice
  }

  const ease = (key: keyof typeof pose, target: number, rate: number) => { pose[key] += (target - pose[key]) * rate }

  function update(time: number, dt: number, cameraPosition: Vector3){
    if (!dt) return
    const p = cat.root.position
    let wanted = heading
    greet = Math.max(0, greet - dt)
    const resting = greet > 0 || u === goal
    let doing: Doing = greet > 0 ? 'sit' : u !== goal ? 'walk' : goal === BED ? 'sleep' : goal === BOWLS ? 'eat' : 'sit'
    if (playmate && greet <= 0 && (doing === 'sit' || doing === 'eat')) doing = 'play'
    current = doing
    if (greet > 0) wanted = Math.atan2(cameraPosition.x - p.x, cameraPosition.z - p.z)
    // Playing: it stays put, turning to keep the dog in sight.
    else if (doing === 'play' && playmate) wanted = Math.atan2(playmate.x - p.x, playmate.z - p.z)
    else if (resting){
      if (doing === 'eat') wanted = Math.atan2(bowlsAt.x - p.x, bowlsAt.y - p.z)
      rest -= dt
      if (rest <= 0) goal = nextStop()
    }
    // Stand up before setting off; settle into the pose on arriving.
    const rate = Math.min(1, dt * (resting ? 1.4 : 3.5))
    ease('sit', doing === 'sit' || doing === 'play' ? 1 : 0, rate)
    ease('lie', doing === 'sleep' ? 1 : 0, Math.min(1, dt * (doing === 'sleep' ? 0.8 : 3)))
    ease('eat', doing === 'eat' ? 1 : 0, rate)
    const settled = Math.max(pose.sit, pose.lie)
    speed += ((resting ? 0 : WALK * (1 - settled)) - speed) * Math.min(1, dt * 3)
    if (!resting && settled < 0.3){
      wanted = walk(speed * dt)
      if (u === goal) rest = goal === last ? 18 + rand() * 20 : goal === BED ? 25 + rand() * 20 : goal === BOWLS ? 6 + rand() * 4 : 5 + rand() * 8
    }
    place()
    let turn = wanted - heading
    turn = Math.atan2(Math.sin(turn), Math.cos(turn))
    heading += turn * Math.min(1, dt * (greet > 0 ? 2.5 : 4))
    p.x = at.x
    p.z = at.y
    p.y += (heightAt(at.x, at.y) - p.y) * Math.min(1, dt * 8)
    cat.root.rotation.y = heading

    // Pose: sitting raises the front and folds the hind legs; lying down tucks every leg under, closes
    // its eyes and breathes slowly; eating lowers the head to the bowl. The tail wraps round when still.
    const { sit, lie, eat } = pose
    const moving = speed / WALK
    gait += dt * speed * 26
    const swing = Math.sin(gait) * 0.5 * moving
    const breath = Math.sin(time * 1.4) * 0.025 * lie
    cat.torso.position.y = 0.17 - 0.09 * sit - 0.105 * lie + Math.abs(Math.sin(gait)) * 0.006 * moving
    cat.torso.rotation.set(-0.7 * sit + 0.12 * eat, 0, 0.1 * lie)
    cat.torso.scale.set(1 + breath, 1 + breath, 1)
    cat.fore.forEach((limb, side) => {
      limb.rotation.x = 0.7 * sit - 1.45 * lie + (side ? swing : -swing) - (side && doing === 'play' ? Math.max(0, Math.sin(time * 6)) * 1.1 : 0)
      limb.scale.y = 1 + 0.57 * sit - 0.45 * lie
    })
    cat.hind.forEach((limb, side) => {
      limb.position.y = 0.17 - 0.09 * sit - 0.105 * lie
      limb.rotation.x = -1.3 * sit - 1.4 * lie + (side ? -swing : swing)
      limb.scale.y = 1 - 0.25 * sit - 0.35 * lie
    })
    const look = greet > 0 ? 0 : Math.sin(time * 0.4) * 0.6 * sit
    cat.head.rotation.set(
      0.5 * sit + 0.75 * eat + Math.sin(time * 6) * 0.07 * eat + 0.3 * lie + Math.sin(time * 0.7) * 0.05 * (1 - lie) - (greet > 0 ? 0.25 : 0),
      look,
      greet > 0 ? Math.sin(time * 1.5) * 0.15 : 0.25 * lie
    )
    cat.eyes.forEach(eye => { eye.scale.y = eye.userData.open * (1 - 0.88 * lie) })
    cat.ears.forEach((ear, side) => { ear.rotation.x = Math.max(0, Math.sin(time * 0.9 + side * 2.3) - 0.96) * 8 })
    const still = Math.max(sit, lie)
    cat.tail.forEach((piece, i) => {
      if (!i){ piece.rotation.set(-0.9 - 1.6 * still, 0, 0); return }
      const flick = i > 3 ? Math.sin(time * (greet > 0 ? 6 : 2.5) + i * 0.8) * (0.08 + 0.15 * sit) : 0
      piece.rotation.set(0.2 * (1 - still) + Math.sin(time * 2 + i * 0.6) * 0.05 * moving, 0, 0.32 * still + Math.sin(time * 1.5 - i * 0.5) * 0.1 * (1 - still) + flick)
    })
  }

  return {
    hit,
    highlight: [fur],
    update,
    greet(){ greet = 6 },
    // For the dog: where the cat is, what it is doing, and where it sleeps.
    position: cat.root.position,
    bed: bedAt,
    state: () => current,
    setPlaymate(at: Vector3 | null){ playmate = at }
  }
}
