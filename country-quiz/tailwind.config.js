/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: 'url(/bg.jpg)'
      },
      colors: {
        'light-purple': '#8B8EAB'
      },
      fontFamily: {
        bevietnam: ['"Be Vietnam Pro"']
      }
    }
  },
  plugins: []
}
