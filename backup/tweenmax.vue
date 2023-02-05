<template>
    <main class="main-content bg-black">
        <section ref="slideshow" :data-transition="transitionType" class="slideshow">
            <div ref="slideShowInner" class="slideshow-inner">
                <div ref="slides" class="slides">
                    <div v-for="(slide, index) in slideData" :key="index" ref="slide" class="slide ">

                        <div class="slide-content">
                            <div class="caption">
                                <div class="title">{{
                                    slide.title
                                }}
                                </div>
                                <div ref="text" class="text">
                                    <p>{{ slide.description }}</p>
                                </div>
                                <a ref="btn" href="#" class="btn">
                                    <span ref="btnInner" class="btn-inner">Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div class="image-container">
                            <img :src="slide.img" alt="" class="image " />
                        </div>
                    </div>
                </div>
                <div ref="pagination" class="pagination">
                    <div ref="pages" v-for="(slide, index) in slideData" :key="index" class="item"
                        @click="goToSlide(index)">
                        <span class="icon"></span>
                    </div>

                </div>
                <div ref="arrows" class="arrows">
                    <div class="arrow prev" @click="prevSlide">
                        <span class="svg svg-arrow-left">
                            <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                                viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve">
                                <path
                                    d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" />
                            </svg>
                            <span class="alt sr-only"></span>
                        </span>
                    </div>
                    <div class="arrow next" @click="nextSlide">
                        <span class="svg svg-arrow-right">
                            <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                                viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve">
                                <path
                                    d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" />
                            </svg>
                            <span class="alt sr-only"></span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// import { slideshowSwitch, slideshowNext, slideshowPrev,homeSlideshowParallax } from "../composables/useGsap"
import { slideData, slideshowSwitch, slideshowNext, slideshowPrev, homeSlideshowParallax } from "~/composables/useGsap"

const slideshowDuration = ref(4000)
const slideshow = ref(null)

const transitionType = ref('other')

const goToSlide = (index) => {
    console.log(index);
    slideshowSwitch(slideshow, index, true)
}

function nextSlide() {
    slideshowNext(slideshow, false, true);
}
function prevSlide() {
    slideshowNext(slideshow, true, true);
}

onMounted(async () => {
    var slide = slideshow.value.querySelectorAll('.slide')
    slide.forEach(el => el.classList.add('is-loaded'))
    slide[0].classList.add('is-active')

    var timeout = setTimeout(function () {
        slideshowNext(slideshow, false, true);
    }, slideshowDuration.value);

    slideshow.value.dataset.timeout = timeout;
});

// https://codepen.io/bcarvalho/pen/gWPvJB

</script>
