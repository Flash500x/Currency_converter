"use client"

import { useMemo, useState } from 'react'
import Lightbox from '@/components/common/Lightbox'
import { motion } from 'framer-motion'

const IMAGES = Array.from({ length: 12 }).map((_, i) => `/images/gallery/gallery-${String(i + 1).padStart(2, '0')}.svg`)

export default function Gallery() {
  const [grayscale, setGrayscale] = useState(true)
  const [active, setActive] = useState<string | null>(null)

  const cols = useMemo(() => ({ base: 2, md: 3, lg: 4 }), [])

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Gallery</h2>
          <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
            <input aria-label="Toggle grayscale" type="checkbox" checked={grayscale} onChange={() => setGrayscale((g) => !g)} className="accent-black" />
            Grayscale
          </label>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {IMAGES.map((src, idx) => (
            <motion.button
              key={src}
              className="mb-4 block w-full overflow-hidden focus-ring"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.02 }}
              onClick={() => setActive(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                loading="lazy"
                className={`w-full h-auto transition-transform duration-300 ease-out ${grayscale ? 'grayscale' : ''} hover:scale-[1.03]`}
              />
            </motion.button>
          ))}
        </div>
      </div>
      {active && <Lightbox src={active} alt="Preview" onClose={() => setActive(null)} />}
    </div>
  )
}