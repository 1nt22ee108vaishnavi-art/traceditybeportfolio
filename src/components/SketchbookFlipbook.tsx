import { type KeyboardEvent, type MouseEvent, type PointerEvent, useRef, useState } from 'react'
import { sketchbookPages } from '../data/portfolio'

type Turn = {
  direction: 'next' | 'previous'
  fromIndex: number
  id: number
}

export default function SketchbookFlipbook(){
  const [pageIndex, setPageIndex] = useState(0)
  const [turn, setTurn] = useState<Turn | null>(null)
  const [failedImages, setFailedImages] = useState<string[]>([])
  const [hoverDirection, setHoverDirection] = useState<Turn['direction'] | null>(null)
  const turnSequence = useRef(0)

  if (sketchbookPages.length === 0) return null

  const currentPage = sketchbookPages[pageIndex]
  const currentImageFailed = failedImages.includes(currentPage.src)

  function changePage(direction: Turn['direction']){
    if (turn) return
    const nextIndex = direction === 'next' ? pageIndex + 1 : pageIndex - 1
    if (nextIndex < 0 || nextIndex >= sketchbookPages.length) return

    setTurn({ direction, fromIndex: pageIndex, id: ++turnSequence.current })
    setPageIndex(nextIndex)
  }

  function turnPageFromPointer(event: MouseEvent<HTMLDivElement>){
    if (event.target instanceof Element && event.target.closest('a, button, input, textarea, select, [role="button"], [data-no-page-turn]')) return
    const bounds = event.currentTarget.getBoundingClientRect()
    changePage(event.clientX - bounds.left < bounds.width / 2 ? 'previous' : 'next')
  }

  function updateHoverDirection(event: PointerEvent<HTMLDivElement>){
    if (event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const direction = event.clientX - bounds.left < bounds.width / 2 ? 'previous' : 'next'
    const targetIndex = direction === 'next' ? pageIndex + 1 : pageIndex - 1
    setHoverDirection(targetIndex >= 0 && targetIndex < sketchbookPages.length && !turn ? direction : null)
  }

  function turnPageFromKeyboard(event: KeyboardEvent<HTMLDivElement>){
    if (event.target !== event.currentTarget) return
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight'){
      event.preventDefault()
      changePage(event.key === 'ArrowRight' ? 'next' : 'previous')
    }
  }

  function markImageFailed(src: string){
    setFailedImages(current => current.includes(src) ? current : [...current, src])
  }

  function artwork(imageIndex: number, hidden = false){
    const image = sketchbookPages[imageIndex]
    const failed = failedImages.includes(image.src)
    return (
      <img
        src={image.src}
        alt={image.alt}
        aria-hidden={hidden || failed}
        className={failed ? 'sketchbook-artwork is-unavailable' : 'sketchbook-artwork'}
        onError={() => markImageFailed(image.src)}
      />
    )
  }

  return (
    <div className="sketchbook-flipbook" role="group" aria-label="Sketchbook pages">
      <div
        className={`sketchbook-sheet${hoverDirection ? ` is-hovering-${hoverDirection}` : ''}`}
        role="group"
        aria-label="Sketchbook sheet. Click or tap the left half for the previous sheet, or the right half for the next sheet."
        aria-live="polite"
        tabIndex={0}
        onClick={turnPageFromPointer}
        onKeyDown={turnPageFromKeyboard}
        onPointerMove={updateHoverDirection}
        onPointerLeave={() => setHoverDirection(null)}
      >
        {artwork(pageIndex, currentImageFailed)}
        {turn && (
          <div
            key={turn.id}
            className={`sketchbook-turn sketchbook-turn--${turn.direction}`}
            aria-hidden="true"
            onAnimationEnd={() => setTurn(null)}
          >
            <div className="sketchbook-turn-face sketchbook-turn-face--front">
              {artwork(turn.fromIndex, true)}
            </div>
            <div className="sketchbook-turn-face sketchbook-turn-face--back">
              {artwork(pageIndex, true)}
            </div>
          </div>
        )}
      </div>
      <span className="visually-hidden" aria-live="polite">
          Sheet {pageIndex + 1} of {sketchbookPages.length}
      </span>
    </div>
  )
}
