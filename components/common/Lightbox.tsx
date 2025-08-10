"use client"

import { useEffect } from 'react'

export default function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div role="dialog" aria-modal className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
      <img src={src} alt={alt} className="max-h-full max-w-full cursor-zoom-out" onClick={(e) => e.stopPropagation()} />
      <button aria-label="Close" className="absolute top-4 right-4 text-white focus-ring" onClick={onClose}>×</button>
    </div>
  )
}