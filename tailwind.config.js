/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "graphik-regular-web": ["graphik-regular-web"],
      "graphik-semibold-web": ["graphik-semibold-web"],
      "graphik-black-web": ["graphik-black-web"],
      "graphik-bold-web": ["graphik-bold-web"],
      ionicons: ["ionicons"],
      "reenie-beanie-regular": ["reenie-beanie-regular"],
    },
    extend: {
      scale: {
        "125": "1.25",
        "175": "1.75",
      },
      animation: {
        hscroll: "fadeIn 3s linear infinite",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        blood: "#ae0d00",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
