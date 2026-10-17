import { useEffect, useRef, useState } from 'react'
import { CloudRain, Moon, Sparkles, Sun, Sunset } from 'lucide-react'
import { moods, periodName, type MoodId } from './three/timeOfDay'

// "Set the mood": one small control that opens a short list of moods, each of which changes the
// whole world's light and weather. The day cycle is kept as an option. It closes on choosing, on
// Escape or on a click elsewhere, so it never covers the view for long.

const icons = { 'golden-day': Sun, 'dreamy-dusk': Sunset, 'midnight-blue': Moon, 'rainy-solitude': CloudRain }

export default function MoodControl({ mood, hour, onChange }: { mood: MoodId | 'cycle'; hour: number; onChange: (mood: MoodId | 'cycle') => void }){
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape'){ setOpen(false); buttonRef.current?.focus() } }
    const onDown = (event: PointerEvent) => { if (!rootRef.current?.contains(event.target as Node)) setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown) }
  }, [open])

  const current = moods.find(item => item.id === mood)
  const Icon = current ? icons[current.id] : Sparkles

  return (
    <div className="mood" ref={rootRef}>
      {open && (
        <div className="mood-panel" id="mood-panel" role="group" aria-label="Moods">
          <p className="mood-title">Set the mood</p>
          <ul>
            {moods.map(item => {
              const ItemIcon = icons[item.id]
              return (
                <li key={item.id}>
                  <button type="button" aria-pressed={mood === item.id} onClick={() => { onChange(item.id); setOpen(false) }}>
                    <span className="mood-swatch" style={{ background: `linear-gradient(160deg, ${item.swatch[0]}, ${item.swatch[1]})` }} aria-hidden="true"><ItemIcon size={13} /></span>
                    <span className="mood-name">{item.name}<small>{item.description}</small></span>
                  </button>
                </li>
              )
            })}
            <li>
              <button type="button" aria-pressed={mood === 'cycle'} onClick={() => { onChange('cycle'); setOpen(false) }}>
                <span className="mood-swatch mood-swatch-cycle" aria-hidden="true"><Sparkles size={13} /></span>
                <span className="mood-name">Let the day pass<small>Dawn to night, in five minutes</small></span>
              </button>
            </li>
          </ul>
        </div>
      )}
      <button
        ref={buttonRef}
        type="button"
        className="mood-button"
        aria-expanded={open}
        aria-controls="mood-panel"
        onClick={() => setOpen(value => !value)}
      >
        <Icon size={15} aria-hidden="true" />
        <span>{current ? current.name : `${periodName(hour)}`}</span>
      </button>
    </div>
  )
}
