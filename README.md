# Monochrome Photography — Next.js + Tailwind + Framer Motion

A production-ready, fully responsive monochrome photography website built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and custom components inspired by React Bits and Magic UI Design.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS (Typography plugin)
- Framer Motion
- next-themes (dark/light toggle)
- Lucide icons

## Features
- Pure black & white theme with Poppins font
- Animated hero with React Bits–style background and Magic UI–style text effects
- Gallery masonry with grayscale toggle, hover zoom, and lightbox
- Blog cards with scroll reveal and hover underline
- FAQ accordion with smooth expand/collapse
- Privacy Policy page with elegant typography and fade-ins
- Accessible components (keyboard, ARIA, focus states)
- Lazy-loaded images
- SEO metadata and Open Graph
- Scroll snapping between sections
- Reusable animation wrappers
- Vercel/Netlify ready

## Getting Started

1. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn
```

2. Run the dev server

```bash
npm run dev
```

3. Open http://localhost:3000

## Swap Backgrounds & Text Effects
- Background: `components/reactbits/AnimatedGridBackground.tsx`. Replace grid with another effect (e.g., dot grid, noise, particles). The wrapper renders children on top. Keep grayscale filters for theme cohesion.
- Text effects:
  - Typewriter: `components/magicui/Typewriter.tsx` (change speed prop)
  - Gradient reveal: `components/magicui/GradientRevealText.tsx` (adjust gradient stops)
  - Staggered: `components/magicui/StaggeredText.tsx` (tweak stagger timing)

## Structure
```
app/
  page.tsx                 # Home with snap sections
  layout.tsx               # Fonts, metadata, theme provider
  privacy-policy/page.tsx  # Legal page
  blog/page.tsx            # Blog index
  api/contact/route.ts     # Contact endpoint (stub)
components/
  sections/                # Hero, Gallery, Blog, FAQ, Contact
  magicui/                 # Magic UI–style text effects
  reactbits/               # React Bits–style backgrounds & interactions
  common/                  # Lightbox, ThemeToggle, ThemeProvider
public/
  images/gallery/          # SVG placeholders
  images/blog/             # SVG placeholders
  og-cover.svg             # Open Graph placeholder
```

## Accessibility
- Buttons and links have focus-visible rings via `focus-ring` class
- Lightbox closes with Escape and backdrop click
- Accordion uses `aria-expanded`

## Deployment
- Vercel: push to GitHub and import; or run `vercel` in the project root
- Netlify: configure to build with `npm run build` and publish `.next`

## CI/CD (optional)
A simple build workflow is included in `.github/workflows/ci.yml`.

## Notes
- Replace `public/og-cover.svg` and `public/favicon.ico` with brand assets
- For real email sending, integrate `/app/api/contact/route.ts` with a provider (Resend/SendGrid)
- Keep imagery monochrome for visual coherence
