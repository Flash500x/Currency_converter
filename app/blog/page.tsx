import Blog from '@/components/sections/Blog'

export const metadata = { title: 'Blog — Monochrome Photography' }

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen py-16">
      <Blog />
    </div>
  )
}