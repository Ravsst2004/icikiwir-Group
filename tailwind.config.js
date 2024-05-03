/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins',
      }
    },
  },
  plugins: [],
}

