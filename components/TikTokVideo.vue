<script setup>
const { videoId } = defineProps({
  videoId: String
})
</script>

<template>
  <iframe
    class="case-card__video border-radius"
    :src="`https://www.tiktok.com/player/v1/${videoId}?controls=1&progress_bar=0&play_button=0&autoplay=0`"
    frameborder="0"
    width="100%"
    height="100%"
></iframe>
</template>

<style scoped>
.case-card__video {
    object-fit: cover;
    width: 100%;
    height: 100%;

    aspect-ratio: 9 / 16;
}

@media(max-width: 767px){
    .case-card__video {
        max-height: 600px;
    }
}
</style>
