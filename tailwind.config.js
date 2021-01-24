module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.svelte',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tan: '#cc001a'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
