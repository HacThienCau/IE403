/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        theme:{
          light:{
            bg: "#FBF9F1",
            text : "#1A1A19",
            sidebar: "#E5E1DA",
            active: "#00ADB5"
          },
          dark:{
            bg: "#393E46",
            text : "#EEEEEE",
            sidebar: "#222831",
            active: "#00ADB5"
          }
        }
      },
    },
  },
  plugins: [],
};
