/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fancy: [`"Dancing Script"`, `cursive`],
    },
    extend: {},
  },
  plugins: [],
};
