<script lang="ts" setup>
import { useNuxtApp } from "#app";
// // hello world component is auto imported
const title = "Hello World";

// // fetching data from /server/api/hello.ts
// const { data } = await useFetch("/api/hello");

// if (process.server) console.log("server");
// if (process.client) console.log("client");

// // access the request object server side
// if (process.server) {
//   const nuxtApp = useNuxtApp();
//   console.log(nuxtApp.ssrContext?.req.headers);
// }
</script>

<template>
  <div>
    <Hero />
    <Featured />
    <SectionCards />
  </div>
</template>
