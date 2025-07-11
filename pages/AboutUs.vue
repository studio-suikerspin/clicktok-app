<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Header from '@/sections/Header/Header.vue'
import HeroContent from '@/sections/General/HeroWithFloatingMedia.vue'
import Footer from '@/sections/General/Footer.vue'
import ThreeTitles from '@/sections/General/ThreeTitles.vue'
import StayAheadSecond from '@/sections/StayAhead/StayAheadSecond.vue'
import LogoSlider from '@/sections/General/LogoSlider.vue'
import LogoFlex from '@/sections/General/LogoFlex.vue'
import Contact from '@/sections/Contact/Contact.vue'
import Offices from '@/sections/General/Offices.vue'
import Team from '@/sections/Team.vue'
import StayAheadCards from '@/sections/StayAhead/StayAheadCards.vue'
import ServiceExamples from '@/sections/About/ServiceExamples.vue'
import NumbersAbout from '@/sections/About/NumbersAbout.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'


const numbersData = [
    {
        number: 1221,
        text: 'Aantal creators',
    },
    {
        number: 87200000,
        text: 'Totaal bereik',
    },
    {
        number: 42,
        type: 'percentage',
        text: '<span class="highlight">Gemiddelde </span>toename in merkherkenning <span class="highlight">per campagne</span>',
    }
]

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
          <title>ClickTok - Over ClickTok</title>
      </template>

      <template #smooth>
        <div class="hero__wrapper">
          <div class="hero__background-fade"></div>
          <Header />
          <HeroContent title="About us"
          video="/videos-homepage/BANNER_HOMEPAGE_V1.webm" />
        </div>
        <div class="about__three__titles">
            <ThreeTitles>
                <template #first>
                    <h2>You want more than <span class="highlight">views.</span></h2>
                </template>
                <template #second>
                    <h2>You want people to resonate with <span class="highlight">your brand.</span></h2>
                </template>
                <template #third>
                    <h2>We make content that makes <span class="highlight">this happen.</span></h2>
                </template>
            </ThreeTitles>
        </div>
        <div class="about__stay__ahead__cards padding-bottom">
          <StayAheadCards />
        </div>
        <div class="about__stay__ahead">
          <StayAheadSecond title="How we turned <span class='highlight'>brand values</span> into a <span class='highlight'>viral format</span>" navigation="bottom" subtitle="Voor Nubikk, dat zorgt voor sterkere <span class='highlight'>merkherkenning</span>." />
        </div>
        <div class="about__service__examples padding-top">
          <ServiceExamples />
        </div>
        <div class="about__numbers padding-top">
            <div class="container">
              <div class="about__title montserrat">
                  <div>And we do it <span class="highlight">well</span></div>
              </div>
            </div>
            <NumbersAbout :numbers="numbersData" />
        </div>
        <div class="about__team">
          <div class="container">
            <div class="about__title with-subtitle">
                <div>With this <span class="highlight">Team</span></div>
                <div class="subtitle">Achter elke video staat een gespecialiseerd team dat TikTok door en door
                begrijpt. Alles gebeurt in-house: van strategie tot productie, zodat elke seconde klopt
                met je merk én met het platform.</div>
            </div>
          </div>
          <Team />
        </div>
        <div class="about__offices">
          <div class="container">
            <div class="about__title">
                <div>In these <span class="highlight">Places</span></div>
            </div>
          </div>
          <Offices />
        </div>
        <div class="about__logo_slider padding-bottom">
          <div class="container">>
            <div class="about__title logos">
                <div>For these <span class="highlight">Brands</span></div>
            </div>
          </div>
          <div class="logo-flex-wrapper">
              <LogoFlex />
          </div>
          <!-- <LogoSlider /> -->
        </div>
        <Contact />
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

/* title */
.about__stay__ahead .section-title_wrapper{
  width: 100%;
  justify-content: center;
  align-items: center;
}

.about__stay__ahead .section-title_wrapper .section-title__subtitle,
.about__stay__ahead .section-title_wrapper .section-title{
  text-align: center;
  max-width: 1100px;
}
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

.about__title.montserrat{
  font-family: 'Montserrat';
  line-height: 1.2;
  color: var(--color-white);
  font-style: italic;
  font-weight: 900;
}

.about__title.logos{
  margin-bottom: 48px;
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

.about__numbers .highlight{
  font-size: 14px;
}

@media(max-width: 767px) {
  .about__numbers .highlight{
    font-size: 12px;
  }
}

</style>