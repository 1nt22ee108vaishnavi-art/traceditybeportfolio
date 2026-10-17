import { Bone, Box3, CylinderGeometry, DoubleSide, Group, LoadingManager, Material, Mesh, Object3D, Quaternion, SkinnedMesh, Vector3 } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DUCKS, surface, world } from './materials'

// A sculpted, rigged character model for the artist, if one is in the project:
// public/assets/world/models/artist.glb (or artist.fbx, as MakeHuman exports). See the README there.
//
// A model posed in Blender sitting on the end of the jetty (marked 'jetty_pose') keeps that pose and
// is brought to life here: see placeOnJetty below.
//
// Whatever rig the model has (MakeHuman's default or game-engine skeleton, Mixamo, most others),
// its bones are found by name and posed by aiming each one in world space: cross-legged on her
// cushion, leaning over the sketchbook, the right hand drawing and the left resting on the page.
// Posing by direction rather than by fixed angles means it does not depend on how a rig's bone axes
// were set up. Without a model file, the built-in figure stays.

const files = ['/assets/world/models/artist.glb', '/assets/world/models/artist.fbx']
const HEIGHT = 1.6

type Side = 'l' | 'r'
type Rig = {
  hips?: Bone; spine?: Bone; neck?: Bone; head?: Bone
  upperLeg: Partial<Record<Side, Bone>>; lowerLeg: Partial<Record<Side, Bone>>; foot: Partial<Record<Side, Bone>>; toe: Partial<Record<Side, Bone>>
  upperArm: Partial<Record<Side, Bone>>; foreArm: Partial<Record<Side, Bone>>; hand: Partial<Record<Side, Bone>>; finger: Partial<Record<Side, Bone>>
}

// Bone names differ between rigs: "LeftUpLeg", "thigh_l", "upperleg01.L" and so on.
function sideOf(name: string): Side | null {
  if (/left|(^|[._\-:\s])l($|[._\-\s\d])|_l$|\.l$/i.test(name)) return 'l'
  if (/right|(^|[._\-:\s])r($|[._\-\s\d])|_r$|\.r$/i.test(name)) return 'r'
  return null
}
function plain(name: string){
  return name.toLowerCase().replace(/^mixamorig\d*[:_]?/, '').replace(/^(def|org|mch)[-_.]/, '').replace(/left|right/g, '').replace(/[._\-\s](l|r)$/g, '').replace(/^(l|r)[._\-\s]/, '').replace(/[._\-\s]/g, '')
}
const roles: Array<[keyof Omit<Rig, 'hips' | 'spine' | 'neck' | 'head'>, RegExp]> = [
  ['upperLeg', /^(upleg|thigh|upperleg0?1?|upperleg)$/],
  ['lowerLeg', /^(leg|calf|shin|lowerleg0?1?|knee)$/],
  ['foot', /^(foot|ankle)$/],
  ['toe', /^(toebase|toes?|ball|toe1?1?)$/],
  ['upperArm', /^(arm|upperarm0?1?)$/],
  ['foreArm', /^(forearm|lowerarm0?1?|elbow)$/],
  ['hand', /^(hand|wrist)$/],
  ['finger', /^(handmiddle1|middle0?1|middle1?1?|finger2?1?|handindex1|index0?1|index1?1?)$/]
]

function findRig(model: Object3D): Rig {
  const rig: Rig = { upperLeg: {}, lowerLeg: {}, foot: {}, toe: {}, upperArm: {}, foreArm: {}, hand: {}, finger: {} }
  const bones: Bone[] = []
  model.traverse(object => { if ((object as Bone).isBone) bones.push(object as Bone) })
  const depth = (bone: Object3D) => { let d = 0; for (let o: Object3D | null = bone; o; o = o.parent) d++; return d }
  for (const bone of bones){
    const name = plain(bone.name)
    const side = sideOf(bone.name)
    if (!side){
      if (!rig.hips && /^(hips|pelvis|hip)$/.test(name)) rig.hips = bone
      if (/^(spine|spine0?[1-5]|spine05)$/.test(name) && (!rig.spine || depth(bone) < depth(rig.spine))) rig.spine = bone
      if (/^neck0?1?$/.test(name) && (!rig.neck || depth(bone) < depth(rig.neck))) rig.neck = bone
      if (/^head$/.test(name)) rig.head = bone
      continue
    }
    for (const [role, pattern] of roles){
      // The first (highest) bone of each kind on each side, e.g. upperleg01 rather than upperleg02.
      if (pattern.test(name) && (!rig[role][side] || depth(bone) < depth(rig[role][side]!))) rig[role][side] = bone
    }
  }
  return rig
}

const a = new Vector3(), b = new Vector3(), qa = new Quaternion(), qb = new Quaternion()
// Turns `bone` so that `end` (a joint further down the chain) lies in `direction` from it.
function aim(bone: Bone | undefined, end: Object3D | undefined, direction: Vector3){
  if (!bone || !end || !bone.parent) return
  bone.updateWorldMatrix(true, true)
  bone.getWorldPosition(a)
  end.getWorldPosition(b)
  const current = b.sub(a).normalize()
  if (current.lengthSq() < 1e-8) return
  const turn = new Quaternion().setFromUnitVectors(current, direction.clone().normalize())
  bone.parent.getWorldQuaternion(qa)
  bone.getWorldQuaternion(qb)
  bone.quaternion.copy(qa.invert().multiply(turn.multiply(qb)))
  bone.updateWorldMatrix(false, true)
}
const first = (bone: Object3D | undefined) => bone?.children.find(child => (child as Bone).isBone)

// Turns `bone` by `turn`, a rotation in world space.
function rotateWorld(bone: Bone, turn: Quaternion){
  bone.parent!.getWorldQuaternion(qa)
  bone.getWorldQuaternion(qb)
  bone.quaternion.copy(qa.invert().multiply(turn.clone().multiply(qb)))
  bone.updateWorldMatrix(false, true)
}

// Poses a two-part limb the way a real joint moves. `folds` is the way the middle joint bends in the
// rest pose (the back of the leg for a knee, the front of the arm for an elbow). The upper bone is
// pointed, then twisted about its own length so the joint's hinge faces where the lower part must
// go, then the lower part folds on that hinge. Without the twist, a large turn bends the knee or
// elbow sideways, against the joint, and the skin shears.
function limb(upper: Bone | undefined, lower: Bone | undefined, end: Object3D | undefined, upperDirection: Vector3, lowerDirection: Vector3, folds: Vector3){
  if (!upper || !lower || !end || !upper.parent) return
  upper.updateWorldMatrix(true, true)
  const fold = folds.clone().applyQuaternion(upper.getWorldQuaternion(new Quaternion()).invert())
  aim(upper, lower, upperDirection)
  const along = lower.getWorldPosition(new Vector3()).sub(upper.getWorldPosition(new Vector3())).normalize()
  const flat = (direction: Vector3) => direction.clone().sub(along.clone().multiplyScalar(direction.dot(along))).normalize()
  const current = flat(fold.applyQuaternion(upper.getWorldQuaternion(new Quaternion())))
  const wanted = flat(lowerDirection.clone().normalize())
  const twist = Math.atan2(along.dot(new Vector3().crossVectors(current, wanted)), current.dot(wanted))
  rotateWorld(upper, new Quaternion().setFromAxisAngle(along, twist))
  aim(lower, end, lowerDirection)
}

// The exported textures are large PNGs; the site serves smaller WebP copies of the same names
// (models/textures/*.webp). MakeHuman writes Windows paths, so backslashes become slashes too.
const manager = new LoadingManager()
manager.setURLModifier(url => url.replace(/\\/g, '/').replace(/\.png$/i, '.webp'))

function load(url: string){
  return new Promise<Object3D>((resolve, reject) => {
    if (url.endsWith('.glb')) new GLTFLoader(manager).load(url, gltf => resolve(gltf.scene), undefined, reject)
    else new FBXLoader(manager).load(url, resolve, undefined, reject)
  })
}

export async function loadCharacter(){
  let model: Object3D | null = null
  for (const url of files){
    // Ask first, so a missing model is quiet rather than an error.
    const head = await fetch(url, { method: 'HEAD' }).catch(() => null)
    if (!head?.ok || (head.headers.get('content-type') ?? '').includes('text/html')) continue
    model = await load(url).catch(error => { console.warn(`The character model ${url} could not be loaded:`, error); return null })
    if (model) break
  }
  if (!model) return null

  const rig = findRig(model)
  const posable = rig.hips && rig.upperLeg.l && rig.upperLeg.r && rig.upperArm.l && rig.upperArm.r
  // A model already posed in Blender (see the README) carries a 'pencil_at' marker and no skeleton.
  const prePosed = !posable ? model.getObjectByName('pencil_at') : undefined
  const onJetty = posable ? model.getObjectByName('jetty_pose') : undefined
  if (!posable && !prePosed){
    console.warn('The character model has no recognisable skeleton, so the built-in figure stays.')
    return null
  }

  // Surfaces: shadows, and cut-out hair, lashes and brows drawn from both sides without sorting trouble.
  model.traverse(object => {
    const mesh = object as Mesh
    if (!mesh.isMesh) return
    mesh.castShadow = mesh.receiveShadow = true
    mesh.frustumCulled = false
    mesh.userData.keep = true
    const materials = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as Array<Material & { map?: unknown; transparent: boolean }>
    for (const material of materials){
      // Only hair, brows, lashes, the eyes (their clear covering hides the irises if drawn solid) and
      // the jeans' waistband are cut-outs; skin and other clothes are solid, whatever the file says.
      const cutOut = /hair|brow|lash|long0|ponytail|bob0|braid|short0|high-poly|eye|jeans/i.test(material.name + mesh.name)
      material.transparent = false
      material.depthWrite = true
      material.alphaTest = cutOut ? 0.4 : 0
      if (cutOut) material.side = DoubleSide
      material.needsUpdate = true
    }
  })

  if (prePosed) return placePosed(model, prePosed)
  if (onJetty) return placeOnJetty(model, rig)

  // Stand her up at a natural height and turn her to face the lake (-z): her toes show which way is forward.
  const holder = new Group()
  holder.add(model)
  holder.updateMatrixWorld(true)
  const bounds = new Box3().setFromObject(model)
  model.scale.multiplyScalar(HEIGHT / Math.max(0.01, bounds.max.y - bounds.min.y))
  holder.updateMatrixWorld(true)
  const foot = rig.foot.l ?? rig.lowerLeg.l!
  const toe = rig.toe.l ?? first(foot)
  if (toe){
    const forward = toe.getWorldPosition(new Vector3()).sub(foot.getWorldPosition(new Vector3()))
    model.rotation.y += Math.PI - Math.atan2(forward.x, forward.z)
  } else model.rotation.y += Math.PI
  holder.updateMatrixWorld(true)

  // The pose, as directions in her own space (facing -z, y up). Rotating a bone carries everything
  // below it, so each limb is set from the body outwards.
  const v = (x: number, y: number, z: number) => new Vector3(x, y, z)
  aim(rig.spine, rig.neck ?? rig.head, v(0, Math.cos(0.5), -Math.sin(0.5)))
  aim(rig.neck, rig.head && first(rig.head) ? first(rig.head) : rig.head, v(0, Math.cos(0.95), -Math.sin(0.95)))
  // Knees fold towards the back of the leg (+z, as she faces -z); elbows towards the front (-z).
  const back = v(0, 0, 1), front = v(0, 0, -1)
  for (const side of ['l', 'r'] as Side[]){
    const s = side === 'r' ? 1 : -1
    limb(rig.upperLeg[side], rig.lowerLeg[side], rig.foot[side], v(s * 0.24, -0.04, -0.24), v(-s * 0.39, s > 0 ? 0.02 : -0.03, -0.16), back)
    aim(rig.foot[side], rig.toe[side] ?? first(rig.foot[side]), v(-s * 0.85, -0.12, 0.45))
  }
  limb(rig.upperArm.r, rig.foreArm.r, rig.hand.r, v(0.083, -0.265, -0.14), v(-0.105, -0.205, -0.16), front)
  aim(rig.hand.r, rig.finger.r ?? first(rig.hand.r), v(-0.04, -0.09, -0.13))
  limb(rig.upperArm.l, rig.foreArm.l, rig.hand.l, v(-0.093, -0.255, -0.13), v(0.065, -0.245, -0.16), front)
  aim(rig.hand.l, rig.finger.l ?? first(rig.hand.l), v(0.04, -0.03, -0.16))
  holder.updateMatrixWorld(true)

  // Sit her on the floor: lowest point of the posed body at the floor, hips over the seat.
  const posed = new Box3()
  model.traverse(object => {
    const skinned = object as SkinnedMesh
    if (!skinned.isSkinnedMesh) return
    // The skeleton's matrices are normally refreshed when a frame is drawn; refresh them now so the
    // measurement sees her seated, not standing.
    skinned.skeleton.update()
    skinned.computeBoundingBox()
    posed.union(skinned.boundingBox!.clone().applyMatrix4(skinned.matrixWorld))
  })
  const hips = rig.hips!.getWorldPosition(new Vector3())
  model.position.x -= hips.x
  model.position.z -= hips.z + 0.02
  if (!posed.isEmpty()) model.position.y -= posed.min.y - 0.004

  // A pencil in her right hand.
  holder.updateMatrixWorld(true)
  if (rig.hand.r){
    const handAt = rig.hand.r.getWorldPosition(new Vector3())
    const pencil = new Mesh(new CylinderGeometry(0.0045, 0.003, 0.15, 8), surface('#d9a83a'))
    pencil.position.copy(handAt).add(v(-0.03, -0.04, -0.07))
    pencil.rotation.set(-0.7, 0, 0.35)
    pencil.castShadow = true
    holder.add(pencil)
    rig.hand.r.attach(pencil)
  }

  // Gentle life: breathing through the spine, small pencil strokes, the head easing a little.
  const rest = new Map<Bone, Quaternion>()
  ;[rig.spine, rig.foreArm.r, rig.neck].forEach(bone => { if (bone) rest.set(bone, bone.quaternion.clone()) })
  const wobble = new Quaternion(), axis = new Vector3()
  const nudge = (bone: Bone | undefined, x: number, y: number) => {
    if (!bone) return
    const base = rest.get(bone)!
    axis.set(x, y, 0)
    const angle = axis.length()
    if (angle < 1e-6){ bone.quaternion.copy(base); return }
    wobble.setFromAxisAngle(axis.normalize(), angle)
    bone.quaternion.copy(base).multiply(wobble)
  }
  return {
    group: holder,
    update(time: number){
      nudge(rig.spine, Math.sin(time * 1.6) * 0.012, 0)
      nudge(rig.foreArm.r, Math.sin(time * 3.3) * 0.02, Math.sin(time * 2.4) * 0.035)
      nudge(rig.neck, 0, Math.sin(time * 0.35) * 0.05)
    }
  }
}

// A model posed and baked in Blender: already seated, in metres, with the pelvis over the origin and
// the floor at zero. Blender's forward is three.js +z, so she is turned to face the lake (-z).
function placePosed(model: Object3D, pencilAt: Object3D){
  const holder = new Group()
  holder.add(model)
  model.rotation.y = Math.PI
  holder.updateMatrixWorld(true)
  const tip = pencilAt.getWorldPosition(new Vector3())
  const pencil = new Mesh(new CylinderGeometry(0.004, 0.0028, 0.15, 8), surface('#d9a83a'))
  pencil.position.copy(tip).add(new Vector3(0.012, 0.05, 0.03))
  pencil.rotation.set(0.55, 0, -0.35)
  pencil.castShadow = true
  holder.add(pencil)
  return { group: holder, update(){ /* A baked pose: she stays still, intent on her page. */ } }
}

// A model posed in Blender sitting on the end of the jetty, with its skeleton kept: the plank edge
// under her knees at the origin, the planks' surface at zero, facing the lake once turned round. She
// sways gently, swings her feet in the water, which rings around them, and lets her gaze wander
// over the sky.
function placeOnJetty(model: Object3D, rig: Rig){
  const holder = new Group()
  holder.add(model)
  model.rotation.y = Math.PI
  holder.updateMatrixWorld(true)
  const rest = new Map<Bone, Quaternion>()
  ;[rig.spine, rig.neck, rig.head, rig.lowerLeg.l, rig.lowerLeg.r, rig.foot.l, rig.foot.r].forEach(bone => { if (bone) rest.set(bone, bone.quaternion.clone()) })
  const facing = new Quaternion(), axis = new Vector3(), turn = new Quaternion()
  // Turns a bone from its resting pose by small angles about her own axes (x to her right, y up,
  // z backwards). Parents must be turned before their children.
  const bend = (bone: Bone | undefined, x: number, y: number, z: number) => {
    if (!bone) return
    bone.quaternion.copy(rest.get(bone)!)
    axis.set(x, y, z)
    const angle = axis.length()
    if (angle < 1e-6) return
    axis.normalize().applyQuaternion(holder.getWorldQuaternion(facing))
    rotateWorld(bone, turn.setFromAxisAngle(axis, angle))
  }
  // Her feet's spot in the lake's rings (the slot after the ducks').
  const ripple = world.uDucks.value[DUCKS - 1]
  const left = new Vector3(), right = new Vector3()
  return {
    group: holder,
    update(time: number){
      bend(rig.spine, Math.sin(time * 1.4) * 0.012, 0, Math.sin(time * 0.55) * 0.05)
      bend(rig.neck, 0, Math.sin(time * 0.13) * 0.12, 0)
      bend(rig.head, Math.sin(time * 0.21) * 0.07, Math.sin(time * 0.13) * 0.18 + Math.sin(time * 0.31) * 0.06, Math.sin(time * 0.55) * -0.03)
      // Her lower legs swing in turn, slowly, and her feet follow a moment later.
      for (const [side, phase] of [['l', 0], ['r', Math.PI]] as Array<[Side, number]>){
        bend(rig.lowerLeg[side], Math.sin(time * 1.05 + phase) * 0.22, 0, 0)
        bend(rig.foot[side], Math.sin(time * 1.05 + phase - 0.8) * 0.18, 0, 0)
      }
      if (rig.foot.l && rig.foot.r){
        rig.foot.l.getWorldPosition(left)
        rig.foot.r.getWorldPosition(right)
        left.add(right).multiplyScalar(0.5)
        ripple.set(left.x, left.z, 0.12 + Math.abs(Math.cos(time * 1.05)) * 0.1, 1)
      }
    }
  }
}
