<script setup>
// Components
import Button from '@/components//ui/Button.vue'
import LogoSlider from '@/sections/General/LogoSlider.vue'

import gsap from 'gsap'
import { onMounted } from 'vue'
import { VideoStream } from 'stream-vue'

// Floating animation function
const animateFloatingImages = () => {
  const floatingImages = document.querySelectorAll('.hero__floating_image')
  
  floatingImages.forEach((image, index) => {
    gsap.to(image, {
      y: '4px',
      duration: 2 + (index * 0.3),
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      delay: index * 0.2
    })
  })
}

onMounted(() => {
    if (window.innerWidth >= 1024) {
    animateFloatingImages()
    }
})
</script>

<template>
    <!-- <div class="hero__flex"> -->
        <div class="hero">
            
            
            <div class="container relative text-container">

                 <!-- left images -->
                <div class="hero__floating_image with-hover first border-radius">
                    <div class="hero__floating_image_wrapper">
                        <NuxtImg provider="cloudflare" src="/images/nubikk-shoot-min.webp" alt="Hero floating image" />
                        <VideoStream src="1dfcb5eed704b08341cfec3dde51b983" webkit-playsinline autoplay muted loop playsinline loading="lazy"/>
                    </div>
                </div>
              
                <div class="hero__floating_image with-hover third border-radius">
                    <div class="hero__floating_image_wrapper">
                        <NuxtImg provider="cloudflare" src="/images/nubikk-shoot2-min.webp" alt="Hero floating image" loading="lazy" />
                        <VideoStream src="924de0fb167dcb867709b92b694f387b" webkit-playsinline autoplay muted loop playsinline loading="lazy"/>
                    </div>
                </div>

                <!-- right images -->
                <div class="hero__floating_image with-hover fourth border-radius">
                    <div class="hero__floating_image_wrapper">
                        <NuxtImg provider="cloudflare" src="/images/camera-image.webp" alt="Hero floating image" loading="lazy" />
                        <VideoStream src="4bd7c667bfe2da80cfed40c90bc94c72" webkit-playsinline autoplay muted loop playsinline loading="lazy"/>
                    </div>
                </div>
               
                <div class="hero__floating_image with-hover sixth border-radius">
                    <div class="hero__floating_image_wrapper">
                        <NuxtImg provider="cloudflare" src="/images/nubikk-shoot2-min.webp" alt="Hero floating image" loading="lazy" />
                        <VideoStream src="ee4778eee199131194912a4ca1dfcd0a" webkit-playsinline autoplay muted loop playsinline loading="lazy"/>
                    </div>
                </div>

                <div class="hero__inner">
                    <div class="hero__title_wrapper">
                        <div class="hero__title_wrapper-top">Full Service</div>
                        <h1 class="hero__title">TikTok Agency</h1>
                        <div class="hero__subtitle">
                            <span class="first-span">Gefocust op merkbeleving die blijft
                            hangen.</span> We bouwen formats vanuit <span class="thick-span">merkwaarden</span> om het juiste gevoel over
                            te brengen, sterke <span class="thick-span">associaties</span> te creëren en zo te zorgen voor <span class="thick-span">herkenning,
                            activatie en conversie</span>.
                        </div>
                        <div class="hero__cta_wrapper">
                            <Button variant="white" href="/contact" class="hero__cta">Let's get started!</Button>
                            <Button variant="outline" href="/cases" class="hero__cta">Bekijk cases</Button>
                        </div>
                    </div>

                </div>

            </div>

            <div class="hero__slider_wrapper">
                <LogoSlider />
            </div>

            <NuxtImg provider="cloudflare" class="background-gradient" src="/images/gradient-vierkant-min.webp" alt="Background gradient" />
        </div>
    <!-- </div> -->
</template>

<style>
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    overflow-x: hidden; /* voorkomt scrollbars bij mask */
    padding: 200px 30px 70px;
    /* padding-bottom: 70px; */

    /* mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%); */
}

.hero .background-gradient {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
-webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
}

.hero .background-gradient img{
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.hero .text-container {
    margin-top: auto;
    margin-bottom: auto;
}

@media(max-width: 767px){
    .hero {
        padding: 190px 0;
    }
}

.hero__slider_wrapper{
    width: 100%;
    z-index: 2;
    padding-top: auto;
}

/* FLOATING IMAGES */
.hero__floating_image {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.hero__floating_image img,
.hero__floating_image stream {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Desktop hover functionality */
@media (min-width: 768px) {
    .hero__floating_image.with-hover .hero__floating_image_wrapper{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .hero__floating_image.with-hover img {
        opacity: 1;
        transition: opacity 0.3s ease;
    }
    .hero__floating_image.with-hover stream {
        opacity: 0;
        transition: opacity 0.3s ease;
        position: absolute;
        top: 0;
        left: 0;
        /* width: 100%;
        height: 100%; */
    }
    
    .hero__floating_image.with-hover:hover img {
        opacity: 0;
    }
    
    .hero__floating_image.with-hover:hover stream {
        opacity: 1;
    }
}

/* Mobile: show only video */
@media (max-width: 767px) {
    .hero__floating_image stream {
        display: block;
    }
    .hero__floating_image.with-hover.third stream,
    .hero__floating_image.with-hover.fourth stream{
        display: none;
    }
    .hero__floating_image.with-hover.first img,
    .hero__floating_image.with-hover.sixth img{
        display: none;
    }
}


.hero__floating_image.first {
    height: 250px;
    width: 180px;
    top: -90px;
    left: 9%;
    aspect-ratio: 9/16;
}


.hero__floating_image.third {
    height: 200px;
    width: 160px;
    top: 300px;
    left: 100px;
    aspect-ratio: 9/16;
}

.hero__floating_image.fourth {
    height: 250px;
    width: 180px;
    inset: -40px 9% auto auto;
    aspect-ratio: 9/16;
}

.hero__floating_image.sixth {
    height: 200px;
    width: 160px;
    top: 300px;
    right: 200px;
    aspect-ratio: 9/16;
}


@media(max-width: 1500px){
    .hero__floating_image.first {
        left: 3%;
    }
    .hero__floating_image.third {
        left: 50px;
    }
    .hero__floating_image.fourth {
        inset: -40px 3% auto auto;
    }
    .hero__floating_image.sixth {
        right: 70px;
    }
}

@media(max-width: 1300px){
    .hero__floating_image.third {
        left: 10px;
    }
    .hero__floating_image.fourth {
        inset: -40px 3% auto auto;
    }
    .hero__floating_image.sixth {
        right: 20px;
    }
    .hero__floating_image.sixth {
        right: 20px;
    }
}

@media(max-width: 992px){
    .hero__floating_image.third {
        left: 10px;
        bottom: -120px;
        top: unset;
    }
    .hero__floating_image.fourth {
        inset: -80px 3% auto auto;
    }
    .hero__floating_image.sixth {
        right: 20px;
    }
    .hero__floating_image.sixth {
        top: unset;
        bottom: -120px;
    }
}

@media(max-width: 767px){
    .hero__floating_image.first {
        width: 105px;
        height: 77px;
    }
    .hero__floating_image.third {
        width: 80px;
        height: 96px;
    }
    .hero__floating_image.fourth {
        width: 78px;
        height: 78px;
    }
    .hero__floating_image.sixth {
        width: 132px;
        height: 95px;
    }
}


/* HERO INNER */
.hero__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    max-width: 842px;
    margin-left: auto;
    margin-right: auto;
}


@media(max-width: 767px) {
    .hero__inner {
        padding: 0;
    }
}
/* END HERO INNER */


/* Title wrap */
.hero__title_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    color: var(--off-white);
    text-align: center;
    z-index: 4;
}

.hero__title_wrapper-top {
    font-size: 40px;
    font-weight: 700;
    color: var(--off-white_50);
    text-align: center;
    font-family: Syne, sans-serif;
    line-height: 100%;
}

.hero__title {
    font-size: 150px;
    font-weight: 900;
    text-align: center;
    font-style: italic;
    letter-spacing: -3px;
    line-height: 120px;
}

.hero__subtitle {
    font-size: 16px;
    font-weight: 400;
    max-width: 630px;
}

.hero__subtitle .first-span {
    font-size: 20px;
    font-weight: 700;
}

.hero__subtitle .thick-span {
    font-weight: 700;
}

.hero__cta_wrapper {
    display: flex;
    gap: 24px;
    min-width: 220px;
}

.hero__cta_wrapper .hero__cta{
    width: 100%;
}

@media (max-width: 767px) {
    .hero__title_wrapper {
        gap: var(--space-m);
    }
    .hero__title {
        font-size: 80px;
        line-height: 75px;
    }
    .hero__title_wrapper-top {
        font-size: 24px;
        line-height: 24px;
    }
    .hero__subtitle {
        font-size: 16px;
        max-width: 100%;
    }
    .hero__subtitle .first-span {
        font-size: 16px;
        font-weight: 600;
    }

    .hero__subtitle .thick-span {
        font-weight: 600;
    }
    .hero__cta_wrapper{
        flex-direction: column;
        gap: 16px;
    }
}

@media (max-width: 992px) {
    .hero__slider_wrapper{
        display: none;
    }
}


</style>
