import Hero from '@/components/sections/Hero'
import Gallery from '@/components/sections/Gallery'
import Blog from '@/components/sections/Blog'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import ThemeToggle from '@/components/common/ThemeToggle'

export default function HomePage() {
  return (
    <main className="relative">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="snap-container">
        <section id="hero" className="snap-section"><Hero /></section>
        <section id="gallery" className="snap-section"><Gallery /></section>
        <section id="blog" className="snap-section"><Blog /></section>
        <section id="faq" className="snap-section"><FAQ /></section>
        <section id="contact" className="snap-section"><Contact /></section>
      </div>
    </main>
  )
}