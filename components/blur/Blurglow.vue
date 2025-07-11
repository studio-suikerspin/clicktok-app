<script setup>
import { computed } from 'vue';

const viewport = useViewport();

const props = defineProps({
  top: {
    type: String,
    default: 'unset',
  },
  left: {
    type: String,
    default: 'unset',
  },
  right: {
    type: String,
    default: 'unset',
  },
  bottom: {
    type: String,
    default: 'unset',
  },
  width: {
    type: String,
    default: '400px',
  },
  height: {
    type: String,
    default: '400px',
  },
  mobileNoBlur: {
    type: Boolean,
    default: false,
  },
  mobileNoBlurWidth: {
    type: String,
    default: '200px',
  },
  mobileNoBlurHeight: {
    type: String,
    default: '200px',
  },
});

const styleObject = computed(() => {
  if (viewport.isLessThan('tablet') && props.mobileNoBlur) {
    return {
      top: props.top,
      left: props.left,
      right: props.right,
      bottom: props.bottom,
      width: props.mobileNoBlurWidth,
      height: props.mobileNoBlurHeight,
    };
  }
  return {
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    width: props.width,
    height: props.height,
  };
});
</script>

<template>
  <div
    class="blur-glow"
    :style="styleObject"
  />
</template>

<style scoped>
.blur-glow {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(30, 25, 58, 0.6), rgba(178, 156, 198, 0.6));
  filter: blur(75px);
  opacity: 0.7;
  z-index: -1;
  pointer-events: none;
}
</style>
