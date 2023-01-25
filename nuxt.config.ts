export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],
  headlessui: {
    prefix: "Headless",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=500, initial-scale=1",
      title: "Logos 0|0",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat:400,900",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
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
