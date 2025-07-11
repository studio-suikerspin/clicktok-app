<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Header from '@/sections/Header/Header.vue'
import HeroContent from '@/sections/General/HeroWithFloatingMedia.vue'
import Footer from '@/sections/General/Footer.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ServicesSection from '@/sections/Services/ServicesSection.vue'

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
        <div class="hero__wrapper">
          <div class="hero__background-fade"></div>
          <Header />
          <HeroContent title="Services"
          video="/videos-homepage/BANNER_HOMEPAGE_V1.webm" />
        </div>

        <div class="services__accordion section-padding">
          <ServicesSection />
        </div>
        
        <Footer />
      </template>
  </BaseLayout>
</template>

<style>
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
    z-index: -1;

    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}

@media(max-width: 767px) {
    .hero__background-fade {
        background-image: url('/images/gradient-vierkant-mobile-min.webp');
        height: 100vh;
    }
}

/* title */
.about__title{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 80px;
    font-weight: 800;
    font-family: 'Montserrat';
    font-style: italic;
    color: var(--off-white);
    margin-bottom: 80px;
}

.about__title.with-subtitle {
  flex-direction: column;
  gap: 16px;
}

.about__title.with-subtitle .subtitle {
  font-size: 18px;
  font-weight: 400;
  max-width: 940px;
  text-align: start;
}

.about__title .highlight{
  color: var(--accent-blue);
}

@media(max-width: 767px) {
  .about__title{
    font-size: 32px;
    margin-bottom: 50px;
  }
}


/* Three titles */
.about__three__titles .gradient__blur{
  display: none;
}

/* Stay ahead */
.about__stay__ahead .section-title__title{
  font-size: 80px;
  text-align: center;
}

@media(max-width: 767px) {
  .about__stay__ahead .section-title__title{
    font-size: 32px;
  }
}

/* Numbers */
.about__numbers .numbers__title{
    display: none;
}

.about__numbers .numbers__item-4,
.about__numbers .numbers__item-5{
  display: none;
}

/* Logo slider */
.about__logo_slider .hero__slider_title{
  display: none;
}

.about__logo_slider .hero__slider{
  padding-top: 0;
}


</style>
