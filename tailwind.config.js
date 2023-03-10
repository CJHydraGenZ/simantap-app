/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
