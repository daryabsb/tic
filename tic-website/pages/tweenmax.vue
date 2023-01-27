<template>
    <main class="text-center">
        <section ref="slideshow" class="overflow-hidden relative w-full h-screen z-10">
            <div ref="slideShowInner" class="absolute left-0 right-0 w-full h-full">
                <div ref="slides" class="absolute top-0 left-0 w-full h-full z-10">
                    <div ref="slide" v-for="(slide, index) in slideData" :key="index" :class="[
                        activeSlide === index
                            ? 'is-active block' : 'hidden', 'absolute top-0 left-0 w-full h-full z-10 overflow-hidden'
                    ]">

                        <div ref="slideContent"
                            class="absolute top-0 left-0 w-full h-full z-20 text-white bg-zinc-900 bg-opacity-30 text-center flex justify-center items-center font-montserrat">
                            <div ref="caption" class="text-white px-24">
                                <div ref="title" class="text-6xl leading-normal uppercase font-medium max-w-[1000px]">{{
                                    slide.title
                                }}
                                </div>
                                <div ref="text" class="text-sm mx-auto max-w-[1000px]">
                                    <p>{{ slide.description }}</p>
                                </div>
                                <a ref="btn" href="#" class="btna my-6 mx-4 border border-white">
                                    <span ref="btnInner" class="font-medium">Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div class="image-container absolute top-0 left-0 w-full h-full bg-center z-10">
                            <img :src="slide.img" alt="" class="absolute top-0 left-0 w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div ref="pagination"
                    class="pagination absolute bottom-12 left-0 w-full h-4 cursor-default z-20 flex justify-center">
                    <div ref="item" v-for="(slide, index) in slideData" :key="index" :class="[
                        activeSlide === index
                            ? ' before:bg-white text-blue-500' : '', 'item mx-1  py-2 px-1 w-16 h-16 cursor-pointer  z-10 caro'
                    ]">
                        <button :class="[
                            activeSlide === index
                                ? ' bg-opacity-90' : 'bg-opacity-70', 'item bg-white bg-opacity-70  w-16 pb-2'
                        ]" class="" @click="activeSlide = index"></button>
                        <!-- <span ref="icon" class="icon text-sm font-medium">{{ index + 1 }}</span> -->
                    </div>
                </div>
                <div ref="arrows" class="absolute top-0 right-0 w-full py-2 pr-4 flex justify-center">
                    <div class="arrow prev -m-12 p-4 absolute top-96 cursor-pointer left-12 z-30" @click="prevSlide">
                        <span class="svg svg-arrow-left">
                            <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg"
                                class="relative left-0 w-4 h-6" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff"
                                viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve">
                                <path
                                    d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" />
                            </svg>
                        </span>
                    </div>
                    <div class="arrow next -m-12 p-4 absolute top-96 cursor-pointer right-12 z-30" @click="nextSlide">
                        <span class="svg svg-arrow-right">
                            <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg"
                                class="relative left-0 w-4 h-6" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff"
                                viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve">
                                <path
                                    d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { slideshowSwitch, slideshowNext, slideshowPrev,homeSlideshowParallax } from "../composables/useGsap"

const slideshowDuration = ref(4000)
const slideshow = ref(null)
const activeSlide = ref(0)
const slides = ref([])
const pages = ref([])
const wait = ref(false)
const timeout = ref(null)
const transition = ref(null)

const slideData = [
    {
        title: "GSAP SLIDE 001",
        description: "This is an automatic slideshow",
        img:
            "https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-1.jpg",
        btn: "Upcoming event",
    },
    {
        title: "GSAP SLIDE 002",
        description: "This is an automatic slideshow",
        img:
            "https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-4-1.jpg",
        btn: "Upcoming event",
    },
    {
        title: "GSAP SLIDE 003",
        description: "This is an automatic slideshow",
        img:
            "https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/11.jpg",
        btn: "Upcoming event",
    },
];

onMounted(() => {
    // console.log(slideshsow.value);

    // console.log(slides.value.children[0]);
    // console.log(slideshow.value.children);

    const timeout=setTimeout(function(){
  slideshowNext(slideshow,slides,false,true);
},slideshowDuration.value);

  slideshow.value.timeout = timeout;

})

// https://codepen.io/bcarvalho/pen/gWPvJB
// reference




</script>

<style lang="scss" scoped>
.is-loaded {
    opacity: 1;
}

.image-container:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.btna::before {
    background: #fff
}

.pagination {


    .item {

        +.page {
            margin-left: -2px;
        }

        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 15px;
            left: 5px;
            width: 36px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            transition: background 0.2s ease;
        }

        &::after {
            width: 0;
            background: #fff;
            z-index: 2;
            transition: width 0.2s ease;
        }

        &:hover::before,
        &.is-active::before {
            background-color: #fff;
        }
    }
}
</style>
