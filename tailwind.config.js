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
        background: '#110F0E',
        surface: '#1C1917',
        ivory: '#F7F1E8',
        champagne: '#C6A66B',
        blush: '#C99A91',
        burgundy: '#7B3944',
        muted: '#9C938B',
        border: 'rgba(255,255,255,0.10)',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
