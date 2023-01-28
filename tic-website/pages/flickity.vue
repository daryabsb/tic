<template>
    <div>
        <Flickity ref="flickity">
            <div class="carousel-cell">1</div>
            <div class="carousel-cell">2</div>
            <div class="carousel-cell">3</div>
            <div class="carousel-cell">4</div>
            <div class="carousel-cell">5</div>
        </Flickity>

        <!-- if you don't want to use the buttons Flickity provides -->
        <button @click="previous()">Custom Previous Button</button>
        <button @click="next()">Custom Next Button</button>
    </div>
</template>

<script setup>
import { ref } from "vue"
import Flickity from "vue-flickity";
console.log(Flickity);
const flickity = ref(null)

const previous = () => flickity.value.previous()
const next = () => flickity.value.previous()

</script>