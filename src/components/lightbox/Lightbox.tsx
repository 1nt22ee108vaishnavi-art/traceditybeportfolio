import React, {useEffect, useState} from 'react'

type Props = {
  items: string[]
  startIndex?: number
  onClose: ()=>void
}

export default function Lightbox({items, startIndex=0, onClose}:Props){
  const [index,setIndex] = useState(startIndex)

  useEffect(()=>{
    function onKey(e:KeyboardEvent){
      if(e.key === 'Escape') onClose()
      if(e.key === 'ArrowRight') setIndex(i=>Math.min(i+1, items.length-1))
      if(e.key === 'ArrowLeft') setIndex(i=>Math.max(i-1,0))
    }
    window.addEventListener('keydown', onKey)
    return ()=>window.removeEventListener('keydown', onKey)
  },[items.length, onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-paper p-2">Close</button>
        <img src={items[index]} alt={`view ${index+1}`} className="w-full h-[70vh] object-contain" />
        <div className="flex justify-between mt-3">
          <button onClick={()=>setIndex(i=>Math.max(i-1,0))} disabled={index===0} className="px-3 py-1 bg-paper/10 text-paper rounded">Prev</button>
          <div className="text-sm text-muted">{index+1} / {items.length}</div>
          <button onClick={()=>setIndex(i=>Math.min(i+1, items.length-1))} disabled={index===items.length-1} className="px-3 py-1 bg-paper/10 text-paper rounded">Next</button>
        </div>
      </div>
    </div>
  )
}
