<script setup>
// Components
import Button from '@/components//ui/Button.vue'
import LogoSlider from '@/sections/General/LogoSlider.vue'
import ButtonAnimated from '@/components/ui/ButtonAnimated.vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <!-- <div class="hero__flex"> -->
        <div class="hero">
            
            
            <div class="container relative text-container">

                 <!-- left images -->
                <div class="hero__floating_image with-hover first border-radius floating-animation-1">
                    <div class="hero__floating_image_wrapper">
                        <!-- <NuxtImg provider="cloudflare" src="/images/nubikk-shoot-min.webp" alt="Hero floating image" /> -->
                        <!-- <img src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/299d454d-83ac-4020-6045-05a0669e2800/public" alt="Hero floating image"> -->
                         <img src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/c76eb0d9-73a8-43ec-2366-55edd0f75800/public" alt="Hero floating image" />
                    </div>
                </div>
                
              
                <div class="hero__floating_image with-hover third border-radius floating-animation-2">
                    <div class="hero__floating_image_wrapper">
                      <img src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/13200380-3c34-4a0a-b36f-ca46eea4cf00/public" alt="Hero floating image" /> 
                    </div>
                </div>

                <!-- right images -->
                <div class="hero__floating_image with-hover fourth border-radius floating-animation-3">
                    <div class="hero__floating_image_wrapper">
                      <img src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/880fa53e-a28f-4619-9ac9-b639df3ce100/public" alt="Hero floating image" />
                    </div>
                </div>
               
                <div class="hero__floating_image with-hover sixth border-radius floating-animation-4">
                    <div class="hero__floating_image_wrapper">
                      <img src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/e0ca38c0-ad03-403d-153a-09c7dd9ba800/public" alt="Hero floating image" />
                    </div>
                </div>

                <div class="hero__inner">
                    <div class="hero__title_wrapper">
                        <h1 class="hero__title">{{ title }}</h1>
                    </div>

                </div>

            </div>


            <!-- <img class="background-gradient" src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/1a080bb2-eb2a-4194-69a2-52cda2f3d000/public" alt="Background gradient">
            <img class="background-gradient mobile" src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/84e3aa21-f7eb-449c-9faa-352ef7f4ce00/public" alt="Background gradient"> -->
            <img class="background-gradient" src="/images/gradient-background1.webp" alt="Background gradient">
            <img class="background-gradient mobile" src="/images/gradient-background2.webp" alt="Background gradient">
        </div>
    <!-- </div> -->
</template>

<style scoped>
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

.hero .background-gradient.mobile {
  display: none;
}

.hero .background-gradient img{
  height: 100%;
  object-fit: cover;
  width: 100%;
}

/* .hero .text-container {
    margin-top: auto;
    margin-bottom: auto;
} */

.hero__floating_image_video.mobile {
    display: none;
}

@media(max-width: 767px){
    .hero {
        padding: 190px 0;
    }
    .hero .background-gradient {
        display: none;
    }
    .hero .background-gradient.mobile {
        display: block;
    }
    .hero__floating_image_wrapper{
      height: 100%;
    }
}

@media(max-width: 992px){
    .hero__floating_image_video.mobile {
        display: block;
    }
    .hero__floating_image_video {
        display: none;
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
.hero__floating_image video {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
        height: 130px;
        top: -100px;
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
        width: 105px;
        height: 155px;
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
    min-height: 400px;
}


@media(max-width: 767px) {
    .hero__inner {
        padding: 0;
        min-height: 250px;
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
        font-size: 72px;
        line-height: 90%;
    }
    .hero__title_wrapper-top {
        font-size: 18px;
        line-height: 100%;
    }
    .hero__subtitle {
        font-size: 14px;
        max-width: 100%;
    }
    .hero__subtitle .first-span {
        font-size: 14px;
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

/* CSS Keyframes Floating Animation */
@keyframes floating {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(4px);
    }
}

/* Desktop only floating animations */
@media (min-width: 1024px) {
    .floating-animation-1 {
        animation: floating 2s ease-in-out infinite;
    }
    
    .floating-animation-2 {
        animation: floating 2.3s ease-in-out infinite;
        animation-delay: 0.2s;
    }
    
    .floating-animation-3 {
        animation: floating 2.6s ease-in-out infinite;
        animation-delay: 0.4s;
    }
    
    .floating-animation-4 {
        animation: floating 2.9s ease-in-out infinite;
        animation-delay: 0.6s;
    }
}

</style>
