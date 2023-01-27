<template>
  <div>
    <!-- <NuxtLayout :name="layout"> -->
    <NuxtPage />
    <!-- </NuxtLayout> -->
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// You might choose this based on an API call or logged-in status
const layout = "custom";
</script>


