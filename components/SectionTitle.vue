<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';

const { title, subtitle, animateOnScroll } = defineProps({
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

    if (animateOnScroll && titleRef.value) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -20% 0px'
        });

        observer.observe(titleRef.value);
        
        if (subtitleRef.value) {
            observer.observe(subtitleRef.value);
        }
    } else {
        // Direct animation without scroll trigger
        if (titleRef.value) {
            titleRef.value.classList.add('animate-in');
        }
        if (subtitleRef.value) {
            subtitleRef.value.classList.add('animate-in');
        }
    }
});
</script>

<template>
    <div class="section-title_wrapper">
        <div ref="titleRef" class="section-title__title title-font animate-element" v-html="title"/>
        <div v-if="subtitle" ref="subtitleRef" class="section-title__subtitle subtitle-font animate-element" v-html="subtitle"/>
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
    text-align: center;
    max-width: 1250px;
}

.section-title__subtitle {
    font-size: 18px;
    color: var(--off-white_50);
    text-align: center;
    max-width: 450px;
    line-height: 110%;
}

/* CSS Animation classes */
.animate-element {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-element.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* Delay for subtitle */
.section-title__subtitle.animate-element {
    transform: translateY(30px);
}

.section-title__subtitle.animate-element.animate-in {
    transition-delay: 0.2s;
}

.case-detail .section-title__title {
    font-size: 40px;
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
