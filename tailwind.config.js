module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red-light':'#FFD8CC',
        'red-medium':'#E95C27',
        'red-dark':'#E24717',
        'orange':'#F5B138',
        'orange-light':'#F8DA5E',
        'orange-normal':'#FFAD2B',
        'cream':'#F9BF80'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
