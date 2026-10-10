import { useEffect, useRef } from 'react'

export default function ScrollSunlight(){
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const light = lightRef.current
    const section = light?.parentElement
    if (!light || !section) return

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    function updateLight(){
      frame = 0
      if (!light || !section || motionPreference.matches) return

      const bounds = section.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)))
      const drift = Math.sin(progress * Math.PI * 2)
      const passage = Math.sin(progress * Math.PI)
      light.style.setProperty('--sun-x', `${-12 + progress * 24}%`)
      light.style.setProperty('--sun-y', `${drift * 2.5}%`)
      light.style.setProperty('--sun-angle', `${-11 + progress * 22 + drift * 3}deg`)
      light.style.setProperty('--sun-intensity', `${0.09 + passage * 0.055}`)
    }

    function scheduleUpdate(){
      if (frame === 0) frame = window.requestAnimationFrame(updateLight)
    }

    function handleMotionPreferenceChange(){
      if (motionPreference.matches){
        if (frame !== 0) window.cancelAnimationFrame(frame)
        frame = 0
        light?.removeAttribute('style')
      } else {
        scheduleUpdate()
      }
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    motionPreference.addEventListener('change', handleMotionPreferenceChange)
    scheduleUpdate()

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      motionPreference.removeEventListener('change', handleMotionPreferenceChange)
      if (frame !== 0) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="scroll-sunlight" ref={lightRef} aria-hidden="true" />
}
