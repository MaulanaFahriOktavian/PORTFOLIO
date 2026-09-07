/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#F1F5F9',
          subtle: '#D1FAE5',
        },
        foreground: {
          DEFAULT: '#111827',
          muted: '#4B5563',
          subtle: '#64748B',
        },
        border: {
          DEFAULT: 'rgba(22, 163, 74, 0.12)',
          hover: 'rgba(34, 197, 94, 0.5)',
          green: 'rgba(34, 197, 94, 0.35)',
          strong: 'rgba(17, 24, 39, 0.12)',
        },
        accent: {
          DEFAULT: '#16A34A',
          bright: '#22C55E',
          soft: '#B6EFAC',
          pale: '#D1FAE5',
          subtle: 'rgba(34, 197, 94, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter Tight"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.14em',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #16A34A 0%, #22C55E 50%, #16A34A 100%)',
        'gradient-premium-subtle': 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.08) 50%, rgba(182, 239, 172, 0.02) 100%)',
        'gradient-light-tech': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(34, 197, 94, 0.2) 0%, rgba(248, 250, 252, 0) 70%)',
      }
    },
  },
  plugins: [],
}
