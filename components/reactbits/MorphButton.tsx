"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MorphButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-block">
      <motion.span
        whileHover={{ borderRadius: 9999, letterSpacing: '0.08em' }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="px-6 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
      >
        {children}
      </motion.span>
    </Link>
  )
}