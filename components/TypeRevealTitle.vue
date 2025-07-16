<script setup>
import { nextTick, onMounted } from 'vue';

const { $gsap, $SplitText } = useNuxtApp()

const { classes } = defineProps({
    classes: {
        required: false,
        type: String,
        default: ''
    }
})

const revealTypeRef = ref(null)
let splitTextInstance = null
let scrollTriggerInstance = null

const animationOptions = computed(() => ({
  opacity: 1,
  stagger: 0.8,
  duration: 1.1,
  scrollTrigger: {
    trigger: revealTypeRef.value,
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  }
}))

const initialState = computed(() => ({
  opacity: 0.6
}))

const createAnimation = () => {
  if (! revealTypeRef.value) return
  
  cleanUpAnimation()

  splitTextInstance = $SplitText.create(revealTypeRef.value, { type: "words, chars" })
  
  scrollTriggerInstance = $gsap.fromTo(
    splitTextInstance.chars,
    initialState.value,
    animationOptions.value
  )
}

const cleanUpAnimation = () => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
    scrollTriggerInstance = null
  }

  if (splitTextInstance) {
    splitTextInstance.revert()
    splitTextInstance = null
  }
}

onMounted(async () => {
  await nextTick()
  createAnimation()
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
