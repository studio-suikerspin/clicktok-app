<script setup>
import 'boxicons/css/boxicons.min.css'

const colorMode = useColorMode()
colorMode.preference = 'dark'
</script>
<template>
  <div class="bg-black overflow-x-hidden">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>
