
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "160px",
      screens: {},
    },
    extend: {

      colors: {
        primary: "#3360D3",
        secondary: "#164573",
        "dark-gray": "#242424",
        "medium-dark-gray": "#484848",

      },
    },
  },
};
