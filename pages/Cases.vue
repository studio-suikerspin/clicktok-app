<script setup>
import gsap from 'gsap'

import BaseLayout from '@/layouts/BaseLayout.vue'
import Header from '~/sections/Header/MainHeader.vue'
import FilteredCollection from '@/sections/FilteredCollection.vue'
import Footer from '@/sections/General/Footer.vue'
import { onMounted } from 'vue'
import CasesHero from '~/sections/HeroSubPages.vue'

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
            <Header />
            <CasesHero title="Cases" />

            <div class="cases-wrap container">
                <FilteredCollection />
                <NuxtImg 
                  provider="cloudflare"
                  src="/images/PIXEL__PIXEL_PAARS.png" 
                  class="background-pixel" 
                />
            </div>
            <Footer />
        </template>
    </BaseLayout>
</template>

<style scoped>
.cases-wrap {
  position: relative;
  overflow: hidden;
}

.filtered-collection {
  position: relative;
  z-index: 2;
  min-height: 500px;
}

.background-pixel {
  position: absolute;
  top: 10%;
  width: 100%;

  opacity: 0.5;
}

@media screen and (min-width: 992px) {
  .filtered-collection {
    min-height: 1000px;
  }
}  
</style>
