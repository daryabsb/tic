import Flickity from "vue-flickity";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(Flickity, {
    autoPlay: 5000,
    pageDots: false,
    resize: true,
    prevNextButtons: false,
    wrapAround: true,
  });
});
