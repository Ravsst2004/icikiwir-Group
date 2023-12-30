/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
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

