/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        sendButtonColor: '#4036A9',
        txtColor: '#111729',
        whiteColor: '#FFFFFF',
        grayColor: '#CDD5E0',
        whiteDarkColor: '#F8FAFC'
      },
      fontFamily: {
        oficial: ['"Be Vietnam Pro"']
      },
      backgroundImage: {
        bgSvg: 'url(./src/bg-image.svg)'
      }
    }
  },
  plugins: []
}
