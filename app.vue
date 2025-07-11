<script setup>
const colorMode = useColorMode();
const changeColor = () => (colorMode.preference = 'dark')
</script>
<template>
  <div class="bg-black">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>
