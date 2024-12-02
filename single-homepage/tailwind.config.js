/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      colors: {
        realBlue: '#2A4DD0',
        limeGreen: '#4CA154',
        darkNavy: '#111729',
        oceanBlue: '#223344',
        bluishGray: '#909193',
        skyWhite: '#F2F9FE',
        fullWhite: '#FFFFFF'
      },
      fontFamily: {
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}

