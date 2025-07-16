<script setup>
import Button from '@/components/ui/Button.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import BlurGlow from '@/components/blur/Blurglow.vue'

const cards = [
  {
    number: '01',
    title: 'Het begint bij merkwaarden',
    content: 'Je merkwaarden zijn geen bijzaak – ze vormen de basis van hoe je klinkt, wat je uitstraalt en hoe mensen je onthouden. Bij grote campagnes snapt iedereen dat. Maar op TikTok lijken merken het te vergeten. Ze jagen op trends en views, zonder te bouwen aan herkenning of gevoel. Wij doen het anders. Ook op TikTok beginnen we bij je merkwaarden. We bouwen formats die kloppen met wie je bent én hoe het platform beweegt – vanuit cultuur, context en creativiteit. Zo maak je content die scoort én versterkt wie je bent. Herkenbaar. Deelbaar. On-brand.'
  },
  {
    number: '02',
    title: 'Daaruit komt een format',
    content: "Een format is geen losse video, maar een creatief haakje dat je merk herkenbaar en herhaalbaar maakt. We kijken naar wat werkt op het platform, geven daar een eigen draai aan en bouwen iets dat niet leunt op trends, maar op merkbeleving. Het voordeel? Een sterk format is niet tijdsgebonden. Werkt het eenmaal, dan kun je het blijven inzetten. En waar trends vluchtig zijn en je merk vaak wegdrukken, biedt een format juist ruimte om herkenning, gevoel en associaties op te bouwen."
  },
  {
    number: '03',
    title: 'Wat zorgt voor de juiste associatie',
    content: 'Associaties zijn de gevoelens en overtuigingen die mensen onbewust koppelen aan je merk. Als je content de juiste associaties oproept, gebeurt er iets groters dan alleen views: je bouwt herkenning, vertrouwen en merkvoorkeur op. En dat levert meer op dan aandacht. Het zorgt voor sterkere klantloyaliteit en op de lange termijn: meer marktaandeel. Daarom bouwen wij formats die daar bewust op sturen. Zodat mensen niet alleen kijken, maar iets voelen. En het automatisch aan jouw merk koppelen.'
  }
]
</script>

<template>
  <div class="container">

    <div class="stay-ahead-cards__title">
      <SectionTitle title="(Y)our way to stay ahead" />
    </div>
    <div class="stay-ahead-cards">
      <div class="stay-ahead-cards__card-wrapper">
        <div v-for="card in cards" :key="card.number" class="stay-ahead-cards__card border-radius">
          <div class="stay-ahead-cards__card-number">
            <NuxtImg src="/images/PIXEL__PIXEL_WIT.png" />
            <span class="number-text">{{ card.number }}</span>
          </div>
          <div class="stay-ahead-cards__card-title">
            <h3 class="title-font">{{ card.title }}</h3>
          </div>
          <div class="stay-ahead-cards__card-content">
            <div>{{ card.content }}</div>
          </div>
        </div>
      </div>
      <div class="stay-ahead-cards__card-button">
        <Button variant="white" href="/contact">Let's get started!</Button>
      </div>

      <BlurGlow
        top="0" left="10px" :width="'400px'" :height="'480px'" :mobile-no-blur="true"
        :mobile-no-blur-width="'400px'" :mobile-no-blur-height="'50%'" />
        <BlurGlow
        top="-20px" right="10px" :width="'400px'" :height="'480px'" :mobile-no-blur="true"
        :mobile-no-blur-width="'400px'" :mobile-no-blur-height="'50%'" />

    </div>
  </div>
</template>

<style scoped>
.stay-ahead-cards__title {
  margin-bottom: 80px;
}

.stay-ahead-cards__title h2 .highlight {
  color: var(--accent-blue);
}

.stay-ahead-cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  max-width: 1250px;
  margin-inline: auto;
  position: relative;
}

.stay-ahead-cards__card-wrapper {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 24px;
}

@media(max-width: 1200px) {
  .stay-ahead-cards {
    flex-direction: column;
  }
}

@media(max-width: 992px) {
  .stay-ahead-cards__card-wrapper {
    flex-direction: column;
  }
}

@media(max-width: 767px) {
  .stay-ahead-cards__title {
    margin-bottom: 40px;
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
  border: 1px solid var(--off-white_50);
}

@media(min-width: 992px) {
  .stay-ahead-cards__card:hover {
    transform: scale(1.05) !important;
  }
} 

.stay-ahead-cards__card-number {
  font-size: 18px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: fit-content;
}

.stay-ahead-cards__card-number .number-text {
  position: absolute;
  z-index: 2;
  color: var(--accent-dark-purple);
}


.stay-ahead-cards__card-title h3{
  font-size: 24px;
  line-height: 1.3;
}

.stay-ahead-cards__card-content {
  font-size: 16px;
  font-weight: 400;
}
</style>
