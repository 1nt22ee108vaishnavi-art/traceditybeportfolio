import { BufferAttribute, BufferGeometry, Group, Matrix4, Mesh, type Material, type Object3D } from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

// Many small parts (books, planks, leaves, bulbs) cost a draw call each, three times over with the
// shadow and the lake's reflection. This joins the still parts of a group that share a material into
// one mesh, without changing how anything looks. Groups marked `userData.animated` keep their own
// transform and are merged separately inside; meshes marked `userData.keep`, hit areas (invisible
// materials) and anything another part of the code holds on to are left alone.

function normalised(mesh: Mesh, transform: Matrix4){
  let geometry = (mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone()) as BufferGeometry
  geometry.applyMatrix4(transform)
  const keepColour = (mesh.material as Material & { vertexColors?: boolean }).vertexColors
  for (const name of Object.keys(geometry.attributes)){
    if (!['position', 'normal', 'uv'].includes(name) && !(keepColour && name === 'color')) geometry.deleteAttribute(name)
  }
  if (!geometry.attributes.normal) geometry.computeVertexNormals()
  if (!geometry.attributes.uv) geometry.setAttribute('uv', new BufferAttribute(new Float32Array(geometry.attributes.position.count * 2), 2))
  geometry.morphAttributes = {}
  return geometry
}

export function mergeStill(root: Object3D){
  root.updateMatrixWorld(true)
  const buckets = new Map<string, { material: Material; cast: boolean; receive: boolean; parts: BufferGeometry[]; meshes: Mesh[] }>()
  const inverse = new Matrix4().copy(root.matrixWorld).invert()
  const nested: Object3D[] = []
  const visit = (object: Object3D) => {
    for (const child of [...object.children]){
      if (child.userData.animated){ nested.push(child); continue }
      if (child instanceof Mesh && !child.userData.keep && !Array.isArray(child.material) && child.material.visible !== false && !(child as { isInstancedMesh?: boolean }).isInstancedMesh){
        const key = `${child.material.uuid}:${child.castShadow}:${child.receiveShadow}`
        if (!buckets.has(key)) buckets.set(key, { material: child.material, cast: child.castShadow, receive: child.receiveShadow, parts: [], meshes: [] })
        const bucket = buckets.get(key)!
        bucket.parts.push(normalised(child, new Matrix4().multiplyMatrices(inverse, child.matrixWorld)))
        bucket.meshes.push(child)
      }
      if (child.children.length) visit(child)
    }
  }
  visit(root)
  for (const bucket of buckets.values()){
    if (bucket.meshes.length < 2) continue
    const merged = mergeGeometries(bucket.parts)
    if (!merged) continue
    bucket.meshes.forEach(mesh => mesh.removeFromParent())
    const mesh = new Mesh(merged, bucket.material)
    mesh.castShadow = bucket.cast
    mesh.receiveShadow = bucket.receive
    root.add(mesh)
  }
  // Empty groups left behind are harmless; animated groups are merged within themselves.
  nested.forEach(group => mergeStill(group))
  return root
}

export const animated = <T extends Group>(group: T) => { group.userData.animated = true; return group }
