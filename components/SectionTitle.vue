<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';

const { title, link, animateOnScroll } = defineProps({
    title: String,
    subtitle: String,
    animateOnScroll: {
        type: Boolean,
        default: true
    }
})

const titleRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);

onMounted(async () => {
    await nextTick()

    const behavior = animateOnScroll ? {
        trigger: titleRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none', // Changed from 'play none none reverse'
        once: true
    } : null;

    if (titleRef.value) {
        gsap.fromTo(
            titleRef.value,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: behavior
            }
        );
    }

    const subtitleBehavior = animateOnScroll ? {
        trigger: subtitleRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none' // Changed from 'play none none reverse'
    } : null;

    if (subtitleRef.value) {
        gsap.fromTo(
            subtitleRef.value,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power2.out',
                scrollTrigger: subtitleBehavior
            }
        );
    }
});
</script>

<template>
    <div class="section-title_wrapper">
        <div class="section-title__title title-font" ref="titleRef" v-html="title"></div>
        <div v-if="subtitle" class="section-title__subtitle subtitle-font" ref="subtitleRef" v-html="subtitle"></div>
    </div>
</template>

<style>
.section-title_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.section-title__title {
    font-size: 46px;
    color: var(--off-white);
    opacity: 0;
    transform: translateY(50px);
    text-align: center;
}

.section-title__subtitle {
    font-size: 18px;
    color: var(--off-white_50);
    text-align: center;
    max-width: 450px;
    line-height: 110%;
}

@media screen and (min-width: 992px) {
    .section-title__title {
        font-size: 72px;
    }
    .section-title__subtitle {
        font-size: 24px;
    }
}

</style>
