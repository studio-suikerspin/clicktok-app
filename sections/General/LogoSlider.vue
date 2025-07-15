<script setup>
defineProps({
    title: { 
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    }
})

const items = [
    { image: '/images/logos/logo-sanisale.svg', class: 'sixth' },
    { image: '/images/logos/logo1.webp', class: 'fifth' },
    { image: '/images/logos/logo-happn.png', class: 'second' },
    { image: '/images/logos/jumbo-logo.svg', class: 'fourth' },
    { image: '/images/logos/logo-mobielnl.svg', class: 'third' },
    { image: '/images/logos/nubikk.svg', class: 'first' },
    { image: '/images/logos/logo2.svg', class: 'seventh' },    
  ]
</script>
<template>
    <div :class="['hero__slider', variant ? `hero__slider--${variant}` : '', classes]">
        <div class="container">
            <div class="hero__slider_carousel">
                <div v-for="(item, index) in items" :key="index" class="carousel__item" :class="item.class">
                    <NuxtImg provider="cloudflare" :src="item.image" alt="Logo" class="" />
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

.hero__slider--bw {
  filter: grayscale(1);
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