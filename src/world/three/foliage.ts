import {
  BufferAttribute, BufferGeometry, CatmullRomCurve3, Color, Float32BufferAttribute, InstancedMesh, Matrix4, Quaternion, Scene,
  TubeGeometry, Vector3, type Material
} from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

// Trees built the way painted trees are: a real trunk and branches, then a crown of overlapping leaf
// clumps. Each clump is a few dozen leaf-cluster cards. A card's normal points out from the crown, and
// each card knows how deep inside the crown it sits, so the foliage shader can light the crown as one
// soft mass with dark hollows. Several seeds per species give varied silhouettes.

type Rand = () => number
export type Species = 'broadleaf' | 'poplar' | 'palm' | 'bush' | 'willow'

type Clump = { centre: Vector3; radius: number }
export type TreeParts = { trunk: BufferGeometry; leaves: BufferGeometry }

function branch(points: Vector3[], radius: number, segments = 10){
  const curve = new CatmullRomCurve3(points)
  const tube = new TubeGeometry(curve, segments, radius, 7, false)
  // Taper towards the tip.
  const position = tube.attributes.position as BufferAttribute
  const uv = tube.attributes.uv as BufferAttribute
  const centre = new Vector3(), point = new Vector3()
  for (let i = 0; i < position.count; i++){
    const t = uv.getX(i)
    curve.getPoint(t, centre)
    point.fromBufferAttribute(position, i).sub(centre).multiplyScalar(1 - t * 0.72)
    position.setXYZ(i, centre.x + point.x, centre.y + point.y, centre.z + point.z)
  }
  // Bark texture runs along the branch.
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getY(i) * 1.5, uv.getX(i) * curve.getLength() * 0.6)
  tube.computeVertexNormals()
  return tube
}

// One leaf card: a quad facing a random way, its normal blended between the crown and the clump.
function addCards(clumps: Clump[], crownCentre: Vector3, count: number, cardSize: number, tint: Color, rand: Rand, out: { position: number[]; normal: number[]; uv: number[]; colour: number[]; occlusion: number[] }, crownRadius: number){
  const right = new Vector3(), up = new Vector3(), normal = new Vector3(), point = new Vector3(), corner = new Vector3()
  const q = new Quaternion(), axis = new Vector3()
  const shade = new Color()
  for (let i = 0; i < count; i++){
    const clump = clumps[Math.floor(rand() * clumps.length)]
    // Mostly near the surface of the clump, where leaves catch light.
    const direction = new Vector3(rand() * 2 - 1, rand() * 2 - 1, rand() * 2 - 1).normalize()
    point.copy(clump.centre).addScaledVector(direction, clump.radius * Math.pow(rand(), 0.35))
    const fromCrown = point.clone().sub(crownCentre)
    const depth = Math.min(1, fromCrown.length() / crownRadius)
    normal.copy(fromCrown).normalize().multiplyScalar(0.65).addScaledVector(direction, 0.35).normalize()
    // Lower and inner leaves sit in shadow.
    const below = Math.max(0, (crownCentre.y - point.y) / crownRadius)
    const occlusion = Math.min(1, Math.max(0.15, depth * 0.85 + 0.25 - below * 0.35))
    axis.set(rand() * 2 - 1, rand() * 2 - 1, rand() * 2 - 1).normalize()
    q.setFromAxisAngle(axis, rand() * Math.PI * 2)
    right.set(1, 0, 0).applyQuaternion(q)
    up.set(0, 1, 0).applyQuaternion(q)
    const size = cardSize * (0.75 + rand() * 0.5)
    shade.copy(tint).offsetHSL((rand() - 0.5) * 0.03, (rand() - 0.5) * 0.08, (rand() - 0.5) * 0.07)
    const corners: Array<[number, number]> = [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]]
    for (const [sx, sy] of corners){
      corner.copy(point).addScaledVector(right, sx * size * 0.5).addScaledVector(up, sy * size * 0.5)
      out.position.push(corner.x, corner.y, corner.z)
      out.normal.push(normal.x, normal.y, normal.z)
      out.uv.push((sx + 1) / 2, (sy + 1) / 2)
      out.colour.push(shade.r, shade.g, shade.b)
      out.occlusion.push(occlusion)
    }
  }
}

function leafGeometry(data: { position: number[]; normal: number[]; uv: number[]; colour: number[]; occlusion: number[] }){
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new Float32BufferAttribute(data.position, 3))
  geometry.setAttribute('normal', new Float32BufferAttribute(data.normal, 3))
  geometry.setAttribute('uv', new Float32BufferAttribute(data.uv, 2))
  geometry.setAttribute('color', new Float32BufferAttribute(data.colour, 3))
  geometry.setAttribute('aOcclusion', new Float32BufferAttribute(data.occlusion, 1))
  geometry.computeBoundingSphere()
  return geometry
}

// detail: 1 for trees near the viewer, lower for distant ones (fewer, larger cards).
export function buildTree(species: Species, rand: Rand, detail: number): TreeParts {
  const data = { position: [] as number[], normal: [] as number[], uv: [] as number[], colour: [] as number[], occlusion: [] as number[] }
  const branches: BufferGeometry[] = []
  const clumps: Clump[] = []
  const lean = new Vector3((rand() - 0.5) * 0.5, 0, (rand() - 0.5) * 0.5)

  if (species === 'broadleaf' || species === 'willow'){
    const height = 3.6 + rand() * 1.6
    const top = new Vector3(lean.x, height, lean.z)
    branches.push(branch([new Vector3(0, -0.3, 0), new Vector3(lean.x * 0.2, height * 0.35, lean.z * 0.2), new Vector3(lean.x * 0.6, height * 0.7, lean.z * 0.6), top], 0.32, 12))
    const limbs = 4 + Math.floor(rand() * 3)
    const crownCentre = new Vector3(lean.x, height + 1.1, lean.z)
    for (let i = 0; i < limbs; i++){
      const angle = (i / limbs) * Math.PI * 2 + rand() * 0.8
      const reach = 1.8 + rand() * 1.6
      const start = new Vector3(lean.x * 0.5, height * (0.55 + rand() * 0.3), lean.z * 0.5)
      const end = new Vector3(Math.cos(angle) * reach + lean.x, height + 0.4 + rand() * 1.6, Math.sin(angle) * reach + lean.z)
      const middle = start.clone().lerp(end, 0.5).add(new Vector3(0, 0.3, 0))
      branches.push(branch([start, middle, end], 0.13, 6))
      clumps.push({ centre: end.clone().add(new Vector3(0, 0.35, 0)), radius: 1.1 + rand() * 0.6 })
    }
    for (let i = 0; i < 4; i++){
      clumps.push({ centre: crownCentre.clone().add(new Vector3((rand() - 0.5) * 2.2, rand() * 1.6, (rand() - 0.5) * 2.2)), radius: 1.2 + rand() * 0.6 })
    }
    if (species === 'willow'){
      // Long trailing clumps hanging towards the water.
      for (let i = 0; i < 7; i++){
        const angle = rand() * Math.PI * 2
        clumps.push({ centre: crownCentre.clone().add(new Vector3(Math.cos(angle) * 2.4, -1.4 - rand() * 1.2, Math.sin(angle) * 2.4)), radius: 0.7 + rand() * 0.4 })
      }
    }
    const tint = new Color(species === 'willow' ? '#7fa35a' : ['#4f7f3c', '#5d8a40', '#47763a'][Math.floor(rand() * 3)])
    addCards(clumps, crownCentre, Math.round(520 * detail), 1.15 / Math.sqrt(detail), tint, rand, data, 3.2)
  }

  if (species === 'poplar'){
    const height = 6 + rand() * 3
    branches.push(branch([new Vector3(0, -0.3, 0), new Vector3(lean.x * 0.2, height * 0.5, lean.z * 0.2), new Vector3(lean.x * 0.4, height, lean.z * 0.4)], 0.2, 10))
    const crownCentre = new Vector3(lean.x * 0.4, height * 0.72, lean.z * 0.4)
    for (let i = 0; i < 7; i++){
      const t = i / 6
      clumps.push({ centre: new Vector3(lean.x * 0.4 * t + (rand() - 0.5) * 0.5, height * (0.35 + t * 0.68), lean.z * 0.4 * t + (rand() - 0.5) * 0.5), radius: 1.1 * Math.sin(0.25 + t * 2.6) + 0.35 })
    }
    addCards(clumps, crownCentre, Math.round(360 * detail), 1 / Math.sqrt(detail), new Color(['#56803e', '#4a7139'][Math.floor(rand() * 2)]), rand, data, height * 0.45)
  }

  if (species === 'bush'){
    const crownCentre = new Vector3(0, 1.05, 0)
    for (let i = 0; i < 3; i++){
      const angle = rand() * Math.PI * 2
      branches.push(branch([new Vector3(0, -0.2, 0), new Vector3(Math.cos(angle) * 0.3, 0.5, Math.sin(angle) * 0.3), new Vector3(Math.cos(angle) * 0.5, 0.9, Math.sin(angle) * 0.5)], 0.05, 4))
    }
    for (let i = 0; i < 5; i++){
      clumps.push({ centre: new Vector3((rand() - 0.5) * 1.6, 0.9 + rand() * 0.5, (rand() - 0.5) * 1.2), radius: 0.55 + rand() * 0.35 })
    }
    addCards(clumps, crownCentre, Math.round(150 * detail), 0.7 / Math.sqrt(detail), new Color(['#557f3c', '#62893f', '#4c7438'][Math.floor(rand() * 3)]), rand, data, 1.2)
  }

  if (species === 'palm'){
    const height = 7 + rand() * 3
    const bend = (rand() - 0.5) * 1.6
    const top = new Vector3(bend, height, bend * 0.3)
    branches.push(branch([new Vector3(0, -0.3, 0), new Vector3(bend * 0.15, height * 0.4, 0), new Vector3(bend * 0.6, height * 0.8, bend * 0.15), top], 0.2, 14))
    // Fronds: long cards that arch out and droop, using the frond texture's own leaflets.
    const fronds = 11
    const crown = top.clone().add(new Vector3(0, 0.2, 0))
    for (let i = 0; i < fronds; i++){
      const angle = (i / fronds) * Math.PI * 2 + rand() * 0.3
      const out = new Vector3(Math.cos(angle), 0, Math.sin(angle))
      const side = new Vector3(-out.z, 0, out.x)
      const length = 2.6 + rand() * 0.8
      const rise = 0.5 + rand() * 0.4
      const steps = 6
      for (let k = 0; k < steps; k++){
        const t0 = k / steps, t1 = (k + 1) / steps
        const at = (t: number) => crown.clone().addScaledVector(out, t * length).add(new Vector3(0, Math.sin(t * Math.PI * 0.8) * rise - t * t * 1.8, 0))
        const p0 = at(t0), p1 = at(t1)
        const w0 = 0.55 * Math.sin(Math.min(1, t0 * 1.3 + 0.1) * Math.PI * 0.9), w1 = 0.55 * Math.sin(Math.min(1, t1 * 1.3 + 0.1) * Math.PI * 0.9)
        const normal = new Vector3(0, 1, 0).addScaledVector(out, 0.4).normalize()
        const quad: Array<[Vector3, number, number]> = [
          [p0.clone().addScaledVector(side, -w0), 0, t0], [p0.clone().addScaledVector(side, w0), 1, t0], [p1.clone().addScaledVector(side, w1), 1, t1],
          [p0.clone().addScaledVector(side, -w0), 0, t0], [p1.clone().addScaledVector(side, w1), 1, t1], [p1.clone().addScaledVector(side, -w1), 0, t1]
        ]
        const tint = new Color('#557a3a').offsetHSL(0, 0, (rand() - 0.5) * 0.05)
        for (const [p, u, v] of quad){
          data.position.push(p.x, p.y, p.z)
          data.normal.push(normal.x, normal.y, normal.z)
          // The frond texture is drawn base at the bottom, so v runs from base to tip.
          data.uv.push(u, v)
          data.colour.push(tint.r, tint.g, tint.b)
          data.occlusion.push(0.55 + t0 * 0.45)
        }
      }
    }
  }

  const trunk = mergeGeometries(branches.map(geometry => geometry.index ? geometry.toNonIndexed() : geometry))!
  return { trunk, leaves: leafGeometry(data) }
}

// Plants many copies of a few varied trees, as two instanced draws per variant (bark and leaves).
export function plantForest(scene: Scene, options: {
  species: Species; variants: number; detail: number; count: number; seed: Rand
  trunkMaterial: Material; leafMaterial: Material; leafTexture?: Material
  place: (i: number) => { position: Vector3; scale: number; turn: number } | null
  castShadow?: boolean
}){
  const variants = Array.from({ length: options.variants }, () => buildTree(options.species, options.seed, options.detail))
  const placements: Array<{ matrix: Matrix4; variant: number }> = []
  const q = new Quaternion(), s = new Vector3(), up = new Vector3(0, 1, 0)
  for (let i = 0; i < options.count; i++){
    const spot = options.place(i)
    if (!spot) continue
    q.setFromAxisAngle(up, spot.turn)
    s.setScalar(spot.scale)
    placements.push({ matrix: new Matrix4().compose(spot.position, q, s), variant: i % options.variants })
  }
  const meshes: InstancedMesh[] = []
  variants.forEach((parts, index) => {
    const mine = placements.filter(item => item.variant === index)
    if (!mine.length) return
    const trunk = new InstancedMesh(parts.trunk, options.trunkMaterial, mine.length)
    const leaves = new InstancedMesh(parts.leaves, options.leafMaterial, mine.length)
    mine.forEach((item, i) => { trunk.setMatrixAt(i, item.matrix); leaves.setMatrixAt(i, item.matrix) })
    trunk.castShadow = leaves.castShadow = !!options.castShadow
    trunk.receiveShadow = true
    trunk.computeBoundingSphere()
    leaves.computeBoundingSphere()
    scene.add(trunk, leaves)
    meshes.push(trunk, leaves)
  })
  return meshes
}
