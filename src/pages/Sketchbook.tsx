import React from 'react'
import SketchbookGrid from '../components/SketchbookGrid'

export default function Sketchbook(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif mb-6">Sketchbook & Experiments</h1>
      <p className="text-muted mb-6">Rough sketches, tests, process notes and spontaneous experiments. Click to view notes and process sequences.</p>
      <SketchbookGrid />
    </div>
  )
}
