/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        github: ['"Be Vietnam Pro"']
      },
      colors: {
        midnightNavy: '#111729',
        deepIndigo: '#1D1B48',
        electricBlue: '#3662E3',
        steelGray: '#20293A',
        slateBlue: '#364153',
        stormyGray: '#4A5567',
        mistyLavender: '#CDD5E0'
      },
      backgroundImage: {
        universe: 'url("/hero-image-github-profile.png")'
      }
    }
  },
  plugins: []
}
