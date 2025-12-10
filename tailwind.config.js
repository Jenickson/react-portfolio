/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor : {
        'primary' : '#4dc9ff',
        'secondary' : '#00b8ff'
      }
    },
    fontFamily: {
      'hero-font': 'Sriracha',
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    }
  },
  plugins: [],
}