<script setup lang="ts">
const { text } = defineProps({
    text: String,
    classes: String,
    withGradient: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div class="pixel-label {{ classes }}">
        <span class="pixel-label__text" :class="{ 'with-gradient': withGradient }">{{ text }}</span>
         <!-- <NuxtImg src="/images/PIXEL__PIXEL_WIT.png" /> -->
         <img v-if="!withGradient" src="/images/PIXEL__PIXEL_WIT.png" >
         <img v-else src="/images/PIXEL__PIXEL_GRADIENT.png" >
    </div>
</template>

<style scoped>
.pixel-label {
    position: relative;

    overflow: clip;

    display: flex;
    align-items: center;
    justify-content: center;


    height: 70px;

    padding-block: 16px;
    padding-inline: 42px;
}

img {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
}

.pixel-label__text {
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: italic;
    font-weight: 700;
    line-height: 20px;
    color: var(--accent-dark-purple);

    text-wrap: nowrap;
}

.pixel-label__text.with-gradient {
    color: var(--off-white);
}
</style>
