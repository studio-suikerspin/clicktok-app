<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { Draggable } from 'gsap/Draggable'


gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin, Draggable)

</script>

<template>
    <div>
        <slot />
    </div>
</template>
