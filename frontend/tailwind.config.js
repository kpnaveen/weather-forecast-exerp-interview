/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "rgba(66,185,131,0.1)",
        "primary-300": "rgba(66,185,131,0.3)"
      },
    },
  },
  plugins: [],
};
