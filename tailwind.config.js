/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./script.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8',
          500: '#06b6d4',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        accent: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        }
      }
    }
  },
  plugins: [],
}
