<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    video: {
        type: String,
        required: true,
    },
})

// Refs voor de animatie elementen
const titleRef = ref(null)
const descriptionRef = ref(null)

const images = [
    { src: '/images/london-shoot1-min.webp', class: 'first' },
    { src: '/images/london-shoot2-min.webp', class: 'second' },
    { src: '/images/camera-image.webp', class: 'third' },
    { src: '/images/couch-shoot-min.webp', class: 'fourth' },
    { src: '/images/couch-shoot-min.webp', class: 'fifth' },
    { src: '/images/nubikk-shoot-min.webp', class: 'sixth' },
    { src: '/images/nubikk-shoot2-min.webp', class: 'seventh' },
    { src: '/images/shoe-shoot-min.webp', class: 'eighth' },
]

onMounted(() => {
    // Titel en beschrijving animatie
    const tl = gsap.timeline()

    // Start met de elementen onzichtbaar en naar beneden
    gsap.set([titleRef.value, descriptionRef.value], {
        opacity: 0,
        y: 30,
    })

    // Animeer de titel eerst
    tl.to(titleRef.value, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
    })

    // Dan de beschrijving met een kleine vertraging
    if (descriptionRef.value) {
        tl.to(
            descriptionRef.value,
            {
                opacity: 1,
                y: 0,
                duration: 1.3,
                ease: 'power2.out',
            },
            '-=0.3',
        ) // Start 0.3 seconden eerder dan het einde van de titel animatie
    }

    // Alleen animaties uitvoeren op schermen groter dan 992px
    if (window.innerWidth > 992) {
        // Eerste afbeelding: kleine op-en-neer beweging
        gsap.to('.hero__content__inner__image.first', {
            y: '5px',
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        })

        // Tweede afbeelding: kleine rotatie
        gsap.to('.hero__content__inner__image.second', {
            rotation: 1,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        })

        // Derde afbeelding: kleine schaal
        gsap.to('.hero__content__inner__image.third', {
            scale: 1.02,
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        })

        // Vierde afbeelding: kleine x-as beweging
        gsap.to('.hero__content__inner__image.fourth', {
            x: '4px',
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        })

        // Vijfde afbeelding: kleine op-en-neer beweging
        gsap.to('.hero__content__inner__image.fifth', {
            y: '3px',
            duration: 2.7,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        })

        // Zesde afbeelding: kleine rotatie
        gsap.to('.hero__content__inner__image.sixth', {
            rotation: -1,
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        })

        // Zevende afbeelding: kleine schaal
        gsap.to('.hero__content__inner__image.seventh', {
            scale: 1.01,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        })

        // Achtste afbeelding: kleine x-as beweging
        gsap.to('.hero__content__inner__image.eighth', {
            x: '-4px',
            duration: 2.6,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        })
    }
})
</script>

<template>
    <div class="hero__content">
        <div class="container">
            <div class="hero__content__inner">
                <div :class="`hero__content__inner__image ${image.class}`" v-for="image in images" :key="image.src">
                    <div class="image-overlay"></div>
                    <NuxtImg :src="image.src" :class="image.class" alt="A floating image inside the hero content" loading="lazy" />
                </div>
                <div class="hero__video-wrap">
                    <div class="video__inner">
                        <video class="hero__video border-radius" autoplay muted playsinline loop webkit-playsinline style="pointer-events: none">
                            <source :src="video" type="video/webm" width="100%" height="978" loading="lazy" />
                        </video>
                        <div class="video__overlay border-radius"></div>
                    </div>
                </div>
                <div class="hero__content__inner__text">
                    <h1 ref="titleRef" class="montserrat-title">{{ title }}</h1>
                    <div ref="descriptionRef" class="hero__content__inner-description">
                        {{ description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hero__content {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 3;
}

.hero__content__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 145px;
}

.hero__content__inner__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 24px;
    color: var(--off-white);
    z-index: 2;
    min-height: 500px;
}

.hero__content__inner__text h1 {
    position: relative;
    top: 120px;
    font-size: 132px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
}

.hero__content__inner-description {
    font-size: 18px;
    max-width: 580px;
    text-align: center;
    font-weight: 500;
}

@media (max-width: 1024px) {
    .hero__content__inner__text h1 {
        font-size: 96px;
    }
    .hero__content__inner-description {
        font-size: 16px;
        max-width: 100%;
    }
}

@media (max-width: 767px) {
    .hero__content__inner__text h1 {
        font-size: 72px;
    }
}

/* Video */
.hero__video-wrap {
    position: absolute;
    z-index: 1;
    top: 0;
    max-width: 375px;
    max-height: 800px;
}

.hero__video-wrap video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    opacity: 0.8;
}

/* Images */
.hero__content__inner__image {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 210px;
    max-height: 280px;
    border-radius: 24px;

    overflow: hidden;
}

.hero__content__inner__image:hover .image-overlay {
    opacity: 0;
    transition: opacity 150ms ease-out;
}

.hero__content__inner__image .image-overlay {
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 150ms ease-out;
}

.hero__content__inner__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero__content__inner__image.first {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 210px;
    max-height: 280px;
}

.hero__content__inner__image.second {
    position: absolute;
    top: 40px;
    left: 250px;
    max-width: 168px;
    max-height: 265px;
}

.hero__content__inner__image.third {
    position: absolute;
    bottom: 60px;
    left: 0;
    max-width: 213px;
    max-height: 259px;
}

.hero__content__inner__image.fourth {
    position: absolute;
    bottom: 20px;
    left: 250px;
    max-width: 177px;
    max-height: 226px;
}

.hero__content__inner__image.fifth {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 210px;
    max-height: 280px;
}

.hero__content__inner__image.sixth {
    position: absolute;
    top: 40px;
    right: 250px;
    max-width: 168px;
    max-height: 265px;
}

.hero__content__inner__image.seventh {
    position: absolute;
    bottom: 60px;
    right: 0;
    max-width: 213px;
    max-height: 259px;
}

.hero__content__inner__image.eighth {
    position: absolute;
    bottom: 20px;
    right: 250px;
    max-width: 177px;
    max-height: 226px;
}

@media (max-width: 1250px) {
    .hero__content__inner__image.second,
    .hero__content__inner__image.fourth,
    .hero__content__inner__image.sixth,
    .hero__content__inner__image.eighth {
        display: none;
    }
}

@media (max-width: 992px) {
    .hero__content__inner__image {
        display: none;
    }
}
</style>
