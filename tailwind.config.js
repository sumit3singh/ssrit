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
        brand: {
          dark: '#0b192c',
          darker: '#07111e',
          card: '#13253e',
          cardHover: '#1a304f',
          border: 'rgba(52, 211, 153, 0.2)',
          accent: '#34d399',
          lime: '#a3e635',
          mint: '#6ee7b7',
          emerald: '#10b981',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow': 'glow 3s infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(52, 211, 153, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(163, 230, 53, 0.45)' },
        }
      }
    },
  },
  plugins: [],
}
