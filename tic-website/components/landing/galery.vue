<template>
    <ParalaxSlide>
        <div ref="slides" v-for="slide in slideEls" :key="slide.title"
            class="absolute w-full h-full top-10 isolate overflow-hidden bg-gray-900">
            <img :src="slide.img" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />

            <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678">
                    <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".2"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177"
                            y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9089FC" />
                            <stop offset="1" stop-color="#FF80B5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="px-6 lg:px-8">
                <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div class="text-center">
                        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            {{ slide.title }}
                        </h1>
                        <p class="mt-6 text-lg leading-8 text-gray-300">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                            fugiat aliqua.
                        </p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#"
                                class="rounded-md bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get
                                started</a>
                            <a href="#" class="text-base font-semibold leading-7 text-white">Learn more <span
                                    aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678">
                    <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".2"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                        <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177"
                            y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9089FC" />
                            <stop offset="1" stop-color="#FF80B5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </ParalaxSlide>
</template>

<script>
import { gsap } from "gsap";
import { onMounted, ref } from "@vue/composition-api";

export default {
    setup() {
        const slideEls = [
            {
                title: "GSAP SLIDE 001",
                description: "This is an automatic slideshow",
                img:
                    "https://images.unsplash.com/photo-1604522571047-8de1e43bae1b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
                btn: "Upcoming event",
            },
            {
                title: "GSAP SLIDE 002",
                description: "This is an automatic slideshow",
                img:
                    "https://images.unsplash.com/photo-1605754452467-fda400b4c8f8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
                btn: "Upcoming event",
            },
            {
                title: "GSAP SLIDE 003",
                description: "This is an automatic slideshow",
                img:
                    "https://images.unsplash.com/photo-1604692221247-9490c6b88721?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
                btn: "Upcoming event",
            },
        ];
        const slides = ref([]);

        onMounted(() => {
            console.log(typeof slides.value);
            const els = gsap.utils.toArray(slides.value);
            // gsap.set()
            var tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

            tl.to(
                slides.value[2],
                {
                    opacity: 0,
                    duration: 2,
                },
                "+=2"
            );
            tl.to(
                slides.value[1],
                {
                    opacity: 0,
                    duration: 2,
                },
                "+=2"
            );
            tl.to(
                slides.value[2],
                {
                    opacity: 1,
                    duration: 2,
                },
                "+=2"
            );
            tl.to(
                slides.value[1],
                {
                    opacity: 1,
                    duration: 0,
                },
                ""
            );
        });

        return {
            // slideRefs,
            slides,
            slideEls,
        };
    },
};
</script>

<!-- style="background-image:url(https://68.media.tumblr.com/57836ee52bc9355ad7c5fed5abf91ccc/tumblr_oiboo6MaRS1slhhf0o1_1280.jpg);"> -->
<style lang="scss">
/*
$font-family-primary: 'Montserrat', sans-serif;
$font-family-secondary: 'Roboto Slab', serif;

body {
    background-color: #000;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, transparentize(#0E1D33, 0.2), transparentize(#0E1D33, 0.8));
}

.hero-slider {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .carousel-cell {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        .inner {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            text-align: center;

            .subtitle {
                font-family: $font-family-secondary;
                font-size: 2.2rem;
                line-height: 1.2em;
                font-weight: 200;
                font-style: italic;
                letter-spacing: 3px;
                color: rgba(255, 255, 255, 0.5);
                margin-bottom: 5px;
            }

            .title {
                font-family: $font-family-primary;
                font-size: 3rem;
                line-height: 1.2em;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin-bottom: 40px;
            }

            .btn {
                border: 1px solid #fff;
                padding: 14px 18px;
                text-transform: uppercase;
                font-family: $font-family-primary;
                font-size: 0.8rem;
                letter-spacing: 3px;
                color: #fff;
                text-decoration: none;
                transition: all .2s ease;

                &:hover {
                    background: #fff;
                    color: #000;
                }
            }
        }
    }

    .flickity-prev-next-button {
        width: 80px;
        height: 80px;
        background: transparent;

        &:hover {
            background: transparent;
        }

        .arrow {
            fill: white;
        }
    }

    .flickity-page-dots {
        bottom: 30px;

        .dot {
            width: 30px;
            height: 4px;
            opacity: 1;
            background: rgba(255, 255, 255, 0.5);
            border: 0 solid white;
            border-radius: 0;

            &.is-selected {
                background: #ff0000;
                border: 0 solid #ff0000;
            }
        }
    }
}
*/
</style>

<!---->
