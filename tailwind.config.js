module.exports = {
  purge : [
    '*.html',
    '*/**.{html,css,js}' 
  ],
  darkMode : 'class',
  mode : 'jit', 
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem'
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ba331e',
          black: '#222831',
          gray: '#393E46',
          white: '#EEEEEE'
        }
      }
    },
  },
  plugins: [],
}
