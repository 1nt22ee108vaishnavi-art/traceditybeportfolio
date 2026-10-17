import { CircleGeometry, ConeGeometry, Group, Mesh, MeshBasicMaterial, Scene, SphereGeometry, Vector3, type Texture } from 'three'
import { DUCKS, surface, world } from './materials'

// A few mallards on the lake. Each paddles slowly on its own course, now and then turning or drifting,
// keeps clear of the bank and of the others, and bobs on the water. Their positions feed the lake
// shader, which draws rings around them and a wake when they swim. Clicked, a duck dives or paddles off.

type Bounds = { minX: number; maxX: number; far: number; shore: (x: number) => number }
type Duck = {
  body: Group
  hit: Mesh
  heading: number
  turnTo: number
  speed: number
  cruise: number
  nextTurn: number
  dive: number
  hurry: number
  seed: number
}

const female = { body: '#7d6248', head: '#6f563e', breast: '#8a6b4c', tail: '#5f4a36' }
const male = { body: '#8f877a', head: '#2c4a36', breast: '#6a4130', tail: '#3a3530' }

function makeDuck(colours: typeof female, shadow: Texture){
  const duck = new Group()
  const body = new Mesh(new SphereGeometry(0.13, 16, 10), surface(colours.body))
  body.scale.set(0.82, 0.62, 1.35)
  body.position.y = 0.04
  const breast = new Mesh(new SphereGeometry(0.1, 14, 10), surface(colours.breast))
  breast.position.set(0, 0.06, 0.11)
  breast.scale.set(0.95, 0.85, 0.8)
  const tail = new Mesh(new ConeGeometry(0.05, 0.12, 8), surface(colours.tail))
  tail.rotation.x = -Math.PI / 2 - 0.5
  tail.position.set(0, 0.08, -0.19)
  const head = new Group()
  const skull = new Mesh(new SphereGeometry(0.058, 14, 10), surface(colours.head, { roughness: 0.6 }))
  skull.scale.set(0.85, 0.95, 1.1)
  const beak = new Mesh(new SphereGeometry(0.03, 10, 6), surface('#c2a03c'))
  beak.scale.set(0.9, 0.38, 1.6)
  beak.position.set(0, -0.012, 0.065)
  head.add(skull, beak)
  head.position.set(0, 0.17, 0.12)
  const neck = new Mesh(new SphereGeometry(0.045, 10, 8), surface(colours.head))
  neck.scale.set(1, 1.6, 1)
  neck.position.set(0, 0.11, 0.13)
  // A dark band where the duck sits in the water, so it does not float above it.
  const waterline = new Mesh(new CircleGeometry(0.22, 18), new MeshBasicMaterial({ map: shadow, transparent: true, depthWrite: false, opacity: 0.55 }))
  waterline.rotation.x = -Math.PI / 2
  waterline.scale.set(0.8, 1.3, 1)
  waterline.position.y = 0.002
  duck.add(body, breast, tail, neck, head, waterline)
  duck.userData.head = head
  duck.traverse(child => { if (child instanceof Mesh && child !== waterline) child.castShadow = true })
  return duck
}

export function buildDucks(scene: Scene, rand: () => number, waterLevel: number, bounds: Bounds, shadow: Texture){
  const ducks: Duck[] = []
  const hitMaterial = new MeshBasicMaterial({ visible: false })
  for (let i = 0; i < DUCKS - 1; i++){
    const body = makeDuck(i % 2 ? female : male, shadow)
    // A loose group out on the water, a little to the right of her view.
    body.position.set(2 + (rand() - 0.5) * 9, waterLevel, bounds.shore(2) - 5 - rand() * 7)
    const hit = new Mesh(new SphereGeometry(0.42, 8, 6), hitMaterial)
    hit.position.y = 0.1
    body.add(hit)
    scene.add(body)
    const cruise = 0.12 + rand() * 0.1
    const heading = rand() * Math.PI * 2
    ducks.push({ body, hit, heading, turnTo: heading, speed: cruise, cruise, nextTurn: 2 + rand() * 6, dive: 0, hurry: 0, seed: rand() * 10 })
  }

  const ahead = new Vector3()
  function update(time: number, dt: number){
    ducks.forEach((duck, index) => {
      duck.nextTurn -= dt
      if (duck.nextTurn <= 0){
        // Turn a little, sometimes a lot; sometimes just drift.
        duck.turnTo = duck.heading + (rand() - 0.5) * (rand() < 0.25 ? 3 : 1.2)
        duck.cruise = rand() < 0.3 ? 0.02 : 0.1 + rand() * 0.12
        duck.nextTurn = 4 + rand() * 8
      }
      const p = duck.body.position
      // Stay on the open water, and keep a little apart.
      ahead.set(p.x + Math.sin(duck.heading) * 2, 0, p.z + Math.cos(duck.heading) * 2)
      if (ahead.z > bounds.shore(ahead.x) - 1.8 || ahead.z < bounds.far || ahead.x < bounds.minX || ahead.x > bounds.maxX){
        duck.turnTo = Math.atan2(2 - p.x, (bounds.shore(2) - 8) - p.z) + (rand() - 0.5) * 0.6
      }
      ducks.forEach((other, j) => {
        if (j === index) return
        const dx = p.x - other.body.position.x, dz = p.z - other.body.position.z
        const d = Math.hypot(dx, dz)
        if (d < 0.7 && d > 0.001){ p.x += (dx / d) * dt * 0.15; p.z += (dz / d) * dt * 0.15 }
      })
      let turn = duck.turnTo - duck.heading
      turn = Math.atan2(Math.sin(turn), Math.cos(turn))
      duck.heading += turn * Math.min(1, dt * 0.6)
      duck.hurry = Math.max(0, duck.hurry - dt)
      const wanted = duck.hurry > 0 ? 0.75 : duck.cruise
      duck.speed += (wanted - duck.speed) * Math.min(1, dt * 1.2)
      p.x += Math.sin(duck.heading) * duck.speed * dt
      p.z += Math.cos(duck.heading) * duck.speed * dt
      duck.body.rotation.y = duck.heading

      // Diving: tip forward, slip under for a moment, come up a little way off.
      let under = false
      if (duck.dive > 0){
        duck.dive -= dt
        const t = 1 - duck.dive / 3.2
        if (t < 0.2) duck.body.rotation.x = t * 5 * 1.3
        else if (t < 0.75){ under = true; duck.body.rotation.x = 1.3 }
        else duck.body.rotation.x = Math.max(0, (1 - t) * 4) * -0.3
        duck.body.position.y = waterLevel - (under ? 0.4 : t < 0.2 ? t * 0.4 : 0)
        duck.body.visible = !under
      } else {
        duck.body.rotation.x = Math.sin(time * 1.3 + duck.seed) * 0.03
        duck.body.rotation.z = Math.sin(time * 1.1 + duck.seed * 2) * 0.035
        duck.body.position.y = waterLevel + Math.sin(time * 1.6 + duck.seed) * 0.008
        duck.body.visible = true
        const head = duck.body.userData.head as Group
        head.rotation.y = Math.sin(time * 0.5 + duck.seed * 3) * 0.4
        head.rotation.x = Math.max(0, Math.sin(time * 0.3 + duck.seed)) * 0.25
      }
      world.uDucks.value[index].set(p.x, p.z, Math.min(1, duck.speed * 1.4), under ? 0 : 1)
    })
  }

  return {
    hits: ducks.map(duck => duck.hit),
    update,
    // Clicked: about half the time it dives, otherwise it paddles briskly away from the bank.
    disturb(hit: Mesh){
      const duck = ducks.find(item => item.hit === hit)
      if (!duck || duck.dive > 0) return
      if (rand() < 0.5) duck.dive = 3.2
      else { duck.hurry = 3; duck.turnTo = Math.PI + (rand() - 0.5) * 0.8; duck.heading += (rand() - 0.5) * 0.3 }
    }
  }
}
