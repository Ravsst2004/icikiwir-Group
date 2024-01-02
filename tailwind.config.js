/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
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

