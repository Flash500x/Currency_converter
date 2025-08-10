"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setError(null)
    setLoading(true)
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    }
    if (!payload.name || !payload.email || !payload.message) {
      setError('Please fill in all fields.')
      setLoading(false)
      return
    }
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })
      const json = await res.json()
      if (!json.ok) throw new Error(json.error || 'Failed to send')
      setSuccess(true)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="max-w-xl mx-auto px-6 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Contact Us</h2>
        <AnimatePresence initial={false}>
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="border border-black/10 dark:border-white/10 p-6 text-center"
            >
              <p className="text-lg">Thanks — we will get back to you shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
              action={async (fd) => onSubmit(fd)}
            >
              <Field label="Name" name="name" type="text" />
              <Field label="Email" name="email" type="email" />
              <Field label="Message" name="message" type="textarea" />
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={loading} className="px-6 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors focus-ring">
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Field({ label, name, type }: { label: string; name: string; type: 'text' | 'email' | 'textarea' }) {
  return (
    <label className="block">
      <span className="text-sm opacity-80">{label}</span>
      {type === 'textarea' ? (
        <motion.textarea whileFocus={{ scale: 1.01 }} name={name} rows={5} className="mt-1 block w-full border border-black/10 dark:border-white/10 bg-transparent p-3 focus-ring" />
      ) : (
        <motion.input whileFocus={{ scale: 1.01 }} type={type} name={name} className="mt-1 block w-full border border-black/10 dark:border-white/10 bg-transparent p-3 focus-ring" />
      )}
    </label>
  )
}