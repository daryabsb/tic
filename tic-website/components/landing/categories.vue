<template>
    <ParalaxSlide>
        <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-left lg:py-48 lg:text-left z-50">
            <div class="px-6 sm:px-8 lg:w-1/2 xl:pr-12">
                <TabGroup as="div" class="mt-2">
                    <div class="border-b border-gray-200">
                        <TabList class="-mb-px flex space-x-8 px-4">
                            <Tab as="template" v-for="category in navigation.categories" :key="category.name"
                                v-slot="{ selected }">
                                <button
                                    :class="[selected ? 'text-blood border-blood outline-none' : 'text-zinc-900 border-transparent ', 'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium']">{{
                                        category.name
                                    }}</button>
                            </Tab>
                        </TabList>
                    </div>
                    <TabPanels as="template">
                        <TabPanel v-for="category in navigation.categories" :key="category.name"
                            class="space-y-12 px-4 py-6">
                            <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                                <div v-for="(item, idx) in category.featured" :key="item.name"
                                    class="group relative shadow-md p-2 rounded-md bg-neutral-50" data-aos="fade-in"
                                    data-aos-ease='ease' data-aos-duration="900" :data-aos-delay='`${300 * idx}`'>
                                    <div
                                        class="h-32 w-full  overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                        <img :src="item.imageSrc" class="h-full w-full object-cover object-center" />
                                    </div>
                                    <a :href="item.href" class="mt-6 block text-sm font-medium text-blood">
                                        <span class="absolute inset-0 z-10" aria-hidden="true" />
                                        {{ item.name }}
                                    </a>
                                    <p aria-hidden="true" class="mt-1 text-sm text-zinc-80000  line-clamp-3">
                                        {{ item.description }}
                                    </p>
                                </div>
                                <div class="col-span-2 flex justify-start">

                                    <nuxt-link v-if="category.name === 'Industries'" :to="navigation.pages[0].href"
                                        class="hover:text-blood">Find more {{
                                            navigation.pages[0].name
                                        }} >>></nuxt-link>
                                    <nuxt-link v-else :to="navigation.pages[1].href" class="hover:text-blood">Find more
                                        {{
    navigation.pages[1].name
                                        }} >>></nuxt-link>
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
        <div class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
            <img class="absolute inset-0 h-full w-full object-cover" src="~/assets/img/cats-3.jpg" alt="" />
        </div>
    </ParalaxSlide>
</template>

<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const navigation = {
    categories: [
        {
            name: 'Industries',
            featured: [
                {
                    name: 'Vehicle',
                    href: '#',
                    imageSrc: '/img/industry-cars---01.jpg',
                    description: 'Pre-exports vehicles Inspections & Confirmation of Conformity verification service to ensure shipments conform to local importing standards to be cleared at destination.'
                },
                {
                    name: 'Oil and Gas',
                    href: '#',
                    imageSrc: '/img/industry-oil---01.jpg',
                    description: 'We help support highlighting the maintenance equipment, as well as the safety of petroleum refining and extraction operations. '

                },
                {
                    name: 'Food Safety',
                    href: '#',
                    imageSrc: '/img/industry-food---01.jpg',
                    description: 'TIC provide reliable methods and services to guarantee food safety and better food control throughout the entire food supply chain.'

                },
                {
                    name: 'Agriculture',
                    href: '#',
                    imageSrc: '/img/industry-agriculture---01.jpg',
                    description: 'Our agricultural inspection and testing services help companies be more transparent and comply with contractual obligations'

                },
            ],
        },
        {
            name: 'Services',
            featured: [
                {
                    name: 'Non-Destructive Testing – NDT ',
                    href: '#',
                    imageSrc: '/img/services-ndt-01.jpg',
                    description: 'Testing that is used to examine and evaluate the properties of materials, structures, and equipment without causing damage or increasing the risk of the integrity of the items being tested. '

                },
                {
                    name: 'Calibration Services',
                    href: '#',
                    imageSrc: '/img/services-calibration-01.jpg',
                    description: 'Pre-exports vehicles Inspections & Confirmation of Conformity verification service to ensure shipments conform to local importing standards to be cleared at destination.'

                },
                {
                    name: 'Corrosion',
                    href: '#',
                    imageSrc: '/img/services-Corrosion-01.jpg',
                    description: 'Pre-exports vehicles Inspections & Confirmation of Conformity verification service to ensure shipments conform to local importing standards to be cleared at destination.'

                },
                {
                    name: 'Steel Manufacturing & Fabrication',
                    href: '#',
                    imageSrc: '/img/services-steel-01.jpg',
                    description: 'Pre-exports vehicles Inspections & Confirmation of Conformity verification service to ensure shipments conform to local importing standards to be cleared at destination.'

                },
            ],
        },
    ],
    pages: [
        { name: 'industries', href: '/industries' },
        { name: 'services', href: '/servises' },
    ],
}
</script>