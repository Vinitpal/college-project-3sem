const colors = require("tailwindcss/colors");

module.exports = {
  enabled: true,
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      spacing: {
        88: "22rem",
      },
      colors: {
        background: "#0f0e17",
        main: "#fffffe",
        subHeadLine: "#2e2f3e",
        paragraph: "#a7a9be",
        highlight: "#ff8906",
        secondary: "#f25f4c",
        tertiary: "#e53170",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {},
  plugins: [],
};
