<script setup>
import Button from '@/components/ui/Button.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import GradientBlur from '@/components/GradientBlur.vue'

const cards = [
  {
    number: '01',
    title: 'Het begint bij merkwaarden',
    content: 'Je merkwaarden zijn geen bijzaak – ze vormen de basis van hoe je klinkt, wat je uitstraalt en hoe mensen je onthouden.<br /> <br /> Bij grote campagnes snapt iedereen dat. Maar op TikTok lijken merken het te vergeten. Ze jagen op trends en views, zonder te bouwen aan herkenning of gevoel. <br /> <br /> Wij doen het anders. <br /> <br /> Ook op TikTok beginnen we bij je merkwaarden. We bouwen formats die kloppen met wie je bent én hoe het platform beweegt – vanuit cultuur, context en creativiteit. <br />Zo maak je content die scoort én versterkt wie je bent. Herkenbaar. Deelbaar. On-brand.'
  },
  {
    number: '02',
    title: 'Daaruit komt een format',
    content: "Een format is geen losse video, maar een creatief haakje dat je merk herkenbaar en herhaalbaar maakt. <br /> <br /> We kijken naar wat werkt op het platform, geven daar een eigen draai aan en bouwen iets dat niet leunt op trends, maar op merkbeleving. <br /> <br /> Het voordeel? Een sterk format is niet tijdsgebonden. Werkt het eenmaal, dan kun je het blijven inzetten. <br /> <br /> En waar trends vluchtig zijn en je merk vaak wegdrukken, biedt een format juist ruimte om herkenning, gevoel en associaties op te bouwen."
  },
  {
    number: '03',
    title: 'Wat zorgt voor de juiste associatie',
    content: 'Associaties zijn de gevoelens en overtuigingen die mensen onbewust koppelen aan je merk. <br /> <br /> Als je content de juiste associaties oproept, gebeurt er iets groters dan alleen views: je bouwt herkenning, vertrouwen en merkvoorkeur op.<br /><br/> En dat levert meer op dan aandacht. Het zorgt voor sterkere klantloyaliteit en op de lange termijn: meer marktaandeel. <br /><br /> Daarom bouwen wij formats die daar bewust op sturen. Zodat mensen niet alleen kijken, maar iets voelen. En het automatisch aan jouw merk koppelen.'
  }
]

onMounted(() => {
  // Animate the title when section comes into view
  gsap.fromTo('.stay-ahead-cards__title',
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
        trigger: '.stay-ahead-cards__title',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>

<template>
  <div class="container gradient-blur-wrapper">
    <GradientBlur :width="{ default: '40vw', sm: '50vw' }" :height="{ default: '40vh', sm: '40vh' }" :left="{ default: '1%', sm: '20%' }" :top="{ default: '20%', sm: '0' }"/>
    <GradientBlur :width="{ default: '40vw', sm: '50vw' }" :height="{ default: '40vh', sm: '40vh' }" :right="{ default: '3%', sm: '20%' }" :bottom="{ default: '40%', sm: '50%' }"/>
    <GradientBlur :width="{ default: '40vw', sm: '50vw' }" :height="{ default: '40vh', sm: '40vh' }" :right="{ default: '25%', sm: '40%' }" :bottom="{ default: '-5%', sm: '10%' }"/>

    <div class="stay-ahead-cards__title">
      <h2 class="title-font">(Y)our way to <span class="highlight">stay ahead</span></h2>
    </div>
    <div class="stay-ahead-cards">
      <div class="stay-ahead-cards__card border-radius card-{{ card.number }}" v-for="card in cards" :key="card.number">
        <div class="stay-ahead-cards__card-number">
          <!-- <NuxtImg src="images/PIXEL__PIXEL_WIT_OUTLINE.png" /> -->
          <!-- <NuxtImg src="images/PIXEL__PIXEL_WIT.png" /> -->
          <NuxtImg src="/images/pixel__blue.png" />
          <!-- <NuxtImg src="images/PIXEL__PIXEL_PAARS.png" /> -->
          <!-- <NuxtImg src="images/PIXEL__PIXEL_GRADIENT.png" /> -->
          <span class="number-text">{{ card.number }}</span>
        </div>
        <div class="stay-ahead-cards__card-title">
          <h3 class="title-font">{{ card.title }}</h3>
        </div>
        <div class="stay-ahead-cards__card-content">
          <div v-html="card.content"></div>
        </div>
        <div class="stay-ahead-cards__card-button">
          <Button v-if="card.number === '03'" variant="blue" href="/contact">Let's get started!</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stay-ahead-cards__title {
  margin-bottom: 60px;
}

.stay-ahead-cards__title h2 {
  font-size: 80px;
  font-weight: 700;
  color: var(--off-white);
  text-align: center;
}

.stay-ahead-cards__title h2 .highlight {
  color: var(--accent-blue);
}

.stay-ahead-cards {
  display: flex;
  gap: 12px;
}

@media(max-width: 1200px) {
  .stay-ahead-cards {
    flex-direction: column;
  }
}

@media(max-width: 767px) {
  .stay-ahead-cards__title {
    margin-bottom: 40px;
  }

  .stay-ahead-cards__title h2 {
    font-size: 32px;
  }

}

.stay-ahead-cards__card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--off-white);
  padding: 24px;
  flex: 1;
  transition: transform 0.3s ease-in-out;
}

@media(min-width: 992px) {
  .stay-ahead-cards__card:hover {
    transform: scale(1.05) !important;
  }
}

.stay-ahead-cards__card:nth-child(1) {
  background-image: url('/images/section-numbers/numbers-bg1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotate(-7deg);
}

.stay-ahead-cards__card:nth-child(2) {
  background-image: url('/images/section-numbers/numbers-bg2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotate(3deg);
}

.stay-ahead-cards__card:nth-child(3) {
  background-image: url('/images/section-numbers/numbers-bg3.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotate(-3deg);
}

@media(max-width: 767px) {
  .stay-ahead-cards__card:nth-child(1),
  .stay-ahead-cards__card:nth-child(2),
  .stay-ahead-cards__card:nth-child(3) {
    transform: rotate(0deg) !important;
  }
}

.stay-ahead-cards__card-number {
  font-size: 64px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 184px;
  max-height: 124px;
  color: var(--off-white);
}

.stay-ahead-cards__card-number .number-text {
  position: absolute;
  z-index: 2;
  color: var(--off-white);
}


.stay-ahead-cards__card-title h3{
  font-size: 46px;
}

.stay-ahead-cards__card-content {
  font-size: 18px;
  font-weight: 400;
}

@media(max-width: 767px) {
  .stay-ahead-cards__card-title h3 {
    font-size: 32px;
  }

  .stay-ahead-cards__card-number {
    font-size: 48px;
    width: 122px;
    height: 82px;
  }

  .stay-ahead-cards__card-content {
    font-size: 16px;
  }
}
</style>
