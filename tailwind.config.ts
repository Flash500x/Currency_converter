import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
        },
        foreground: {
          DEFAULT: '#0a0a0a',
          dark: '#f5f5f5',
        },
        muted: {
          DEFAULT: '#e5e5e5',
          dark: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      typography: (({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground.DEFAULT'),
            a: {
              color: theme('colors.foreground.DEFAULT'),
              textDecoration: 'underline',
              '&:hover': { opacity: 0.8 },
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.foreground.dark'),
            a: {
              color: theme('colors.foreground.dark'),
            },
          },
        },
      })) as any,
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config