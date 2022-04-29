module.exports = {
  content: ['./default/**/*.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      variants: { extend: { display: ['dark'] } },
      colors: {
        'teal-lighter': '#A9F3EA',
        'teal-light': '#6AE7DA',
        'teal': '#18D0BA',
        'teal-dark': '#0CA896',
        'teal-darker': '#0E6459',
        'gray-darker': '#333333',
        'gray-darkest': '#222222',
        'gray-lighter': '#F5F5F5',
        'gray-light': '#CACACA',
        'teal-gray-dark': '#6C7B7A',
        'teal-gray-darker': '#566868'
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      fontWeight: {
        light: 300,
        medium: 500,
        bold: 700
      },
      keyframes: {
        'fadein': {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        animation: {
          'fadein': 'fade-in 2s 2s forwards',
        }  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}