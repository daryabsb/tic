<template>
    <main class="main-content">
        <section ref="slideshow" class="slideshow">
            <div ref="slideShowInner" class="slideshow-inner">
                <div ref="slides" class="slides">
                    <div v-for="(slide, index) in slideData" :key="index" ref="slide" class="slide">

                        <div ref="slideContent" class="slide-content">
                            <div ref="caption" class="caption">
                                <div ref="title" class="title">{{
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
                            <img :src="slide.img" alt="" class="image" />
                        </div>
                    </div>
                </div>
                <div ref="pagination" class="pagination">
                    <div ref="pages" class="item is-active">
                        <span class="icon">1</span>
                    </div>
                    <div ref="pages" class="item">
                        <span class="icon">2</span>
                    </div>
                    <div ref="pages" class="item">
                        <span class="icon">3</span>
                    </div>
                    <div ref="pages" class="item">
                        <span class="icon">4</span>
                    </div>
                </div>
                <div ref="arrows" class="arrows">
                    <div class="arrow prev">
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
                    <div class="arrow next">
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
import gsap from "gsap"
import { TweenMax } from "gsap/TweenMax"
// import { slideshowSwitch, slideshowNext, slideshowPrev,homeSlideshowParallax } from "../composables/useGsap"

const slideshowDuration = ref(2000)
const slideshow = ref(null)
// const activeSlide = 0
const slides = ref(null)
// const slide = ref([])
const pagination = ref(null)
const pages = ref([])
const wait = ref(false)
const timeout = ref(null)
const transitionType = ref('fade')

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
    {
        title: "GSAP SLIDE 004",
        description: "This is an automatic slideshow",
        img:
            "https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/20mars17-sans-typo.jpg",
        btn: "Upcoming event",
    },

];

// function check() {
//     pages.value.classList.remove('is-active')
//     pages.value.children[activeSlide.value].classList.add('is-active');
// }


onMounted(async () => {
    var slide = slideshow.value.querySelectorAll('.slide')
    slide.forEach(el => el.classList.add('is-loaded'))
    slide[0].classList.add('is-active')



    var timeout = setTimeout(function () {
        slideshowNext(slideshow, false, true);
    }, slideshowDuration);

    slideshow.value.timeout = timeout;
});
// REFERENCES
/* 
// https://codepen.io/bcarvalho/pen/gWPvJB
const activeElement = computed(() => Array.from(slide.value).find(child => child.classList[0] === 'is-active'))
const activeElementImage = activeElement.value.querySelector('.image-container')
const activeElementContent = activeElement.value.querySelector('.slide-content')
*/

// Array.from(slide.value)[0].classList.add('is-active')

// timeout.value = setTimeout(function () {
//     slideshowNext(slideshow, false, true);
// }, slideshowDuration.value);




// reference

// slideshow functions
function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i] == node) return num;
        if (children[i].nodeType == 1) num++;
    }
    return -1;
}

function slideshowPrev(manual, auto) {
    let prevSlide = activeSlide.value - 1;
    if (prevSlide < 0) {
        prevSlide = slides.value.length - 1;
    }
    slideshowSwitch(prevSlide, auto);
}
function slideshowNext(slideshow, previous, auto) {
    var slide = slideshow.value.querySelectorAll('.slide')
    var activeSlide = slideshow.value.querySelector('.is-active')


    var newSlide = null;

    if (previous) {
        newSlide = activeSlide.previousElementSibling;
        if (newSlide.length === 0) {
            newSlide = slide.last();
        }
    } else {
        newSlide = activeSlide.nextElementSibling;
        if (!activeSlide.nextElementSibling) newSlide = slide[0];
    }
    slideshowSwitch(slideshow, indexInParent(newSlide), auto);
}

function slideshowSwitch(slideshow, index, auto) {
    if (wait.value) return;

    // activeSlide.value = index;
    var slide = slideshow.value.querySelectorAll('.slide')
    var activeSlide = slideshow.value.querySelector('.is-active')
    var activeSlideImage = activeSlide.querySelector(".image-container");
    var newSlide = slide[index];
    const newSlideImage = newSlide.querySelector('.image-container')
    const newSlideContent = newSlide.querySelector('.slide-content')
    if (activeSlide == newSlide) return

    newSlide.classList.add("is-new");


    clearTimeout(timeout.value);
    wait.value = true;



    // console.log("newSlideImage", newSlideImage);
    if (transitionType.value == "fade") {
        newSlide.style.display = "block";
        newSlide.style.zIndex = 20;
        newSlideImage.style.opacity = 0;

        TweenMax.to(newSlideImage, 1, {
            alpha: 1,
            onComplete: function () {
                newSlide.classList.add("is-active");
                newSlide.classList.remove("is-new");
                activeSlide.classList.remove("is-active");
                newSlide.style.cssText = "display: ''; zIndex: ''";
                newSlideImage.style.cssText = "opacity: ''";
                slideshow.value.querySelector(".pagination").dispatchEvent(new Event("check"))
                wait.value = false
                if (auto) {
                    timeout.value = setTimeout(function () {
                        slideshowNext(slideshow, false, true);
                    }, slideshowDuration.value);

                }

            },
        });
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

        TweenMax.set(newSlideElements, { y: 20, force3D: true });
        TweenMax.to(activeSlideImage, 1, {
            left: activeSlideImageLeft,
            ease: "Power3.easeInOut",
        });
        TweenMax.to(newSlide.value, 1, {
            width: slideshow.value.clientWidth,
            ease: "Power3.easeInOut",
        });

        TweenMax.to(newSlideImage, 1, {
            right: newSlideImageToRight,
            left: newSlideImageToLeft,
            ease: "Power3.easeInOut",
        });
        console.log("gsap", TweenMax);
        TweenMax.staggerFromTo(
            newSlideElements,
            0.8,
            { alpha: 0, y: 60 },
            { alpha: 1, y: 0, ease: "Power3.easeOut", force3D: true, delay: 0.6 },
            0.1,
            function () {
                newSlide.value.classList.add("is-active");
                newSlide.value.classList.remove("is-new");
                activeSlideElement.value.classList.remove("is-active");



                // check()

                wait.value = false;
                if (auto) {

                    setTimeout(() => {
                        slideshowNext(slideshow, false, true);
                    }, slideshowDuration.value);

                }
            }
        );
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

<style lang="scss">
body {
    font: 14px/2 "Open sans", sans-serif;
    letter-spacing: 0.05em;
}

.btn {
    display: inline-block;
    padding: 13px 20px;
    color: #fff;
    text-decoration: none;
    position: relative;
    background: transparent;
    border: 1px solid #e1e1e1;
    font: 12px/1.2 "Oswald", sans-serif;
    letter-spacing: 0.4em;
    text-align: center;
    text-indent: 2px;
    text-transform: uppercase;
    transition: color 0.1s linear 0.05s;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: #e1e1e1;
        z-index: 1;
        opacity: 0;
        transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;
    }

    &::after {
        transition: border 0.1s linear 0.05s;
    }

    .btn-inner {
        position: relative;
        z-index: 2;
    }

    &:hover {
        color: #373737;
        transition: color 0.1s linear 0s;

        &::before {
            top: 0;
            height: 100%;
            opacity: 1;
            transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;
        }

        &::after {
            border-color: #373737;
            transition: border 0.1s linear 0s;
        }
    }
}

.slideshow {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 100;

    .slideshow-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .slides {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .slide {
        display: none;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s ease;

        &.is-active {
            display: block;
        }

        &.is-loaded {
            opacity: 1;
        }

        .caption {
            padding: 0 100px;
        }

        .image-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: center;
            z-index: 1;
            background-size: cover;
            image-rendering: optimizeQuality;

            &::before {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
            }
        }

        .image {
            width: 100%;
            width: 100%;
            object-fit: cover;
            height: 100%;
        }

        &-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            color: #fff;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .title {
            margin: 0 auto 15px;
            max-width: 1000px;
            font: 300 50px/1.2 "Oswald", sans-serif;
            letter-spacing: 0.35em;
            text-transform: uppercase;
        }

        .text {
            margin: 0 auto;
            max-width: 1000px;
            font-size: 18px;
            line-height: 1.4;
        }

        .btn {
            margin: 15px 0 0;
            border-color: #fff;

            &::before {
                background: #fff
            }
        }
    }

    .pagination {
        position: absolute;
        bottom: 35px;
        left: 0;
        width: 100%;
        height: 12px;
        cursor: default;
        z-index: 2;
        text-align: center;

        .item {
            display: inline-block;
            padding: 15px 5px;
            position: relative;
            width: 46px;
            height: 32px;
            cursor: pointer;
            text-indent: -999em;
            z-index: 1;

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

    .arrows {
        .arrow {
            margin: -33px 0 0;
            padding: 20px;
            position: absolute;
            top: 50%;
            cursor: pointer;
            z-index: 3;
        }

        .prev {
            left: 30px;

            &:hover .svg {
                left: -10px;
            }
        }

        .next {
            right: 30px;

            &:hover .svg {
                left: 10px;
            }
        }

        .svg {
            position: relative;
            left: 0;
            width: 14px;
            height: 26px;
            fill: #fff;
            transition: left 0.2s ease;
        }
    }
}
</style>
