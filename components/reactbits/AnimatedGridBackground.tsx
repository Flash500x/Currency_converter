"use client"

import { motion, useAnimationFrame } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedGridBackground({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useAnimationFrame((t) => {
    const el = ref.current
    if (!el) return
    const x = Math.sin(t / 3000) * 10
    const y = Math.cos(t / 3000) * 10
    el.style.backgroundPosition = `${x}px ${y}px`
  })
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={ref}
        aria-hidden
        className="absolute inset-0 opacity-70 grayscale-contrast"
        style={{
          backgroundImage:
            'linear-gradient(#00000011 1px, transparent 1px), linear-gradient(90deg, #00000011 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10">{children}</div>
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,0,0,0.1),transparent_40%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </div>
  )
}