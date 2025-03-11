
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "100px",
      screens: {},
    },
    extend: {

      colors: {
        primary: "#3360D3",
        secondary: "#164573",
        "dark-gray": "#242424",
        "medium-dark-gray": "#484848",
        "light-gray": "#959595"

      },
    },
  },
};
