"use client"

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function GradientRevealText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('relative inline-block overflow-hidden', className)}>
      <motion.span
        initial={{ backgroundPositionX: '100%' }}
        whileInView={{ backgroundPositionX: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="bg-[linear-gradient(90deg,_#000,_#fff,_#000)] bg-[length:200%_100%] bg-clip-text text-transparent"
      >
        {children}
      </motion.span>
    </div>
  )
}