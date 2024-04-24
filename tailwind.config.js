/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6700",
        secondary: "#EAE9E9",
        hover: "#C85100",
        text: "#424244",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        kalnia: ["Kalnia", "sans-serif"],
      },
    },
  },
  plugins: [],
};
