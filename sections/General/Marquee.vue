<script setup>
import { horizontalLoop } from '@/composables/useHorizontalLoop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

onMounted(() => {
    const slides = gsap.utils.toArray('.marquee__slide'),
    loop = horizontalLoop(slides, {
        paused: false,
        repeat: -1,
        speed: 1
    })

    ScrollTrigger.create({
        trigger: ".marquee__slide",
        start: "bottom bottom", // Start when marquee enters viewport from bottom
        end: "top top",         // End when marquee exits viewport from top
        onEnter: () => loop.play(),
        onEnterBack: () => loop.play(),
        onLeave: () => loop.pause(),
        onLeaveBack: () => loop.pause(),
        // Uncomment below for debugging
        // markers: true
    })
})
</script>

<template>
    <section class="marquee section-padding">
        <div v-for="n in 5" :key="n" class="marquee__slide">
            <div class="marquee__slide_content">
                <div class="marquee__slide_text">
                    <h2>We create formats that elevate your brand's voice.</h2>
                </div>
                <div class="marquee__slide_pixel">
                    <NuxtImg src="/images/PIXEL__PIXEL_WIT.png" alt="Pixel" />
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.marquee {
    width: 100%;
    overflow: hidden;

    display: flex;
    align-items: center;
    gap: 40px;
    overflow: hidden;

    will-change: transform;
}

.marquee__container {
    width: 100%;
}

.marquee__slide {
    width: auto !important;
}

.marquee__slide_content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.marquee__slide_text h2 {
    font-family: 'syne', sans-serif;
    font-size: 60px;
    font-weight: 700;
    white-space: nowrap;
    margin: 0;
    color: #fff;
}

.marquee__slide_pixel {
    width: 52px;
    height: 22px;
}


.marquee__slide_pixel img{
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}


@media (max-width: 992px) {
    .marquee__slide_text h2 {
        font-size: 40px;
    }
    .marquee__slide_pixel {
        width: 40px;
    }
}
</style>
