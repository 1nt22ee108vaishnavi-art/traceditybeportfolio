import React, { useMemo, useState } from 'react'

type GalleryItem = {
  id: string
  accent: string
}

type GalleryTab = {
  id: string
  label: string
  items: GalleryItem[]
}

const galleryTabs: GalleryTab[] = [
  {
    id: 'paintings',
    label: 'Paintings',
    items: [
      { id: 'painting-1', accent: 'linear-gradient(135deg, #d8b67d 0%, #9b6d4d 35%, #3d2f29 100%)' },
      { id: 'painting-2', accent: 'linear-gradient(135deg, #8fb5c9 0%, #4e6e8a 35%, #1d2b3f 100%)' },
      { id: 'painting-3', accent: 'linear-gradient(135deg, #494d7d 0%, #2b2d42 35%, #161b2d 100%)' }
    ]
  },
  {
    id: 'drawings',
    label: 'Drawings',
    items: [
      { id: 'drawing-1', accent: 'linear-gradient(135deg, #d9c3a5 0%, #b18d6b 38%, #5b473e 100%)' },
      { id: 'drawing-2', accent: 'linear-gradient(135deg, #9eb78e 0%, #6e8d6d 38%, #2d3b33 100%)' },
      { id: 'drawing-3', accent: 'linear-gradient(135deg, #b9a99b 0%, #7e695b 38%, #2d2c2e 100%)' }
    ]
  },
  {
    id: 'prints',
    label: 'Prints',
    items: [
      { id: 'print-1', accent: 'linear-gradient(135deg, #d7c58a 0%, #bc8d5d 38%, #5a3d2d 100%)' },
      { id: 'print-2', accent: 'linear-gradient(135deg, #9bc7d8 0%, #5f90a8 38%, #27394a 100%)' },
      { id: 'print-3', accent: 'linear-gradient(135deg, #d5d5d5 0%, #a0a0a0 38%, #474747 100%)' }
    ]
  },
  {
    id: 'commissions',
    label: 'Commissions',
    items: [
      { id: 'commission-1', accent: 'linear-gradient(135deg, #e6d3b3 0%, #b98d5f 35%, #583d2d 100%)' },
      { id: 'commission-2', accent: 'linear-gradient(135deg, #caaed1 0%, #8f6d9d 35%, #3c2a48 100%)' },
      { id: 'commission-3', accent: 'linear-gradient(135deg, #f0caa7 0%, #d68c68 35%, #673b2a 100%)' }
    ]
  }
]

export default function Gallery(){
  const [activeTab, setActiveTab] = useState(galleryTabs[0].id)

  const activeGallery = useMemo(
    () => galleryTabs.find(tab => tab.id === activeTab) ?? galleryTabs[0],
    [activeTab]
  )

  const selectedItem = activeGallery.items[0]

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Portfolio</p>
        <h1 className="text-3xl font-serif">Work</h1>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {galleryTabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              activeTab === tab.id
                ? 'bg-paper text-charcoal border-paper'
                : 'border-paper/30 text-paper/80 hover:border-paper/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-paper/20 overflow-hidden bg-graphite/60">
        <div className="h-[420px] w-full" style={{ background: selectedItem.accent }} />
      </div>
    </div>
  )
}
