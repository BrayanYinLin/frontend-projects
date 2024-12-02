/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['"DM Sans"']
      },
      colors: {
        midnightBlack: '#111315',
        graphiteGray: '#1B1D1F',
        slateGray: '#6F757C',
        mintGreen: '#BEE3CC',
        creamyWhite: '#FEF7EE',
        amberOrange: '#F6C768',
        coralRed: '#ED735D'
      },
      backgroundImage: {
        coffee: "url('/bg-cafe.jpg')"
      }
    },
  },
  plugins: [],
}