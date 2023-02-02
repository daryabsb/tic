<template>
    <div class="bg-white">
        <ParalaxParallax>
            <template #nav>
                <HeadersHeader />
            </template>
        </ParalaxParallax>




        <!-- <header class="global-header fixed menu-item-color-black bg-white border-b py-2" id="global-header">
            <div class="global-header__container">
                <h1 class="global-header__logo" role="banner">
                    <a class="global-header__logo-link" href="/" rel="home">
                        <img src="~/assets/logo/tic-logo-01.svg" class="h-12 md:h-16" alt="">
                    </a>
                </h1>
                <nav id="nav-main" class="global-header__nav" role="navigation">
                    <input type="checkbox" aria-label="menu">

                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>

                    <nav class="global-header__nav-menu" id="menu">
                        <ul>
                            <li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-4885">
                                <a target="" href="https://golin.com/about/">About</a>
                            </li>
                            <li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-4886">
                                <a target="" href="https://golin.com/work/">Work</a>
                            </li>
                            <li
                                class=" menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-119 current_page_item menu-item-4887">
                                <a target="" href="https://golin.com/careers/">Careers</a>
                            </li>
                            <li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-4888">
                                <a target="" href="https://golin.com/news/">News</a>
                            </li>
                            <li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-4889">
                                <a target="" href="https://golin.com/contact/">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </div>
        </header> -->
        <main id="maincontent" role="main" class="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            <div class=" border-b border-gray-200 pb-5 sticky mt-3">
                <h3 class="text-3xl font-montserrat font-thin leading-6 text-blood">Industries</h3>
            </div>
            <div class="mt-16 space-y-16">
                <div v-for="(industry, featureIdx) in industries" :key="featureIdx"
                    class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                    <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4']"
                        data-aos="slide-up">
                        <h3 class="text-2xl font-medium text-blood">{{ industry.title }}</h3>
                        <p class="mt-2 text-sm text-gray-500">{{ industry.text }}</p>
                    </div>
                    <div
                        :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8']">
                        <div class="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                            <img :src="industry.image" class="object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>




            <HeadersFooter />
        </main>
    </div>
</template>
<script setup>
var wpcf7 = { "api": { "root": "https:\/\/golin.com\/wp-json\/", "namespace": "contact-form-7\/v1" } };

const industries = [
    {
        title: 'Vehicle COC',
        subtitle: '',
        text: 'Pre-exports vehicles Inspections & Confirmation of Conformity verification service to ensure shipments conform to local importing standards to be cleared at destination.',
        more: true,
        apply: false,
        image: '/img/industries/vehicle.jpg',
    },
    {
        title: 'Oil and Gas',
        subtitle: '',
        text: 'We help support highlighting the maintenance equipment, as well as the safety of petroleum refining and extraction operations.',
        more: true,
        apply: false,
        image: '/img/industries/Oil-Gas-001.jpg',
    },
    {
        title: 'Food Safety Testing',
        subtitle: '',
        text: 'TIC provide reliable methods and services to guarantee food safety and better food control throughout the entire food supply chain.',
        more: true,
        apply: false,
        image: '/img/industries/food-safety.jpg',
    },
    {
        title: 'Agriculture Inspections & Testing',
        subtitle: '',
        text: 'Our agricultural inspection and testing services help companies be more transparent and comply with contractual obligations.',
        more: true,
        apply: false,
        image: '/img/industries/agriculture.webp',
    },
    {
        title: 'Vegetable Oils and Fats Inspection & Testing Services ',
        subtitle: '',
        text: 'TIC offer inspection and testing services for all types of vegetable oils, oilseeds, and feed related by-products.',
        more: true,
        apply: false,
        image: '/img/industries/edible-oil.jpg',
    },
    {
        title: 'Grains and Pulses Inspection & Testing Services',
        subtitle: '',
        text: 'We deliver a wide range of inspection and testing services covering all types of pulses, grains, lentils, and dry beans.',
        more: true,
        apply: false,
        image: '/img/industries/AGRI_RICE_0.jpg',
    },
    {
        title: 'Fruit and Vegetables Inspection & Testing Services ',
        subtitle: '',
        text: 'Our inspection and testing services will help businesses to have better control and track their food supply chain.',
        more: true,
        apply: false,
        image: '/img/industries/QC-Header.webp',
    },
    {
        title: 'Civil Engineering Inspections',
        subtitle: '',
        text: 'TIC engineers provide Non-Destructive Testing services and inspections to investigate the integrity of client structure and ensure maintenance.',
        more: true,
        apply: false,
        image: '/img/industries/maxresdefault.jpg',
    },
    {
        title: 'Marine Industry Inspections',
        subtitle: '',
        text: 'We offer services to help support the marine industry manage their compliances and regulations. ',
        more: true,
        apply: false,
        image: '/img/industries/Vessel Inspection & Audit Coordination Department.jpg',
    },
]
</script>

<style>
/* @import url('https://golin.com/wp-content/themes/golin/style.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css?ver=6.1.1');
@import url('https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.0/fullpage.css?ver=6.1.1'); */
</style>