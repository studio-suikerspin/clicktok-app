<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Header from '~/sections/Header/MainHeader.vue'
import Footer from '@/sections/General/Footer.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ServicesSection from '@/sections/Services/ServicesSection.vue'
import HeroSubPages from '@/sections/HeroSubPages.vue'

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

  // Animate all about__title elements when they come into view
  gsap.utils.toArray('.about__title').forEach((title, index) => {
    gsap.fromTo(title,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
})
</script>

<template>
  <BaseLayout>
      <template #head>
          <title>ClickTok - Services</title>
      </template>

      <template #smooth>
          <Header />
          <HeroSubPages title="Services" />

        <div class="services__accordion padding-bottom">
          <div class="services__container">
            <ServicesSection />
          </div>
        </div>
        
        <Footer />
      </template>
  </BaseLayout>
</template>

<style scoped>
.services__container {
  max-width: 1250px;
  margin: 0 auto;
}
</style>
