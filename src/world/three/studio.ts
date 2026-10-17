import {
  AdditiveBlending, BoxGeometry, CapsuleGeometry, CatmullRomCurve3, CircleGeometry, Color, ConeGeometry,
  CylinderGeometry, DoubleSide, Group, LatheGeometry, Line, BufferGeometry, LineBasicMaterial, Material, Mesh, MeshBasicMaterial, MeshStandardMaterial,
  Object3D, PlaneGeometry, PointLight, Quaternion, SRGBColorSpace, Scene, ShaderMaterial, SphereGeometry, SpotLight, Sprite, SpriteMaterial,
  Texture, TextureLoader, TorusGeometry, TubeGeometry, Vector2, Vector3
} from 'three'
import { jettySeat, nearShore, random, type Quality } from './environment'
import { buildArtist } from './artist'
import { loadCharacter } from './characterModel'
import { animated, mergeStill } from './merge'
import { surface } from './materials'
import { contactShadowTexture, corkTexture, fabricTexture, glowTexture, leafClusterTexture, limewashTexture, scanned } from './textures'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'

// The artist's open-sided studio: a wooden deck under a roof, with one side wall, open to the lake.
// She sits cross-legged on a cushion on the floor, sketching, with her things around her on the
// boards: the sketchbook and loose papers, a candle, her daybook album. An inspiration board hangs on
// the inside of the side wall, lanterns hang along the open edges of the deck, a paper pendant hangs
// from the roof and lamp posts light the jetty. Nothing stands between her and the landscape.

const rand = random(21)

export type InteractiveKind = 'candle' | 'sketchbook' | 'paper' | 'board' | 'album' | 'duck' | 'cat'
export type Interactive = { kind: InteractiveKind; label: string; collection?: string; hit: Object3D; highlight: MeshStandardMaterial[] }
export type StudioContent = {
  sketch: string
  papers: Array<{ collection: string; name: string; src: string }>
  board: { collection: string; name: string; images: string[] }
  album: string[]
}

// Where she sits, and where her sketchbook lies in front of her.
// She sits on the end of the jetty, feet in the water, looking up at the sky.
export const seat = jettySeat()
// The mat on the deck, where her sketchbook and loose sketches are left.
const mat = new Vector3(-0.2, 0, -0.85)
const bookAt = new Vector3(-0.17, 0, -1.15)
// Her sketchpad, put down on the planks beside her.
const padAt = seat.clone().add(new Vector3(-0.5, 0.008, 0.45))

function cast<T extends Object3D>(object: T, receive = false){
  object.traverse(child => { if (child instanceof Mesh){ child.castShadow = true; child.receiveShadow = receive } })
  return object
}
function limb(from: Vector3, to: Vector3, radius: number, material: Material, radiusEnd = radius){
  const direction = to.clone().sub(from)
  const length = Math.max(0.001, direction.length())
  const geometry = radiusEnd === radius
    ? new CapsuleGeometry(radius, length, 6, 16)
    : new CylinderGeometry(radiusEnd, radius, length, 16, 1)
  const mesh = new Mesh(geometry, material)
  mesh.position.copy(from).addScaledVector(direction, 0.5)
  mesh.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), direction.normalize())
  return mesh
}

// A small flame: a glowing teardrop, brighter at its core, swaying a touch.
function flameMaterial(){
  return new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uLevel: { value: 0 } },
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    vertexShader: /* glsl */`
      uniform float uTime;
      varying vec3 vNormalView;
      varying float vHeight;
      void main(){
        vec3 p = position;
        vHeight = clamp(p.y / 0.045 + 0.5, 0.0, 1.0);
        p.x += sin(uTime * 3.1) * 0.0025 * vHeight * vHeight + sin(uTime * 7.3) * 0.0008 * vHeight;
        vNormalView = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform float uLevel;
      varying vec3 vNormalView;
      varying float vHeight;
      void main(){
        float facing = abs(vNormalView.z);
        vec3 core = mix(vec3(1.0, 0.97, 0.85), vec3(1.0, 0.62, 0.2), smoothstep(0.35, 1.0, vHeight));
        vec3 colour = mix(vec3(1.0, 0.45, 0.12), core, facing);
        float alpha = (0.25 + facing * 0.75) * uLevel * smoothstep(1.0, 0.7, vHeight);
        gl_FragColor = vec4(colour * alpha * 1.6, alpha);
      }`
  })
}

// Leaves for the potted plants: the same painted leaf clusters as the trees, but lit by the lanterns and
// candle too, and casting real shadows.
const leafCards = leafClusterTexture()
const plantLeaves = ['#4f8a3f', '#5f9a48', '#447a38'].map(colour => surface(colour, { map: leafCards, alphaTest: 0.5, side: DoubleSide, roughness: 0.7 }))
function foliageClump(radius: number, cards: number, size: number, droop = 0){
  const group = new Group()
  for (let i = 0; i < cards; i++){
    const card = new Mesh(new PlaneGeometry(size, size), plantLeaves[i % plantLeaves.length])
    const angle = rand() * Math.PI * 2, rise = rand() * 2 - 1
    card.position.set(Math.cos(angle) * radius * Math.sqrt(1 - rise * rise), rise * radius * 0.7 - droop * rand(), Math.sin(angle) * radius * Math.sqrt(1 - rise * rise))
    card.rotation.set(rand() * Math.PI, rand() * Math.PI, rand() * Math.PI)
    group.add(card)
  }
  return group
}

export function buildStudio(scene: Scene, quality: Quality, content: StudioContent){
  // Everything is built into one group, so its still parts can be merged into a few draws at the end.
  const root = new Group()
  scene.add(root)
  const loader = new TextureLoader()
  const image = (src: string, onLoad?: (texture: Texture) => void) => {
    const texture = loader.load(src, onLoad)
    texture.colorSpace = SRGBColorSpace
    texture.anisotropy = 4
    return texture
  }
  // A picture at its own proportions, fitted inside a box of the given size. Pictures resize when
  // their image arrives, so they are kept out of the merge.
  const fitted = (src: string, size: number, mesh: Mesh, backing?: Mesh, border = 0.03) => {
    mesh.userData.keep = true
    if (backing) backing.userData.keep = true
    return image(src, texture => {
      const { width, height } = texture.image as HTMLImageElement
      const ratio = width / height
      const w = ratio >= 1 ? size : size * ratio, h = ratio >= 1 ? size / ratio : size
      mesh.scale.set(w, h, 1)
      backing?.scale.set(w + border, h + border, 1)
    })
  }
  const updates: Array<(time: number, dt: number) => void> = []
  const interactives: Interactive[] = []
  const hitMaterial = new MeshBasicMaterial({ visible: false })
  const blotMaterial = new MeshBasicMaterial({ map: contactShadowTexture(), transparent: true, depthWrite: false, opacity: 0.8 })
  const contact = (x: number, z: number, w: number, d = w, y = 0) => {
    const shadow = new Mesh(new PlaneGeometry(w, d), blotMaterial)
    shadow.rotation.x = -Math.PI / 2
    shadow.position.set(x, y + 0.004, z)
    root.add(shadow)
  }
  // Lays a thing on the floor at (x, z), turned by `turn`.
  const onFloor = <T extends Object3D>(object: T, x: number, z: number, turn = 0) => {
    object.position.set(x, 0, z)
    object.rotation.y = turn
    root.add(cast(object))
    return object
  }

  // The deck.
  const deckWood = scanned(surface('#f2dcc0', { roughness: 0.85 }), 'weathered_planks', [3, 3], { normal: 1 })
  const deck = new Mesh(new BoxGeometry(6.4, 0.16, 5.8), deckWood)
  deck.position.set(-0.3, -0.08, 0.9)
  deck.receiveShadow = true
  root.add(deck)
  const wood = scanned(surface('#d8a77c', { roughness: 0.7 }), 'oak_veneer_01', [1, 1], { normal: 0.8 })
  const darkWood = scanned(surface('#6a4a32', { roughness: 0.85 }), 'weathered_planks', [1, 2], { normal: 1 })

  // The side wall, timber-framed.
  const plaster = limewashTexture()
  plaster.repeat.set(3, 2)
  const sideWall = new Mesh(new BoxGeometry(0.16, 3.6, 5.8), surface('#ffffff', { map: plaster, roughness: 0.95 }))
  sideWall.position.set(-3.45, 1.8, 0.9)
  sideWall.receiveShadow = true
  root.add(sideWall)
  for (const z of [-1.95, 0.9, 3.75]){
    const stud = new Mesh(new BoxGeometry(0.06, 3.6, 0.12), darkWood)
    stud.position.set(-3.35, 1.8, z)
    root.add(cast(stud))
  }
  const skirting = new Mesh(new BoxGeometry(0.05, 0.14, 5.8), darkWood)
  skirting.position.set(-3.35, 0.07, 0.9)
  root.add(skirting)

  // The roof now covers the whole deck: a gentle slope from the wall down to the open side, on a
  // front and back beam, with rafters beneath and posts at the open corners.
  const roofSlope = 0.4 / 6.6
  const roof = new Mesh(new BoxGeometry(6.9, 0.08, 6.3), darkWood)
  roof.position.set(-0.25, 3.36, 0.9)
  roof.rotation.z = -roofSlope
  root.add(cast(roof))
  const roofAt = (x: number) => 3.36 - (x + 0.25) * Math.tan(roofSlope)
  for (const z of [-1.97, 3.77]){
    const beam = new Mesh(new BoxGeometry(6.6, 0.2, 0.16), darkWood)
    beam.position.set(-0.2, roofAt(-0.2) - 0.16, z)
    beam.rotation.z = -roofSlope
    root.add(cast(beam))
  }
  for (let x = -2.6; x < 3; x += 1.1){
    const rafter = new Mesh(new BoxGeometry(0.08, 0.12, 5.9), darkWood)
    rafter.position.set(x, roofAt(x) - 0.1, 0.9)
    root.add(cast(rafter))
  }
  for (const z of [-1.97, 3.77]){
    const post = new Mesh(new BoxGeometry(0.14, roofAt(2.8), 0.14), darkWood)
    post.position.set(2.8, roofAt(2.8) / 2, z)
    root.add(cast(post))
  }

  // A rug and the cushion she sits on.
  const rug = new Mesh(new CircleGeometry(1.15, 56), surface('#7f7262', { roughness: 1 }))
  rug.rotation.x = -Math.PI / 2
  rug.position.set(mat.x, 0.004, mat.z)
  rug.receiveShadow = true
  root.add(rug)
  const rugBand = new Mesh(new TorusGeometry(0.98, 0.05, 4, 56), surface('#a8957a', { roughness: 1 }))
  rugBand.rotation.x = -Math.PI / 2
  rugBand.scale.z = 0.05
  rugBand.position.set(mat.x, 0.006, mat.z)
  root.add(rugBand)

  // The inspiration board: cork on the side wall, with her digital pieces pinned to it.
  const board = new Group()
  const cork = corkTexture()
  cork.repeat.set(2, 1.4)
  const corkMaterial = surface('#ffffff', { map: cork, roughness: 1 })
  board.add(new Mesh(new BoxGeometry(0.03, 1.02, 1.5), corkMaterial))
  const frameMaterial = surface('#5a3d28')
  ;[[0.53, 0, 1.58, 0.05], [-0.53, 0, 1.58, 0.05], [0, 0.77, 0.05, 1.1], [0, -0.77, 0.05, 1.1]].forEach(([y, z, w, h]) => {
    const part = new Mesh(new BoxGeometry(0.05, h, w), frameMaterial)
    part.position.set(0, y, z)
    board.add(part)
  })
  const pinColours = ['#c84a3a', '#e0b23a', '#3f6fa8', '#f2efe6', '#5e9a5a']
  // Three pieces in a row across the middle of the board.
  const slots: Array<[number, number, number, number]> = [[-0.5, 0, 0.44, -0.05], [0, 0.03, 0.44, 0.04], [0.5, -0.01, 0.44, -0.03]]
  content.board.images.slice(0, slots.length).forEach((src, i) => {
    const [z, y, size, turn] = slots[i]
    const piece = new Group()
    const paper = new Mesh(new PlaneGeometry(1, 1), surface('#f6f1e4'))
    const art = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial())
    ;(art.material as MeshBasicMaterial).map = fitted(src, size, art, paper, 0.025)
    art.scale.set(size * 0.8, size, 1)
    paper.scale.set(size * 0.8 + 0.025, size + 0.025, 1)
    art.position.z = 0.001
    const pin = new Mesh(new SphereGeometry(0.012, 10, 8), surface(pinColours[i % pinColours.length], { roughness: 0.4 }))
    pin.position.set(0, size * 0.42, 0.012)
    piece.add(paper, art, pin)
    piece.rotation.set(0, Math.PI / 2, turn)
    piece.position.set(0.02 + i * 0.0015, y, z)
    board.add(piece)
  })
  board.position.set(-3.33, 1.55, 1.2)
  root.add(cast(board, true))
  if (content.board.images.length){
    const boardHit = new Mesh(new BoxGeometry(0.1, 1.08, 1.58), hitMaterial)
    boardHit.position.copy(board.position).add(new Vector3(0.04, 0, 0))
    root.add(boardHit)
    interactives.push({ kind: 'board', label: `See the ${content.board.name} pieces`, collection: content.board.collection, hit: boardHit, highlight: [corkMaterial, frameMaterial] })
  }

  // Plants: a tall leafy one in the corner, a small one by the wall, and one hanging from the roof.
  const plant = animated(new Group())
  const bigPot = new Mesh(new CylinderGeometry(0.24, 0.18, 0.42, 18), surface('#a8603a'))
  bigPot.position.y = 0.21
  plant.add(bigPot)
  for (let i = 0; i < 9; i++){
    const angle = (i / 9) * Math.PI * 2 + rand() * 0.4
    const reach = 0.15 + rand() * 0.3, height = 0.75 + rand() * 0.75
    const tip = new Vector3(Math.cos(angle) * reach, height, Math.sin(angle) * reach)
    plant.add(limb(new Vector3(0, 0.4, 0), tip, 0.008, surface('#4a6a30')))
    const clump = foliageClump(0.16, 10, 0.24, 0.1)
    clump.position.copy(tip)
    plant.add(clump)
  }
  plant.position.set(-2.85, 0, -1.45)
  root.add(cast(plant))
  updates.push(time => { plant.rotation.y = Math.sin(time * 0.4) * 0.03 })
  const smallPlant = new Group()
  smallPlant.add(new Mesh(new CylinderGeometry(0.11, 0.085, 0.2, 14), surface('#b5653a')))
  ;(smallPlant.children[0] as Mesh).position.y = 0.1
  const smallLeaves = foliageClump(0.13, 14, 0.18)
  smallLeaves.position.y = 0.3
  smallPlant.add(smallLeaves)
  onFloor(smallPlant, -3.05, 0.35)

  const hanging = animated(new Group())
  const hangingPot = new Mesh(new SphereGeometry(0.16, 14, 10, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.55), surface('#c9a27a', { side: DoubleSide }))
  const foliage = foliageClump(0.16, 16, 0.2)
  foliage.position.y = 0.08
  hanging.add(hangingPot, foliage)
  for (let i = 0; i < 6; i++){
    const angle = (i / 6) * Math.PI * 2
    const length = 0.5 + rand() * 0.7
    const curve = new CatmullRomCurve3([
      new Vector3(Math.cos(angle) * 0.14, 0.02, Math.sin(angle) * 0.14),
      new Vector3(Math.cos(angle) * 0.22, -length * 0.4, Math.sin(angle) * 0.22),
      new Vector3(Math.cos(angle) * 0.2, -length, Math.sin(angle) * 0.2)
    ])
    hanging.add(new Mesh(new TubeGeometry(curve, 12, 0.004, 4), surface('#3f6a32')))
    for (let k = 1; k < 6; k++){
      const bud = foliageClump(0.04, 3, 0.11)
      bud.position.copy(curve.getPoint(k / 6))
      hanging.add(bud)
    }
  }
  const rope = new Mesh(new CylinderGeometry(0.006, 0.006, 0.6, 4), surface('#3a2a1a'))
  rope.position.y = 0.42
  hanging.add(rope)
  hanging.position.set(-2.2, 2.62, -1.35)
  root.add(cast(hanging))
  updates.push(time => { hanging.rotation.z = Math.sin(time * 0.7) * 0.03; hanging.rotation.x = Math.sin(time * 0.5 + 1) * 0.025 })

  // Lived-in touches: a slatted canopy carrying the roof out over the front, knee braces where the
  // posts meet the beams, a shelf of art things under the board, a resting corner by the back wall,
  // and vines climbing the two back posts. All of it is still, so it merges into a few draws.
  // A squared timber from one point to another.
  const timber = (from: Vector3, to: Vector3, width: number, material: Material) => {
    const along = to.clone().sub(from)
    const piece = new Mesh(new BoxGeometry(width, along.length(), width), material)
    piece.position.copy(from).addScaledVector(along, 0.5)
    piece.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), along.normalize())
    return cast(piece)
  }
  // The canopy: the rafters run on past the front beam with slats across them, so the light falls
  // through in stripes; the lake stays in full view beneath.
  for (let x = -2.6; x < 3; x += 1.1){
    const outrigger = new Mesh(new BoxGeometry(0.08, 0.12, 1.1), darkWood)
    outrigger.position.set(x, roofAt(x) - 0.1, -2.6)
    root.add(cast(outrigger))
  }
  for (let z = -2.35; z > -3.15; z -= 0.13){
    const slat = new Mesh(new BoxGeometry(6.55, 0.035, 0.05), darkWood)
    slat.position.set(-0.25, roofAt(-0.25) - 0.0225, z)
    slat.rotation.z = -roofSlope
    root.add(cast(slat))
  }
  // Knee braces: at the open corners, from post to beam; at the wall, from stud to beam.
  for (const z of [-1.97, 3.77]){
    root.add(timber(new Vector3(2.8, roofAt(2.8) - 0.85, z), new Vector3(2.15, roofAt(2.15) - 0.26, z), 0.07, darkWood))
    root.add(timber(new Vector3(-3.33, roofAt(-3.33) - 0.85, z), new Vector3(-2.68, roofAt(-2.68) - 0.26, z), 0.07, darkWood))
  }

  // A slim oak shelf under the board, on two brackets, with the things she reaches for most.
  const shelfTop = 0.86, shelfX = -3.27
  const shelf = new Mesh(new BoxGeometry(0.2, 0.03, 1.46), wood)
  shelf.position.set(shelfX, shelfTop - 0.015, 1.2)
  root.add(cast(shelf, true))
  for (const z of [0.66, 1.74]){
    root.add(timber(new Vector3(-3.36, shelfTop - 0.03, z), new Vector3(-3.36, shelfTop - 0.2, z), 0.025, darkWood))
    root.add(timber(new Vector3(-3.36, shelfTop - 0.19, z), new Vector3(-3.19, shelfTop - 0.03, z), 0.022, darkWood))
  }
  // A book: its cover, and the paler block of pages just showing at the edges.
  const pages = surface('#efe6d2', { roughness: 0.9 })
  const shelfBook = (width: number, thickness: number, depth: number, colour: string) => {
    const group = new Group()
    group.add(new Mesh(new BoxGeometry(width, thickness, depth), surface(colour, { roughness: 0.85 })))
    const block = new Mesh(new BoxGeometry(width - 0.008, thickness * 0.7, depth + 0.002), pages)
    block.position.x = 0.004
    group.add(block)
    return group
  }
  // Sketchbooks lying in a stack, and two standing beside them.
  ;[['#4a5d6b', 0.15, 0.21, 0.08], ['#8a4b3a', 0.14, 0.2, -0.1], ['#c9b48e', 0.15, 0.21, 0.04]].forEach(([colour, width, depth, turn], i) => {
    const lying = shelfBook(width as number, 0.022, depth as number, colour as string)
    lying.position.set(shelfX + 0.01, shelfTop + 0.011 + i * 0.022, 0.62)
    lying.rotation.y = turn as number
    root.add(cast(lying))
  })
  ;[['#5b6b4a', 0], ['#3d3a4f', 0.16]].forEach(([colour, lean], i) => {
    const standing = shelfBook(0.15, 0.025, 0.21, colour as string)
    standing.rotation.set(Math.PI / 2 + (lean as number), 0, 0)
    standing.position.set(shelfX, shelfTop + 0.105, 0.86 + i * 0.03)
    root.add(cast(standing))
  })
  // A glazed jar of pencils, sharpened.
  const glaze = (colour: string) => surface(colour, { roughness: 0.28 })
  const pencilJar = new Group()
  const pencilPot = new Mesh(new CylinderGeometry(0.04, 0.036, 0.09, 18), glaze('#d8cdb8'))
  pencilPot.position.y = 0.045
  pencilJar.add(pencilPot)
  const sharpened = surface('#e6c79a')
  ;['#2f4f6f', '#a8443a', '#d9a83a', '#3f6a3a', '#2b2b2b', '#7a4a8a'].forEach((colour, i) => {
    const pencil = new Group()
    const body = new Mesh(new CylinderGeometry(0.0038, 0.0038, 0.16, 6), surface(colour, { roughness: 0.5 }))
    const tip = new Mesh(new ConeGeometry(0.0038, 0.014, 6), sharpened)
    tip.position.y = 0.087
    pencil.add(body, tip)
    pencil.position.set(Math.cos(i * 1.05) * 0.016, 0.1, Math.sin(i * 1.05) * 0.016)
    pencil.rotation.set(Math.sin(i * 1.05) * 0.16, 0, -Math.cos(i * 1.05) * 0.16)
    pencilJar.add(pencil)
  })
  pencilJar.position.set(shelfX, shelfTop, 1.24)
  root.add(cast(pencilJar))
  // A jar of brushes, bristles up.
  const brushJar = new Group()
  const brushPot = new Mesh(new CylinderGeometry(0.036, 0.034, 0.11, 18), glaze('#6f8f8a'))
  brushPot.position.y = 0.055
  brushJar.add(brushPot)
  const ferrule = surface('#b9b4a8', { metalness: 0.7, roughness: 0.35 })
  const bristle = surface('#4a3526', { roughness: 0.9 })
  ;['#b5793f', '#2b2b2b', '#c49a5a', '#8a2f2a', '#b5793f'].forEach((colour, i) => {
    const brush = new Group()
    const handle = new Mesh(new CylinderGeometry(0.0035, 0.0045, 0.17, 8), surface(colour, { roughness: 0.4 }))
    const band = new Mesh(new CylinderGeometry(0.0048, 0.0045, 0.022, 8), ferrule)
    band.position.y = 0.096
    const tuft = new Mesh(new ConeGeometry(0.0055, 0.024 + (i % 2) * 0.01, 8), bristle)
    tuft.position.y = 0.118 + (i % 2) * 0.005
    brush.add(handle, band, tuft)
    brush.position.set(Math.cos(i * 1.26) * 0.014, 0.12 + (i % 3) * 0.012, Math.sin(i * 1.26) * 0.014)
    brush.rotation.set(Math.sin(i * 1.26) * 0.18, 0, -Math.cos(i * 1.26) * 0.18)
    brushJar.add(brush)
  })
  brushJar.position.set(shelfX, shelfTop, 1.5)
  root.add(cast(brushJar))
  // A watercolour tin, closed.
  const paintTin = new Mesh(new BoxGeometry(0.075, 0.018, 0.13), surface('#2f3b52', { metalness: 0.4, roughness: 0.45 }))
  paintTin.position.set(shelfX + 0.01, shelfTop + 0.009, 1.78)
  paintTin.rotation.y = 0.12
  root.add(cast(paintTin))

  // A resting corner by the back wall: a floor cushion with a striped throw folded on it.
  const linen = fabricTexture()
  linen.repeat.set(3, 3)
  const striped = fabricTexture(true)
  striped.repeat.set(1, 1)
  const restCorner = new Group()
  const floorCushion = new Mesh(new RoundedBoxGeometry(0.62, 0.15, 0.62, 3, 0.06), surface('#a37c4c', { map: linen, roughness: 1 }))
  floorCushion.position.y = 0.075
  const tuft = new Mesh(new SphereGeometry(0.018, 8, 6), surface('#8f6633', { roughness: 1 }))
  tuft.scale.y = 0.4
  tuft.position.y = 0.152
  const foldedThrow = new Mesh(new RoundedBoxGeometry(0.4, 0.05, 0.27, 2, 0.02), surface('#4d6b6e', { map: striped, roughness: 1 }))
  foldedThrow.position.set(0.06, 0.172, -0.08)
  foldedThrow.rotation.y = 0.28
  restCorner.add(floorCushion, tuft, foldedThrow)
  onFloor(restCorner, -2.68, 2.95, 0.18)
  contact(-2.68, 2.95, 0.86)

  // Vines climbing the two back posts, from small wooden planters on the deck.
  const stem = surface('#4f6b33', { roughness: 0.8 })
  const vine = (planter: Vector2, path: Vector3[]) => {
    const box = new Mesh(new BoxGeometry(0.24, 0.2, 0.2), darkWood)
    box.position.set(planter.x, 0.1, planter.y)
    const soil = new Mesh(new BoxGeometry(0.21, 0.01, 0.17), surface('#3b2a1e', { roughness: 1 }))
    soil.position.set(planter.x, 0.195, planter.y)
    root.add(cast(box), soil)
    contact(planter.x, planter.y, 0.36)
    const curve = new CatmullRomCurve3(path)
    root.add(cast(new Mesh(new TubeGeometry(curve, 48, 0.006, 4), stem)))
    for (let k = 1; k <= 26; k++){
      const leaves = foliageClump(0.07, 4, 0.15)
      leaves.position.copy(curve.getPoint(k / 27))
      root.add(cast(leaves))
    }
  }
  // Round the back post at the open corner...
  vine(new Vector2(2.56, 3.6), [new Vector3(2.6, 0.2, 3.62), ...Array.from({ length: 10 }, (_, i) => {
    const angle = 2.6 + i * 1.5
    return new Vector3(2.8 + Math.cos(angle) * 0.1, 0.45 + i * 0.25, 3.77 + Math.sin(angle) * 0.1)
  })])
  // ...and up the face of the stud at the back of the side wall.
  vine(new Vector2(-3.14, 3.58), [new Vector3(-3.16, 0.2, 3.6), ...Array.from({ length: 10 }, (_, i) => new Vector3(-3.3, 0.45 + i * 0.25, 3.75 + Math.sin(i * 1.3) * 0.05))])

  // Her open sketchbook on the floor in front of her, with one of her drawings on the page.
  const book = new Group()
  const coverMaterial = surface('#6b3a2a', { roughness: 0.8 })
  book.add(new Mesh(new BoxGeometry(0.5, 0.01, 0.33), coverMaterial))
  const pageMaterial = surface('#f6f0e2')
  const leftPage = new Mesh(new BoxGeometry(0.235, 0.012, 0.31), pageMaterial)
  leftPage.position.set(-0.118, 0.011, 0)
  leftPage.rotation.z = 0.05
  const rightPage = new Mesh(new BoxGeometry(0.235, 0.012, 0.31), pageMaterial)
  rightPage.position.set(0.118, 0.011, 0)
  rightPage.rotation.z = -0.05
  book.add(leftPage, rightPage)
  const drawing = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial())
  ;(drawing.material as MeshBasicMaterial).map = fitted(content.sketch, 0.21, drawing)
  drawing.scale.set(0.17, 0.21, 1)
  drawing.rotation.set(-Math.PI / 2, 0, 0.05)
  drawing.position.set(-0.118, 0.019, 0)
  book.add(drawing)
  const ribbon = new Mesh(new PlaneGeometry(0.008, 0.16), surface('#a8443a', { side: DoubleSide }))
  ribbon.rotation.set(-Math.PI / 2 + 0.3, 0, 0.1)
  ribbon.position.set(0.01, 0.012, 0.2)
  book.add(ribbon)
  book.position.set(bookAt.x, 0.008, bookAt.z)
  book.rotation.y = 0.1
  root.add(cast(book, true))
  const bookHit = new Mesh(new BoxGeometry(0.56, 0.1, 0.4), hitMaterial)
  bookHit.position.set(bookAt.x, 0.04, bookAt.z)
  bookHit.rotation.y = 0.1
  root.add(bookHit)
  interactives.push({ kind: 'sketchbook', label: 'Open the sketchbook', hit: bookHit, highlight: [pageMaterial, coverMaterial] })

  // Loose sheets on the floor around her, each one a piece from a different collection.
  const sheetSpots = [
    { x: -0.78, z: -1.05, turn: 0.45 },
    { x: 0.42, z: -1.18, turn: -0.32 },
    { x: -0.55, z: -1.52, turn: 0.18 },
    { x: 0.12, z: -1.62, turn: -0.22 }
  ]
  content.papers.slice(0, sheetSpots.length).forEach(({ collection, name, src }, i) => {
    const { x, z, turn } = sheetSpots[i]
    const sheet = new Group()
    const paperMaterial = surface('#f4eee0', { side: DoubleSide })
    const paper = new Mesh(new PlaneGeometry(1, 1), paperMaterial)
    const art = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial())
    ;(art.material as MeshBasicMaterial).map = fitted(src, 0.2, art, paper)
    paper.scale.set(0.2, 0.26, 1)
    art.scale.set(0.17, 0.23, 1)
    art.position.z = 0.0015
    sheet.add(paper, art)
    sheet.rotation.set(-Math.PI / 2, 0, turn)
    sheet.position.set(x, 0.006 + i * 0.0006, z)
    paper.receiveShadow = true
    root.add(sheet)
    const hit = new Mesh(new BoxGeometry(0.26, 0.05, 0.26), hitMaterial)
    hit.position.set(x, 0.025, z)
    hit.rotation.y = turn
    root.add(hit)
    interactives.push({ kind: 'paper', label: `Open the ${name} collection`, collection, hit, highlight: [paperMaterial] })
  })

  // Pencils and brushes in a jar, a mug, a tin of keepsakes and a little vase of meadow flowers.
  const jar = new Group()
  const jarPot = new Mesh(new CylinderGeometry(0.055, 0.05, 0.13, 16), surface('#b5653a'))
  jarPot.position.y = 0.065
  jar.add(jarPot)
  ;['#d9a83a', '#3f5a6b', '#a8443a', '#2b2b2b', '#d9a83a'].forEach((colour, i) => {
    const tool = new Mesh(new CylinderGeometry(0.006, 0.006, 0.24, 6), surface(colour))
    tool.position.set(Math.cos(i * 1.3) * 0.022, 0.165, Math.sin(i * 1.3) * 0.022)
    tool.rotation.set(Math.sin(i * 2.1) * 0.18, 0, Math.cos(i * 1.7) * 0.2)
    jar.add(tool)
  })
  onFloor(jar, 0.66, -1.62)
  contact(0.66, -1.62, 0.17)
  const mug = new Group()
  const cup = new Mesh(new CylinderGeometry(0.045, 0.04, 0.1, 16), surface('#e9e1cf', { roughness: 0.4 }))
  cup.position.y = 0.05
  const handle = new Mesh(new TorusGeometry(0.028, 0.008, 6, 12), surface('#e9e1cf', { roughness: 0.4 }))
  handle.position.set(0.05, 0.05, 0)
  mug.add(cup, handle)
  onFloor(mug, -0.88, -0.66, 0.6)
  contact(-0.88, -0.66, 0.14)
  const tin = new Mesh(new BoxGeometry(0.12, 0.04, 0.08), surface('#a8443a', { metalness: 0.3, roughness: 0.5 }))
  tin.position.y = 0.02
  onFloor(new Group().add(tin), -1.0, -1.38, 0.4)
  const vase = new Group()
  vase.add(new Mesh(new LatheGeometry([new Vector2(0, 0), new Vector2(0.035, 0), new Vector2(0.045, 0.04), new Vector2(0.025, 0.1), new Vector2(0.03, 0.12)], 18), surface('#7d9db0', { roughness: 0.3 })))
  ;[['#f4f1e6', 0.23, 0.2], ['#e7a1b6', 0.27, -0.25], ['#f2cf3a', 0.2, 0.5], ['#b9a2d8', 0.25, -0.6], ['#f4f1e6', 0.29, 0.05]].forEach(([colour, height, lean], i) => {
    const tip = new Vector3(Math.sin(lean as number) * 0.07, height as number, Math.cos(i * 2.1) * 0.04)
    vase.add(limb(new Vector3(0, 0.08, 0), tip, 0.0025, surface('#56783a')))
    const bloom = new Mesh(new SphereGeometry(0.018, 10, 6), surface(colour as string))
    bloom.scale.y = 0.55
    bloom.position.copy(tip)
    vase.add(bloom)
  })
  onFloor(vase, 1.02, -1.42)
  contact(1.02, -1.42, 0.13)

  // The daybook: a cloth-bound album on the floor at her left, with one of its photographs propped
  // in a frame against it.
  const album = new Group()
  const albumCover = surface('#55704f', { roughness: 0.95 })
  const albumBody = new Mesh(new BoxGeometry(0.3, 0.07, 0.24), albumCover)
  albumBody.position.y = 0.035
  const albumPages = new Mesh(new BoxGeometry(0.285, 0.055, 0.23), surface('#efe6d2'))
  albumPages.position.set(0.004, 0.035, 0)
  const label = new Mesh(new PlaneGeometry(0.1, 0.05), surface('#efe2c4'))
  label.rotation.x = -Math.PI / 2
  label.position.y = 0.0715
  album.add(albumBody, albumPages, label)
  const photoFrame = new Mesh(new BoxGeometry(0.2, 0.26, 0.025), wood)
  photoFrame.position.set(0, 0.2, -0.13)
  photoFrame.rotation.x = -0.2
  const photo = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ color: '#d8d0c0' }))
  photo.scale.set(0.15, 0.21, 1)
  if (content.album[0]){
    ;(photo.material as MeshBasicMaterial).color.set('#ffffff')
    ;(photo.material as MeshBasicMaterial).map = fitted(content.album[0], 0.2, photo)
  }
  photo.rotation.x = -0.2
  photo.position.set(0, 0.2, -0.115)
  album.add(photoFrame, photo)
  onFloor(album, -1.12, -0.32, 0.35)
  contact(-1.12, -0.32, 0.4)
  if (content.album.length){
    const albumHit = new Mesh(new BoxGeometry(0.42, 0.36, 0.42), hitMaterial)
    albumHit.position.set(-1.12, 0.17, -0.36)
    root.add(albumHit)
    interactives.push({ kind: 'album', label: 'Leaf through the daybook', hit: albumHit, highlight: [albumCover] })
  }

  // A small sketchpad on the planks beside her, with one of her drawings begun on it.
  const pad = new Group()
  pad.add(new Mesh(new BoxGeometry(0.34, 0.012, 0.25), surface('#5b3a28', { roughness: 0.8 })))
  const padPage = new Mesh(new BoxGeometry(0.32, 0.006, 0.235), surface('#f6f0e2'))
  padPage.position.y = 0.009
  pad.add(padPage)
  pad.position.copy(padAt)
  pad.rotation.set(0, 0.4, 0)
  root.add(cast(pad, true))

  // A candle in a brass dish on the floor at her right.
  const candle = new Group()
  const brass = surface('#b08a4a', { metalness: 0.75, roughness: 0.35 })
  const dish = new Mesh(new CylinderGeometry(0.055, 0.045, 0.012, 22), brass)
  dish.position.y = 0.006
  const ring = new Mesh(new TorusGeometry(0.018, 0.004, 6, 14), brass)
  ring.position.set(0.062, 0.012, 0)
  ring.rotation.y = Math.PI / 2
  const wax = surface('#efe6d2', { roughness: 0.6 })
  const stick = new Mesh(new CylinderGeometry(0.019, 0.02, 0.11, 18), wax)
  stick.position.y = 0.067
  const wick = new Mesh(new CylinderGeometry(0.0012, 0.0012, 0.012, 4), surface('#222222'))
  wick.position.y = 0.128
  const flame = new Mesh(new SphereGeometry(0.0085, 14, 10), flameMaterial())
  flame.scale.set(1, 2.6, 1)
  flame.position.y = 0.146
  flame.userData.keep = true
  candle.add(dish, ring, stick, wick, flame)
  const candleAt = new Vector3(0.62, 0, -0.66)
  onFloor(candle, candleAt.x, candleAt.z)
  flame.castShadow = false
  contact(candleAt.x, candleAt.z, 0.15)
  const candleLight = new PointLight('#ffab5e', 0, 1.9, 2)
  candleLight.position.set(candleAt.x, 0.22, candleAt.z)
  const candleGlow = new Sprite(new SpriteMaterial({ map: glowTexture('rgba(255, 214, 150, 0.9)', 'rgba(255, 160, 70, 0.3)'), blending: AdditiveBlending, transparent: true, depthWrite: false, opacity: 0 }))
  candleGlow.position.set(candleAt.x, 0.15, candleAt.z)
  candleGlow.scale.setScalar(0.13)
  root.add(candleLight, candleGlow)
  const candleHit = new Mesh(new BoxGeometry(0.2, 0.3, 0.2), hitMaterial)
  candleHit.position.set(candleAt.x, 0.12, candleAt.z)
  root.add(candleHit)
  interactives.push({ kind: 'candle', label: 'Light the candle', hit: candleHit, highlight: [wax, brass] })

  // String lights along the front beam, glowing as it gets dark.
  const strand = new CatmullRomCurve3([new Vector3(-3.3, roofAt(-3.3) - 0.3, -2.02), new Vector3(-0.3, roofAt(-0.3) - 0.62, -2.04), new Vector3(2.72, roofAt(2.72) - 0.3, -2.02)])
  root.add(new Line(new BufferGeometry().setFromPoints(strand.getPoints(40)), new LineBasicMaterial({ color: '#2e2620' })))
  const fairy = new MeshBasicMaterial({ color: '#ffd9a0' })
  const bulbGeometry = new SphereGeometry(0.022, 8, 6)
  for (let i = 1; i < 18; i++){
    const bulbMesh = new Mesh(bulbGeometry, fairy)
    bulbMesh.position.copy(strand.getPoint(i / 18)).add(new Vector3(0, -0.03, 0))
    root.add(bulbMesh)
  }
  const fairyColour = new Color('#ffd9a0')

  // Lanterns, each with a candle inside, which light themselves as darkness falls. Some hang from the
  // roof along the open edges of the deck; others top the lamp posts on the jetty, where she sits.
  const lanternMetal = surface('#2f2a24', { metalness: 0.5, roughness: 0.5 })
  const lanternGlass = surface('#f3e2c0', { transparent: true, opacity: 0.32, roughness: 0.1, depthWrite: false })
  const lanternWax = surface('#efe6d2', { roughness: 0.6 })
  const lanternFlame = new MeshBasicMaterial({ color: '#5a4630' })
  const lanternGlows: Sprite[] = []
  const lanternLights: PointLight[] = []
  // A lantern standing at (x, y, z); `light` is how brightly it lights its surroundings (0 for none).
  const lantern = (x: number, y: number, z: number, light: number) => {
    const group = new Group()
    const foot = new Mesh(new BoxGeometry(0.16, 0.025, 0.16), lanternMetal)
    foot.position.y = 0.0125
    const cap = new Mesh(new BoxGeometry(0.17, 0.02, 0.17), lanternMetal)
    cap.position.y = 0.245
    const top = new Mesh(new ConeGeometry(0.12, 0.08, 4), lanternMetal)
    top.position.y = 0.295
    top.rotation.y = Math.PI / 4
    const handle = new Mesh(new TorusGeometry(0.035, 0.005, 6, 16), lanternMetal)
    handle.position.y = 0.365
    const glass = new Mesh(new BoxGeometry(0.13, 0.21, 0.13), lanternGlass)
    glass.position.y = 0.13
    const stub = new Mesh(new CylinderGeometry(0.02, 0.02, 0.06, 12), lanternWax)
    stub.position.y = 0.055
    const flame = new Mesh(new SphereGeometry(0.011, 10, 8), lanternFlame)
    flame.scale.y = 2.2
    flame.position.y = 0.105
    group.add(foot, cap, top, handle, glass, stub, flame)
    for (const [cx, cz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]){
      const bar = new Mesh(new CylinderGeometry(0.006, 0.006, 0.21, 6), lanternMetal)
      bar.position.set(cx * 0.068, 0.13, cz * 0.068)
      group.add(bar)
    }
    group.position.set(x, y, z)
    group.rotation.y = rand() * 0.6
    root.add(cast(group))
    glass.castShadow = flame.castShadow = false
    const halo = new Sprite(new SpriteMaterial({ map: glowTexture('rgba(255, 214, 150, 0.9)', 'rgba(255, 160, 70, 0.3)'), blending: AdditiveBlending, transparent: true, depthWrite: false, opacity: 0 }))
    halo.position.set(x, y + 0.13, z)
    halo.scale.setScalar(0.6)
    root.add(halo)
    lanternGlows.push(halo)
    if (light){
      const lamplight = new PointLight('#ffad5c', 0, 6, 2)
      lamplight.position.set(x, y + 0.12, z)
      lamplight.userData.level = light
      root.add(lamplight)
      lanternLights.push(lamplight)
    }
  }
  // Hanging from the roof on short chains, along the front and the open side of the deck. Every other
  // one casts light (only the middle one on small or slow devices); they all glow.
  const hooks = [[-2.3, -1.78], [-0.9, -1.78], [0.5, -1.78], [1.9, -1.78], [2.55, -0.9]]
  hooks.forEach(([x, z], i) => {
    const hook = roofAt(x) - 0.16, drop = 0.6
    const chain = new Mesh(new CylinderGeometry(0.004, 0.004, drop, 5), lanternMetal)
    chain.position.set(x, hook - drop / 2, z)
    root.add(chain)
    lantern(x, hook - drop - 0.37, z, quality.low ? (i === 2 ? 3.5 : 0) : i % 2 === 0 ? 3.5 : 0)
  })
  // Lamp posts: one each side of the end of the jetty, either side of her, and one where the jetty
  // meets the trail.
  const jettyHead = nearShore(3.6) + 0.8, planksTop = seat.y
  // On small or slow devices only one lamp post casts light, so the lighting stays affordable.
  const posts = [[seat.x - 0.6, seat.z + 0.1, 2.6], [seat.x + 0.6, seat.z + 0.1, quality.low ? 0 : 2.6], [3.02, jettyHead - 0.2, quality.low ? 0 : 2.2]]
  posts.forEach(([x, z, light]) => {
    const pole = new Mesh(new CylinderGeometry(0.022, 0.032, 1.45, 10), lanternMetal)
    pole.position.set(x, planksTop + 0.725, z)
    const foot = new Mesh(new CylinderGeometry(0.055, 0.07, 0.06, 12), lanternMetal)
    foot.position.set(x, planksTop + 0.03, z)
    const plate = new Mesh(new BoxGeometry(0.18, 0.015, 0.18), lanternMetal)
    plate.position.set(x, planksTop + 1.45, z)
    root.add(cast(pole), cast(foot), cast(plate))
    lantern(x, planksTop + 1.4575, z, light)
  })
  const flameDim = new Color('#5a4630'), flameLit = new Color('#ffcf85').multiplyScalar(1.8)

  // A paper pendant hanging from the roof, which fills the room with warm light at night.
  const pendantAt = new Vector3(-0.7, roofAt(-0.7) - 0.85, 0.9)
  const paperShade = surface('#f2e4c8', { roughness: 0.95, side: DoubleSide })
  const pendant = new Mesh(new SphereGeometry(0.17, 20, 14), paperShade)
  pendant.scale.y = 0.9
  pendant.position.copy(pendantAt)
  const cord = new Mesh(new CylinderGeometry(0.004, 0.004, 0.72, 5), lanternMetal)
  cord.position.set(pendantAt.x, pendantAt.y + 0.5, pendantAt.z)
  root.add(pendant, cord)
  const roomLight = new PointLight('#ffb871', 0, 9, 1.4)
  roomLight.position.copy(pendantAt).add(new Vector3(0, -0.2, 0))
  root.add(roomLight)
  let darkness = 0

  // The artist herself: the sculpted character model (see characterModel.ts) once it has loaded.
  // Until then, or without it, the built-in figure (see artist.ts) sits cross-legged just back from
  // the edge.
  const figure = buildArtist(rand)
  ;[figure.artist, figure.upper, figure.head, figure.hairFall, figure.drawingArm].forEach(part => animated(part))
  figure.artist.position.copy(seat).add(new Vector3(0, 0, 0.45))
  figure.artist.rotation.y = 0.05
  root.add(figure.artist)
  contact(seat.x, seat.z + 0.25, 0.8, 0.6, seat.y)
  let animateFigure = (time: number) => figure.update(time)
  updates.push(time => animateFigure(time))
  // A sculpted character model replaces the built-in figure once it has loaded, if there is one.
  loadCharacter().then(character => {
    if (!character) return
    character.group.position.copy(seat)
    root.remove(figure.artist)
    root.add(character.group)
    animateFigure = character.update
  }).catch(error => console.warn('The character model could not be placed:', error))

  // The candle fades in and out on its own, whatever the mood.
  const state = { candle: false, candleLevel: 0 }
  const flameUniforms = (flame.material as ShaderMaterial).uniforms
  const waxGlow = new Color('#ff9a40')
  updates.push((time, dt) => {
    state.candleLevel += ((state.candle ? 1 : 0) - state.candleLevel) * Math.min(1, dt * (state.candle ? 3 : 8))
    // A candle's light breathes rather than flickers.
    const breathe = 1 + Math.sin(time * 2.1) * 0.05 + Math.sin(time * 5.3 + 1) * 0.03 + Math.sin(time * 11.7) * 0.015
    candleLight.intensity = state.candleLevel * 0.55 * breathe
    flameUniforms.uLevel.value = state.candleLevel
    flameUniforms.uTime.value = time
    flame.visible = state.candleLevel > 0.01
    flame.scale.y = 2.6 * (0.9 + 0.1 * breathe)
    ;(candleGlow.material as SpriteMaterial).opacity = state.candleLevel * 0.5 * breathe
    wax.emissive.copy(waxGlow).multiplyScalar(state.candleLevel * 0.12)

    // The lanterns and the pendant come on as it gets dark, each lantern flickering a little.
    const lit = Math.min(1, Math.max(0, (darkness - 0.15) / 0.45))
    lanternLights.forEach((light, i) => {
      light.intensity = lit * light.userData.level * (1 + Math.sin(time * 2.3 + i * 1.7) * 0.06 + Math.sin(time * 6.1 + i) * 0.03)
    })
    lanternGlows.forEach((halo, i) => { (halo.material as SpriteMaterial).opacity = lit * 0.55 * (1 + Math.sin(time * 2.3 + i * 1.7) * 0.06) })
    lanternFlame.color.copy(flameDim).lerp(flameLit, lit)
    lanternGlass.emissive.setRGB(1, 0.6, 0.25).multiplyScalar(lit * 0.45)
    roomLight.intensity = lit * 5
    paperShade.emissive.setRGB(1, 0.7, 0.4).multiplyScalar(lit * 0.9)
  })

  mergeStill(root)

  return {
    root,
    interactives,
    update(time: number, dt: number){ updates.forEach(update => update(time, dt)) },
    toggle(kind: 'candle'){
      state[kind] = !state[kind]
      const item = interactives.find(entry => entry.kind === kind)
      if (item) item.label = state.candle ? 'Blow out the candle' : 'Light the candle'
      return state[kind]
    },
    // Fairy lights, lanterns and the pendant warm up as darkness falls.
    setDarkness(dark: number){
      darkness = dark
      fairy.color.copy(fairyColour).multiplyScalar(0.35 + dark * 1.9)
    }
  }
}
