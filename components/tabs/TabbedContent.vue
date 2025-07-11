<script setup>
import { gsap } from 'gsap'
import { nextTick, onMounted, ref, provide } from 'vue'

const {defaultIndex} = defineProps({
    defaultIndex: String
})

const activeFilter = ref(defaultIndex)

const animateCards = () => {
    gsap.set('.tab-content', {
        opacity: 0,
        y: '10%',
    })

    gsap.to('.tab-content.active', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
    })
}

const handleFilter = async (filter) => {
    gsap.to('.tab-content', {
        opacity: 0,
        y: '5%',
        duration: 0.1,
        ease: 'power2.in',
        stagger: 0.05
    })

    await new Promise((resolve) => setTimeout(resolve, 300))

    activeFilter.value = filter

    await nextTick()

    animateCards()
}

const isActive = (filter) => {
    return activeFilter.value === filter
}

provide('tabMethods', {
    handleFilter,
    isActive
})

onMounted(() => {
    animateCards()
})
</script>

<template>
    <slot></slot>
</template>

<style scoped></style>
