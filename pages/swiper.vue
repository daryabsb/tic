<template>
    <Swiper class="h-screen w-screen relative bg-blood"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperMousewheel, SwiperPagination]" :slides-per-view="1"
        :loop="true" :effect="'creative'" :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
        <SwiperSlide class="bg-pink-700 relative">
            <!-- <strong>{{ slide }}</strong> -->
            <div class=" absolute inset-0 flex justify-center items-center">
                <LandingHero />
            </div>
            <!-- <LandingHero /> -->
        </SwiperSlide>
        <SwiperSlide class="relative bg-indigo-700">
            <div class=" absolute inset-0 flex justify-center items-center">
                <LandingFetures />
                <!-- <img src="~/assets/img/section-img-01.jpg" class="w-full h-full object-cover" alt=""> -->
            </div>
            <!-- <strong>{{ slide }}</strong> -->
            <!-- <LandingCreative /> -->
        </SwiperSlide>
    </Swiper>
</template>