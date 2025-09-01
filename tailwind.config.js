/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        light: "#f8f9fa",
        accent: "#2dbe6c",
        accentLight: "#e5f8ed",
        dark: "#1b1d21",
        lightDark: "#b2b2b2",
      }
    },
  },
  plugins: [],
};
