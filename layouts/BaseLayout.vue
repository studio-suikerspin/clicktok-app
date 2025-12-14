<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin, Draggable);
</script>

<template>
  <div>
    <Head>
      <meta name="theme-color" content="#000000" />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="ClickTok" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>

    <slot />
  </div>
</template>
