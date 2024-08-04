/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        yekan: ['customFont', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
