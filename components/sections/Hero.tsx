"use client"

import AnimatedGridBackground from '@/components/reactbits/AnimatedGridBackground'
import GradientRevealText from '@/components/magicui/GradientRevealText'
import Typewriter from '@/components/magicui/Typewriter'
import MorphButton from '@/components/reactbits/MorphButton'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <AnimatedGridBackground>
      <div className="relative mx-auto max-w-5xl px-6 w-full">
        <div className="min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center gap-6">
          <GradientRevealText className="text-4xl md:text-6xl font-semibold tracking-tight">
            Timeless Black & White Photography
          </GradientRevealText>
          <Typewriter text="Weddings • Portraits • Editorial" className="text-sm md:text-base tracking-widest uppercase opacity-80" speed={30} />
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mt-4">
            <MorphButton href="#gallery">Coverages</MorphButton>
            <MorphButton href="#contact">About Us</MorphButton>
          </motion.div>
        </div>
      </div>
    </AnimatedGridBackground>
  )
}