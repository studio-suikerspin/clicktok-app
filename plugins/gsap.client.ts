import { defineNuxtPlugin } from "#app";
import { gsap, ScrollTrigger, SplitText, TextPlugin } from "gsap/all";

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin)

  return {
    provide: {
      gsap,
      ScrollTrigger,
      SplitText,
      TextPlugin
    }
  }
})