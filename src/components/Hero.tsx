import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="slide-up">
        <h1 className="text-4xl md:text-6xl font-serif leading-tight">A little charcoal. A little colour. A lot of curiosity.</h1>
        <p className="mt-4 text-muted max-w-lg">Original artwork, messy experiments, and little things made by hand.</p>
        <div className="mt-6 flex gap-4">
          <Link to="/work" className="px-4 py-2 border border-paper rounded text-paper">Explore the work</Link>
          <Link to="/#custom-creations" className="px-4 py-2 bg-paper text-charcoal rounded">Let's make something</Link>
        </div>
      </div>

      <div className="slide-up" aria-label="Artwork image placeholder">
        <div className="aspect-[4/3] rounded border border-dashed border-paper/30 bg-paper/5 flex items-center justify-center text-sm text-muted">
          Image placeholder
        </div>
      </div>
    </section>
  )
}
