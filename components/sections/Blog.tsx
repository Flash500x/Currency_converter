"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  { slug: 'timeless-portraits', title: 'The Art of Timeless Portraits', excerpt: 'Techniques to capture enduring character in monochrome.', cover: '/images/blog/blog-01.svg' },
  { slug: 'wedding-coverage', title: 'Elegant Wedding Coverage', excerpt: 'A discreet approach for authentic storytelling.', cover: '/images/blog/blog-02.svg' },
  { slug: 'editorial-light', title: 'Shaping Light for Editorials', excerpt: 'Sculpting contrast for compelling frames.', cover: '/images/blog/blog-03.svg' },
]

export default function Blog() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Blog</h2>
          <Link href="/blog" className="text-sm underline decoration-black/30 dark:decoration-white/30 underline-offset-4 hover:decoration-black dark:hover:decoration-white">View all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group border border-black/10 dark:border-white/10 p-4"
            >
              <img src={post.cover} alt="" className="w-full h-44 object-cover mb-3 grayscale" loading="lazy" />
              <h3 className="text-lg font-medium">
                <Link href={`/blog/${post.slug}`} className="underline decoration-transparent group-hover:decoration-black dark:group-hover:decoration-white underline-offset-[6px] transition-[text-decoration-color]">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm opacity-70 mt-1">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}