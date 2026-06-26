/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf8ed',
          100: '#f8eed3',
          200: '#f0d9a3',
          300: '#e5bf6b',
          400: '#d9a43f',
          500: '#c9a84c',
          600: '#b8922a',
          700: '#9a7522',
          800: '#7e5e22',
          900: '#694d1e',
        },
        dark: {
          900: '#080808',
          800: '#0f0f0f',
          700: '#1a1a1a',
          600: '#242424',
          500: '#333333',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'ken-burns-1': {
          '0%':   { transform: 'scale(1.0) translate(0%, 0%)' },
          '100%': { transform: 'scale(1.18) translate(-3%, -2%)' },
        },
        'ken-burns-2': {
          '0%':   { transform: 'scale(1.12) translate(3%, 2%)' },
          '100%': { transform: 'scale(1.0) translate(0%, 0%)' },
        },
        'ken-burns-3': {
          '0%':   { transform: 'scale(1.0) translate(-2%, 2%)' },
          '100%': { transform: 'scale(1.15) translate(2%, -1%)' },
        },
        'ken-burns-4': {
          '0%':   { transform: 'scale(1.15) translate(2%, -2%)' },
          '100%': { transform: 'scale(1.02) translate(-1%, 1%)' },
        },
        'ken-burns-5': {
          '0%':   { transform: 'scale(1.0) translate(1%, 1%)' },
          '100%': { transform: 'scale(1.2) translate(-1%, -1%)' },
        },
        'slide-reveal': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        'line-grow': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'ken-burns-1': 'ken-burns-1 8s ease-in-out forwards',
        'ken-burns-2': 'ken-burns-2 8s ease-in-out forwards',
        'ken-burns-3': 'ken-burns-3 8s ease-in-out forwards',
        'ken-burns-4': 'ken-burns-4 8s ease-in-out forwards',
        'ken-burns-5': 'ken-burns-5 8s ease-in-out forwards',
        'line-grow': 'line-grow 1s ease forwards',
      },
    },
  },
  plugins: [],
};
