<script setup>
import { computed } from 'vue'

const viewport = useViewport()

const props = defineProps({
  width: [String, Number, Object],
  height: [String, Number, Object],
  top: [String, Number, Object],
  left: [String, Number, Object],
  right: [String, Number, Object],
  bottom: [String, Number, Object],
})

const getResponsiveProp = (val) => {
  if (typeof val === 'object' && val !== null) {
    // Simpel mediaquery op basis van screen width
    if (viewport.isLessThan('tablet') && 'sm' in val) return val.sm // mobiel (bijv. < 640px)
    return val.default
  }
  return val
}

const computedStyle = computed(() => {
  const convert = (v) =>
    typeof v === 'number' ? `${v}px` : v

  return {
    width: convert(getResponsiveProp(props.width)),
    height: convert(getResponsiveProp(props.height)),
    top: props.top !== undefined ? convert(getResponsiveProp(props.top)) : 'unset',
    left: props.left !== undefined ? convert(getResponsiveProp(props.left)) : 'unset',
    right: props.right !== undefined ? convert(getResponsiveProp(props.right)) : 'unset',
    bottom: props.bottom !== undefined ? convert(getResponsiveProp(props.bottom)) : 'unset',
  }
})


</script>

<template>
  <div class="gradient__blur" :style="computedStyle"></div>
</template>

<style>
.gradient__blur {
  background: linear-gradient(135deg, #1E193A, #B29CC6);
  filter: blur(118px);
  position: absolute;
  z-index: -1;
  will-change: transform;
  pointer-events: none;
  max-width: 100vw;
  max-height: 100vh;
}

.gradient-blur-wrapper{
    position: relative;
}

@media(max-width: 767px){
  .gradient__blur {
    filter: blur(90px);
  }
    .gradient-blur-wrapper{
        overflow-x: clip;
        overflow-y: visible;
    }
}
</style>
