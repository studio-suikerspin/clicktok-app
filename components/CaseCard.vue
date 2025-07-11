<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

import PixelLabel from './PixelLabel.vue'
import Button from './ui/Button.vue'

const props = defineProps({
    tags: Array,
    tags_position: String,
    client: String,
    handle: String,
    featured_video: String,
    featured_image: String,
    aspect_ratio: String,
    autoplay: Boolean,
    isDetailPage: Boolean,
})

onMounted(() => {
    gsap.to('.case-card', {
        opacity: 1,
        y: 0,
        ease: 'power2.inOut'
    })
})
</script>

<template>
    <div :class="['case-card border-radius', { 'is-detail-page': props.isDetailPage }]" :data-tags="props.tags" :style="`--aspect-ratio: ${props.aspect_ratio};`">
        <ul class="case-card__tags" :style="`${props.tags_position === 'right' ? 'right: -10px;' : 'left: -10px;'}`">
            <li v-for="(tag, key) in props.tags" :key="key">
                <PixelLabel :text="tag" />
            </li>
        </ul>
        <div class="case-card__video-wrap border-radius">
            <div class="case-card__content">
                <div class="case-card__title">{{ props.client }}</div>
                <Button v-if="props.handle" :href="`/cases/${props.handle}`" variant="outline">Bekijk case</Button>
            </div>

            <video class="case-card__video" v-if="props.featured_video !== undefined" autoplay muted loop playsinline webkit-playsinline style="pointer-events: none;">
                <source :src="props.featured_video" type="video/webm" loading="lazy"/>
            </video>

            <NuxtImg v-else class="case-card__image" :src="props.featured_image" :alt="props.client" loading="lazy" />
        </div>
    </div>
</template>

<style scoped>
.case-card {
    aspect-ratio: var(--aspect-ratio, 9 / 16);
    position: relative;

    min-width: 0;

    opacity: 0;
    transform: translateY(10%);
}

.case-card__video-wrap {
    position: relative;

    overflow: clip;
    width: 100%;
    height: 100%;
}

.case-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.case-card__content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.25);
}

.case-card__title {
    text-align: center;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: white;
}

.case-card__content .btn {
    position: absolute;
    bottom: 40px;
}

.case-card__video {
    width: 100%;
    height: 100%;
    object-fit: cover;

    aspect-ratio: 9 / 16;
}

@media(max-width: 767px){
    .case-card__video {
        max-height: 600px;
    }
}

.case-card__tags {
    display: flex;
    flex-direction: column;
    gap: 10px;

    position: absolute;
    z-index: 5;
    top: -10px;
}

.tag {
    background-image: url('/images/gradient-vierkant-min.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    padding: 8px;
    border-radius: 8px;
}

@media(max-width: 767px){
    .case-card.is-detail-page {
        display: none;
    }
}
</style>
