/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['"DM Sans"']
      },
      backgroundImage: {
        planet: "url('/hero_img.jpg')"
      },
      colors: {
        midnightBlue: '#040711',
        offWhite: '#F9FAFB',
        paleSlateBlue: '#CDD5E0',
        ceruleanBlue: '#3662E3',
        skyBlue: '#7CA9F3',
        steelBlue: '#4D5562',
        charcoalGray: '#394150',
        steelBlueTransparent: '#121826cc',
        charcoalGrayTransparent: '#212936cc'
      }
    }
  },
  plugins: []
}
