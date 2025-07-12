<script setup>
// Components
import Button from '@/components//ui/Button.vue'
import LogoSlider from '@/sections/General/LogoSlider.vue'
import { gsap } from 'gsap'
import { onMounted } from 'vue'

// Floating animation function
// const animateFloatingImages = () => {
//   const floatingImages = document.querySelectorAll('.hero__floating_image')
  
//   floatingImages.forEach((image, index) => {
//     gsap.to(image, {
//       y: '4px',
//       duration: 2 + (index * 0.3),
//       ease: 'power1.inOut',
//       yoyo: true,
//       repeat: -1,
//       delay: index * 0.2
//     })
//   })
// }

// onMounted(() => {
//   animateFloatingImages()
// })
</script>

<template>
    <!-- <div class="hero__flex"> -->
        <div class="hero">
            
            
            <div class="container relative text-container">

                 <!-- left images -->
                <div class="hero__floating_image first border-radius">
                    <!-- <NuxtImg src="/images/nubikk-shoot-min.webp" alt="Hero floating image"> -->
                    <video src="https://r2.suikerspin.studio/BANNER_NUBIKK_V1.webm" webkit-playsinline autoplay muted loop playsinline loading="lazy"></video>
                </div>
                <div class="hero__floating_image second border-radius">
                    <NuxtImg src="/images/shoe-shoot-min.webp" alt="Hero floating image" loading="lazy" />
                </div>
                <div class="hero__floating_image third border-radius">
                    <NuxtImg src="/images/nubikk-shoot2-min.webp" alt="Hero floating image" loading="lazy" />
                </div>

                <!-- right images -->
                <div class="hero__floating_image fourth border-radius">
                    <NuxtImg src="/images/camera-image.webp" alt="Hero floating image" loading="lazy" />
                </div>
                <div class="hero__floating_image fifth border-radius">
                    <NuxtImg src="/images/barber-shoot.jpeg" alt="Hero floating image" loading="lazy" />
                </div>
                <div class="hero__floating_image sixth border-radius">
                    <!-- <NuxtImg src="/images/london-shoot1-min.webp" alt="Hero floating image"> -->
                    <video src="https://r2.suikerspin.studio/BANNER_HAPPN_V1.webm" webkit-playsinline autoplay muted loop playsinline loading="lazy"></video>
                </div>

                <div class="hero__inner">
                    <div class="hero__title_wrapper">
                        <div class="hero__title_wrapper-top">Full Service</div>
                        <h1 class="hero__title">TikTok Agency</h1>
                        <div class="hero__subtitle">
                            Van merkwaarden naar virale formats – wij maken short-form content die past binnen de cultuur, je zichtbaarheid vergroot en impact maakt op TikTok.
                        </div>
                        <div class="hero__cta_wrapper">
                            <Button variant="white" href="/contact" class="hero__cta">Let's get started!</Button>
                            <!-- <Button variant="outline" href="/cases" class="hero__cta">Bekijk cases</Button> -->
                        </div>
                    </div>

                </div>

            </div>

            <div class="hero__slider_wrapper">
                <LogoSlider />
            </div>

            <picture class="background-gradient">
              <source media="(min-width: 768px)" srcset="/images/gradient-ruis-vierkant-min.webp">
              <source media="(max-width: 767px)" srcset="/images/gradient-mobile-noise.webp">
              <img src="/images/gradient-mobile-noise.webp" alt="Background gradient">
            </picture>
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

    mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
}

.hero .background-gradient {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
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
.hero__floating_image video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.hero__floating_image.first {
    height: 160px;
    width: 150px;
    top: -90px;
    left: 9%;
}

.hero__floating_image.second {
    height: 154px;
    width: 210px;
    top: 130px;
    left: -20px;
}

.hero__floating_image.third {
    height: 153px;
    width: 153px;
    top: 350px;
    left: 100px;
}

.hero__floating_image.fourth {
    height: 161px;
    width: 134px;
    inset: -40px 9% auto auto;
}

.hero__floating_image.fifth {
    height: 197px;
    width: 273px;
    top: 150px;
    right: -20px;
}

.hero__floating_image.sixth {
    height: 160px;
    width: 150px;
    top: 400px;
    right: 200px;
}

@media(max-width: 1500px){
    .hero__floating_image.first {
        left: 3%;
    }
    .hero__floating_image.second {
        left: -30px;
    }
    .hero__floating_image.third {
        left: 50px;
    }
    .hero__floating_image.fourth {
        inset: -40px 3% auto auto;
    }
    .hero__floating_image.fifth {
        right: -40px;
    }
    .hero__floating_image.sixth {
        right: 70px;
    }
}

@media(max-width: 1300px){
    .hero__floating_image.second ,
    .hero__floating_image.fifth {
        display: none;
    }
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
    .hero__floating_image.fifth {
        right: 20px;
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
    font-size: 18px;
    font-weight: 500;
    max-width: 600px;
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
}

@media (max-width: 992px) {
    .hero__slider_wrapper{
        display: none;
    }
}


</style>
