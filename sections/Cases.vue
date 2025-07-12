<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref, nextTick } from 'vue'

import Carousel from '@/components/Carousel.vue'
import CarouselControls from '@/components/CarouselControls.vue'

import GradientBlur from '@/components/GradientBlur.vue'
import PixelLabel from '@/components/PixelLabel.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import Button from '@/components/ui/Button.vue'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const cases = [
    {
        video: 'https://r2.suikerspin.studio/BANNER_NUBIKK_V3.webm',
        title: 'Nubikk',
        label: 'Organisch',
        subtitle: 'Not just viral',
        content: 'De schoen was binnen no time uitverkocht en werd onderdeel van de cultuur. Zo bouwden we aan merkvoorkeur met het juiste format.',
        caseLink: '/cases/nubikk',
        stats: [
            {
                title: 'views',
                stat: 1641922,
            },
            {
                title: 'likes',
                stat: 59231,
            },
            {
                title: 'shares',
                stat: 4430,
            },
        ],
    },
    {
        video: 'https://r2.suikerspin.studio/BANNER_HAPPN_V3.webm',
        title: 'Happn',
        subtitle: 'Culture First Content',
        label: 'UGC Ad Creatie',
        content: 'Voor Happn ontwikkelden we native UGC ad creatives die aanvoelen als echte TikToks, maar gebouwd zijn voor conversie.',
        caseLink: '/cases/happn',
        stats: [],
    },
]

const videoRefs = ref<HTMLVideoElement[]>([])
const casesCarousel = ref()
const detailsCarousel = ref()
const currentSlideIndex = ref(0)
const sectionRef = ref<HTMLElement>()
let videoObserver: IntersectionObserver | null = null
let hasAnimatedInitial = ref(false)

const setupVideoObserver = () => {
    videoObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target as HTMLVideoElement
                const videoIndex = videoRefs.value.indexOf(video)

                if (entry.isIntersecting && videoIndex === currentSlideIndex.value) {
                    video.play().catch(console.warn)
                } else {
                    video.pause()
                }
            })
        },
        { threshold: 0.3 },
    )
}

const setupScrollTrigger = () => {
    ScrollTrigger.create({
        trigger: sectionRef.value,
        start: 'top 80%',
        onEnter: () => {
            if (!hasAnimatedInitial.value) {
                hasAnimatedInitial.value = true
                setTimeout(() => {
                    animateNumbers(0)
                }, 300)
            }
        },
        onEnterBack: () => {
            if (!hasAnimatedInitial.value) {
                hasAnimatedInitial.value = true
                setTimeout(() => {
                    animateNumbers(0)
                }, 300)
            }
        }
    })
}

const playActiveVideo = (slideIndex: number) => {
    // Pause all videos first
    videoRefs.value.forEach((video) => {
        if (video) video.pause()
    })

    // Play only the active video
    const activeVideo = videoRefs.value[slideIndex]
    if (activeVideo) {
        activeVideo.play().catch(console.warn)
    }
}

const animateNumbers = (slideIndex: number | null = null) => {
    let selector = '[data-number]'
    if (slideIndex !== null) {
        selector = `.details-carousel .case-detail.active [data-number]`
    }

    const numberElements = document.querySelectorAll(selector)

    numberElements.forEach((element, index) => {
        const dataNumber = element.getAttribute('data-number')
        const targetValue = slideIndex !== null ? cases[slideIndex].stats[index]?.stat || 0 : parseInt(dataNumber || '0')

        gsap.fromTo(
            element,
            {
                textContent: 0,
            },
            {
                textContent: targetValue,
                duration: 2.5,
                ease: 'power2.out',
                snap: { textContent: 1 },
                stagger: 0.1,
                onUpdate: function () {
                    const currentValue = Math.round(this.targets()[0].textContent as number)
                    const formattedValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                    element.textContent = formattedValue
                },
            },
        )
    })
}

const handleSlideChange = (slideIndex: number) => {
    currentSlideIndex.value = slideIndex
    playActiveVideo(slideIndex)

    // Trigger intersection observer check for the new active video
    const activeVideo = videoRefs.value[slideIndex]
    if (activeVideo && videoObserver) {
        videoObserver.unobserve(activeVideo)
        videoObserver.observe(activeVideo)
    }

    setTimeout(() => {
        animateNumbers(slideIndex)
    }, 100)
}

onMounted(async () => {
    await nextTick()
    setupVideoObserver()
    setupScrollTrigger()

    videoRefs.value.forEach((video) => {
        if (video && videoObserver) {
            videoObserver.observe(video)
        }
    })

    setTimeout(() => {
        playActiveVideo(0)
    }, 500)
})
</script>

<template>
    <section ref="sectionRef" class="cases section-padding">
        <div class="gradient-blur-wrapper container">
            <div class="cases__inner">
                <SectionTitle title="Cases" link="/cases" linkTitle="Bekijk meer" />

                <div class="cases-slider">
                    <div class="cases-slider__carousels ">
                        <Carousel
                            ref="detailsCarousel"
                            effect="fade"
                            :duration="1"
                            ease="power2.out"
                            class="details-carousel"
                            @slide-change="handleSlideChange"
                        >
                            <div v-for="(item, index) in cases" :key="index" class="case-detail h-full">
                                <div class="case-detail__inner">
                                    <div class="case-detail__top">
                                        <div class="case-detail__details">
                                            <div class="title-wrap">
                                                <div class="case-detail__title">{{ item.title }}</div>
                                                <div class="case-detail__subtitle">{{ item.subtitle }}</div>
                                            </div>
                                            <div class="case-detail__content">{{ item.content }}</div>
                                        </div>

                                        <div class="case-detail__buttons">
                                            <Button variant="outline" classes="w-fit" :href="item.caseLink"> Bekijk case </Button>
                                            <Button variant="white" href="/contact" class="blue-btn">Let's get started!</Button>
                                        </div>
                                    </div>

                                    <div class="stats-grid">
                                        <div class="stat-item" v-for="stat in item.stats" :key="stat.title">
                                            <NuxtImg class="stat-item__pixel" src="/images/PIXEL__PIXEL_WIT_OUTLINE.png" />
                                            <div class="stat-item__title">{{ stat.title }}</div>
                                            <div class="stat-item__number">
                                                <span data-number="{{ stat.stat }}">{{ stat.stat }}</span>
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>

                        <Carousel ref="casesCarousel" class="cases-carousel" wrapper-classes="cases-carousel__wrapper" :slides-to-show="2.2">
                            <div class="case-card" v-for="(item, index) in cases" :key="index">
                                <PixelLabel :text="item.label" />
                                <video
                                    :ref="(el) => { if (el) videoRefs[index] = el as HTMLVideoElement }"
                                    class="case-card__video border-radius"
                                    playsinline
                                    muted
                                    loop
                                    preload="metadata"
                                    webkit-playsinline
                                    :autoplay="index === 0"
                                    :controls="index === 1"
                                >
                                    <source :src="item.video" type="video/webm" loading="lazy" />
                                </video>
                            </div>
                        </Carousel>
                    </div>

                </div>

                <CarouselControls :targets="[casesCarousel, detailsCarousel]" class="cases-controls" />
            </div>

            <GradientBlur
                :width="{ default: '40%', sm: '30%' }"
                :height="{ default: '40%', sm: '30%' }"
                :top="{ default: '50%', sm: '50%' }"
                :left="{ default: '20%', sm: '50%' }"
            />
        </div>
    </section>
</template>

<style scoped>
.cases {
    position: relative;
}

.cases .container {
    max-width: 1250px;
}

.cases .gradient__blur {
    translate: -50% -50%;
}

.cases-slider {
    display: flex;
    flex-direction: column;
    gap: 40px;

    padding-top: 40px;
}

.cases-controls {
    padding-top: 16px;
    justify-self: center;
    justify-content: center;
}

.cases-slider__carousels {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.case-detail__inner {
    display: flex;
    flex-direction: column;
    gap: 24px;

    max-width: 460px;
}

.case-detail__top {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.case-detail__details {
    display: flex;
    flex-direction: column;
    gap: 18px;

    width: 100%;

    color: var(--off-white);
    transition: all 300ms ease;

    max-width: 480px;
}

.cases-slider__details-wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.cases-slider .title-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.case-detail__title {
    font-size: 48px;
    font-weight: 600;
    line-height: 100%;
}

.case-detail__subtitle {
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 500;
    color: var(--off-white_50);
}

.case-detail__content {
    font-family: 'Montserrat';
    font-size: 16px;
    line-height: 22px;
}

.case-detail__buttons {
    display: flex;
    align-items: center;
    gap: 24px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
}

.stat-item {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.stat-item__pixel {
    width: 46px;
}

.stat-item__title {
    font-family: 'Montserrat';
    font-size: 16px;
    color: var(--off-white);

    text-transform: capitalize;
}

.stat-item__number {
    color: var(--off-white);
    font-family: 'Syne';
    font-size: 20px;
    font-weight: 600;
}

.case-card {
    position: relative;

    border-radius: 8px;

    opacity: 0.3;
    transition: opacity 0.2 ease;

    overflow: hidden;
    will-change: opacity;
}

.case-card.active {
    opacity: 1;
    transition: opacity 0.2 ease;
}

.case-card .pixel-label {
    display: none;
}

.case-card__video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    will-change: transform;
    transform: translateZ(0);

    aspect-ratio: 9 / 16;
    max-height: 600px;
}

@media (max-width: 767px) {
    .case-card__video {
        max-height: 600px;
    }
    .case-detail__title{
        font-size: 32px;
    }
}

@media screen and (min-width: 992px) {
    .cases-slider {
        padding-top: 80px;
    }

    .cases-slider__carousels {
        flex-direction: row;
        gap: 54px;
        width: 100%;
    }

    .details-carousel {
        max-width: 600px;
    }

    .case-detail__inner {
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .case-detail__subtitle {
        font-size: 24px;
    }

    .cases-slider__details {
        height: fit-content;
        width: 100%;
    }

    .stats-grid__stat-block {
        font-size: 22px;
    }

    .cases-carousel {
        position: relative;
        right: calc(50% - 50vw);
        width: calc(100vw - 50% + 50vw);
        margin-right: calc(50% - 50vw);

        margin-bottom: -24px;
    }

    .case-card {
        aspect-ratio: 9 / 16;
        max-width: 350px;
        padding: 24px;
    }

    .case-card .pixel-label {
        display: flex;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .cases-controls {
        padding-top: 40px;
        justify-self: flex-end;
        justify-content: end;
    }
}

@media screen and (min-width: 1600px) {
    .cases-carousel {
        position: initial;
        right: unset;
        width: 100%;
        margin-right: unset;

        justify-self: flex-end;
        margin-right: -24px;
    }
}
</style>
