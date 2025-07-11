<script setup>
import { ref } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import Header from '@/sections/Header/Header.vue'
import Contact from '@/sections/Contact/Contact.vue'
import LogoSlider from '@/sections/General/LogoSlider.vue'
import Offices from '@/sections/General/Offices.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import Footer from '@/sections/General/Footer.vue'
import Filters from '@/components/filters/Filters.vue'
import Faq from '@/sections/Contact/Faq.vue'
import LogoFlex from '@/sections/General/LogoFlex.vue'

// Reactive data for filter selection
const selectedCaseIndex = ref(0)

// Method to handle filter selection
const selectCase = (index) => {
  selectedCaseIndex.value = index
}

const filters = [
  {
    title: 'Work with us'
  },
  {
    title: 'Collaborate as a creator'
  },
  {
    title: 'Join our team'
  }
]

// Contact form configurations for each filter
const contactForms = [
  {
    type: 'contact',
    title: 'You are ready to <span>stay ahead</span>',
    subtitle: 'Benieuwd wat TikTok voor jouw merk kan betekenen? Laat je gegevens achter en we plannen een (vrijblijvende) brainstormsessie in.',
    ctaText: 'Let\'s get in touch!'
  },
  {
    type: 'creator',
    title: 'You’re ready to <span>create impact</span>',
    subtitle: 'Ben jij creator en wil je samenwerken met merken die echt het verschil maken op TikTok? Laat je gegevens achter en we maken graag eens kennis met je.',
    ctaText: 'Let\'s get in touch!'
  },
  {
    type: 'job',
    title: 'You’re ready to <span>create impact</span>',
    subtitle: 'Wil jij onderdeel worden van een creatief team dat merken laat opvallen op TikTok? Laat je gegevens achter en we maken graag eens kennis met je.',
    ctaText: 'Let\'s get in touch!'
  }
]
</script>

<template>
  <BaseLayout>
      <template #head>
          <title>ClickTok - Contact</title>
      </template>

      <template #smooth>
        <div class="hero__wrapper">
          <div class="hero__background-fade"></div>
          <Header />
          <div class="contactpage__wrapper">
            <div>
            <Filters
                :filters="filters"
                :selectedIndex="selectedCaseIndex"
                @filterChange="selectCase"
            />
            <Contact
                :title="contactForms[selectedCaseIndex].title"
                :subtitle="contactForms[selectedCaseIndex].subtitle"
                :ctaText="contactForms[selectedCaseIndex].ctaText"
                :isSollicitation="selectedCaseIndex === 2"
                :isCreator="selectedCaseIndex === 1"
                :formType="contactForms[selectedCaseIndex].type"
              />
            </div>
            <div class="logo-flex-wrapper">
              <LogoFlex />
            </div>
          </div>
        </div>
        <div class="contactpage__offices padding-top">
          <div class="container">
            <SectionTitle title="In these places" />
          </div>
          <Offices />
        </div>
        <!-- <div class="contactpage__faq padding-bottom">
          <Faq />
        </div> -->
        <Footer />
      </template>
  </BaseLayout>
</template>


<style>
/* filters */
.service-examples__title {
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}

.service-examples__title h2 {
  font-size: 80px;
  font-weight: 700;
  color: var(--off-white);
  text-align: center;
  max-width: 1000px;
}

.service-examples__title h2 .highlight {
  color: var(--accent-blue);
}

@media(max-width: 992px) {
  .service-examples__title {
    margin-bottom: 40px;
  }
  .service-examples__title h2 {
    font-size: 32px;
  }
}


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

/* contact section */
.contactpage__wrapper {
    position: relative;
    z-index: 3;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 64px;
}

@media(max-width: 767px) {
  .contactpage__wrapper {
    padding-top: 0;
  }
}



/* logo slider */
.contactpage__wrapper .contact__wrapper {
  padding-bottom: 0;
}

.contactpage__wrapper .hero__slider_title {
  display: none;
}

.contactpage__wrapper .hero__slider {
  padding-top: 0;
}

/* offices */
.contactpage__offices .section-title {
  margin-bottom: 40px;
}


.about__logo_flex{
  display: flex;
  justify-content: center;
  align-items: center;
}

.about__logo_flex_inner{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.about__logo_flex_inner img{
  width: 100px;
}

@media(max-width: 992px) {
  .about__logo_flex_inner{
    justify-content: center;
  }
  .about__logo_flex_inner img{
    width: 120px;
  }
}

</style>
