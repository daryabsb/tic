<template>
    <main class="text-center">
        <section ref="slideshow" :data-transition="transitionType"
            class="overflow-hidden relative w-full h-screen z-10">
            <div ref="slideShowInner" class="absolute left-0 right-0 w-full h-full">
                <div ref="slides" class="absolute top-0 left-0 w-full h-full z-10">
                    <div ref="slide" v-for="(slide, index) in slideData" :key="index" :class="[
                        activeSlide === index
                            ? 'is-active block' : 'hidden', 'absolute top-0 left-0 w-full h-full z-10 overflow-hidden'
                    ]">

                        <div ref="slideContent"
                            class="slide-content absolute top-0 left-0 w-full h-full z-20 text-white bg-zinc-900 bg-opacity-30 text-center flex justify-center items-center font-montserrat">
                            <div ref="caption" class="caption text-white px-24">
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
                    <div ref="pages" v-for="(slide, index) in slideData" :key="index" :class="[
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
import gsap from "gsap"
// import { slideshowSwitch, slideshowNext, slideshowPrev,homeSlideshowParallax } from "../composables/useGsap"

const slideshowDuration = ref(4000)
const slideshow = ref(null)
const activeSlide = ref(0)
const slides = ref([])
const pagination = ref(null)
const pages = ref([])
const wait = ref(false)
const timeout = ref(null)
const transitionType = ref('other')

const activeSlideElement = ref(null)
const newSlide = ref(null)


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

// function check() {
//     pages.value.classList.remove('is-active')
//     pages.value.children[activeSlide.value].classList.add('is-active');
// }

onMounted(() => {
    // console.log(slideshsow.value);

    // console.log(slides.value.children[0]);
    // console.log(slideshow.value.children);

    timeout.value = setTimeout(function () {
        slideshowNext(slideshow, false, true);
    }, slideshowDuration.value);
    // console.log("pages", pages.value);
    // pages.value.children[0].classList.add('is-active')
    slideshow.value.timeout = timeout.value;

})

// https://codepen.io/bcarvalho/pen/gWPvJB
// reference

// slideshow functions


function slideshowPrev(manual, auto) {
    let prevSlide = activeSlide.value - 1;
    if (prevSlide < 0) {
        prevSlide = slides.value.length - 1;
    }
    slideshowSwitch(prevSlide, auto);
}
function slideshowNext(slideshow, previous, auto) {
    // const slides = slideshow.value.querySelectorAll('.slide');
    activeSlideElement.value = slides.value.children[activeSlide.value];
    // const newSlide = ref(null);

    if (previous) {
        newSlide.value = activeSlideElement.value.previousElementSibling;
        // if (!newSlide.value) {
        //     newSlide.value = slides.value.lastElementChild;
        // }
    } else {
        newSlide.value = activeSlideElement.value.nextElementSibling;
        console.log("check active slide", activeSlideElement.value);
        console.log("check new slide", newSlide.value);

        // if (!newSlide.value) {
        //     newSlide.value = slides.value.firstElementChild;
        // }
    }
    // console.log('checking active and new');
    // console.log("old", activeSlideElement.value);
    // console.log("new", newSlide.value);
    // slideshowSwitch(slideshow, Array.from(slides).indexOf(newSlide), auto);
    slideshowSwitch(slideshow, true);
}

function slideshowSwitch(slideshow, auto) {
    if (wait.value) return;

    // activeSlide.value = index;
    activeSlideElement.value = slides.value.children[activeSlide.value]
    const activeSlideImage = activeSlideElement.value.querySelector('.image-container');
    // const newSlide = slides.value.children[activeSlide.value];
    const newSlideImage = newSlide.value.querySelector(".image-container");
    const newSlideContent = newSlide.value.querySelector(".slide-content");
    const newSlideElements = newSlide.value.querySelectorAll(".caption");

    // console.log("Elements exist");
    // console.log("newSlideImage", newSlideImage);
    // console.log("newSlideContent", newSlideContent);
    // console.log("newSlideElements", newSlideElements);
    // console.log("activeSlideImage", activeSlideImage);

    if (newSlide.value === activeSlideElement.value) return;

    newSlide.value.classList.add("is-new");

    clearTimeout(timeout.value);
    wait.value = true;

    if (transitionType.value == "fade") {
        newSlide.value.style.display = "block";
        newSlide.value.style.zIndex = 20;
        newSlideImage.style.opacity = 0;

        gsap.to(newSlideImage, 1, {
            alpha: 1,
            onComplete: function () {
                newSlide.value.classList.add("is-active");
                newSlide.value.classList.remove("is-new");
                activeSlideElement.value.classList.remove("is-active");
                activeSlideElement.value.classList.add('is-new');
                // newSlide.value.style.display = "block";
                // newSlide.value.style.zIndex = "20";
                // newSlideImage.style.opacity = "1";

                // check();
                wait.value = false;
                if (auto) {
                    timeout.value = setTimeout(function () {
                        slideshowNext(slideshow, false, true);
                    }, slideshowDuration.value);
                    slideshow.value.timeout = timeout.value;
                }

            },
        });
        // setTimeout(() => {
        //     newSlide.value.classList.add("is-active");
        //     newSlide.value.classList.add("block");
        //     newSlide.value.classList.remove("hidden");
        //     newSlide.value.classList.remove("is-new");
        //     activeSlideElement.value.classList.remove("is-active");
        //     newSlide.value.style.display = "";
        //     newSlide.value.style.zIndex = "";
        //     newSlideImage.style.opacity = "";
        //     pages.value.forEach((page) => {
        //         page.classList.remove("is-active");
        //     });
        //     pages.value[index].classList.add("is-active");
        //     wait.value = false;
        //     console.log("reached 2");
        //     console.log(activeSlideElement.value);
        //     if (false) return
        //     if (auto) {
        //         timeout.value = setTimeout(() => {
        //             slideshowNext(false, true);
        //         }, slideshowDuration.value);
        //     }
        // }, 1000);
        // activeSlideElement.value = newSlide.value
    } else {
        const index = Array.from(
            slides.value.children
        ).indexOf(newSlide.value);
        // console.log('index', index > activeSlide.value);
        if (index > activeSlide.value) {
            var newSlideRight = 0;
            var newSlideLeft = "auto";
            var newSlideImageRight = -slideshow.value.clientWidth / 8;
            var newSlideImageLeft = "auto";
            var newSlideImageToRight = 0;
            var newSlideImageToLeft = "auto";
            var newSlideContentLeft = "auto";
            var newSlideContentRight = 0;
            var activeSlideImageLeft = -slideshow.value.clientWidth / 4;
        } else {
            var newSlideRight = "";
            var newSlideLeft = 0;
            var newSlideImageRight = "auto";
            var newSlideImageLeft = -slideshow.value.clientWidth / 8;
            var newSlideImageToRight = "";
            var newSlideImageToLeft = 0;
            var newSlideContentLeft = 0;
            var newSlideContentRight = "auto";
            var activeSlideImageLeft = slideshow.value.clientWidth / 4;
        }
        newSlide.value.style.display = "block";
        newSlide.value.style.width = 0;
        newSlide.value.style.right = newSlideRight;
        newSlide.value.style.left = newSlideLeft;
        newSlide.value.style.zIndex = 20;


        newSlideImage.style.display = "block";
        newSlideImage.style.width = slideshow.value.clientWidth;
        newSlideImage.style.right = newSlideImageRight;
        newSlideImage.style.left = newSlideImageLeft;
        newSlideImage.style.zIndex = 20;



        newSlideContent.style.width = slideshow.value.clientWidth;
        newSlideContent.style.right = newSlideContentRight;
        newSlideContent.style.left = newSlideContentLeft;

        activeSlideImage.style.left = 0;

    }
    gsap.set(newSlideElements, { y: 20, force3D: true });
    gsap.to(activeSlideImage, 1, {
        left: activeSlideImageLeft,
        ease: "Power3.easeInOut",
    });

    gsap.to(newSlide.value, 1, {
        width: slideshow.value.clientWidth,
        ease: "Power3.easeInOut",
    });

    gsap.to(newSlideImage, 1, {
        right: newSlideImageToRight,
        left: newSlideImageToLeft,
        ease: "Power3.easeInOut",
    });
    console.log("auto1", auto);
    gsap.to(newSlideElements, 1, {
        alpha: 1,
        onComplete: function () {
            console.log("auto2", auto);
            newSlide.value.classList.add("is-active");
            newSlide.value.classList.remove("is-new");
            activeSlideElement.value.classList.remove("is-active");
            newSlide.value.style.display = "";
            newSlide.value.style.width = "";
            newSlide.value.style.right = "";
            newSlide.value.style.left = "";
            newSlide.value.style.zIndex = "";

            newSlideImage.style.width = "";
            newSlideImage.style.right = "";
            newSlideImage.style.left = "";


            newSlideContent.style.width = "";
            newSlideContent.style.left = "";

            newSlideElements.style.opacity = "";
            newSlideElements.style.transform = "";

            activeSlideImage.style.left = "";
        },
    });

    wait.value = false;
    if (activeSlide.value < slideData.length) {
        activeSlide.value++

    } else activeSlide.value = 0
    console.log("auto", auto);
    if (auto) {
        timeout.value = setTimeout(() => {
            slideshowNext(slideshow, false, true);
        }, slideshowDuration.value);
        slideshow.value.timeout = timeout.value;
    }
}

function homeSlideshowParallax() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > window.innerHeight) return;
    var inner = document.querySelector(".slideshow-inner");
    var newHeight = window.innerHeight - scrollTop / 2;
    var newTop = scrollTop * 0.8;

    inner.style.transform = "translateY(" + newTop + "px)";
    inner.style.height = newHeight + "px";
}



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
