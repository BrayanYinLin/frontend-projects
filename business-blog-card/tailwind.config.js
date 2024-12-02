/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{html,js}",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        backcolor: '#F2F5F9',
        innerColor: '#FFFFFF',
        titleColor: '#111729',
        bodyColor: '#677489',
      }
    }
  },
  plugins: [],
}

