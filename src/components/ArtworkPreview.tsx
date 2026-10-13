import { type PointerEvent as ReactPointerEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Minus, Plus, RotateCcw, X } from 'lucide-react'

const MIN_ZOOM = 1
const MAX_ZOOM = 6
const ZOOM_STEP = 1.4
const EDGE = 12

type Preview = { src: string; alt: string; anchor: DOMRect; returnFocus: HTMLElement | null }

// Opens a compact preview anchored to an image. Any <img data-preview> opens it on click or Enter;
// other code (the Sketchbook) can open it with openArtworkPreview().
export function openArtworkPreview(image: HTMLImageElement, returnFocus: HTMLElement | null = image){
  window.dispatchEvent(new CustomEvent('artwork-preview', { detail: { image, returnFocus } }))
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export default function ArtworkPreview(){
  const [preview, setPreview] = useState<Preview | null>(null)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0, height: 0 })
  const panelRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const gesture = useRef<{ distance: number; zoom: number } | null>(null)

  const close = useCallback(() => {
    setPreview(current => {
      current?.returnFocus?.focus({ preventScroll: true })
      return null
    })
  }, [])

  // Keep the image inside the viewport when panning.
  const clampPan = useCallback((x: number, y: number, scale: number) => {
    const box = viewportRef.current?.getBoundingClientRect()
    if (!box) return { x, y }
    const maxX = (box.width * (scale - 1)) / 2
    const maxY = (box.height * (scale - 1)) / 2
    return { x: clamp(x, -maxX, maxX), y: clamp(y, -maxY, maxY) }
  }, [])

  const zoomTo = useCallback((next: number) => {
    const scale = clamp(next, MIN_ZOOM, MAX_ZOOM)
    setZoom(current => {
      setPan(p => clampPan((p.x * scale) / current, (p.y * scale) / current, scale))
      return scale
    })
  }, [clampPan])

  const reset = useCallback(() => { setZoom(1); setPan({ x: 0, y: 0 }) }, [])

  // Open from any data-preview image (click or keyboard), or from openArtworkPreview().
  useEffect(() => {
    function open(image: HTMLImageElement, returnFocus: HTMLElement | null){
      if (!image.currentSrc && !image.src) return
      setPreview({ src: image.currentSrc || image.src, alt: image.alt, anchor: image.getBoundingClientRect(), returnFocus })
      setZoom(1)
      setPan({ x: 0, y: 0 })
    }
    function onClick(event: MouseEvent){
      const image = (event.target as Element | null)?.closest?.('img[data-preview]')
      if (image instanceof HTMLImageElement) open(image, image)
    }
    function onKey(event: KeyboardEvent){
      const image = event.target as Element
      if ((event.key === 'Enter' || event.key === ' ') && image instanceof HTMLImageElement && image.matches('[data-preview]')) {
        event.preventDefault()
        open(image, image)
      }
    }
    function onRequest(event: Event){
      const { image, returnFocus } = (event as CustomEvent<{ image: HTMLImageElement; returnFocus: HTMLElement | null }>).detail
      open(image, returnFocus)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    window.addEventListener('artwork-preview', onRequest)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('artwork-preview', onRequest)
    }
  }, [])

  // Place the panel over the selected image, kept inside the visible window.
  useLayoutEffect(() => {
    if (!preview) return
    const width = Math.min(460, window.innerWidth - EDGE * 2)
    const height = Math.min(width + 56, window.innerHeight - EDGE * 2)
    const { anchor } = preview
    const left = clamp(anchor.left + anchor.width / 2 - width / 2, EDGE, window.innerWidth - width - EDGE)
    const top = clamp(anchor.top + anchor.height / 2 - height / 2, EDGE, window.innerHeight - height - EDGE)
    setPosition({ top: top + window.scrollY, left: left + window.scrollX, width, height })
    closeRef.current?.focus({ preventScroll: true })
  }, [preview])

  // Escape closes; a press outside closes without also triggering whatever was underneath.
  useEffect(() => {
    if (!preview) return
    function onKey(event: KeyboardEvent){ if (event.key === 'Escape') close() }
    function onPointerDown(event: PointerEvent){
      if (panelRef.current?.contains(event.target as Node)) return
      close()
      // Pressing another artwork (or a preview button) should open that one straight away.
      if ((event.target as Element | null)?.closest?.('img[data-preview], [data-preview-trigger]')) return
      const swallow = (click: MouseEvent) => { click.stopPropagation(); click.preventDefault() }
      window.addEventListener('click', swallow, { capture: true, once: true })
      window.setTimeout(() => window.removeEventListener('click', swallow, { capture: true }), 500)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown, true)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown, true)
    }
  }, [preview, close])

  // Wheel zoom needs a non-passive listener so the page doesn't scroll at the same time.
  useEffect(() => {
    const viewport = viewportRef.current
    if (!preview || !viewport) return
    function onWheel(event: WheelEvent){
      event.preventDefault()
      setZoom(current => {
        const scale = clamp(current * (event.deltaY < 0 ? 1.15 : 1 / 1.15), MIN_ZOOM, MAX_ZOOM)
        setPan(p => clampPan((p.x * scale) / current, (p.y * scale) / current, scale))
        return scale
      })
    }
    viewport.addEventListener('wheel', onWheel, { passive: false })
    return () => viewport.removeEventListener('wheel', onWheel)
  }, [preview, clampPan])

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>){
    event.currentTarget.setPointerCapture(event.pointerId)
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      gesture.current = { distance: Math.hypot(a.x - b.x, a.y - b.y), zoom }
    }
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>){
    const previous = pointers.current.get(event.pointerId)
    if (!previous) return
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    if (pointers.current.size === 2 && gesture.current) {
      const [a, b] = [...pointers.current.values()]
      zoomTo(gesture.current.zoom * Math.hypot(a.x - b.x, a.y - b.y) / gesture.current.distance)
    } else if (zoom > 1) {
      setPan(p => clampPan(p.x + event.clientX - previous.x, p.y + event.clientY - previous.y, zoom))
    }
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>){
    pointers.current.delete(event.pointerId)
    if (pointers.current.size < 2) gesture.current = null
  }

  if (!preview) return null

  return createPortal(
    <div
      ref={panelRef}
      className="artwork-preview"
      role="dialog"
      aria-label={`Preview: ${preview.alt}`}
      style={{ top: position.top, left: position.left, width: position.width, height: position.height }}
    >
      <div className="artwork-preview-toolbar">
        <button type="button" onClick={() => zoomTo(zoom / ZOOM_STEP)} disabled={zoom <= MIN_ZOOM} aria-label="Zoom out"><Minus size={18} /></button>
        <span className="artwork-preview-zoom" aria-live="polite">{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={() => zoomTo(zoom * ZOOM_STEP)} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in"><Plus size={18} /></button>
        <button type="button" onClick={reset} disabled={zoom === 1} aria-label="Reset zoom"><RotateCcw size={16} /></button>
        <button type="button" ref={closeRef} className="artwork-preview-close" onClick={close} aria-label="Close preview"><X size={18} /></button>
      </div>
      <div
        ref={viewportRef}
        className={`artwork-preview-viewport${zoom > 1 ? ' is-zoomed' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={() => (zoom > 1 ? reset() : zoomTo(2))}
      >
        <img
          src={preview.src}
          alt={preview.alt}
          draggable={false}
          style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
        />
      </div>
    </div>,
    document.body
  )
}
