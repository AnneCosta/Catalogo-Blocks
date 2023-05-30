/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        background: '#FBFBFB',
        barBackground: '#242424',
        textPri: '#202020',
        textSec: '#FFFFFF',
        borderCol: '#CCCCCC',
        gradient: {
          pink: '#D835C5',
          purple: '#A11CF3' 
        }
      }
    },
  },
  plugins: [],
}

