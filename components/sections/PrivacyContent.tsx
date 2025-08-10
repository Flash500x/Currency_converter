"use client"

import { motion } from 'framer-motion'

export default function PrivacyContent() {
  const section = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 prose prose-neutral dark:prose-invert">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        Privacy Policy
      </motion.h1>
      <motion.p variants={section} initial="hidden" animate="show">
        Your privacy is important to us. This policy explains what personal data we collect and how we use it.
      </motion.p>
      <motion.h2 variants={section} initial="hidden" animate="show">Information We Collect</motion.h2>
      <motion.p variants={section} initial="hidden" animate="show">
        We may collect contact details you provide via forms, as well as usage data for improving our site.
      </motion.p>
      <motion.h2 variants={section} initial="hidden" animate="show">How We Use Information</motion.h2>
      <motion.p variants={section} initial="hidden" animate="show">
        We use your data to respond to inquiries and improve our services. We do not sell your data.
      </motion.p>
      <motion.h2 variants={section} initial="hidden" animate="show">Contact</motion.h2>
      <motion.p variants={section} initial="hidden" animate="show">
        For privacy questions, contact privacy@monochrome.example.
      </motion.p>
    </div>
  )
}