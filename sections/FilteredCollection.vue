<script setup>
import CaseCard from '@/components/CaseCard.vue'
import GradientBlur from '@/components/GradientBlur.vue'
import cases from '@/lib/cases.js'

import { gsap } from 'gsap'
import { computed, nextTick, onMounted, ref } from 'vue'

function initAutoplayVideos(selector = 'video[autoplay]') {
  const enableAutoplay = () => {
    const videos = document.querySelectorAll(selector);
    videos.forEach(video => {
      // Video-elementen hebben de play() methode, dus gewoon aanroepen
      video.play().catch(err => {
        console.warn('Autoplay blocked for video:', video, err);
      });
    });

    window.removeEventListener('click', enableAutoplay);
    window.removeEventListener('touchstart', enableAutoplay);
    window.removeEventListener('scroll', enableAutoplay);
  };

  window.addEventListener('click', enableAutoplay);
  window.addEventListener('touchstart', enableAutoplay);
  window.addEventListener('scroll', enableAutoplay);
}


const activeFilter = ref('all')
const collection = ref(null)

const filteredCases = computed(() => {
    if (activeFilter.value === 'all') {
        return cases
    }
    return cases.filter((item) => item.tags.includes(activeFilter.value))
})

const animateCards = () => {
    gsap.set('.case-card', {
        opacity: 0,
        y: '10%',
    })

    gsap.to('.case-card', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
    })
}

const handleFilter = async (filter) => {
    gsap.to('.case-card', {
        opacity: 0,
        y: '5%',
        duration: 0.1,
        ease: 'power2.in',
        stagger: 0.05
    })

    await new Promise((resolve) => setTimeout(resolve, 300))

    activeFilter.value = filter

    await nextTick()

    animateCards()
}

const isActive = (filter) => {
    return activeFilter.value === filter
}

onMounted(() => {
    initAutoplayVideos()
    animateCards()
})
</script>

<template>
    <section class="filtered-collection relative">
        <div class="filtered-collection__container container">
            <ul class="filters">
                <li :class="['filter', { active: isActive('all') }]" @click="() => handleFilter('all')">
                    <span class="filter__number">01</span>
                    <span class="filter__title">All cases</span>
                </li>

                <li :class="['filter', { active: isActive('Organic Campaign') }]" @click="() => handleFilter('Organic Campaign')">
                    <span class="filter__number">02</span>
                    <span class="filter__title">Organic Campaign</span>
                </li>

                <li :class="['filter', { active: isActive('Paid Advertising') }]" @click="() => handleFilter('Paid Advertising')">
                    <span class="filter__number">03</span>
                    <span class="filter__title">Paid Advertising</span>
                </li>

                <li :class="['filter', { active: isActive('UGC Ad Creatie') }]" @click="() => handleFilter('UGC Ad Creatie')">
                    <span class="filter__number">04</span>
                    <span class="filter__title">UGC Ad Creatie</span>
                </li>

                <li :class="['filter', { active: isActive('Creator Collaborations') }]" @click="() => handleFilter('Creator Collaborations')">
                    <span class="filter__number">05</span>
                    <span class="filter__title">Creator Collaborations</span>
                </li>
            </ul>

            <div class="collection" ref="collection">
                <template v-for="(item, key) in filteredCases" :key="key" v-if="filteredCases.length">
                    <CaseCard :client="item.client" :tags="item.tags" :featured_video="item.featured_video" :handle="item.handle" :autoplay="true" />
                </template>

                <template v-else>
                    <div class="not-found">Nog geen cases gevonden.</div>
                </template>
            </div>
        </div>

        <GradientBlur
            :width="{ default: '20vw', sm: '20vw' }"
            :height="{ default: '30vh', sm: '30vh' }"
            :top="{ default: '10%', sm: '0' }"
            :left="{ default: '20%', sm: '0' }"
        />
        <GradientBlur
            :width="{ default: '20vw', sm: '20vw' }"
            :height="{ default: '30vh', sm: '30vh' }"
            :top="{ default: '50%', sm: '0' }"
            :right="{ default: '0', sm: '0' }"
        />
    </section>
</template>

<style scoped>
.collection {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
    padding-block: 40px;

    transition: height 150ms ease-out;
}

.filters {
    display: flex;
    align-items: center;
    padding-block: 20px;

    overflow-x: scroll;
    max-width: 100%;
    width: 100%;

    scrollbar-width: none;
    -ms-overflow-style: none;
}

.filters::-webkit-scrollbar {
    display: none;
}

/* @media(max-width: 1400px){
    .filters{
        padding-left: 24px;
        padding-right: 24px;
    }
} */

.filter {
    display: flex;
    align-items: center;
    gap: 16px;

    padding-inline-end: 24px;
    padding-block-end: 30px;
    border-bottom: 1px solid white;

    pointer-events: all;
    cursor: pointer;

    opacity: 0.6;
    transition: all 150ms ease-out;
    width: 100%;
}

.filter:not(:first-child) {
    padding-inline-start: 24px;
}

.filter.active {
    opacity: 1;
    pointer-events: none;

    transition: all 150ms ease-out;
}

.filter:hover {
    opacity: 1;
    transition: all 150ms ease-out;
}

.filter__number {
    font-family: Montserrat;
    font-size: clamp(1rem, 0.9107rem + 0.2857vw, 1.125rem);
    font-style: italic;
    line-height: normal;

    color: var(--accent-pink);
}

.filter__title {
    color: var(--off-white);
    font-family: Montserrat;
    /* font-size: clamp(1.125rem, 0.8571rem + 0.8571vw, 1.5rem); */
    font-size: 18px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;

    text-wrap: nowrap;
}

.not-found {
    font-size: 24px;
    color: var(--off-white);
}

@media (min-width: 567px) {
    .collection {
        grid-template-columns: repeat(2, 1fr);
        padding-block: 80px;
    }
}

@media (min-width: 992px) {
    .collection {
        grid-template-columns: repeat(3, 1fr);
        padding-block: 80px;
    }
}

@media (min-width: 1200px) {
    .collection {
        grid-template-columns: repeat(4, 1fr);
        padding-block: 80px;
    }
}
</style>
