import {
  BufferAttribute, BufferGeometry, CatmullRomCurve3, CylinderGeometry, DoubleSide, Float32BufferAttribute, Group, LatheGeometry, Mesh, MeshBasicMaterial,
  SphereGeometry, TorusGeometry, TubeGeometry, Vector2, Vector3, type Material
} from 'three'
import { surface } from './materials'

// The artist: a young woman sitting cross-legged on a floor cushion, leaning over the sketchbook in
// front of her. She is drawn in a soft, toy-like style: a slightly larger head with rounded
// features, eyes lowered to her page, rosy cheeks, long dark hair with strands framing her face,
// smooth bare arms, a yellow tank top and light blue jeans rolled at the ankle. She is built from
// smooth, continuous shapes: tapered limbs that bend through the joint and real hands (the right one
// drawing, the left resting on the page).
//
// Coordinates are her own: she faces -z, and y = 0 is the floor.

type Profile = number[]

// A limb along a smooth curve through its joints, its thickness following `radii` from start to end.
// Optional folds ripple the surface, for cloth.
function limb(points: Vector3[], radii: Profile, material: Material, options: { folds?: number; flatten?: number; segments?: number } = {}){
  const curve = new CatmullRomCurve3(points, false, 'centripetal')
  const segments = options.segments ?? 28
  const tube = new TubeGeometry(curve, segments, 1, 16, false)
  const position = tube.attributes.position as BufferAttribute
  const uv = tube.attributes.uv as BufferAttribute
  const centre = new Vector3(), offset = new Vector3()
  const radius = (t: number) => {
    const scaled = t * (radii.length - 1)
    const i = Math.min(radii.length - 2, Math.floor(scaled))
    const f = scaled - i
    const smooth = f * f * (3 - 2 * f)
    return radii[i] + (radii[i + 1] - radii[i]) * smooth
  }
  for (let k = 0; k < position.count; k++){
    const t = uv.getX(k), around = uv.getY(k) * Math.PI * 2
    curve.getPoint(t, centre)
    offset.fromBufferAttribute(position, k).sub(centre)
    let r = radius(t)
    if (options.folds) r *= 1 + options.folds * (Math.sin(t * 34 + around * 2) * 0.6 + Math.sin(t * 13 - around * 3) * 0.4)
    offset.multiplyScalar(r)
    if (options.flatten) offset.y *= options.flatten
    position.setXYZ(k, centre.x + offset.x, centre.y + offset.y, centre.z + offset.z)
  }
  tube.computeVertexNormals()
  const group = new Group()
  group.add(new Mesh(tube, material))
  // Rounded ends.
  for (const [t, r] of [[0, radii[0]], [1, radii[radii.length - 1]]]){
    const cap = new Mesh(new SphereGeometry(r * 0.98, 16, 12), material)
    cap.position.copy(curve.getPoint(t))
    group.add(cap)
  }
  return group
}

// A soft ellipsoid, for hands, feet, the seat of the jeans, features of the face.
function blob(radius: Vector3, at: Vector3, material: Material, turn = new Vector3()){
  const mesh = new Mesh(new SphereGeometry(1, 20, 14), material)
  mesh.scale.copy(radius)
  mesh.position.copy(at)
  mesh.rotation.set(turn.x, turn.y, turn.z)
  return mesh
}

// A hand at `wrist`, reaching towards `tip`. Drawing: fingers curled round the pencil. Resting:
// fingers spread flat.
function hand(wrist: Vector3, tip: Vector3, skin: Material, pose: 'drawing' | 'resting', pencil?: Material){
  const group = new Group()
  const along = tip.clone().sub(wrist)
  const length = along.length()
  const forward = along.clone().normalize()
  const side = new Vector3().crossVectors(forward, new Vector3(0, 1, 0)).normalize()
  const palmCentre = wrist.clone().addScaledVector(forward, length * 0.35)
  const palm = new Mesh(new SphereGeometry(1, 16, 12), skin)
  palm.scale.set(0.032, 0.014, length * 0.36)
  palm.position.copy(palmCentre)
  palm.lookAt(palmCentre.clone().add(forward))
  group.add(palm)
  const knuckles = wrist.clone().addScaledVector(forward, length * 0.62)
  for (let i = 0; i < 4; i++){
    const spread = (i - 1.5) * (pose === 'resting' ? 0.014 : 0.009)
    const base = knuckles.clone().addScaledVector(side, spread)
    const end = pose === 'resting'
      ? base.clone().addScaledVector(forward, length * (0.36 - Math.abs(i - 1.5) * 0.04)).addScaledVector(side, spread * 0.6).add(new Vector3(0, -0.006, 0))
      : base.clone().addScaledVector(forward, length * 0.12).add(new Vector3(0, -0.025, 0))
    group.add(limb([base, end], [0.009, 0.0075], skin, { segments: 6 }))
  }
  const thumbBase = wrist.clone().addScaledVector(forward, length * 0.3).addScaledVector(side, -0.024)
  const thumbTip = pose === 'resting'
    ? thumbBase.clone().addScaledVector(forward, length * 0.25).addScaledVector(side, -0.025)
    : thumbBase.clone().addScaledVector(forward, length * 0.3).addScaledVector(side, 0.012).add(new Vector3(0, -0.01, 0))
  group.add(limb([thumbBase, thumbTip], [0.0105, 0.008], skin, { segments: 6 }))
  if (pose === 'drawing' && pencil){
    const grip = knuckles.clone().addScaledVector(forward, length * 0.12).add(new Vector3(0, -0.02, 0))
    const pencilTip = grip.clone().addScaledVector(forward, 0.05).add(new Vector3(0, -0.05, 0))
    const pencilEnd = grip.clone().addScaledVector(forward, -0.07).add(new Vector3(0.02, 0.07, 0))
    group.add(limb([pencilEnd, pencilTip], [0.0045, 0.0035], pencil, { segments: 4 }))
  }
  return group
}

export function buildArtist(rand: () => number){
  const top = surface('#efbf4a', { roughness: 0.85 })
  const denim = surface('#7193c2', { roughness: 0.95 })
  const denimTurn = surface('#a4bada', { roughness: 0.95 })
  const skin = surface('#efb995', { roughness: 0.55 })
  const lips = surface('#d07a6c', { roughness: 0.5 })
  const dark = surface('#2a1d18', { roughness: 0.35 })
  const shine = new MeshBasicMaterial({ color: '#ffffff' })
  const blush = new MeshBasicMaterial({ color: '#ff8f86', transparent: true, opacity: 0.38, depthWrite: false })
  const hair = surface('#3b2a21', { roughness: 0.38, side: DoubleSide })
  const pencil = surface('#d9a83a')
  const artist = new Group()

  // The seat of her jeans, and her crossed legs: thighs out to each side, shins folded in front,
  // the right over the left, the cuffs rolled up above the ankle.
  artist.add(blob(new Vector3(0.18, 0.1, 0.15), new Vector3(0, 0.15, 0.02), denim))
  for (const side of [-1, 1]){
    const over = side > 0
    const hip = new Vector3(side * 0.08, 0.15, -0.01)
    const knee = new Vector3(side * 0.32, 0.11, -0.25)
    const ankle = new Vector3(-side * 0.07, over ? 0.13 : 0.085, -0.41)
    artist.add(limb(
      [hip, new Vector3(side * 0.22, 0.135, -0.13), knee, new Vector3(side * 0.16, over ? 0.125 : 0.095, -0.38), ankle],
      [0.085, 0.08, 0.066, 0.062, 0.066],
      denim,
      { folds: 0.035, flatten: 0.9 }
    ))
    const cuff = new Mesh(new TorusGeometry(0.06, 0.022, 10, 22), denimTurn)
    cuff.position.copy(ankle)
    cuff.lookAt(new Vector3(side * 0.16, ankle.y, -0.38))
    artist.add(cuff)
    // A bare ankle and foot tucked under the other knee.
    const heel = ankle.clone().add(new Vector3(-side * 0.06, -0.035, 0.03))
    const toes = heel.clone().add(new Vector3(-side * 0.12, -0.02, 0.07))
    artist.add(limb([ankle.clone().add(new Vector3(-side * 0.02, -0.01, 0)), heel, toes], [0.027, 0.03, 0.023], skin, { flatten: 0.7, segments: 10 }))
  }

  // Upper body, leaning forward over the page: a slim, smooth figure, and a fitted tank top over it
  // from the hips to just below the shoulders, on two narrow straps.
  const upper = new Group()
  upper.position.set(0, 0.2, 0)
  upper.rotation.x = -0.5
  const body = new Mesh(new LatheGeometry([
    new Vector2(0.0, -0.05), new Vector2(0.17, -0.05), new Vector2(0.16, 0.06), new Vector2(0.143, 0.15),
    new Vector2(0.146, 0.25), new Vector2(0.15, 0.32), new Vector2(0.138, 0.37), new Vector2(0.1, 0.41), new Vector2(0.055, 0.44),
    new Vector2(0.034, 0.45), new Vector2(0, 0.45)
  ], 36), skin)
  body.scale.set(1, 1, 0.68)
  upper.add(body)
  const tank = new Mesh(new LatheGeometry([
    new Vector2(0.0, -0.075), new Vector2(0.188, -0.075), new Vector2(0.192, -0.04), new Vector2(0.166, 0.06), new Vector2(0.15, 0.15),
    new Vector2(0.154, 0.25), new Vector2(0.158, 0.315), new Vector2(0.152, 0.335)
  ], 36), top)
  tank.scale.set(1, 1, 0.7)
  upper.add(tank)
  const hem = new Mesh(new TorusGeometry(0.152, 0.006, 6, 36), top)
  hem.rotation.x = Math.PI / 2
  hem.scale.set(1, 0.7, 1)
  hem.position.y = 0.335
  upper.add(hem)
  for (const side of [-1, 1]){
    upper.add(limb([new Vector3(side * 0.075, 0.33, -0.098), new Vector3(side * 0.095, 0.4, -0.06), new Vector3(side * 0.1, 0.425, 0), new Vector3(side * 0.095, 0.4, 0.06), new Vector3(side * 0.075, 0.33, 0.098)], [0.008, 0.008, 0.008, 0.008, 0.008], top, { segments: 16 }))
    upper.add(blob(new Vector3(0.05, 0.048, 0.05), new Vector3(side * 0.138, 0.37, 0), skin))
  }
  const neck = new Mesh(new CylinderGeometry(0.032, 0.037, 0.09, 16), skin)
  neck.position.set(0, 0.48, -0.005)
  neck.rotation.x = -0.15
  upper.add(neck)

  // The head: a little larger, in a soft illustrated style; round at the cheeks with a small chin,
  // eyes lowered to her page, brows, rosy cheeks, a small nose and mouth.
  const R = 0.118
  const head = new Group()
  head.position.set(0, 0.52 + R * 0.95, -0.02)
  head.rotation.x = 0.38
  const skull = new SphereGeometry(R, 40, 30)
  const sp = skull.attributes.position as BufferAttribute
  for (let i = 0; i < sp.count; i++){
    let x = sp.getX(i), z = sp.getZ(i)
    const y = sp.getY(i)
    if (y < 0){
      const down = -y / R
      x *= 1 - 0.24 * Math.pow(down, 1.8)
      if (z < 0) z *= 1 - 0.1 * down
    }
    if (z > 0) z *= 1.05
    else z *= 0.94
    sp.setXYZ(i, x * 0.93, y, z)
  }
  skull.computeVertexNormals()
  head.add(new Mesh(skull, skin))
  // A point on the face, given across (x) and up (y) in head radii: just on the skin, or `lift` off it.
  const face = (x: number, y: number, lift = 0) => {
    const along = Math.sqrt(Math.max(0, 1 - x * x - y * y))
    const narrow = y < 0 ? 1 - 0.24 * Math.pow(-y, 1.8) : 1
    const flat = y < 0 ? 1 - 0.1 * -y : 1
    return new Vector3(x * R * 0.93 * narrow, y * R, -(along * R * 0.94 * flat) - lift)
  }
  for (const side of [-1, 1]){
    // Eyes looking down: dark, gently curved, with a small catch-light.
    head.add(blob(new Vector3(R * 0.1, R * 0.115, R * 0.04), face(side * 0.36, -0.06, 0.002), dark, new Vector3(-0.25, side * 0.38, 0)))
    head.add(blob(new Vector3(R * 0.025, R * 0.025, R * 0.01), face(side * 0.33, -0.02, R * 0.03), shine))
    head.add(limb([face(side * 0.24, 0.14, 0.003), face(side * 0.36, 0.17, 0.003), face(side * 0.48, 0.13, 0.003)], [0.0028, 0.0034, 0.002], dark, { segments: 8 }))
    head.add(blob(new Vector3(R * 0.17, R * 0.1, R * 0.03), face(side * 0.5, -0.3, 0.001), blush, new Vector3(0, side * 0.5, 0)))
    head.add(blob(new Vector3(R * 0.08, R * 0.15, R * 0.11), new Vector3(side * R * 0.9, -R * 0.08, R * 0.06), skin))
  }
  head.add(blob(new Vector3(R * 0.075, R * 0.08, R * 0.07), face(0, -0.22, 0.002), skin))
  head.add(blob(new Vector3(R * 0.12, R * 0.04, R * 0.04), face(0, -0.48, 0), lips))

  // Hair: a crown parted a little to one side, stopping at the hairline so her face shows, with a
  // sweep of fringe and long strands framing her face.
  const crownRadius = R * 1.07
  const crown = new SphereGeometry(crownRadius, 48, 28, 0, Math.PI * 2, 0, Math.PI * 0.62)
  const cp = crown.attributes.position as BufferAttribute
  for (let i = 0; i < cp.count; i++){
    const x = cp.getX(i), z = cp.getZ(i)
    let y = cp.getY(i)
    const angle = Math.atan2(x, z)
    const groove = 1 + Math.sin(angle * 52) * 0.007
    const front = Math.max(0, -z / crownRadius - 0.2) / 0.8
    const hairline = R * (0.36 - 0.06 * Math.max(0, x / R))
    if (front > 0 && y < hairline) y = hairline + (y - hairline) * (1 - front * 0.9)
    cp.setXYZ(i, x * 0.95 * groove, y, z * groove * (z > 0 ? 1.07 : 0.98))
  }
  crown.computeVertexNormals()
  const crownMesh = new Mesh(crown, hair)
  crownMesh.position.y = R * 0.04
  head.add(crownMesh)
  // The fringe, swept from the parting across the forehead.
  for (let k = 0; k < 3; k++){
    const start = new Vector3(R * (0.22 - k * 0.05), R * 0.98, -R * 0.35)
    head.add(limb([
      start,
      new Vector3(R * (0.05 - k * 0.12), R * 0.62, -R * 0.94),
      new Vector3(-R * (0.25 + k * 0.15), R * (0.32 - k * 0.04), -R * 0.92),
      new Vector3(-R * (0.5 + k * 0.12), R * (0.12 - k * 0.04), -R * 0.8)
    ], [0.012, 0.015, 0.01, 0.002], hair, { flatten: 1, segments: 14 }))
  }
  // Long strands down each side of her face, in front of the ears, to below the chin.
  for (const side of [-1, 1]){
    for (let k = 0; k < 2; k++){
      head.add(limb([
        new Vector3(side * R * (0.62 + k * 0.12), R * 0.55, -R * (0.62 - k * 0.15)),
        new Vector3(side * R * (0.88 + k * 0.06), R * 0.05, -R * (0.62 - k * 0.12)),
        new Vector3(side * R * (0.9 + k * 0.05), -R * 0.65, -R * (0.48 - k * 0.1)),
        new Vector3(side * R * (0.78 + k * 0.06), -R * (1.45 + k * 0.3), -R * (0.3 - k * 0.05))
      ], [0.013, 0.017, 0.012, 0.002], hair, { flatten: 1, segments: 18 }))
    }
  }
  upper.add(head)

  // Long hair falling from the crown down her back to her waist: one curved sheet that follows the
  // back of her head and then her shoulders, with strand ridges and an uneven, tapering hem.
  const hairFall = new Group()
  const columns = 48, rows = 30
  const vertices: number[] = [], uvs: number[] = []
  const lengthAt = (u: number) => 0.5 + Math.sin(u * 11.3) * 0.03 + Math.sin(u * 27.1 + 1) * 0.02 - Math.pow(Math.abs(u - 0.5) * 2, 2) * 0.1
  for (let r = 0; r <= rows; r++){
    const v = r / rows
    for (let c = 0; c <= columns; c++){
      const u = c / columns
      const angle = (u - 0.5) * Math.PI * 1.05
      const drop = v * lengthAt(u)
      const spread = R * 1.08 + Math.min(1, drop / 0.18) * 0.04 - Math.max(0, drop - 0.32) * 0.14
      const depth = R * 1.12 + Math.min(1, drop / 0.22) * 0.03
      const strands = 1 + Math.sin(u * 150 + rand() * 0.4) * 0.022 + Math.sin(u * 63) * 0.018
      vertices.push(
        Math.sin(angle) * spread * strands,
        R * 0.45 - drop,
        Math.cos(angle) * depth * strands + Math.max(0, drop - 0.14) * 0.03
      )
      uvs.push(u, v)
    }
  }
  const indices: number[] = []
  for (let r = 0; r < rows; r++){
    for (let c = 0; c < columns; c++){
      const a = r * (columns + 1) + c, b = a + 1, d = a + columns + 1, e = d + 1
      indices.push(a, d, b, b, d, e)
    }
  }
  const sheet = new BufferGeometry()
  sheet.setAttribute('position', new Float32BufferAttribute(vertices, 3))
  sheet.setAttribute('uv', new Float32BufferAttribute(uvs, 2))
  sheet.setIndex(indices)
  sheet.computeVertexNormals()
  hairFall.add(new Mesh(sheet, hair))
  hairFall.position.copy(head.position)
  upper.add(hairFall)
  artist.add(upper)

  // Bare arms, smooth and slender, bending at the elbow down to the page. The right arm draws; the
  // left rests its hand on the page.
  const shoulder = (side: number) => new Vector3(side * 0.142, 0.2 + 0.37 * Math.cos(0.5), -0.37 * Math.sin(0.5) + 0.01)
  const arms: Group[] = []
  ;[
    { side: 1, elbow: new Vector3(0.225, 0.32, -0.31), wrist: new Vector3(0.12, 0.115, -0.47), tip: new Vector3(0.08, 0.045, -0.6), pose: 'drawing' as const },
    { side: -1, elbow: new Vector3(-0.235, 0.33, -0.3), wrist: new Vector3(-0.17, 0.085, -0.46), tip: new Vector3(-0.13, 0.03, -0.62), pose: 'resting' as const }
  ].forEach(({ side, elbow, wrist, tip, pose }) => {
    const from = shoulder(side)
    const arm = new Group()
    arm.position.copy(from)
    const local = (point: Vector3) => point.clone().sub(from)
    arm.add(limb([
      local(from),
      local(from.clone().lerp(elbow, 0.5).add(new Vector3(side * 0.01, 0, 0))),
      local(elbow),
      local(elbow.clone().lerp(wrist, 0.5)),
      local(wrist)
    ], [0.041, 0.036, 0.03, 0.026, 0.021], skin))
    arm.add(hand(local(wrist), local(tip), skin, pose, pencil))
    artist.add(arm)
    arms.push(arm)
  })

  artist.traverse(child => { if (child instanceof Mesh && child.material !== blush && child.material !== shine){ child.castShadow = true; child.receiveShadow = true } })
  return {
    artist,
    upper,
    head,
    hairFall,
    drawingArm: arms[0],
    update(time: number){
      upper.scale.y = 1 + Math.sin(time * 1.6) * 0.008
      // Small strokes of the pencil, from the shoulder.
      arms[0].rotation.y = Math.sin(time * 2.4) * 0.025 + Math.sin(time * 5.1) * 0.008
      arms[0].rotation.x = Math.sin(time * 3.3) * 0.012
      head.rotation.y = Math.sin(time * 0.35) * 0.05
      hairFall.rotation.x = Math.sin(time * 0.9) * 0.012
    }
  }
}
