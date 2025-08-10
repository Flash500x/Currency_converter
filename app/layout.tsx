import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import { cn } from '@/lib/utils'

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Monochrome Photography — Timeless Luxury Imagery',
  description: 'A minimalist black & white photography studio. Weddings, portraits, and editorial coverage with timeless elegance.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Monochrome Photography — Timeless Luxury Imagery',
    description: 'Minimalist black & white photography studio.',
    url: 'https://example.com',
    siteName: 'Monochrome Photography',
    images: [{ url: '/og-cover.svg', width: 1200, height: 630, alt: 'Monochrome Photography' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monochrome Photography',
    description: 'Minimalist black & white photography studio.',
    images: ['/og-cover.svg'],
  },
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico' }
}

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }, { media: '(prefers-color-scheme: light)', color: '#ffffff' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.variable, 'font-sans bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark')}>        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="mono-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}