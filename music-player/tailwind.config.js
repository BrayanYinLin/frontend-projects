/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        pinkUI: '#C93B76',
        darkGrayUI: '#212936',
        grayUI: '#4D5562',
        whiteUI: '#E5E7EB',
        lightGrayUI: '#121826a6'
      },
      backgroundImage: {
        oficialGradient: 'url(./src/image/bg.jpg)'
      },
      fontFamily: {
        oficial: ['Inter']
      }
    }
  },
  plugins: []
}
