<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin)

onMounted(() => {
    const lenis = new Lenis({
        autoRaf: true,
    });
})

// let smoother: ScrollSmoother | null = null

// interface Props {
//     enableSmoothScroll?: boolean
//     smoothAmount?: number
// }

// const props = withDefaults(defineProps<Props>(), {
//     enableSmoothScroll: true,
//     smoothAmount: 0.8,
// })

// onMounted(() => {
//     if (!props.enableSmoothScroll) return

//     requestAnimationFrame(() => {
//         smoother = ScrollSmoother.create({
//             content: '#smooth-content',
//             smooth: props.smoothAmount,
//             effects: true,
//             normalizeScroll: true,
//             ignoreMobileResize: true,
//         })
//     })
// })

// onUnmounted(() => {
//   if (smoother) {
//     smoother.kill()
//     smoother = null
//   }
// })
</script>

<template>
    <Head>
        <a href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <slot name="head" />
    </Head>

    <div v-if="enableSmoothScroll" id="smooth-wrapper">
        <div id="smooth-content">
            <slot name="smooth" />
        </div>
    </div>

    <div v-else>
        <slot name="smooth" />
    </div>

    <slot name="static" />
</template>
