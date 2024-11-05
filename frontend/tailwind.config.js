/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns:{
        '70/30' : '70% 28%'
      },
      backgroundImage: {
        'custom-image': "url('./src/assets/images/logo-color.png')"
      },
      backgroundSize:{
        '75': '75%',
        '50': '50%',
        '25': '25%',
      }
    },
  },
  plugins: [],
}