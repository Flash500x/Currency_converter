import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  const routes = ['', '/blog', '/privacy-policy'].map((p) => ({ url: base + p, lastModified: new Date() }))
  return routes
}