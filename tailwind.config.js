const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#29465B',
      darkblue: '#050A30',
      navyblue: '#000C66',
      plainblue: '#47B5FF',
      babyblue: '#DFF6FF',
      emerald: colors.emerald,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      blue: colors.blue,
      indigo: colors.indigo,
      lime: colors.lime,
      red: colors.red
    },
    extend: {
      fontFamily: {
        body: ['Nunito']
      }
    }
  },
  plugins: []
}
