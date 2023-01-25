<template>
    <ParalaxSlide>


        <main>
            <div>
                <!-- Hero card -->
                <div class="relative">
                    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                    <div class="mx-auto">
                        <div class="relative shadow-xl sm:overflow-hidden sm:rounded-sm">
                            <div class="absolute inset-0">
                                <div class="hero-slider" data-carousel>
                                    <div class="carousel-cell"
                                        style="background-image:url(https://68.media.tumblr.com/57836ee52bc9355ad7c5fed5abf91ccc/tumblr_oiboo6MaRS1slhhf0o1_1280.jpg);">
                                        <div class="overlay"></div>
                                        <div class="inner">
                                            <h3 class="subtitle">Slide 1</h3>
                                            <h2 class="title">Flickity Parallax</h2>
                                            <a href="https://flickity.metafizzy.co/" target="_blank" class="btn">Tell me
                                                more</a>
                                        </div>
                                    </div>
                                    <div class="carousel-cell"
                                        style="background-image:url(https://68.media.tumblr.com/c40636a5a0d4aa39c335c8db40d2144f/tumblr_omc7z7Xv8N1slhhf0o1_1280.jpg);">
                                        <div class="overlay"></div>
                                        <div class="inner">
                                            <h3 class="subtitle">Slide 2</h3>
                                            <h2 class="title">Flickity Parallax</h2>
                                            <a href="https://flickity.metafizzy.co/" target="_blank" class="btn">Tell me
                                                more</a>
                                        </div>
                                    </div>
                                    <div class="carousel-cell"
                                        style="background-image:url(https://68.media.tumblr.com/3beb13a4167aa8b5c4743eac17bf351c/tumblr_o8nyvtiHfC1slhhf0o1_1280.jpg);">
                                        <div class="overlay"></div>
                                        <div class="inner">
                                            <h3 class="subtitle">Slide 3</h3>
                                            <h2 class="title">Flickity Parallax</h2>
                                            <a href="https://flickity.metafizzy.co/" target="_blank" class="btn">Tell me
                                                more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative py-12 px-6 sm:py-32 lg:py-40 lg:px-8">
                                <h1 class="text-center text-4xl font-montserrat tracking-tight sm:text-5xl lg:text-6xl">
                                    <span class="block text-white text-6xl">TIC QUALITY CONTROL</span>
                                    <span class="block text-zinc-300">Inspection Services & Industries</span>
                                </h1>
                                <p class="mx-auto mt-6 max-w-lg text-center text-xl text-zinc-200 sm:max-w-3xl">Anim
                                    aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                    Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                                <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                    <div
                                        class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                                        <a href="#"
                                            class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blood shadow-sm hover:bg-indigo-50 sm:px-8">Get
                                            started</a>
                                        <a href="#"
                                            class="flex items-center justify-center rounded-md border border-transparent bg-blood bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">Live
                                            demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- More main page content here... -->
        </main>
    </ParalaxSlide>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { app } from '~/plugins/flickity'
import {
    Bars3Icon,
    ChatBubbleBottomCenterTextIcon,
    ChatBubbleLeftRightIcon,
    InboxIcon,
    QuestionMarkCircleIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Messaging',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Live Chat',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]
const navigation = [
    { name: 'Pricing', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Company', href: '#' },
]

// FLICKITY
var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};
onMounted(() => {
    // var carousel = document.querySelector('[data-carousel]');
    // var slides = document.getElementsByClassName('carousel-cell');
    // const elem = this.$el.querySelector('.carousel');
    // const flkty = new app.Flickity(carousel, options);
})
</script>

<style lang="scss">
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
</style>