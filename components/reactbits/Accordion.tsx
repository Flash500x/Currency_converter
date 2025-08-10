"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-black/10 dark:divide-white/10" role="list">
      {items.map((item, idx) => {
        const isOpen = open === idx
        return (
          <div key={idx} className="py-4" role="listitem">
            <button
              className="w-full text-left flex items-center justify-between gap-4 focus-ring"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : idx)}
            >
              <span className="font-medium">{item.question}</span>
              <span aria-hidden className="text-sm">{isOpen ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 text-sm text-black/70 dark:text-white/70">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}