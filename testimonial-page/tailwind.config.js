/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    extend: {
      colors: {
        iconColor: '#F5C044',
        checkColor: '#4CA154',
        titleColor: '#18181B',
        bodyTextColor: '#52525A',
        bodyBackgroundColor: '#FAFAF9',
        smallTextColor: 'D4D4D8',
        fullWhiteColor: '#FFFFFF'
      },
      fontFamily: {
        page: ['Sora']
      }
    }
  },
  plugins: []
}
