"use client"

import Accordion from '@/components/reactbits/Accordion'

const items = [
  { question: 'Do you travel for assignments?', answer: 'Yes. We work worldwide. Travel fees are quoted case by case.' },
  { question: 'Do you deliver color images?', answer: 'Our signature is monochrome. Color is available upon request for specific deliverables.' },
  { question: 'How soon do we receive the photos?', answer: 'Previews within 72 hours. Full delivery in 3–6 weeks depending on coverage.' },
]

export default function FAQ() {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">FAQ</h2>
        <Accordion items={items} />
      </div>
    </div>
  )
}