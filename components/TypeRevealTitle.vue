<script setup>
import { nextTick, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

const { classes } = defineProps({
    classes: {
        required: false,
        type: String,
        default: ''
    }
})

const revealTypeRef = ref(null)
let splitTextInstance = null
let animationContext = null

const initHighlightText = () => {
  if (!revealTypeRef.value) return
  
  cleanUpAnimation()

  // Set data attributes for the animation
  revealTypeRef.value.setAttribute('data-highlight-text', '')
  revealTypeRef.value.setAttribute('data-highlight-scroll-start', 'top 80%')
  revealTypeRef.value.setAttribute('data-highlight-scroll-end', 'top 40%')
  revealTypeRef.value.setAttribute('data-highlight-fade', '0.6')
  revealTypeRef.value.setAttribute('data-highlight-stagger', '0.8')

  const scrollStart = revealTypeRef.value.getAttribute("data-highlight-scroll-start") || "top 90%"
  const scrollEnd = revealTypeRef.value.getAttribute("data-highlight-scroll-end") || "center 40%"
  const fadedValue = revealTypeRef.value.getAttribute("data-highlight-fade") || 0.2
  const staggerValue = revealTypeRef.value.getAttribute("data-highlight-stagger") || 0.1

  splitTextInstance = new SplitText(revealTypeRef.value, {
    type: "words, chars",
    autoSplit: true,
    onSplit(self) {
      animationContext = gsap.context(() => {
        let tl = gsap.timeline({
          scrollTrigger: {
            scrub: true,
            trigger: revealTypeRef.value, 
            start: scrollStart,
            end: scrollEnd,
          }
        })
        tl.from(self.chars, {
          autoAlpha: fadedValue,
          stagger: staggerValue,
          ease: "linear"
        })
      });
      return animationContext;
    }
  });
}

const cleanUpAnimation = () => {
  if (animationContext) {
    animationContext.revert()
    animationContext = null
  }

  if (splitTextInstance) {
    splitTextInstance.revert()
    splitTextInstance = null
  }
}

onMounted(async () => {
  await nextTick()
  initHighlightText()
})

onUnmounted(() => {
  cleanUpAnimation()
})
</script>

<template>
    <div ref="revealTypeRef" :class="`reveal-type ${classes}`">
        <slot/>
    </div>
</template>

<style scoped>
.reveal-type {
    font-family: 'Montserrat';
    font-weight: bold;
    font-style: italic;
    font-size: clamp(1.875rem, 0.5357rem + 4.2857vw, 3.75rem);
    text-align: center;
    color: var(--off-white);
    line-height: 73px;
    z-index: 9;
    position: relative;
}

@media screen and (max-width: 992px) {
    .reveal-type {
        font-size: 30px;
        line-height: 37px;
    }
}
</style>
