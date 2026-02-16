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
        // Primary palette - Precision Craft
        ink: {
          DEFAULT: '#0A0A0B',
          light: '#141416',
          lighter: '#1E1E22',
        },
        stone: {
          DEFAULT: '#F5F3EF',
          dark: '#E8E4DC',
          darker: '#D4CFC4',
        },
        coral: {
          DEFAULT: '#FF6B4A',
          light: '#FF8A70',
          dark: '#E55A3A',
        },
        sage: {
          DEFAULT: '#8B9D83',
          light: '#A3B39B',
          dark: '#6E8066',
        },
        silver: {
          DEFAULT: '#C4C4C4',
          light: '#E0E0E0',
          dark: '#9A9A9A',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Fraunces', 'Georgia', 'serif'],
        body: ['Satoshi', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3rem, 2rem + 6vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '2xl-fluid': ['clamp(2.5rem, 1.5rem + 5vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'xl-fluid': ['clamp(1.75rem, 1.25rem + 2.5vw, 3rem)', { lineHeight: '1.2' }],
        'lg-fluid': ['clamp(1.25rem, 1rem + 1.25vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'draw-line': 'drawLine 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
}
