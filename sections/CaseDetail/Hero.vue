<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue';

import CaseCard from '@/components/CaseCard.vue';

const { project } = defineProps({
    project: Object,
    isDetailPage: Boolean,
})

const animateNumbers = (slideIndex = null) => {
    let selector = '[data-number]'

    const numberElements = document.querySelectorAll(selector)

    numberElements.forEach((element) => {
        const targetValue = parseInt(element.getAttribute('data-number'))

        gsap.fromTo(
            element,
            {
                textContent: 0,
            },
            {
                textContent: targetValue,
                duration: 1.5,
                ease: 'power2.out',
                snap: { textContent: 1 },
                stagger: 0.1,
                onUpdate: function () {
                    let currentValue = Math.round(this.targets()[0].textContent)
                    currentValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                    element.textContent = currentValue
                },
            },
        )
    })
}

onMounted(() => animateNumbers())
</script>

<template>
    <section class="hero">

        <div class="hero__inner">
            <div class="hero__content">
                <div v-if="project.client_logo">
                    <img class="hero__logo" :src="project.client_logo" :alt="project.client">
                </div>
                <h1 class="hero__title" v-else>{{ project.client }}</h1>
                <div class="hero__subtitle">
                    {{ project.subtitle }}
                </div>

                <div class="hero__details">
                    <div class="details">
                        <div class="detail-wrap">
                            <div class="label">Klant</div>
                            <div class="value">{{ project.client }}</div>
                        </div>

                        <div class="detail-wrap">
                            <div class="label">Doel</div>
                            <div class="value">{{ project.target }}</div>
                        </div>

                        <div class="detail-wrap">
                            <div class="label">Looptijd</div>
                            <div class="value">{{ project.timeline }}</div>
                        </div>
                    </div>

                    <div class="details stats">
                        <div class="detail-wrap" v-for="(stat, key) in project.stats" :key="key">
                            <div class="label">{{ stat.title }}</div>
                            <div class="value" :data-number="stat.stat">{{ stat.stat }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseCard
                :client="project.client"
                :featured_video="project.featured_video"
                :tags="project.tags"
                tags_position="right"
                :aspect_ratio="460/680"
                :autoplay="true"
                :isDetailPage="isDetailPage"
            />
        </div>
    </section>
</template>

<style scoped>
.hero {
    padding-block: 40px;
}

.hero__inner {
    display: grid;
    align-items: flex-start;
    gap: 80px;

    padding-inline: 16px;

    max-width: 1200px;
    margin-inline: auto;
}

.hero__logo {
    max-height: 60px;
}

.hero__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.case-card {
    min-width: 0;
}

.hero__title {
    font-size: clamp(3rem, 0.4107rem + 8.2857vw, 6.625rem);
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;

    color: var(--off-white);
}

.hero__subtitle {
    color: var(--White_off, #FDFDFD);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;

    text-wrap: balance;

    padding-block-end: 24px;
}

.hero__details {
    display: flex;
    align-items: flex-start;
    gap: 80px;
}

.details {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.detail-wrap {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.label {
    color: var(--off-white);
    font-family: Montserrat;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
}

.value {
    color: var(--off-white);
    font-family: Montserrat;
    font-size: 24px;
    font-style: italic;
    font-weight: 800;
    line-height: normal;
}

@media (min-width: 768px) {
    .hero {
        padding-block: 80px;
    }

    .hero__inner {
        grid-template-columns: 55% 1fr;
    }
}

/* @media(max-width: 767px) {
    .hero__logo{
        max-height: 60px;
    }
} */
</style>
