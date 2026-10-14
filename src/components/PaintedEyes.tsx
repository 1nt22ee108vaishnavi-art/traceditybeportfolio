import { useEffect, useRef } from 'react'
import eyeGeometry from '../data/eye-geometry.json'

const { width: W, height: H, maxOffset, eyes } = eyeGeometry
const LAYER_PAD = 4 // matches the padding baked into the iris cut-outs
const percent = (value: number, total: number) => `${(value / total) * 100}%`

// CSS clip-path for each eyelid opening, in percentages so it scales with the painting.
const apertureClip = (points: number[][]) => `polygon(${points.map(([x, y]) => `${percent(x, W)} ${percent(y, H)}`).join(', ')})`

type Point = { x: number; y: number }

const random = (min: number, max: number) => min + Math.random() * (max - min)

// Each eyelid opening's bounding box, for the upper lid that closes over it when the eyes blink.
const lidBox = (points: number[][]) => {
  const xs = points.map(([x]) => x)
  const ys = points.map(([, y]) => y)
  return { left: Math.min(...xs) - 10, top: Math.min(...ys) - 4, width: Math.max(...xs) - Math.min(...xs) + 20, height: Math.max(...ys) - Math.min(...ys) + 8 }
}

// The lid is painted with the painting's own lid skin: the strip just above the opening, stretched to
// fill the lid, so a closed eye keeps the brushwork and the lash line along its edge.
const LID_STRIP = { above: 34, below: 4 }
function lidStyle(box: ReturnType<typeof lidBox>): React.CSSProperties {
  const stripTop = box.top + 4 - LID_STRIP.above
  const stripHeight = LID_STRIP.above - LID_STRIP.below
  return {
    left: percent(box.left, W),
    top: percent(box.top, H),
    width: percent(box.width, W),
    height: percent(box.height, H),
    backgroundSize: `auto, ${(W / box.width) * 100}% ${(H / stripHeight) * 100}%`,
    backgroundPosition: `0 0, ${(box.left / (W - box.width)) * 100}% ${(stripTop / (H - stripHeight)) * 100}%`
  }
}

// How far the lids are closed (0 open, 1 shut) `t` milliseconds into a blink: a quick close, a brief
// pause, then a slower opening, as real blinks go.
function blinkAmount(t: number){
  if (t < 0) return 0
  if (t < 85) return (t / 85) ** 2
  if (t < 125) return 1
  if (t < 345) return (1 - (t - 125) / 220) ** 3
  return 0
}

// Brings the eyes to life. The gaze glides after the pointer (desktop) or a touch on the painting
// (touch screens) on a soft spring, with a faint drift so it is never frozen; when nobody is pointing
// the eyes look around on their own. Looking sideways foreshortens the iris slightly, looking down
// lowers the upper lids a little, and the eyes blink now and then, or when `blinkRef.current()` is called.
function useLivingEyes(stageRef: React.RefObject<HTMLDivElement>, blinkRef: React.MutableRefObject<(() => void) | null>){
  useEffect(() => {
    const stage = stageRef.current
    if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let pointer: Point | null = null
    let lastPointerAt = 0
    let frame = 0
    let last = 0
    let visible = false
    let releaseTimer = 0
    // Gaze in -1..1 on each axis, and its velocity.
    const gaze = { x: 0, y: 0, vx: 0, vy: 0 }
    const wander = { x: 0, y: 0 }
    let nextWander = 0
    let blinkStart = -1
    let secondBlink = false
    let nextBlink = performance.now() + random(2000, 5000)
    const stiffness = 70 // a critically damped spring: smooth, settling in under half a second
    const damping = 2 * Math.sqrt(stiffness)

    // Where the pointer would draw the gaze, from the point between the eyes.
    function desired(rect: DOMRect){
      if (!pointer) return null
      const scale = rect.width / W
      const centre = {
        x: rect.left + ((eyes[0].iris.cx + eyes[1].iris.cx) / 2) * scale,
        y: rect.top + ((eyes[0].iris.cy + eyes[1].iris.cy) / 2) * scale
      }
      return {
        x: Math.tanh((pointer.x - centre.x) / (rect.width * 0.38)),
        y: Math.tanh((pointer.y - centre.y) / (rect.height * 1.6))
      }
    }

    function startBlink(time: number){
      blinkStart = time
      secondBlink = Math.random() < 0.15
      nextBlink = time + random(2800, 6500)
    }
    blinkRef.current = () => { startBlink(performance.now()); secondBlink = false; wake() }

    function step(time: number){
      const dt = last ? Math.min(32, time - last) / 1000 : 1 / 60
      last = time
      const rect = stage!.getBoundingClientRect()

      let target = desired(rect)
      if (target){
        nextWander = time + random(2500, 4500)
      } else {
        if (time > nextWander){
          // Idle: look somewhere nearby, now and then back to the centre.
          const centre = Math.random() < 0.35
          wander.x = centre ? random(-0.08, 0.08) : random(-0.6, 0.6)
          wander.y = centre ? random(-0.1, 0.1) : random(-0.45, 0.35)
          nextWander = time + random(2200, 4500)
        }
        target = wander
      }
      // A faint, continuous drift, as living eyes never hold perfectly still.
      const drift = {
        x: 0.016 * Math.sin(time / 730) + 0.009 * Math.sin(time / 317 + 1.3),
        y: 0.05 * Math.sin(time / 910 + 0.4) + 0.025 * Math.sin(time / 383)
      }
      gaze.vx += (stiffness * (target.x + drift.x - gaze.x) - damping * gaze.vx) * dt
      gaze.vy += (stiffness * (target.y + drift.y - gaze.y) - damping * gaze.vy) * dt
      gaze.x += gaze.vx * dt
      gaze.y += gaze.vy * dt

      if (blinkStart < 0 && time > nextBlink) startBlink(time)
      const blink = blinkStart < 0 ? 0 : blinkAmount(time - blinkStart)
      if (blinkStart >= 0 && time - blinkStart > 345){
        if (secondBlink){ blinkStart = time + 70; secondBlink = false } else blinkStart = -1
      }
      const lid = Math.min(1, blink + Math.max(0, gaze.y) * 0.14)

      const scale = rect.width / W
      const squeeze = 1 - 0.1 * Math.abs(gaze.x) ** 1.5
      eyes.forEach(eye => {
        stage!.style.setProperty(`--iris-${eye.id}-x`, `${(gaze.x * maxOffset.x * scale).toFixed(3)}px`)
        stage!.style.setProperty(`--iris-${eye.id}-y`, `${(gaze.y * maxOffset.y * scale).toFixed(3)}px`)
        stage!.style.setProperty(`--iris-${eye.id}-s`, squeeze.toFixed(4))
      })
      stage!.style.setProperty('--lid', lid.toFixed(4))
      frame = visible ? requestAnimationFrame(step) : 0
      if (!frame) last = 0
    }

    function wake(){ if (visible && !frame) frame = requestAnimationFrame(step) }

    function onPointerMove(event: PointerEvent){
      if (event.pointerType !== 'mouse') return
      pointer = { x: event.clientX, y: event.clientY }
      lastPointerAt = event.timeStamp
    }
    function onMouseOut(event: MouseEvent){
      if (!event.relatedTarget) pointer = null
    }
    // Touch: the eyes look at a finger resting on the painting, then go back to looking around.
    function onTouch(event: PointerEvent){
      if (event.pointerType === 'mouse') return
      window.clearTimeout(releaseTimer)
      pointer = { x: event.clientX, y: event.clientY }
    }
    function onTouchEnd(event: PointerEvent){
      if (event.pointerType === 'mouse') return
      window.clearTimeout(releaseTimer)
      releaseTimer = window.setTimeout(() => { pointer = null }, 1100)
    }
    // A mouse that has sat still for a while stops holding the eyes' attention.
    const idleCheck = window.setInterval(() => {
      if (pointer && lastPointerAt && performance.now() - lastPointerAt > 6000){ pointer = null; lastPointerAt = 0 }
    }, 1000)

    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) wake()
    })
    seen.observe(stage)

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('mouseout', onMouseOut)
    stage.addEventListener('pointerdown', onTouch)
    stage.addEventListener('pointermove', onTouch, { passive: true })
    stage.addEventListener('pointerup', onTouchEnd)
    stage.addEventListener('pointercancel', onTouchEnd)
    return () => {
      cancelAnimationFrame(frame)
      blinkRef.current = null
      seen.disconnect()
      window.clearTimeout(releaseTimer)
      window.clearInterval(idleCheck)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('mouseout', onMouseOut)
      stage.removeEventListener('pointerdown', onTouch)
      stage.removeEventListener('pointermove', onTouch)
      stage.removeEventListener('pointerup', onTouchEnd)
      stage.removeEventListener('pointercancel', onTouchEnd)
    }
  }, [stageRef, blinkRef])
}

// The painted eyes between the Work flowers. The irises follow the pointer inside their eyelids, the
// strands of hair at the sides sway gently, `tint` (a flower's pigment, while it is hovered) is
// reflected in both eyes, and the eyes blink whenever `blinkSignal` changes.
export default function PaintedEyes({ className = '', tint = null, blinkSignal = 0 }: { className?: string; tint?: string | null; blinkSignal?: number }){
  const stageRef = useRef<HTMLDivElement>(null)
  const blinkRef = useRef<(() => void) | null>(null)
  const lastTint = useRef(tint)
  if (tint) lastTint.current = tint // keep the colour while the reflection fades out
  useLivingEyes(stageRef, blinkRef)
  useEffect(() => { if (blinkSignal) blinkRef.current?.() }, [blinkSignal])

  return (
    <div
      className={`painted-eyes ${tint ? 'is-reflecting' : ''} ${className}`}
      style={{ '--eye-tint': lastTint.current ?? 'transparent' } as React.CSSProperties}
    >
      <div className="eye-stage" ref={stageRef}>
        {/* The painting, with a slow wind through the hair: an animated displacement limited by a hair mask. */}
        <svg className="eye-base" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A painted close-up of a woman's eyes, with dark eyeliner, a small bindi and warm brushwork">
          <defs>
            <filter id="hair-sway" filterUnits="userSpaceOnUse" x="0" y="0" width={W} height={H} colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.011 0.004" numOctaves="2" seed="4" result="noise" />
              <feOffset in="noise" result="drift">
                <animate attributeName="dx" values="0;26;0" dur="9s" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" repeatCount="indefinite" />
                <animate attributeName="dy" values="0;-14;0" dur="6.5s" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" repeatCount="indefinite" />
              </feOffset>
              <feImage href="/assets/eyes/hair-mask.png" x="0" y="0" width={W} height={H} preserveAspectRatio="none" result="mask" />
              <feComposite in="drift" in2="mask" operator="in" result="hairNoise" />
              <feFlood floodColor="rgb(128,128,128)" result="still" />
              <feMerge result="map">
                <feMergeNode in="still" />
                <feMergeNode in="hairNoise" />
              </feMerge>
              <feDisplacementMap in="SourceGraphic" in2="map" scale="9" xChannelSelector="R" yChannelSelector="G">
                <animate attributeName="scale" values="7;16;9;15;7" dur="7s" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1;.45 0 .55 1" repeatCount="indefinite" />
              </feDisplacementMap>
            </filter>
          </defs>
          <image className="eye-painting" href="/assets/eyes/painted-eyes-base.jpg" width={W} height={H} />
        </svg>
        {eyes.map(eye => (
          <div className="eye-iris-clip" key={eye.id} style={{ clipPath: apertureClip(eye.aperture) }} aria-hidden="true">
            <div
              className="eye-iris"
              style={{
                left: percent(eye.iris.cx - eye.iris.r - LAYER_PAD, W),
                top: percent(eye.iris.cy - eye.iris.r - LAYER_PAD, H),
                width: percent(eye.iris.r * 2 + LAYER_PAD * 2, W),
                transform: `translate3d(var(--iris-${eye.id}-x, 0px), var(--iris-${eye.id}-y, 0px), 0) scaleX(var(--iris-${eye.id}-s, 1))`
              }}
            >
              <img src={`/assets/eyes/iris-${eye.id}.png`} alt="" />
              <span className="eye-tint" />
              <span className="eye-reflection" />
            </div>
            <span className="eye-lid" style={lidStyle(lidBox(eye.aperture))} />
          </div>
        ))}
      </div>
    </div>
  )
}
