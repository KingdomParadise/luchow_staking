module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pink-light':'#FFE2D9',
        'red-light':'#FFD8CC',
        'red-medium':'#E95C27',
        'red-dark':'#E24717',
        'popup-red':'#FF7B53',
        'orange':'#F9BF80',
        'orange-light':'#F8DA5E',
        'orange-normal':'#FFAD2B',
        'cream':'#F9BF80',
        'custom-grey':'#8E8E8E',
        'white-pink':'#FFF1EC'
      },
      borderRadius: {
        'large':'3rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
