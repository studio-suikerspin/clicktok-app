<script setup>
import 'boxicons/css/boxicons.min.css'

const colorMode = useColorMode()
colorMode.preference = 'dark'
</script>
<template>
  <div class="bg-black">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>
