/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["index.html"],
  darkMode: false,
  theme: {
    extend: {
      ringWidth: {
        '10': '10px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
