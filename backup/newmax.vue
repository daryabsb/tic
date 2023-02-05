<template>
    <div class="slideshow h-screen w-screen">
        <div class="arrows">
            <div class="arrow prev cursor-pointer" @click="prevSlide()">prev</div>
            <div class="arrow next cursor-pointer" @click="nextSlide()">next</div>
        </div>
        <div class="pagination">
            <div class="item" v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"></div>
        </div>
        <div class="slides relative w-full h-full">
            <div class="slide absolute top-0 left-0 w-full h-full" v-for="(slide, index) in slides" :key="index"
                :class="{ 'is-active z-50': currentSlide === index, 'is-loaded': slide.loaded }">
                <img class="image" :src="slide.image" @load="slide.loaded = true" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
    setup() {
        //   const slides = ref([
        //     { image: 'image1.jpg', loaded: false },
        //     { image: 'image2.jpg', loaded: false },
        //     { image: 'image3.jpg', loaded: false },
        //   ])
        const slides = ref([
            {
                title: "GSAP SLIDE 001",
                description: "This is an automatic slideshow",
                image:
                    "https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-1.jpg",
                btn: "Upcoming event",
                loaded: false
            },
            {
                title: "GSAP SLIDE 002",
                description: "This is an automatic slideshow",
                image:
                    "https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-4-1.jpg",
                btn: "Upcoming event",
                loaded: false
            },
            {
                title: "GSAP SLIDE 003",
                description: "This is an automatic slideshow",
                image:
                    "https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/11.jpg",
                btn: "Upcoming event",
                loaded: false
            },
        ]);

        const currentSlide = ref(0)
        const slideshowDuration = ref(5000)

        function prevSlide() {
            if (currentSlide.value === 0) {
                currentSlide.value = slides.value.length - 1
            } else {
                currentSlide.value--
            }
        }
        function nextSlide() {
            if (currentSlide.value === slides.value.length - 1) {
                currentSlide.value = 0
            } else {
                currentSlide.value++
            }
        }
        function goToSlide(index) {
            currentSlide.value = index
        }

        let intervalId = null
        onMounted(() => {
            intervalId = setInterval(() => {
                nextSlide()
            }, slideshowDuration.value)
        })

        return {
            slides,
            currentSlide,
            prevSlide,
            nextSlide,
            goToSlide,
            intervalId
        }
    },
    beforeUnmount() {
        clearInterval(this.intervalId)
    }
}
</script>
