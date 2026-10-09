import React, {useState} from 'react'
import sketches from '../data/sketches'
import Lightbox from './lightbox/Lightbox'
import SliderCompare from './SliderCompare'

export default function SketchbookGrid(){
  const [open, setOpen] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const [activeId, setActiveId] = useState<string | null>(null)

  function openLightbox(id:string, idx:number){
    setActiveId(id)
    setIndex(idx)
    setOpen(true)
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sketches.map((s, i) => (
          <div key={s.id} className="group bg-paper rounded overflow-hidden cursor-pointer" onClick={()=>openLightbox(s.id,0)}>
            <img src={s.img} alt={s.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
            <div className="p-3">
              <div className="font-semibold text-charcoal">{s.title}</div>
              <div className="text-xs text-muted">{s.medium}</div>
            </div>
            <div className="p-3 text-xs text-muted handwritten">Hover to reveal note</div>
            <div className="-mt-12 p-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 text-sm text-paper">{s.note}</div>
          </div>
        ))}
      </div>

      {open && activeId && (
        <Lightbox items={sketches.find(s=>s.id===activeId)!.process} startIndex={index} onClose={()=>setOpen(false)} />
      )}

      <div className="mt-8">
        <h3 className="font-serif text-xl mb-4">Before & after</h3>
        <SliderCompare left={'/assets/placeholder-sketch1.jpg'} right={'/assets/placeholder-watercolor.jpg'} leftLabel={'sketch'} rightLabel={'finished'} />
      </div>
    </div>
  )
}
