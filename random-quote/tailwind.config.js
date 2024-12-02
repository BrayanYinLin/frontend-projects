/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        purpleUI: '#6466E9',
        midnightUI: '#111729',
        darkGrayUI: '#20293A',
        grayUI: '#4A5567',
        lightGrayUI: '#97A3B6'
      },
      fontFamily: {
        outfit: ['Outfit']
      },
      backgroundImage: {
        lines: 'url("/src/svg/bg-image-random-quote.svg")'
      }
    },
  },
  plugins: [],
}

