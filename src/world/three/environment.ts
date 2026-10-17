import {
  BoxGeometry, BufferAttribute, BufferGeometry, CanvasTexture, CircleGeometry, Color, CylinderGeometry, DoubleSide, Euler, Float32BufferAttribute,
  Group, IcosahedronGeometry, InstancedBufferAttribute, InstancedMesh, LineSegments, Matrix4, Mesh, MeshDepthMaterial, Object3D, PlaneGeometry,
  Points, Quaternion, RGBADepthPacking, SRGBColorSpace, Scene, SphereGeometry, Sprite, SpriteMaterial, Vector3, type Texture
} from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import { buildDucks } from './ducks'
import { mergeStill } from './merge'
import { plantForest } from './foliage'
import { foliageMaterial, glowPointsMaterial, lakeShader, rainMaterial, skyMaterial, surface, swayMaterial, world } from './materials'
import { contactShadowTexture, frondTexture, leafClusterTexture, scanned } from './textures'
import type { Atmosphere } from './timeOfDay'

// The landscape follows the owner's lakeside photographs, painted as a fantasy world: a wide, calm
// lake, a far shore of mixed woodland and coconut palms under layered blue hills, a meadow and a
// trail down to a little jetty on the right, and big summer clouds.

// Seeded randomness, so the world is laid out the same on every visit.
export function random(seed: number){
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function hash(x: number, y: number){
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
  return s - Math.floor(s)
}
function valueNoise(x: number, y: number){
  const ix = Math.floor(x), iy = Math.floor(y)
  const fx = x - ix, fy = y - iy
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy)
  const a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1)
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy
}
export function fbm(x: number, y: number){
  let value = 0, amplitude = 0.5
  for (let i = 0; i < 4; i++){ value += amplitude * valueNoise(x, y); x *= 2.03; y *= 2.03; amplitude *= 0.5 }
  return value
}

export const waterLevel = -0.28
const farShore = -132
// The near bank wanders a little and reaches out on the left, as in the photographs.
export function nearShore(x: number){
  return -5.5 - fbm(x * 0.06 + 2, 1.3) * 3 - Math.max(0, -x - 9) * 0.55 - Math.max(0, x - 16) * 0.25
}
// The trail from the deck down to the jetty.
const trail = [[2.75, -2.1], [3.05, -3.3], [3.4, -4.6], [3.6, -5.8], [3.6, -6.6]]
export function trailDistance(x: number, z: number){
  let best = Infinity
  for (let i = 0; i < trail.length - 1; i++){
    const [ax, az] = trail[i], [bx, bz] = trail[i + 1]
    const dx = bx - ax, dz = bz - az
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz)))
    best = Math.min(best, Math.hypot(x - ax - dx * t, z - az - dz * t))
  }
  return best
}
const onDeck = (x: number, z: number, margin = 0) => x > -3.6 - margin && x < 2.8 + margin && z > -2.05 - margin && z < 3.85 + margin
const jetty = { x: 3.6, width: 1.3, start: 0, end: 0 }
const JETTY_LENGTH = 5
// The jetty sits low over the water, so her feet reach it from the end.
export const PLANKS_TOP = -0.02
// Where she sits: on the very end of the jetty, legs over the edge. This is the edge of the last
// plank, under her knees, at the planks' surface.
export function jettySeat(){
  const start = nearShore(jetty.x) + 0.8
  let last = start
  while (last - 0.24 > start - JETTY_LENGTH) last -= 0.24
  return new Vector3(jetty.x - 0.05, PLANKS_TOP, last - 0.11)
}

export function groundHeight(x: number, z: number){
  const shore = nearShore(x)
  const far = farShore + (fbm(x * 0.01, 7) - 0.5) * 10
  if (z > shore){
    const rise = Math.max(0, z - 6) * 0.05 + Math.max(0, x - 10) * 0.04 * Math.min(1, Math.max(0, z - shore) / 6)
    return (fbm(x * 0.15, z * 0.15) - 0.5) * 0.3 * Math.min(1, (z - shore) / 3) - Math.max(0, 1 - (z - shore) / 1.2) * 0.35 + rise
  }
  if (z < far) return 0.1 + (fbm(x * 0.05, z * 0.05) - 0.5) * 0.5 + Math.max(0, far - z - 30) * 0.04
  // The lake bed shelves away from each bank.
  const fromNear = shore - z, fromFar = z - far
  return -0.35 - Math.min(1.6, Math.min(fromNear * 0.16, fromFar * 0.1))
}

// Tall, billowing cumulus: bright, sunlit tops, soft shaded undersides and a flat base.
function cloudTexture(seed: number){
  const rand = random(seed)
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 320
  const g = canvas.getContext('2d')!
  const puffs: Array<[number, number, number]> = []
  for (let i = 0; i < 16; i++) puffs.push([70 + rand() * 372, 236 + rand() * 18, 34 + rand() * 30])
  for (let i = 0; i < 22; i++){
    const t = rand()
    puffs.push([256 + (rand() - 0.5) * 300 * (1 - t * 0.7), 236 - t * 170 - rand() * 20, 30 + rand() * 34 * (1 - t * 0.4)])
  }
  puffs.sort((a, b) => b[1] - a[1])
  for (const [x, y, r] of puffs){
    const shadow = g.createRadialGradient(x, y, r * 0.2, x, y, r)
    shadow.addColorStop(0, 'rgba(196,200,214,0.95)')
    shadow.addColorStop(0.85, 'rgba(206,210,224,0.75)')
    shadow.addColorStop(1, 'rgba(210,214,228,0)')
    g.fillStyle = shadow
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill()
  }
  for (const [x, y, r] of puffs){
    const lit = g.createRadialGradient(x - r * 0.25, y - r * 0.35, 0, x - r * 0.2, y - r * 0.3, r * 0.85)
    lit.addColorStop(0, 'rgba(255,255,255,1)')
    lit.addColorStop(0.6, 'rgba(255,253,248,0.85)')
    lit.addColorStop(1, 'rgba(255,255,255,0)')
    g.fillStyle = lit
    g.beginPath(); g.arc(x - r * 0.15, y - r * 0.2, r * 0.82, 0, Math.PI * 2); g.fill()
  }
  g.globalCompositeOperation = 'destination-out'
  const cut = g.createLinearGradient(0, 248, 0, 290)
  cut.addColorStop(0, 'rgba(0,0,0,0)')
  cut.addColorStop(1, 'rgba(0,0,0,1)')
  g.fillStyle = cut
  g.fillRect(0, 248, 512, 72)
  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  return texture
}

function paint(geometry: BufferGeometry, color: string){
  const tone = new Color(color)
  const values = new Float32Array(geometry.attributes.position.count * 3)
  for (let i = 0; i < values.length; i += 3) values.set([tone.r, tone.g, tone.b], i)
  geometry.setAttribute('color', new BufferAttribute(values, 3))
  return geometry
}

export type Quality = { grass: number; flowers: number; shadows: number; low: boolean; reflection: number; trees: number }

export function buildEnvironment(scene: Scene, quality: Quality){
  const rand = random(7)
  const updates: Array<(time: number, dt: number) => void> = []
  const m = new Matrix4(), q = new Quaternion(), s = new Vector3(), p = new Vector3(), up = new Vector3(0, 1, 0), e = new Euler()
  const shadowBlot = contactShadowTexture()
  // Small, costly things the lake's mirror leaves out, as they would barely show in it.
  const hidden: Object3D[] = []

  // Sky.
  const sky = new Mesh(new SphereGeometry(900, 32, 16), skyMaterial)
  sky.renderOrder = -1
  sky.frustumCulled = false
  scene.add(sky)

  // Land: the near bank and meadow, the shelving lake bed and the far shore. Its grid is fine around
  // the pavilion and the near bank and opens out with distance, where no one sees the detail: about a
  // third of the triangles of an even grid, with more of them where they show.
  const ground = new PlaneGeometry(1, 1, 160, 110)
  ground.rotateX(-Math.PI / 2)
  const positions = ground.attributes.position as BufferAttribute
  const groundUv = ground.attributes.uv as BufferAttribute
  const spread = (t: number) => Math.sign(t) * Math.pow(Math.abs(t), 1.6)
  for (let i = 0; i < positions.count; i++){
    // Across: 500m either side of the pavilion. Along: 495m out over the lake, 45m back behind it.
    const across = positions.getX(i) * 2, along = positions.getZ(i) + 0.5, front = 0.73
    const x = 500 * spread(across)
    const z = along > front ? -5 + 45 * spread((along - front) / (1 - front)) : -5 - 495 * spread((front - along) / front)
    positions.setX(i, x)
    positions.setZ(i, z)
    groundUv.setXY(i, (x + 500) / 1000, (z + 500) / 540)
  }
  const colors = new Float32Array(positions.count * 3)
  const meadow = new Color('#6f9a45'), lush = new Color('#4f7f36'), dry = new Color('#a3a25c'), mud = new Color('#6b5d45'), bed = new Color('#5e5a3e'), far = new Color('#55803f'), dirt = new Color('#8f7556')
  const c = new Color()
  for (let i = 0; i < positions.count; i++){
    const x = positions.getX(i), z = positions.getZ(i)
    positions.setY(i, groundHeight(x, z))
    const shore = nearShore(x)
    if (z < farShore + 10) c.copy(far).lerp(lush, fbm(x * 0.03, z * 0.03) * 0.6)
    else if (z < shore) c.copy(bed)
    else {
      c.lerpColors(lush, meadow, fbm(x * 0.12 + 5, z * 0.12))
      c.lerp(dry, Math.max(0, fbm(x * 0.07 + 11, z * 0.07) - 0.55) * 1.6)
      const toWater = z - shore
      if (toWater < 1.6) c.lerp(mud, 1 - Math.max(0, toWater) / 1.6)
      c.lerp(dirt, Math.max(0, 1 - trailDistance(x, z) / 0.75))
    }
    colors.set([c.r, c.g, c.b], i * 3)
  }
  ground.setAttribute('color', new BufferAttribute(colors, 3))
  ground.computeVertexNormals()
  const groundMaterial = scanned(surface('#ffffff', { vertexColors: true, roughness: 1 }), 'forrest_ground_01', [220, 120], { colour: false, normal: 0.7 })
  const groundMesh = new Mesh(ground, groundMaterial)
  groundMesh.receiveShadow = true
  scene.add(groundMesh)

  // Hills beyond the far shore, in layers that fade into the air with distance.
  ;[[-230, 26, '#5d8048', 1], [-330, 46, '#61805a', 2], [-470, 78, '#6f8a78', 3]].forEach(([z, height, colour, layer]) => {
    const ridge = new PlaneGeometry(1500, 140, 220, 8)
    const rp = ridge.attributes.position as BufferAttribute
    for (let i = 0; i < rp.count; i++){
      const x = rp.getX(i), y = rp.getY(i)
      const top = (fbm(x * 0.006 * (layer as number) + (layer as number) * 9, 1.7) * 0.9 + fbm(x * 0.03, 4.1) * 0.15) * (height as number)
      rp.setY(i, y < 0 ? -20 : top)
      rp.setZ(i, (fbm(x * 0.02, (layer as number)) - 0.5) * 20)
    }
    ridge.computeVertexNormals()
    const hill = new Mesh(ridge, surface(colour as string, { roughness: 1 }))
    hill.position.set(0, 0, z as number)
    scene.add(hill)
  })

  // The lake: a true mirror, softly rippled, that knows how deep it is at every point.
  const size = Math.round(1024 * quality.reflection)
  const lakeGeometry = new PlaneGeometry(1000, 200, 200, 90)
  const depth = new Float32Array(lakeGeometry.attributes.position.count)
  const lp = lakeGeometry.attributes.position as BufferAttribute
  for (let i = 0; i < lp.count; i++){
    // Plane is rotated to lie flat at z = -60, so its local y is world -z.
    const x = lp.getX(i), z = -lp.getY(i) - 60
    depth[i] = Math.max(0, waterLevel - groundHeight(x, z))
  }
  lakeGeometry.setAttribute('aDepth', new BufferAttribute(depth, 1))
  const lake = new Reflector(lakeGeometry, {
    textureWidth: size, textureHeight: Math.round(size * 0.6), clipBias: 0.003, shader: lakeShader
  })
  Object.assign((lake.material as unknown as { uniforms: Record<string, unknown> }).uniforms, world)
  lake.rotateX(-Math.PI / 2)
  lake.position.set(0, waterLevel, -60)
  scene.add(lake)

  // Woodland. Trunks share a bark material; leaves share the painted foliage shader.
  const bark = scanned(surface('#8b7a66', { roughness: 0.95 }), 'bark_brown_02', [1, 1], { normal: 1.2 })
  const leaves = foliageMaterial(leafClusterTexture())
  const fronds = foliageMaterial(frondTexture())
  const leafShadow = new MeshDepthMaterial({ depthPacking: RGBADepthPacking, map: (leaves.uniforms.uMap.value as Texture), alphaTest: 0.5 })
  const trees = quality.trees
  const forest = (species: Parameters<typeof plantForest>[1]['species'], count: number, detail: number, place: (i: number) => [number, number, number] | null, variants = 3, castShadow = false) =>
    plantForest(scene, {
      species, variants, detail, count: Math.round(count), seed: rand, castShadow,
      trunkMaterial: bark, leafMaterial: species === 'palm' ? fronds : leaves,
      place: i => {
        const spot = place(i)
        if (!spot) return null
        const [x, z, scale] = spot
        return { position: new Vector3(x, groundHeight(x, z) - 0.15, z), scale, turn: rand() * Math.PI * 2 }
      }
    })
  // The far shore: tall trees to the left, big rounded trees in the middle, palms to the right, with
  // a low band of shrubs at the water's edge.
  forest('poplar', 150 * trees, 0.2, () => [-340 + rand() * 300, farShore - 6 - rand() * 40, 1.3 + rand() * 0.7])
  forest('broadleaf', 100 * trees, 0.18, () => [-110 + rand() * 210, farShore - 6 - rand() * 30, 1.3 + rand() * 0.8], 4)
  forest('palm', 120 * trees, 1, () => [-20 + rand() * 360, farShore - 4 - rand() * 36, 0.9 + rand() * 0.4], 3)
  forest('bush', 200 * trees, 0.22, () => [-340 + rand() * 680, farShore - 1 - rand() * 8, 1.6 + rand() * 1.6], 3)
  // Near the viewer: a willow leaning over the water on the left, spreading trees on the right and
  // behind, and shrubs along the bank and the trail.
  const hero = (species: 'broadleaf' | 'willow', x: number, z: number, scale: number) => {
    const meshes = forest(species, 1, 1, () => [x, z, scale], 1, true)
    meshes.forEach(mesh => { if (mesh.material === leaves) mesh.customDepthMaterial = leafShadow })
  }
  hero('willow', -13, nearShore(-13) + 2.2, 1.05)
  hero('broadleaf', 12.5, 0.5, 1.15)
  hero('broadleaf', 19, -9, 1.3)
  hero('broadleaf', -9, 9, 1.2)
  hero('broadleaf', 8, 11, 1)
  forest('bush', 26, 1, i => {
    const x = i < 14 ? -30 + rand() * 24 : 9 + rand() * 22
    const z = i < 14 ? nearShore(x) + 0.8 + rand() * 2 : nearShore(x) + 1 + rand() * 9
    return trailDistance(x, z) < 1.4 || Math.abs(x - jetty.x) < 2 ? null : [x, z, 0.7 + rand() * 0.5]
  }, 3, true).forEach(mesh => { if (mesh.material === leaves) mesh.customDepthMaterial = leafShadow })
  forest('broadleaf', 14, 0.6, () => [-40 + rand() * 80, 14 + rand() * 18, 0.9 + rand() * 0.4], 3)

  // Stones along the bank: scanned rock, half sunk, with moss on their tops.
  const rockGeometry = new IcosahedronGeometry(0.4, 2)
  const rpos = rockGeometry.attributes.position as BufferAttribute
  const rockColours = new Float32Array(rpos.count * 3)
  const stone = new Color('#b8b0a2'), moss = new Color('#6f8a45')
  for (let i = 0; i < rpos.count; i++){
    p.fromBufferAttribute(rpos, i)
    const bump = 1 + (fbm(p.x * 4 + 3, p.z * 4 + p.y * 3) - 0.5) * 0.5
    p.multiplyScalar(bump)
    rpos.setXYZ(i, p.x, p.y * 0.7, p.z)
    c.copy(stone).lerp(moss, Math.max(0, p.y / 0.4 - 0.35) * 1.2)
    rockColours.set([c.r, c.g, c.b], i * 3)
  }
  rockGeometry.setAttribute('color', new BufferAttribute(rockColours, 3))
  rockGeometry.computeVertexNormals()
  const rockMaterial = scanned(surface('#ffffff', { vertexColors: true }), 'rock_boulder_dry', [1, 1], { normal: 1.3 })
  const rockCount = quality.low ? 90 : 150
  const stones = new InstancedMesh(rockGeometry, rockMaterial, rockCount)
  let rocks = 0
  const rockSpots: Array<[number, number]> = []
  for (let attempt = 0; rocks < rockCount && attempt < rockCount * 6; attempt++){
    const x = -34 + rand() * 60
    if (Math.abs(x - jetty.x) < 1.2) continue
    const z = nearShore(x) - 0.4 + rand() * 1.8
    q.setFromEuler(e.set(rand() * 0.6, rand() * 3, rand() * 0.6))
    const big = rand() < 0.15 ? 2 : 1
    s.set((0.5 + rand() * 0.9) * big, (0.4 + rand() * 0.5) * big, (0.5 + rand() * 0.9) * big)
    p.set(x, groundHeight(x, z) - 0.08, z)
    stones.setMatrixAt(rocks++, m.compose(p, q, s))
    if (z > nearShore(x) + 0.1) rockSpots.push([x, z])
  }
  stones.count = rocks
  stones.castShadow = stones.receiveShadow = true
  scene.add(stones)

  // Grass: dense near the deck and thinning away, in clumps, greener where it is damp, worn on the trail.
  const blade = new PlaneGeometry(0.032, 0.5, 1, 4)
  blade.translate(0, 0.25, 0)
  const bp = blade.attributes.position as BufferAttribute
  for (let i = 0; i < bp.count; i++){
    const y = bp.getY(i) / 0.5
    bp.setX(i, bp.getX(i) * (1 - y * 0.9))
    bp.setZ(i, y * y * 0.12)
  }
  const reedBlade = blade.clone()
  const grass = new InstancedMesh(blade, swayMaterial('#3c5f27', '#9cb865', '#55702e', '#c3c27e'), quality.grass)
  const shades = new Float32Array(quality.grass)
  let placed = 0
  for (let attempt = 0; placed < quality.grass && attempt < quality.grass * 6; attempt++){
    // Clumps: a centre, then blades scattered around it.
    const cx = (rand() - 0.5) * 72
    const cz = 15 - Math.pow(rand(), 1.15) * 32
    for (let k = 0; k < 6 && placed < quality.grass; k++){
      const x = cx + (rand() - 0.5) * 0.5, z = cz + (rand() - 0.5) * 0.5
      if (onDeck(x, z, 0.05) || z < nearShore(x) + 0.25) continue
      if (Math.abs(x - jetty.x) < jetty.width / 2 + 0.1 && z < jetty.start + 0.4) continue
      const worn = trailDistance(x, z)
      if (worn < 0.45 || (worn < 0.8 && rand() < 0.7)) continue
      const tall = 0.35 + fbm(x * 0.3 + 2, z * 0.3) * 0.6
      q.setFromAxisAngle(up, rand() * Math.PI)
      s.set(1 + rand() * 0.4, tall * (0.45 + rand() * 0.55), 1)
      p.set(x, groundHeight(x, z) - 0.02, z)
      grass.setMatrixAt(placed, m.compose(p, q, s))
      shades[placed] = Math.min(1, Math.max(0, fbm(x * 0.2 + 9, z * 0.2) * 1.3 - 0.15 + rand() * 0.2))
      placed++
    }
  }
  grass.count = placed
  blade.setAttribute('aShade', new InstancedBufferAttribute(shades, 1))
  grass.frustumCulled = false
  scene.add(grass)

  // Reeds standing in the shallows.
  const reedCount = quality.low ? 260 : 700
  const reeds = new InstancedMesh(reedBlade, swayMaterial('#40652c', '#9fbd60', '#4c6a2c', '#b9b56a'), reedCount)
  const reedShades = new Float32Array(reedCount)
  for (let i = 0; i < reedCount; i++){
    const left = i < reedCount * 0.65
    const x = left ? -24 + rand() * 18 : 12 + rand() * 14
    const z = nearShore(x) - 0.2 - Math.pow(rand(), 1.6) * 4
    q.setFromAxisAngle(up, rand() * Math.PI)
    s.set(0.8, 1.2 + rand() * 1.3, 0.8)
    p.set(x, waterLevel - 0.15, z)
    reeds.setMatrixAt(i, m.compose(p, q, s))
    reedShades[i] = rand()
  }
  reedBlade.setAttribute('aShade', new InstancedBufferAttribute(reedShades, 1))
  reeds.frustumCulled = false
  scene.add(reeds)

  // Lily pads near the left bank, a few in flower.
  const pad = new CircleGeometry(0.22, 14, 0.25, Math.PI * 2 - 0.5)
  pad.rotateX(-Math.PI / 2)
  const padCount = quality.low ? 40 : 80
  const pads = new InstancedMesh(pad, surface('#4f7a3a', { roughness: 0.55 }), padCount)
  for (let i = 0; i < padCount; i++){
    const x = -20 + rand() * 13
    const z = nearShore(x) - 0.8 - rand() * 4.5
    q.setFromAxisAngle(up, rand() * Math.PI * 2)
    s.setScalar(0.6 + rand() * 0.8)
    p.set(x, waterLevel + 0.006, z)
    pads.setMatrixAt(i, m.compose(p, q, s))
  }
  scene.add(pads)
  const lilyGeometry = new SphereGeometry(0.06, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2)
  const lilies = new InstancedMesh(lilyGeometry, surface('#f2c6d4'), 9)
  for (let i = 0; i < 9; i++){
    const x = -19 + rand() * 11
    const z = nearShore(x) - 1 - rand() * 3.5
    p.set(x, waterLevel + 0.01, z)
    lilies.setMatrixAt(i, m.compose(p, q.identity(), s.set(1, 0.7, 1)))
  }
  scene.add(lilies)

  // Wildflowers in drifts: daisies, buttercups, lilac and clover pink.
  const stem = new PlaneGeometry(0.02, 0.36, 1, 3)
  stem.translate(0, 0.18, 0)
  const head = new CircleGeometry(0.035, 8)
  head.rotateX(-Math.PI / 2.4)
  head.translate(0, 0.37, 0.01)
  const centre = new CircleGeometry(0.012, 6)
  centre.rotateX(-Math.PI / 2.4)
  centre.translate(0, 0.372, 0.013)
  for (const g of [head, centre]){
    const uv = g.attributes.uv as BufferAttribute
    for (let i = 0; i < uv.count; i++) uv.setY(i, 1)
  }
  const flowerKinds: Array<[string, string]> = [['#f4f1e6', '#e8b830'], ['#f2cf3a', '#d99a20'], ['#b9a2d8', '#f0e2a0'], ['#e7a1b6', '#f6dbe2']]
  const perKind = Math.round(quality.flowers / flowerKinds.length)
  flowerKinds.forEach(([petal, eye], kind) => {
    const geometry = mergeGeometries([paint(stem.clone(), '#56783a'), paint(head.clone(), petal), paint(centre.clone(), eye)])!
    const flowers = new InstancedMesh(geometry, swayMaterial('#ffffff', '#ffffff', '#ffffff', '#ffffff', true), perKind)
    const flowerShades = new Float32Array(perKind)
    let bloomed = 0
    for (let attempt = 0; bloomed < perKind && attempt < perKind * 40; attempt++){
      const x = (rand() - 0.5) * 56
      const z = 12 - rand() * 22
      if (onDeck(x, z, 0.1) || z < nearShore(x) + 0.6 || trailDistance(x, z) < 0.6) continue
      if (fbm(x * 0.22 + kind * 7, z * 0.22) < 0.56) continue
      q.setFromAxisAngle(up, rand() * Math.PI * 2)
      s.setScalar(0.7 + rand() * 0.6)
      p.set(x, groundHeight(x, z) - 0.02, z)
      flowers.setMatrixAt(bloomed, m.compose(p, q, s))
      flowerShades[bloomed++] = rand()
    }
    flowers.count = bloomed
    geometry.setAttribute('aShade', new InstancedBufferAttribute(flowerShades, 1))
    flowers.frustumCulled = false
    scene.add(flowers)
    hidden.push(flowers)
  })

  // Yellow cosmos growing up between the stones on the bank, as in her photograph by the lake:
  // tall, thin, branching stems, each with a few golden eight-petalled flowers and round buds.
  const plantHeight = 0.85
  const sprig = (from: Vector3, to: Vector3, width: number) => {
    const stalk = new PlaneGeometry(width, from.distanceTo(to), 1, 3)
    stalk.translate(0, from.distanceTo(to) / 2, 0)
    stalk.applyQuaternion(new Quaternion().setFromUnitVectors(up, to.clone().sub(from).normalize()))
    stalk.translate(from.x, from.y, from.z)
    return stalk
  }
  const cosmosHead = (centre: Vector3, size: number, open: boolean) => {
    const parts: BufferGeometry[] = []
    if (open){
      // Eight broad petals with notched tips, around an orange-gold eye.
      const petals = new CircleGeometry(size, 48)
      const pp = petals.attributes.position as BufferAttribute
      for (let i = 1; i < pp.count; i++){
        const angle = Math.atan2(pp.getY(i), pp.getX(i))
        const lobe = 0.55 + 0.45 * Math.pow(Math.abs(Math.cos(angle * 4)), 0.6) - 0.12 * Math.pow(Math.abs(Math.sin(angle * 16)), 6)
        pp.setXY(i, Math.cos(angle) * size * lobe, Math.sin(angle) * size * lobe)
      }
      parts.push(paint(petals, '#f6c21c'))
      const eye = new CircleGeometry(size * 0.28, 10)
      eye.translate(0, 0, 0.002)
      parts.push(paint(eye, '#d9861c'))
    } else {
      parts.push(paint(new SphereGeometry(size * 0.35, 6, 4), '#7a8a3a'))
    }
    const head = mergeGeometries(parts.map(part => { part.deleteAttribute('normal'); return part.index ? part.toNonIndexed() : part }))!
    // Face outwards and up a little, as the flowers in the photograph do.
    head.rotateX(-0.5 - rand() * 0.6)
    head.rotateY(rand() * Math.PI * 2)
    head.translate(centre.x, centre.y, centre.z)
    return head
  }
  for (let variant = 0; variant < 3; variant++){
    const parts: BufferGeometry[] = []
    for (let stem = 0; stem < 3; stem++){
      const lean = new Vector3((rand() - 0.5) * 0.25, 0, (rand() - 0.5) * 0.25)
      const top = new Vector3(lean.x, plantHeight * (0.7 + rand() * 0.3), lean.z)
      parts.push(paint(sprig(new Vector3(0, 0, 0), top, 0.012), '#5f7a32'))
      parts.push(cosmosHead(top, 0.045 + rand() * 0.015, true))
      for (let b = 0; b < 3; b++){
        const from = top.clone().multiplyScalar(0.45 + rand() * 0.35)
        const to = from.clone().add(new Vector3((rand() - 0.5) * 0.3, 0.1 + rand() * 0.15, (rand() - 0.5) * 0.3))
        parts.push(paint(sprig(from, to, 0.008), '#5f7a32'))
        parts.push(cosmosHead(to, 0.035 + rand() * 0.015, rand() < 0.55))
      }
    }
    const geometry = mergeGeometries(parts.map(part => {
      const g = part.index ? part.toNonIndexed() : part
      if (g.attributes.normal) g.deleteAttribute('normal')
      // The sway shader bends each plant by height, so its uv.y is the height up the plant.
      const gp = g.attributes.position as BufferAttribute
      const uvs = new Float32Array(gp.count * 2)
      for (let i = 0; i < gp.count; i++) uvs[i * 2 + 1] = Math.min(1, Math.max(0, gp.getY(i) / plantHeight))
      g.setAttribute('uv', new BufferAttribute(uvs, 2))
      return g
    }))!
    const spots: Matrix4[] = []
    rockSpots.forEach(([x, z], i) => {
      if (i % 3 !== variant || rand() < 0.35) return
      const plants = 2 + Math.floor(rand() * 4)
      for (let k = 0; k < plants; k++){
        const px = x + (rand() - 0.5) * 1.4, pz = z + 0.2 + rand() * 0.9
        if (pz < nearShore(px) + 0.15) continue
        q.setFromAxisAngle(up, rand() * Math.PI * 2)
        s.setScalar(0.8 + rand() * 0.5)
        spots.push(new Matrix4().compose(p.set(px, groundHeight(px, pz) - 0.03, pz), q, s.clone()))
      }
    })
    const cosmos = new InstancedMesh(geometry, swayMaterial('#ffffff', '#ffffff', '#ffffff', '#ffffff', true), spots.length)
    spots.forEach((matrix, i) => cosmos.setMatrixAt(i, matrix))
    geometry.setAttribute('aShade', new InstancedBufferAttribute(Float32Array.from(spots, () => rand()), 1))
    cosmos.frustumCulled = false
    scene.add(cosmos)
    hidden.push(cosmos)
  }

  // The jetty at the end of the trail, where she sits to draw, and a rowboat tied up beside it.
  const planks = scanned(surface('#a08466', { roughness: 0.9 }), 'weathered_planks', [1, 1], { normal: 1 })
  const postMaterial = scanned(surface('#6f5a46'), 'bark_brown_02', [1, 2], { normal: 0.8 })
  jetty.start = nearShore(jetty.x) + 0.8
  jetty.end = jetty.start - JETTY_LENGTH
  const pier = new Group()
  for (let z = jetty.start; z > jetty.end; z -= 0.24){
    const board = new Mesh(new BoxGeometry(jetty.width, 0.05, 0.22), planks)
    board.position.set(jetty.x + (rand() - 0.5) * 0.04, PLANKS_TOP - 0.025 + (rand() - 0.5) * 0.015, z)
    board.rotation.y = (rand() - 0.5) * 0.03
    pier.add(board)
  }
  for (let z = jetty.start - 0.3; z > jetty.end; z -= 1.5){
    for (const side of [-1, 1]){
      const post = new Mesh(new CylinderGeometry(0.07, 0.08, 1.8, 8), postMaterial)
      post.position.set(jetty.x + side * (jetty.width / 2 + 0.02), -0.55, z)
      pier.add(post)
    }
  }
  pier.traverse(child => { if (child instanceof Mesh){ child.castShadow = true; child.receiveShadow = true } })
  scene.add(mergeStill(pier))
  const hull = new SphereGeometry(1, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2)
  hull.scale(0.62, 0.32, 1.7)
  const boat = new Group()
  const boatWood = scanned(surface('#7a5a40', { side: DoubleSide }), 'weathered_planks', [3, 1], { normal: 1 })
  boat.add(new Mesh(hull, boatWood))
  const rim = new Mesh(new CylinderGeometry(1, 1, 0.05, 24, 1, true), surface('#4f3a2a', { side: DoubleSide }))
  rim.scale.set(0.63, 1, 1.71)
  boat.add(rim)
  // Boards across the bottom, just above the waterline, so the lake does not show inside the hull.
  const bottom = new Mesh(new CircleGeometry(1, 24), boatWood)
  bottom.rotation.x = -Math.PI / 2
  bottom.scale.set(0.59, 1.62, 1)
  bottom.position.y = -0.08
  boat.add(bottom)
  for (const z of [-0.5, 0.45]){
    const seat = new Mesh(new BoxGeometry(1.05, 0.04, 0.22), boatWood)
    seat.position.set(0, -0.06, z)
    boat.add(seat)
  }
  const oar = new Mesh(new CylinderGeometry(0.02, 0.02, 1.9, 6), surface('#9a7a56'))
  oar.rotation.set(Math.PI / 2, 0, 0.15)
  oar.position.set(0.2, -0.04, 0.1)
  boat.add(oar)
  boat.position.set(jetty.x + 1.25, waterLevel + 0.12, jetty.start - 3.2)
  boat.rotation.y = 0.18
  boat.traverse(child => { if (child instanceof Mesh) child.castShadow = true })
  scene.add(mergeStill(boat))
  updates.push(time => {
    boat.position.y = waterLevel + 0.12 + Math.sin(time * 0.9) * 0.02
    boat.rotation.z = Math.sin(time * 0.7) * 0.025
    boat.rotation.x = Math.sin(time * 0.55 + 1) * 0.015
  })

  // Big summer clouds drifting slowly at different distances.
  const clouds: Sprite[] = []
  const cloudMaterials = [1, 2, 3, 4].map(seed => new SpriteMaterial({ map: cloudTexture(seed), transparent: true, depthWrite: false, fog: false, opacity: 0.95 }))
  for (let i = 0; i < 16; i++){
    const sprite = new Sprite(cloudMaterials[i % cloudMaterials.length])
    const distance = 300 + rand() * 340
    const width = 150 + rand() * 170
    const angle = (rand() - 0.5) * 2.6
    sprite.position.set(Math.sin(angle) * distance, 18 + width * 0.3 + rand() * 50 + distance * 0.06, -Math.cos(angle) * distance)
    sprite.scale.set(width, width * 0.625, 1)
    sprite.userData.speed = 0.5 + rand()
    clouds.push(sprite)
    scene.add(sprite)
  }
  updates.push((_, dt) => clouds.forEach(cloud => {
    cloud.position.x += cloud.userData.speed * dt
    if (cloud.position.x > 520) cloud.position.x = -520
  }))

  // Birds: a small flock crossing far over the lake now and then.
  const birdShape = new BufferGeometry()
  birdShape.setAttribute('position', new Float32BufferAttribute([0, 0, 0.12, -0.55, 0.05, -0.05, 0, 0, -0.12, 0, 0, 0.12, 0, 0, -0.12, 0.55, 0.05, -0.05], 3))
  birdShape.computeVertexNormals()
  const birdMaterial = surface('#2f2f36', { side: DoubleSide, transparent: true })
  const flock = new Group()
  const birds = Array.from({ length: 6 }, (_, i) => {
    const bird = new Mesh(birdShape, birdMaterial)
    bird.position.set(-i * 1.6 + rand(), (i % 2) * 0.8 + rand() * 0.6, i * 1.1 * (i % 2 ? 1 : -1))
    bird.scale.setScalar(1.4)
    flock.add(bird)
    return bird
  })
  scene.add(flock)
  let birdFade = 0
  updates.push((time, dt) => {
    const lap = (time * 3.2) % 260
    flock.position.set(-140 + lap, 20 + Math.sin(time * 0.2) * 3, -75)
    flock.rotation.y = Math.PI / 2
    birds.forEach((bird, i) => {
      const flap = Math.sin(time * 7 + i * 1.3)
      bird.scale.y = 1.4 * (0.4 + Math.abs(flap))
      bird.position.y += Math.sin(time * 1.5 + i) * dt * 0.2
    })
    birdMaterial.opacity = birdFade
  })

  // Leaves drifting down from the near trees, kept well away from the viewer.
  const leafGeometry = new PlaneGeometry(0.06, 0.04)
  const fallingCount = quality.low ? 10 : 22
  const falling = new InstancedMesh(leafGeometry, surface('#9aa64a', { side: DoubleSide }), fallingCount)
  const fallingState = Array.from({ length: fallingCount }, () => ({ x: 0, y: 0, z: 0, seed: rand() * 10, speed: 0.25 + rand() * 0.2 }))
  const spawn = (leaf: typeof fallingState[number]) => {
    const tree = [[12.5, 0.5], [-13, nearShore(-13) + 2.2], [19, -9], [8, 11]][Math.floor(rand() * 4)]
    leaf.x = tree[0] + (rand() - 0.5) * 6
    leaf.z = tree[1] + (rand() - 0.5) * 6
    leaf.y = 3 + rand() * 4
  }
  fallingState.forEach(leaf => { spawn(leaf); leaf.y = rand() * 6 })
  falling.frustumCulled = false
  scene.add(falling)
  updates.push((time, dt) => {
    fallingState.forEach((leaf, i) => {
      leaf.y -= leaf.speed * dt
      leaf.x += (Math.sin(time * 0.8 + leaf.seed) * 0.3 + 0.25) * dt
      if (leaf.y < groundHeight(leaf.x, leaf.z) + 0.02) spawn(leaf)
      q.setFromEuler(e.set(time * 1.7 + leaf.seed, time * 1.1 + leaf.seed * 2, Math.sin(time * 2 + leaf.seed)))
      falling.setMatrixAt(i, m.compose(p.set(leaf.x, leaf.y, leaf.z), q, s.setScalar(1)))
    })
    falling.instanceMatrix.needsUpdate = true
  })

  // Dust in the light by day, fireflies along the bank by night.
  function cloudOfPoints(count: number, box: { x: [number, number]; y: [number, number]; z: [number, number] }){
    const geometry = new BufferGeometry()
    const values = new Float32Array(count * 3), seedValues = new Float32Array(count)
    for (let i = 0; i < count; i++){
      values.set([box.x[0] + rand() * (box.x[1] - box.x[0]), box.y[0] + rand() * (box.y[1] - box.y[0]), box.z[0] + rand() * (box.z[1] - box.z[0])], i * 3)
      seedValues[i] = rand()
    }
    geometry.setAttribute('position', new BufferAttribute(values, 3))
    geometry.setAttribute('aSeed', new BufferAttribute(seedValues, 1))
    return geometry
  }
  const dustMaterial = glowPointsMaterial('#fff1c8', 0.7, false)
  const dust = new Points(cloudOfPoints(quality.low ? 100 : 200, { x: [-4, 4], y: [0.6, 3.2], z: [-5, 0] }), dustMaterial)
  const fireflyMaterial = glowPointsMaterial('#e6ff8a', 1.8, true)
  const fireflies = new Points(cloudOfPoints(quality.low ? 50 : 110, { x: [-22, 24], y: [0.2, 2], z: [-9, 12] }), fireflyMaterial)
  scene.add(dust, fireflies)

  // Rain, falling around wherever the viewer is.
  const dropCount = quality.low ? 1200 : 2600
  const drops = new Float32Array(dropCount * 6), dropSeeds = new Float32Array(dropCount * 2), dropEnds = new Float32Array(dropCount * 2)
  for (let i = 0; i < dropCount; i++){
    const x = (rand() - 0.5) * 26, y = rand() * 12, z = (rand() - 0.5) * 26
    drops.set([x, y, z, x, y, z], i * 6)
    dropSeeds.set([rand(), 0], i * 2)
    dropSeeds[i * 2 + 1] = dropSeeds[i * 2]
    dropEnds.set([0, 1], i * 2)
  }
  const rainGeometry = new BufferGeometry()
  rainGeometry.setAttribute('position', new BufferAttribute(drops, 3))
  rainGeometry.setAttribute('aSeed', new BufferAttribute(dropSeeds, 1))
  rainGeometry.setAttribute('aEnd', new BufferAttribute(dropEnds, 1))
  const rain = new LineSegments(rainGeometry, rainMaterial())
  rain.frustumCulled = false
  scene.add(rain)

  // The ducks.
  const ducks = buildDucks(scene, rand, waterLevel, { minX: -16, maxX: 20, far: -40, shore: nearShore }, shadowBlot)
  updates.push((time, dt) => ducks.update(time, dt))

  hidden.push(grass, reeds, dust, fireflies, falling, rain)
  // The mirror is redrawn every other frame: half the cost, and a reflection a frame behind is
  // never seen.
  const reflect = lake.onBeforeRender
  let reflectFrame = 0
  lake.onBeforeRender = function (...args){
    if (reflectFrame++ % 2) return
    hidden.forEach(object => { object.visible = false })
    reflect.apply(this, args)
    hidden.forEach(object => { object.visible = true })
    rain.visible = world.uRain.value > 0.01
  }

  const tint = new Color()
  return {
    lake,
    ducks,
    // Things the lake's mirror can leave out (the studio, which it barely sees).
    hideFromReflection(object: Object3D){ hidden.push(object) },
    update(time: number, dt: number, cameraPosition: Vector3){
      updates.forEach(update => update(time, dt))
      ;(rain.material as ReturnType<typeof rainMaterial>).uniforms.uCentre.value.copy(cameraPosition)
    },
    // Weather and light from the current mood.
    applyAtmosphere(atmosphere: Atmosphere){
      tint.copy(atmosphere.cloud)
      cloudMaterials.forEach(material => {
        material.color.copy(tint)
        material.opacity = 0.95 * (0.35 + atmosphere.cloudCover * 0.65) * (1 - atmosphere.gloom * 0.35)
      })
      dustMaterial.uniforms.uOpacity.value = atmosphere.dust * 0.45
      fireflyMaterial.uniforms.uOpacity.value = atmosphere.fireflies
      rain.visible = atmosphere.rain > 0.01
      birdFade += ((atmosphere.birds > 0.3 ? 1 : 0) - birdFade) * 0.02
      flock.visible = birdFade > 0.02
      falling.visible = atmosphere.rain < 0.5
    },
    setPixelRatio(ratio: number){ [dustMaterial, fireflyMaterial].forEach(material => { material.uniforms.uPixelRatio.value = ratio }) },
    // On slow devices, keep only a share of the grass (blades are scattered, so any share looks even).
    thinGrass(share: number){ grass.count = Math.round(placed * share) }
  }
}
