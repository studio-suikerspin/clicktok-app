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
      <Head>
       <meta name="theme-color" content="#000000">
      </Head>
      <slot />
    </div>
</template>
