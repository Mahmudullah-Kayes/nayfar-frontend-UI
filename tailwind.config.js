/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'main': '1300px',
      },
      colors: {
        bg: { DEFAULT: '#080807', 2: '#0f0f0d', 3: '#181816' },
        gold: { DEFAULT: '#c9a84c', light: '#e2c275', dim: 'rgba(201,168,76,0.12)' },
        ivory: { DEFAULT: '#f0ede6', dim: 'rgba(240,237,230,0.55)', faint: 'rgba(240,237,230,0.07)' },
      },
      fontFamily: {
        display: ['"Platypi"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
        'spin-rev': 'spinrev 15s linear infinite',
        'pulse-line': 'pulseline 2.2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeup 0.8s ease both',
      },
      keyframes: {
        spinrev: { to: { transform: 'rotate(-360deg)' } },
        pulseline: {
          '0%,100%': { width: '3rem', opacity: '0.4' },
          '50%': { width: '5rem', opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeup: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

