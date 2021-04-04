const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blueGray: colors.blueGray,
      white: colors.white,
      green: colors.green,
      gray: colors.gray,
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled']
    },
  },
  plugins: [],
}
