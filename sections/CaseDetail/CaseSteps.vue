<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

// Components
import GradientBlur from '@/components/GradientBlur.vue'

const { project } = defineProps({
    project: Object
})

const timeline = ref(null)

const animateCards = () => {
    gsap.set('.card', {
        opacity: 0,
        y: '10%',
    })

    gsap.to('.card', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.card',
        }
    })
}

onMounted(() => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.steps',
            start: 'top top',
            scrub: 1,
        }
    })

    tl.to('.timeline__active', { height: '100%' })

    animateCards()
})
</script>

<template>
    <section class="steps">
        <div class="container gradient-blur-wrapper">
            <GradientBlur :width="{ default: '60vw', sm: '50vw' }" :height="{ default: '80vh', sm: '40vh' }" :left="{ default: '1%', sm: '0%' }" :top="{ default: '1%', sm: '0%' }"/>
            <GradientBlur :width="{ default: '60vw', sm: '50vw' }" :height="{ default: '60vh', sm: '40vh' }" :right="{ default: '5%', sm: '0%' }" :top="{ default: '45%', sm: '50%' }"/>
            <GradientBlur :width="{ default: '60vw', sm: '80vw' }" :height="{ default: '40vh', sm: '60vh' }" :left="{ default: '0%', sm: '0%' }" :bottom="{ default: '2%', sm: '1%' }"/>
        <div class="steps__inner">

            <div class="steps__card-wrap">
                <div class="card border-radius">
                    <video autoplay playsinline muted loop v-if="project.videos && project.videos[0]">
                        <source :src="project.videos[0]" type="video/webm" loading="lazy"/>
                    </video>

                    <img v-else :src="project.images[0]" :alt="project.title">
                </div>
                <div class="card border-radius card--gradient">
                    <div class="card__title">De vraag</div>
                    <div class="card__content">{{ project.problem }}</div>
                </div>
                <div class="card border-radius">
                    <video autoplay playsinline muted loop v-if="project.videos && project.videos[2]">
                        <source :src="project.videos[2]" type="video/webm" loading="lazy"/>
                    </video>

                    <img v-else :src="project.images[2]" :alt="project.title">
                </div>
            </div>

            <div class="timeline" ref="timeline">
                <div class="timeline__active">
                    <div class="timeline__line"></div>
                    <div class="timeline__thumb"></div>
                </div>

                <div class="timeline__background"></div>
            </div>

            <div class="steps__card-wrap">
                <div class="card border-radius card--gradient">
                    <div class="card__title">Wie is de klant?</div>
                    <div class="card__content">{{ project.about }}</div>
                </div>
                <div class="card border-radius">
                    <video autoplay playsinline muted loop v-if="project.videos && project.videos[1]">
                        <source :src="project.videos[1]" type="video/webm" loading="lazy"/>
                    </video>

                    <img :src="project.images[1]" :alt="project.title" v-else>
                </div>
                <div class="card border-radius card--gradient">
                    <div class="card__title">De oplossing</div>
                    <div class="card__content">{{ project.solution }}</div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<style scoped>
    .steps {
        padding-block: 80px;
    }

    .steps__inner {
        position: relative;

        max-width: 1200px;
        margin-inline: auto;
        padding-inline: 16px;

        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .steps__card-wrap {
        display: flex;
        flex-direction: column;
        gap: 40px;

        min-width: 0;
    }

    .card {
        overflow: clip;
        max-height: 800px;
    }

    .card--gradient {
        background: url('/images/gradient-vierkant-mobile-min.webp');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;

        padding-inline: 40px;
        padding-block: 40px;
    }

    .card__title {
        color: var(--off-white);
        font-family: Syne;
        font-size: 56px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .card__content {
        color: var(--off-white);
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-wrap: balance;
    }

    .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .timeline {
        height: 100%;
        width: 100%;

        display: none;
        flex-direction: column;
        align-items: center;


        position: absolute;
        left: 0;
        width: fit-content;
    }

    .timeline__active {
        position: absolute;
        z-index: 2;
    }

    .timeline__line {
        width: 10px;
        height: 100%;

        background: var(--accent-blue);
        border-radius: 8px;
    }

    .timeline__thumb {
        position: absolute;
        left: 50%;
        translate: -50% -50%;

        width: 25px;
        height: 25px;
        border-radius: 100%;
        background: var(--accent-blue);
        filter: drop-shadow(0px 3px 6px var(--accent-blue));
    }

    .timeline__background {
        background: var(--off-white);
        width: 10px;
        height: 100%;

        border-radius: 8px;
    }

    .steps__card-wrap .card {
        border-radius: 24px;
        display: flex;
        justify-content: center;
    }

    .steps__card-wrap .card:has(video, img) {
        align-items: center;
        max-height: 500px;
    }

    .steps__card-wrap video {
        /* aspect-ratio: 9 / 16; */
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 24px;
    }

    @media(max-width: 767px){
        .steps{
            padding-block: 40px;
            padding-bottom: 0;
        }
        .steps__card-wrap{
            gap: 24px;
        }
        .steps__card-wrap video {
            max-height: 600px;
        }
        .card__title{
            font-size: 32px;
        }

        .steps__card-wrap .card {
            /* padding: 24px 16px; */
            padding: 0;
        }
        .steps__card-wrap .card--gradient{
            padding: 24px 16px;
        }
        .card {
            max-height: unset;
        }
        .steps__inner{
            padding: 0;
        }
    }

    @media (min-width: 992px) {
        .timeline {
            display: flex;
            position: initial;
        }

        .steps__inner {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 40px;
        }

        .steps__card-wrap {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
        }
    }
</style>
