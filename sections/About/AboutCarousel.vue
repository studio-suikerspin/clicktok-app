<script setup>
  import SectionTitle from '@/components/SectionTitle.vue'
  import GradientBlur from '@/components/GradientBlur.vue'
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';


  // Import Swiper styles
  import 'swiper/css';
import { onMounted } from 'vue';


  const modules = [Autoplay, Navigation, Pagination, Scrollbar];

  // Base autoplay configuration
  const baseAutoplay = {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    waitForTransition: true,
  };

  const slides = [
    {
      image: '/images/barber-shoot.jpeg',
      title: 'Gebouwd op merkbeleving',
      subtitle: 'Elke video die we maken begint bij het gevoel dat je als merk wilt achterlaten. We bouwen formats op basis van merkwaarden, zodat je content niet alleen een bereik scoort, maar de merkbeleving versterkt bij elke weergave.',
    },
    {
      image: '/images/nubikk-shoot2-min.webp',
      title: 'Culture-first',
      subtitle: 'TikTok is geen doorsnee platform – het vraagt om een totaal andere aanpak dan je gewend bent. Wie de cultuur niet snapt, slaat de plank volledig mis. Daarom maken wij content die past bij het platform: native, herkenbaar en shareable.',
    },
    {
      image: '/images/london-shoot1-min.webp',
      title: 'Álles onder 1 dak',
      subtitle: 'Alles wat we doen is gericht op TikTok en dát doen we volledig in-house. Van strategie tot scripting, productie en analyse: één team, één focus, één kanaal. Daardoor schakelen we snel, houden we de kwaliteit hoog en kunnen we zorgen voor het best mogelijke resultaat.',
    },
    {
      image: '/images/nubikk-shoot-min.webp',
      title: 'Resultaatgericht',
      subtitle: 'We maken geen content voor de views, maar voor wat erna komt. Vanmerkherkenning tot conversie: elk format is creatief sterk én stuurt op resultaat',
    },
  ];
</script>

<template>
<div class="about padding-bottom gradient-blur-wrapper">
  <GradientBlur :width="{ default: '450px', sm: '60vw' }" :height="{ default: '40%', sm: '50vh' }" :right="{ default: '5%', sm: '10%' }" :top="{ default: '40%', sm: '20%' }" class="big__text_blur first"  />
  <GradientBlur :width="{ default: '485px', sm: '70vw' }" :height="{ default: '40%', sm: '50vh' }" :left="{ default: '5%', sm: '10%' }" :top="{ default: '5%', sm: '20%' }" class="big__text_blur second"  />
  <div class="container">
    <div class="about__title">
      <SectionTitle title="About us" link="/about" linkTitle="Lees meer" />
    </div>
  </div>
   <swiper
    class="about__swiper"
    :modules="modules"
    :slides-per-view="4"
    :space-between="30"
    :loop="true"
    :autoplay="baseAutoplay"
    :speed="4000"
    :loop-additional-slides="4"
    :scrollbar="{
        draggable: true,
        dragSize: 50,
        hide: false,
    }"
    :breakpoints="{
      0: {
        slidesPerView: 1.2,
        autoplay: false,
        speed: 1000,
        scrollbar: {
            draggable: true,
            dragSize: 50,
            hide: false,
        }
      },
      768: {
        autoplay: { ...baseAutoplay, delay: 5000 },
        speed: 5000,
        slidesPerView: 2,
        scrollbar: false,
        pagination: false
      },
      1024: {
        autoplay: baseAutoplay,
        slidesPerView: 3,
        allowTouchMove: false,
        scrollbar: false,
        pagination: false
      },
    }"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="slide.image">
      <div class="about__slide-container" :class="[{ 'active': index === 0 }, `item-${index}`]">
        <img :src="slide.image" :alt="slide.title" loading="lazy" />
        <div class="overlay"></div>
        <div class="about__text">
          <div class="title" :class="{ 'active': index === 0 }">{{ slide.title }}</div>
          <div class="subtitle" :class="{ 'active': index === 0 }">{{ slide.subtitle }}</div>
        </div>
      </div>
    </SwiperSlide>
  </swiper>
</div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 820px;
}

.about{
  position: relative;
}

.about__title {
  margin-bottom: 80px;
}

@media (max-width: 767px) {
  .about__title {
    margin-bottom: 40px;
  }
  .swiper {
    height: unset;
  }
}

@media (max-width: 992px) {
  .big__text_blur.first{
    display: none;
  }
}

.about__slide-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  border-radius: 24px;
  padding: 15px;
}

.about__slide-container.item-0{
  max-height: 670px;
  margin-top: 80px;
}

.about__slide-container.item-1{
  max-height: 502px;
  margin-top: 27px;
}

.about__slide-container.item-2{
  max-height: 524px;
  margin-top: 140px;

}

.about__slide-container.item-3{
  max-height: 100%;
}

.about__slide-container.item-4{
  max-height: 560px;
  margin-top: 120px;
}

@media(max-width: 767px){
  .about__slide-container{
    min-height: 550px;
  }
}

@media (max-width: 992px) {
  .about__slide-container,
  .about__slide-container.item-0,
  .about__slide-container.item-1,
  .about__slide-container.item-2,
  .about__slide-container.item-3,
  .about__slide-container.item-4{
    max-height: 550px;
    margin-top: 0;
  }
}

.about__slide-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.2;
  z-index: 2;
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 3;
  color: #fff;
}

.about__text .title {
  font-size: 24px;
  font-weight: 800;
  font-style: italic;
}

.about__text .subtitle {
  font-size: 16px;
  font-weight: 500;
}

/* Swiper Scrollbar and Pagination Styles */
.about__swiper :deep(.swiper-scrollbar) {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    height: 6px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    width: calc(100% - 80px);
    position: relative;
    z-index: 10;
}

.about__swiper :deep(.swiper-scrollbar-drag) {
    background: var(--accent_blue, #43bbc4);
    border-radius: 10px;
    height: 100%;
}

.about__swiper :deep(.swiper-pagination) {
    position: relative;
    margin-top: 20px;
}

.about__swiper :deep(.swiper-pagination-bullet) {
    background: rgba(255, 255, 255, 0.3);
    opacity: 1;
    width: 8px;
    height: 8px;
    margin: 0 4px;
    transition: all 0.3s ease;
}

.about__swiper :deep(.swiper-pagination-bullet-active) {
    background: var(--accent_blue, #43bbc4);
    transform: scale(1.2);
}

/* Hide scrollbar and pagination on desktop */
@media (min-width: 768px) {
    .about__swiper :deep(.swiper-scrollbar),
    .about__swiper :deep(.swiper-pagination) {
        display: none;
    }
}
</style>
