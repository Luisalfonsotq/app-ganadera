module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'primary-verde': '#509628',
        'primary-marron': '#785028',
        'primary-blanco': '#FFFFFF',
        'secondary-celeste': '#468CC8',
        'secondry-amarillo': '#F0BE3C',
        'terciario-gris': '#B4B4B4',
        'terciario-blanco': '#F5F5F0'
      }
    },
  },
  plugins: [],
}
