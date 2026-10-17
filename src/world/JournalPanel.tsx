import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight, RotateCcw, X } from 'lucide-react'
import type { PortfolioImage } from '../data/portfolio'
import './journal.css'

// Her sketchbook (or her daybook album) as a real object: a journal held at an angle in 3D, her work pinned in it as
// prints with tape and clips. Pages turn with a 3D flip that carries the next pages on its back, and
// each print can be flipped over in 3D to read its back. The cover swings open first, then the prints
// flip in one by one, as if she were showing you her work.
// Every print shows its artwork whole. Arrow keys or swipes turn pages; Escape returns to the desk.

export type Chapter = { slug: string; name: string; images: PortfolioImage[] }
type Print = PortfolioImage & { collection: string; name: string; number: number; total: number }
type Page = { collection: string; name: string; prints: Print[]; chapterStart: boolean }

const PER_PAGE = 3
const TURN_MS = 950

const paginate = (chapters: Chapter[]): Page[] => chapters.flatMap(chapter => {
  const prints = chapter.images.map((image, index) => ({ ...image, collection: chapter.slug, name: chapter.name, number: index + 1, total: chapter.images.length }))
  const chunks: Page[] = []
  for (let i = 0; i < prints.length; i += PER_PAGE) chunks.push({ collection: chapter.slug, name: chapter.name, prints: prints.slice(i, i + PER_PAGE), chapterStart: i === 0 })
  // Each collection starts on a left-hand page, so a spread never mixes two collections' openings.
  if (chunks.length % 2) chunks.push({ collection: chapter.slug, name: chapter.name, prints: [], chapterStart: false })
  return chunks
})

// A slightly different, natural lay for each print.
const lay = (pageIndex: number, slot: number) => {
  const seed = Math.sin(pageIndex * 12.9898 + slot * 78.233) * 43758.5453
  const r = seed - Math.floor(seed)
  return { turn: (r - 0.5) * 9, shiftX: (r - 0.5) * 6, shiftY: ((r * 7) % 1 - 0.5) * 5 }
}

type Flips = { flipped: Set<string>; onFlip: (src: string) => void }

function PageFace({ page, index, side, flipped, onFlip }: { page?: Page; index: number; side: 'left' | 'right' } & Flips){
  if (!page) return <div className={`journal-page journal-page-${side} journal-page-blank`} />
  return (
    <div className={`journal-page journal-page-${side}`}>
      {page.chapterStart && side === 'left'
        ? <h3 className="journal-chapter">{page.name}</h3>
        : <span className="journal-running-head">{page.name}</span>}
      {page.prints.map((print, slot) => {
        const { turn, shiftX, shiftY } = lay(index, slot)
        const over = flipped.has(print.src)
        return (
          <div key={print.src} className={`journal-slot journal-slot-${slot + 1}`} style={{ '--turn': `${turn}deg`, '--shift-x': `${shiftX}%`, '--shift-y': `${shiftY}%`, '--deal': `${slot * 0.14}s` } as CSSProperties}>
            <div className={`journal-card${over ? ' is-flipped' : ''}`}>
              <figure className="journal-print" aria-hidden={over || undefined}>
                {slot === 1 ? <span className="journal-clip" aria-hidden="true" /> : <span className="journal-tape" aria-hidden="true" />}
                <img
                  src={print.src}
                  alt={`${print.name} artwork ${print.number} of ${print.total}`}
                  loading="lazy"
                  draggable={false}
                  data-preview
                  tabIndex={over ? -1 : 0}
                  role="button"
                  aria-label={`Look closer at ${print.name} artwork ${print.number}`}
                />
                <figcaption>{print.name} · {print.number} / {print.total}</figcaption>
              </figure>
              <div className="journal-print-back" aria-hidden={!over || undefined}>
                <span className="journal-back-collection">{print.name}</span>
                <span className="journal-back-number">No. {print.number} of {print.total}</span>
                <span className="journal-back-stamp">traced.it.bye</span>
              </div>
              <button
                type="button"
                className="journal-flip"
                onClick={() => onFlip(print.src)}
                aria-pressed={over}
                aria-label={over ? `Turn ${print.name} artwork ${print.number} face up` : `Turn ${print.name} artwork ${print.number} over`}
              >
                <RotateCcw size={12} />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function JournalPanel({ chapters: source, title, intro, startAt, onClose }: { chapters: Chapter[]; title: string; intro: string; startAt?: string; onClose: () => void }){
  const pages = useMemo(() => paginate(source), [source])
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches).current
  const [single, setSingle] = useState(() => window.innerWidth < 760)
  const step = single ? 1 : 2
  const [at, setAt] = useState(() => { const start = Math.max(0, pages.findIndex(page => page.collection === startAt)); return start - (start % (window.innerWidth < 760 ? 1 : 2)) })
  const [coverOpen, setCoverOpen] = useState(reducedMotion)
  const [turn, setTurn] = useState<{ from: number; to: number; direction: 1 | -1 } | null>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [flipped, setFlipped] = useState<Set<string>>(() => new Set())
  const [dealing, setDealing] = useState(!reducedMotion)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const swipe = useRef<number | null>(null)

  useEffect(() => {
    const onResize = () => setSingle(window.innerWidth < 760)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  // The cover swings open, then the prints flip in once.
  useEffect(() => {
    const open = window.setTimeout(() => setCoverOpen(true), 350)
    const dealt = window.setTimeout(() => setDealing(false), 2600)
    return () => { window.clearTimeout(open); window.clearTimeout(dealt) }
  }, [])
  const flip = useCallback((src: string) => setFlipped(current => {
    const next = new Set(current)
    if (!next.delete(src)) next.add(src)
    return next
  }), [])
  // Keep the view on a whole spread when switching between one and two pages.
  useEffect(() => { setAt(current => current - (current % step)) }, [step])

  const go = useCallback((target: number) => {
    const to = Math.max(0, Math.min(pages.length - 1, target - (target % step)))
    if (turn || to === at) return
    if (reducedMotion) { setAt(to); return }
    setTurn({ from: at, to, direction: to > at ? 1 : -1 })
    window.setTimeout(() => { setAt(to); setTurn(null) }, TURN_MS)
  }, [at, step, turn, reducedMotion, pages.length])

  useEffect(() => {
    const returnTo = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    function onKey(event: KeyboardEvent){
      if (document.querySelector('.artwork-preview')) return
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowRight') go(at + step)
      else if (event.key === 'ArrowLeft') go(at - step)
      else if (event.key === 'Tab' && panelRef.current){
        const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>('button:not(:disabled), [tabindex="0"]'))
        const first = focusable[0], last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); returnTo?.focus?.() }
  }, [at, step, go, onClose])

  const chapters = useMemo(() => source.map(chapter => ({ slug: chapter.slug, name: chapter.name, page: pages.findIndex(page => page.collection === chapter.slug), count: chapter.images.length })), [source, pages])
  const current = pages[turn ? turn.to : at].collection

  // What lies under the turning sheet, and what the sheet carries on each face.
  let staticLeft: ReactNode, staticRight: ReactNode, leaf: ReactNode = null
  const face = (index: number, side: 'left' | 'right') => <PageFace page={pages[index]} index={index} side={side} flipped={flipped} onFlip={flip} />
  if (single) {
    staticRight = face(turn ? turn.to : at, 'right')
    if (turn) {
      const forward = turn.direction > 0
      staticRight = face(forward ? turn.to : turn.from, 'right')
      leaf = (
        <div className={`journal-leaf journal-leaf-single ${forward ? 'is-forward' : 'is-back'}`}>
          <div className="journal-leaf-face journal-leaf-front">{face(forward ? turn.from : turn.to, 'right')}</div>
          <div className="journal-leaf-face journal-leaf-back"><div className="journal-page journal-page-left journal-page-blank" /></div>
        </div>
      )
    }
  } else if (turn) {
    const forward = turn.direction > 0
    staticLeft = face(forward ? turn.from : turn.to, 'left')
    staticRight = face(forward ? turn.to + 1 : turn.from + 1, 'right')
    leaf = (
      <div className={`journal-leaf ${forward ? 'is-forward' : 'is-back'}`}>
        <div className="journal-leaf-face journal-leaf-front">{forward ? face(turn.from + 1, 'right') : face(turn.from, 'left')}</div>
        <div className="journal-leaf-face journal-leaf-back">{forward ? face(turn.to, 'left') : face(turn.to + 1, 'right')}</div>
      </div>
    )
  } else {
    staticLeft = face(at, 'left')
    staticRight = face(at + 1, 'right')
  }

  const spreadNumber = Math.floor(at / step) + 1
  const spreadCount = Math.ceil(pages.length / step)

  return (
    <div
      className="journal-overlay"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="journal-title"
      onPointerMove={event => {
        if (reducedMotion || event.pointerType !== 'mouse') return
        setTilt({ x: event.clientX / window.innerWidth - 0.5, y: event.clientY / window.innerHeight - 0.5 })
      }}
    >
      <aside className="journal-side">
        <h2 id="journal-title">{title}</h2>
        <p>{intro}</p>
        <ol className="journal-chapters">
          {chapters.map(chapter => (
            <li key={chapter.slug}>
              <button type="button" aria-current={chapter.slug === current ? 'true' : undefined} onClick={() => go(chapter.page)}>
                {chapter.name} <small>{chapter.count}</small>
              </button>
            </li>
          ))}
        </ol>
        <ul className="journal-keys" aria-label="Controls">
          <li><kbd>← →</kbd><span>Turn pages</span></li>
          <li><kbd>Click</kbd><span>Look closer</span></li>
          <li><kbd>↻</kbd><span>Flip a sketch over</span></li>
          <li><kbd>Esc</kbd><span>Back to the desk</span></li>
        </ul>
      </aside>

      <div
        className="journal-stage"
        onPointerDown={event => { swipe.current = event.clientX }}
        onPointerUp={event => {
          if (swipe.current === null) return
          const delta = event.clientX - swipe.current
          swipe.current = null
          if (Math.abs(delta) > 50) go(at + (delta < 0 ? step : -step))
        }}
      >
        <div
          className={`journal-book${single ? ' is-single' : ''}${dealing && coverOpen ? ' is-dealing' : ''}${coverOpen ? '' : ' is-closed'}`}
          style={{ '--tilt-x': tilt.x, '--tilt-y': tilt.y } as CSSProperties}
        >
          <div className="journal-cover" aria-hidden="true" />
          <div className="journal-pages">
            {!single && staticLeft}
            {staticRight}
            {leaf}
            <span className="journal-spine" aria-hidden="true" />
          </div>
          {!reducedMotion && <div className={`journal-front-cover${coverOpen ? ' is-open' : ''}`} aria-hidden="true"><span>{title}</span></div>}
          <span className="journal-binder journal-binder-top" aria-hidden="true" />
          <span className="journal-binder journal-binder-bottom" aria-hidden="true" />
        </div>
      </div>

      <div className="journal-nav">
        <button type="button" onClick={() => go(at - step)} disabled={at === 0 || !!turn} aria-label="Previous pages"><ArrowLeft size={18} /></button>
        <span aria-live="polite">{spreadNumber} / {spreadCount}</span>
        <button type="button" onClick={() => go(at + step)} disabled={at + step >= pages.length || !!turn} aria-label="Next pages"><ArrowRight size={18} /></button>
      </div>
      <button ref={closeRef} type="button" className="journal-close" onClick={onClose} aria-label="Close the sketchbook and return to the desk"><X size={20} /></button>
    </div>
  )
}
