"use client"

import { motion } from 'framer-motion'

export default function StaggeredText({ lines, className = '' }: { lines: string[]; className?: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }
  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {lines.map((line, idx) => (
        <motion.p key={idx} variants={item} className="leading-relaxed">
          {line}
        </motion.p>
      ))}
    </motion.div>
  )
}