"use client"

import { useEffect, useState } from 'react'

export default function Typewriter({ text, speed = 40, className = '' }: { text: string; speed?: number; className?: string }) {
  const [output, setOutput] = useState('')
  useEffect(() => {
    setOutput('')
    let i = 0
    const id = setInterval(() => {
      i += 1
      setOutput(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return <span className={className} aria-label={text}>{output}</span>
}