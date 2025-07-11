<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const { title } = defineProps({
    title: String,
    variant: String,
})

// const items = [
//     { image: '/images/logos/logo1.webp' },
//     { image: '/images/logos/logo6.svg' },
//     { image: '/images/logos/logo-sanisale.svg' },
//     { image: '/images/logos/logo2.svg' },
//     { image: '/images/logos/logo-happn.png' },
//     { image: '/images/logos/logo3.svg' },
//     { image: '/images/logos/logo-mobielnl.svg' },
//     { image: '/images/logos/logo4.svg' },
//     { image: '/images/logos/jumbo-logo.svg' },
//     { image: '/images/logos/logo5.png' },
//     { image: '/images/logos/logo6.svg' },
//     // { image: '/images/logos/logo7.png' },
//     { image: '/images/logos/logo1.webp' },
//     { image: '/images/logos/logo2.svg' },
//     { image: '/images/logos/logo9.png' },
//     { image: '/images/logos/logo-mad-science.png' },
// ]

const items = [
    { image: '/images/logos/nubikk.svg', class: 'first' },
    { image: '/images/logos/logo-happn.png', class: 'second' },
    { image: '/images/logos/jumbo-logo.svg', class: 'third' },
    { image: '/images/logos/logo-mobielnl.svg', class: 'fourth' },
    { image: '/images/logos/logo1.webp', class: 'fifth' },
    { image: '/images/logos/logo-sanisale.svg', class: 'sixth' },
    { image: '/images/logos/logo2.svg', class: 'seventh' },
    // { image: '/images/logos/logo-happn.png' },
    // { image: '/images/logos/logo3.svg' },
    // { image: '/images/logos/logo-mobielnl.svg' },
    // { image: '/images/logos/logo4.svg' },
  ]
</script>
<template>
    <div :class="['hero__slider', variant ? `hero__slider--${variant}` : '']">
        <div class="container">
            <div class="hero__slider_carousel">
                <div class="carousel__item" :class="item.class" v-for="(item, index) in items" :key="index">
                    <img :src="item.image" alt="Logo" class="" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* HERO SLIDER */
.hero__slider {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 80px;
}

.hero__slider_carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 22;
}

.hero__slider_carousel .carousel__item {
    width: 120px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
}

.hero__slider_carousel img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    height: auto;
    width: auto;
    /* opacity: 0.6; */
}

@media (max-width: 1024px) {
    .hero__slider {
        padding-top: 40px;
    }
    .hero__slider_carousel .carousel__item.fifth,
    .hero__slider_carousel .carousel__item.sixth,
    .hero__slider_carousel .carousel__item.seventh {
        display: none;
    }
}

@media(max-width: 767px){
    .hero__slider_carousel {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    .hero__slider_carousel .carousel__item{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
    }
    .hero__slider_carousel .carousel__item img{
        max-height: 100%;
        max-width: 110px;
    }   
}
/* END HERO SLIDER */
</style>