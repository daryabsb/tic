<template>
    <div class="bg-white">
        <ParalaxParallax>
            <template #nav>
                <HeadersHeader />
            </template>
        </ParalaxParallax>
        <main id="maincontent" role="main" class="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            <div class=" border-b border-gray-200 pb-5 sticky mt-3">
                <h3 class="text-3xl font-montserrat font-thin leading-6 text-blood">Services</h3>
            </div>
            <div class="mt-16 space-y-16">
                <div v-for="(service, index) in services" :key="index"
                    class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                    <div :class="[index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4']"
                        data-aos="slide-up">
                        <h3 class="text-2xl font-medium text-blood">{{ service.title }}</h3>
                        <p class="mt-2 text-sm text-gray-500">{{ service.text }}</p>
                    </div>
                    <div
                        :class="[index % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8']">
                        <div class="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                            <img :src="service.image" class="object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>
            <HeadersFooter />
        </main>
    </div>
</template>
<script setup>
import db from "~/data/db"
var wpcf7 = { "api": { "root": "https:\/\/golin.com\/wp-json\/", "namespace": "contact-form-7\/v1" } };

const services = ref(db.services)

</script>

<style>
/* @import url('https://golin.com/wp-content/themes/golin/style.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css?ver=6.1.1');
@import url('https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.0/fullpage.css?ver=6.1.1'); */
</style>