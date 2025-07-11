<script setup>
import { gsap } from 'gsap'

import BaseLayout from '@/layouts/BaseLayout.vue'
import Header from '@/sections/Header/Header.vue'
import HeroContent from '@/sections/General/HeroWithFloatingMedia.vue'
import FilteredCollection from '@/sections/FilteredCollection.vue'
import Footer from '@/sections/General/Footer.vue'
import { onMounted } from 'vue'

function initAutoplayVideos(selector = 'video[autoplay]') {
  const enableAutoplay = () => {
    const videos = document.querySelectorAll(selector);
    videos.forEach(video => {
      // Video-elementen hebben de play() methode, dus gewoon aanroepen
      video.play().catch(err => {
        console.warn('Autoplay blocked for video:', video, err);
      });
    });

    window.removeEventListener('click', enableAutoplay);
    window.removeEventListener('touchstart', enableAutoplay);
    window.removeEventListener('scroll', enableAutoplay);
  };

  window.addEventListener('click', enableAutoplay);
  window.addEventListener('touchstart', enableAutoplay);
  window.addEventListener('scroll', enableAutoplay);
}

onMounted(() => {
  initAutoplayVideos() // pakt alle <video autoplay> elementen op de pagina
})

</script>

<template>
    <BaseLayout>
        <template #head>
            <title>ClickTok - Cases</title>
        </template>

        <template #smooth>
            <div class="gradient-wrap">
                <div class="hero__background-fade"></div>
                <Header />
                <HeroContent title="Cases"
                video="/videos-homepage/BANNER_HOMEPAGE_V1.webm" />
            </div>

            <div class="cases__wrapper section-padding">
                <FilteredCollection />
            </div>
            <Footer />
        </template>
    </BaseLayout>
</template>

<style scoped>
.hero__background-fade {
    position: absolute; /* of absolute als fixed problemen geeft */
    top: 0;
    left: 0;
    width: 100%;
    height: 85vh;
    background-image: url('/images/gradient-vierkant-min.webp');
    background-size: cover;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: 0;

    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}

@media(max-width: 767px) {
    .hero__background-fade {
        background-image: url('/images/gradient-vierkant-mobile-min.webp');
        height: 100vh;
    }
}
</style>
