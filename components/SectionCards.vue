<!--
This example requires some changes to your config:

```
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}
```
-->
<template>
    <div class="intro bg-white">
        <div class="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
            <div class="space-y-12 lg:flex lg:flex-col lg:gap-8 lg:space-y-0">
                <div class="space-y-5 sm:space-y-4">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
                    <p class="text-xl text-gray-500">Nulla quam felis, enim faucibus proin velit, ornare id pretium.
                        Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget
                        bibendum cras.</p>
                </div>
                <div class=" overflow-hidden">
                    <ul role="list"
                        class="space-y-12 sm:flex sm:flex-wrap sm:gap-x-6 sm:-gap-y-12 sm:space-y-0 lg:-gap-x-24">
                        <li v-for="(person, index) in people" :key="index" data-aos="slide-up" data-aos-ease='ease'
                            data-aos-duration="1500" data-aos-delay='200'
                            :style="{ marginTop: index * 50 + 'px', marginLeft: -20 + 'px', width: 25 + '%' }">
                            <div class="space-y-2 ">
                                <div class=" hover:border-4 border-red-700">
                                    <img class=" h-64 w-full object-cover transition duration-300 ease-in-out"
                                        :src="person.imageUrl" alt="" />
                                </div>
                                <div class="space-y-1 text-lg font-medium leading-6">
                                    <h3>{{ person.name }}</h3>
                                    <p class="text-indigo-600 hover:text-pink-600">{{ person.role + index * 50 }}</p>
                                </div>
                                <div class="text-lg">
                                    <p class="text-gray-500">{{ person.bio }}</p>
                                </div>


                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const people = [
    {
        name: 'Emma Dorsey',
        role: 'Senior Front-end Developer',
        imageUrl:
            '/_nuxt/assets/img/ec24be85050e6c3e2119232e688985a8.jpg',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Emma Dorsey',
        role: 'Senior Front-end Developer',
        imageUrl:
            '/_nuxt/assets/img/hello-senior-portrait-girl-in-forest.jpg',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Emma Dorsey',
        role: 'Senior Front-end Developer',
        imageUrl:
            '/_nuxt/assets/img/images (1).jpg',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Emma Dorsey',
        role: 'Senior Front-end Developer',
        imageUrl:
            '/_nuxt/assets/img/low-res-6.jpg',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },

    // More people...
]
</script>