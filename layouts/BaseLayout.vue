<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { Draggable } from 'gsap/Draggable'

import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin, Draggable)

onMounted(() => {
    const lenis = new Lenis({
        autoRaf: true,
    });
})
</script>

<template>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <slot name="smooth" />
        </div>
    </div>
</template>
