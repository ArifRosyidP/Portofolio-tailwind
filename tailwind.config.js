/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#d97706",
        dark: "#0f172a",
        secondary: "#9ca3af",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    "prettier-plugin-organize-attributes",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
};
