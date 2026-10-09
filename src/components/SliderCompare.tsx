import React, {useRef, useEffect, useState} from 'react'

export default function SliderCompare({left, right, leftLabel, rightLabel}:{left:string,right:string,leftLabel?:string,rightLabel?:string}){
  const wrapper = useRef<HTMLDivElement|null>(null)
  const [pos, setPos] = useState(50)

  useEffect(()=>{
    function onMove(e:MouseEvent){
      if(!wrapper.current) return
      const rect = wrapper.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const p = Math.max(0, Math.min(100, (x/rect.width)*100))
      setPos(p)
    }
    function up(){ window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', up)}
    function down(){ window.addEventListener('mousemove', onMove); window.addEventListener('mouseup', up)}
    const el = wrapper.current
    if(el){
      el.addEventListener('mousedown', down)
    }
    return ()=>{ if(el) el.removeEventListener('mousedown', down) }
  },[])

  return (
    <div className="relative" ref={wrapper} style={{userSelect:'none'}}>
      <div className="relative h-64 bg-black/5 overflow-hidden rounded">
        <img src={right} alt={rightLabel} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{width:`${pos}%`}}>
          <img src={left} alt={leftLabel} className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-[calc(var(--pos)-12px)] top-0 h-full" style={{left:`calc(${pos}% - 12px)`}}>
          <div className="w-6 h-6 rounded-full bg-paper border border-black/20"/>
        </div>
      </div>
      <div className="flex justify-between text-xs text-muted mt-2">
        <div>{leftLabel}</div>
        <div>{rightLabel}</div>
      </div>
    </div>
  )
}
