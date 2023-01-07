/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f1835 !important',
        secondary: '#409a70 !important',
        tertiary: {
          100: '#182757',
          200: '#223779',
        },
        'gray-light': '#fbfbfc',
        'gray-dark': '#d5d7db',
        'gray-darker': '#9fa5b1',
        'gray-darkest': '#5A5A5A',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
