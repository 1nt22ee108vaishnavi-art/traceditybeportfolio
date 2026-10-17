import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, LocateFixed } from 'lucide-react'
import { Link } from 'react-router-dom'
import ArtworkPreview from '../components/ArtworkPreview'
import { collectionMediums, daybookEntries, workCategories, worldPlaces } from '../data/portfolio'
import JournalPanel, { type Chapter } from './JournalPanel'
import MoodControl from './MoodControl'
import { createWorld, type Selection } from './three/createWorld'
import type { MoodId } from './three/timeOfDay'
import './world.css'

type World = ReturnType<typeof createWorld>

// Every collection, as chapters of her sketchbook; and the Daybook photographs, as the album.
const chapters: Chapter[] = workCategories.map(category => ({ slug: category.slug, name: collectionMediums[category.slug] ?? category.color, images: category.artworks }))
const album: Chapter[] = daybookEntries.length ? [{ slug: 'daybook', name: 'Daybook', images: daybookEntries }] : []
const chapter = (slug: string) => chapters.find(item => item.slug === slug)

// What the world shows of her work, taken from the portfolio data.
const content = {
  sketch: chapter(worldPlaces.sketchbookPage)?.images[0]?.src ?? chapters[0]?.images[0]?.src ?? '',
  papers: worldPlaces.papers.flatMap(slug => {
    const found = chapter(slug)
    return found?.images[0] ? [{ collection: slug, name: found.name, src: found.images[0].src }] : []
  }),
  board: { collection: worldPlaces.board, name: chapter(worldPlaces.board)?.name ?? '', images: (chapter(worldPlaces.board)?.images ?? []).map(image => image.src) },
  album: daybookEntries.map(entry => entry.src)
}

export default function WorldPage(){
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const worldRef = useRef<World | null>(null)
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches).current
  const touch = useRef(window.matchMedia('(pointer: coarse)').matches).current
  const [mood, setMood] = useState<MoodId | 'cycle'>('golden-day')
  const [hour, setHour] = useState(9)
  const [lights, setLights] = useState({ candle: false })
  const [opened, setOpened] = useState<Selection | null>(null)
  const [hover, setHover] = useState<{ label: string; x: number; y: number } | null>(null)
  const [moved, setMoved] = useState(false)
  const [explored, setExplored] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let world: World
    try {
      world = createWorld(canvas, {
        content,
        mood: 'golden-day',
        reducedMotion,
        onHover: setHover,
        onSelect: selection => { setExplored(true); setOpened(selection) },
        onLight: (kind, on) => { setExplored(true); setLights(current => ({ ...current, [kind]: on })) },
        onMoved: value => { setMoved(value); if (value) setExplored(true) }
      })
    } catch (error) {
      console.error('The world could not start:', error)
      setFailed(true)
      return
    }
    worldRef.current = world
    return () => { world.dispose(); worldRef.current = null }
  }, [reducedMotion])

  // The clock only matters while the day is passing.
  useEffect(() => {
    if (mood !== 'cycle') return
    const timer = window.setInterval(() => setHour(worldRef.current?.getHour() ?? 9), 1000)
    return () => window.clearInterval(timer)
  }, [mood])
  useEffect(() => { worldRef.current?.setMood(mood) }, [mood])
  // Her work opens over the world; the world waits, exactly as it was, until it closes.
  useEffect(() => { worldRef.current?.setPaused(!!opened) }, [opened])
  useEffect(() => { const timer = window.setTimeout(() => setExplored(true), 15000); return () => window.clearTimeout(timer) }, [])

  // Walking about the deck by keyboard: hold W and S (or up and down) to walk forwards and back, A and
  // D (or left and right) to turn. Page Up and Page Down tilt the view, + and - take a step, Home
  // returns to the desk.
  function hold(forwards: number, turning: number){
    worldRef.current?.hold(forwards, turning)
    if (forwards || turning) setExplored(true)
  }
  useEffect(() => {
    const walking: Record<string, [number, number]> = {
      w: [1, 0], arrowup: [1, 0], s: [-1, 0], arrowdown: [-1, 0], a: [0, 1], arrowleft: [0, 1], d: [0, -1], arrowright: [0, -1]
    }
    const down = new Set<string>()
    const apply = () => {
      let forwards = 0, turning = 0
      down.forEach(key => { forwards += walking[key][0]; turning += walking[key][1] })
      hold(Math.sign(forwards), Math.sign(turning))
    }
    function onKey(event: KeyboardEvent){
      if (opened || event.altKey || event.ctrlKey || event.metaKey) return
      const target = event.target as HTMLElement
      if (target.closest('input, textarea, [role="dialog"], .mood-panel')) return
      const world = worldRef.current
      if (!world) return
      const key = event.key.toLowerCase()
      if (walking[key]){
        event.preventDefault()
        if (!down.has(key)){ down.add(key); apply() }
        return
      }
      const moves: Record<string, [number, number, number]> = {
        PageUp: [0, -0.06, 1], PageDown: [0, 0.06, 1], '+': [0, 0, 0.85], '=': [0, 0, 0.85], '-': [0, 0, 1.18]
      }
      if (event.key === 'Home'){ world.goHome(); event.preventDefault(); return }
      const move = moves[event.key]
      if (!move) return
      event.preventDefault()
      setExplored(true)
      world.nudge(...move)
    }
    function onKeyUp(event: KeyboardEvent){
      if (down.delete(event.key.toLowerCase())) apply()
    }
    // Let go of everything if the window loses focus mid-step.
    function release(){ down.clear(); apply() }
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', release)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', release)
      release()
    }
  }, [opened])

  const journal = useMemo(() => {
    if (!opened) return null
    if (opened.kind === 'album') return { chapters: album, title: 'Daybook', intro: 'Photographs from my days, kept in an album by my side.' }
    return { chapters, title: 'Sketchbook', intro: 'My work, pinned page by page. Turn the pages, or choose a collection.', startAt: opened.collection }
  }, [opened])

  return (
    <div className="world">
      <canvas ref={canvasRef} className="world-canvas" aria-label="A painted 3D world: an artist sketching at her desk beside a lake. Drag to walk and turn about the deck, click a spot on it to go there, or use the buttons that appear when you press Tab." />
      <div className="world-vignette" aria-hidden="true" />

      <header className={`world-intro${explored ? ' is-quiet' : ''}`}>
        <h1>A world of my own making.</h1>
        <p>Somewhere between little ideas, unfinished sketches, and daydreams, an artist lives in her own world.</p>
      </header>

      {failed && <p className="world-message" role="alert">This world needs WebGL to appear. Please try another browser.</p>}

      {!explored && !failed && <p className="world-hint" aria-hidden="true">{touch ? 'Drag to walk and turn · tap the deck to go there · tap the things around her' : 'Drag to walk and turn · click the deck to go there · some things can be opened'}</p>}

      {hover && !opened && (
        <span className="world-label" style={{ left: hover.x, top: hover.y }} aria-hidden="true">{hover.label}</span>
      )}

      {/* Keyboard and screen-reader access to everything that can be clicked in the scene. */}
      <div className="world-objects">
        <button type="button" onClick={() => worldRef.current?.open('sketchbook')}>Open the sketchbook</button>
        {content.papers.map(paper => (
          <button type="button" key={paper.collection} onClick={() => worldRef.current?.open('paper', paper.collection)}>Open the {paper.name} collection</button>
        ))}
        {content.board.images.length > 0 && <button type="button" onClick={() => worldRef.current?.open('board', content.board.collection)}>See the {content.board.name} pieces on the inspiration board</button>}
        {album.length > 0 && <button type="button" onClick={() => worldRef.current?.open('album')}>Leaf through the daybook</button>}
        <button type="button" onClick={() => worldRef.current?.toggle('candle')}>{lights.candle ? 'Blow out the candle' : 'Light the candle'}</button>
      </div>
      <p className="world-status" aria-live="polite">{lights.candle ? 'The candle is lit.' : ''}</p>

      {/* Back to the main menu. */}
      <Link className="world-menu" to="/"><ArrowLeft size={14} aria-hidden="true" /> Menu</Link>

      <div className="world-corner">
        {moved && (
          <button type="button" className="world-home" onClick={() => worldRef.current?.goHome()} aria-label="Return to the starting view">
            <LocateFixed size={15} aria-hidden="true" />
          </button>
        )}
        <MoodControl mood={mood} hour={hour} onChange={setMood} />
      </div>

      {journal && <JournalPanel key={`${opened?.kind}-${opened?.collection ?? ''}`} {...journal} onClose={() => setOpened(null)} />}
      {/* The character's jeans are a CC-BY asset, which asks for a credit. */}
      <p className="world-credits">Figure made with MakeHuman (CC0) · jeans by Elvaerwyn, CC BY 4.0</p>
      <ArtworkPreview />
    </div>
  )
}
