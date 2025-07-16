<script setup lang="ts">
import { onMounted } from 'vue'
import Lenis from 'lenis'

const { $gsap, $ScrollTrigger } = useNuxtApp()

onMounted(() => {
    const lenis = new Lenis({
        autoRaf: true,
    });

    lenis.on('scroll', $ScrollTrigger.update)

    $gsap.ticker.add(time => {
      lenis.raf(time * 1000)
    })

    $gsap.ticker.lagSmoothing(0)
})
</script>

<template>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <slot name="smooth" />
        </div>
    </div>
</template>
