export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],
  headlessui: {
    prefix: "Headless",
  },
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
  srcDir: "./",
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
