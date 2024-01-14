/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF9143",
        black2: {
          300: '#FFFFFF',
          500: '#E5E6EB',
          700: '#262A2C',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        'Rubik': ['Rubik'],
        'Syne': ['Syne'],
      },
    },
  },
  plugins: [],
};
