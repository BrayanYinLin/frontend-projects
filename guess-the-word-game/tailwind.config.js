/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        guess: "url('/bg-guess-the-word.png')"
      },
      colors: {
        dark: '#0c1222',
        midnight: '#030616',
        gray: '#4A5567',
        vapor: '#97A3B6',
        pinkUI: '#C951E7',
        smoke: '#F2F5F9',
        purpleUI: '#7429C6',
        grape: '#672171'
      },
      fontFamily: {
        outfit: ['Outfit']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
