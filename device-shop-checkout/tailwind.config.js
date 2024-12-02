/** @type {import('tailwindcss').Config} */
export default {
  content:  ["./index.html" , "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        minimalbg: "url('/background-image.png')"
      }
    },
  },
  plugins: [],
}