<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Header from '~/sections/Header/MainHeader.vue'
import Footer from '@/sections/General/Footer.vue'
import LogoFlex from '@/sections/General/LogoFlex.vue'
import Contact from '@/sections/Contact/Contact.vue'
import Offices from '~/sections/General/MainOffices.vue'
import SectionTeam from '~/sections/SectionTeam.vue'
import StayAheadCards from '@/sections/StayAhead/StayAheadCards.vue'
import HeroSubPages from '@/sections/HeroSubPages.vue'
import RevealingTypes from '@/sections/RevealingTypes.vue'
import StayAhead from '@/sections/StayAhead/StayAhead.vue'
import LetTheNumbersSpeak from '@/sections/Section-numbers/LetTheNumbersSpeak.vue';
import LogoSlider from '@/sections/General/LogoSlider.vue';
import { VideoStream } from 'stream-vue'

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


</script>

<template>
  <BaseLayout>
      <template #head>
          <title>ClickTok - Over ClickTok</title>
      </template>

      <Header />
      <HeroSubPages title="About us" />

      <RevealingTypes titleFirst="You want more than views." titleSecond="You want people to resonate with your brand." titleThird="We make content that makes this happen." :sectionPadding="false" />
      
      <div class="about__stay__ahead__cards padding-bottom">
        <StayAheadCards />
      </div>

      <StayAhead  :lazy-loading="true" :title="'How we turned brand values into a viral format'" :subtitle="'Voor Nubikk, dat zorgt voor sterkere merkherkenning.'"/>

      <!-- <div class="about__service__examples padding-top">
        <ServiceExamples />
      </div> -->

      <div class="section-padding">
        <LetTheNumbersSpeak title="And we do it well" />
      </div>

      <SectionTeam />
      
      <div class="about__offices">
          <div class="about__title">
            <div class="container">
              <SectionTitle title="In these places" />
            </div>
          </div>
        <Offices />
      </div>

      <div class="about__logo_slider padding-bottom">
        <div class="about__title logos">
            <SectionTitle title="For these brands" />
        </div>
          <LogoSlider />
      </div>

      <Contact />
      <Footer />
  </BaseLayout>
</template>

<style>
.about__offices,
.about__logo_slider{
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.about__logo_slider{
  gap: 40px;
}

@media(max-width: 768px) {
    .about__offices,
    .about__logo_slider{
      gap: 40px;
  }
}


</style>