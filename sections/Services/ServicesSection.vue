<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ref, nextTick } from 'vue'

// Service data object
const servicesData = [
  {
    id: 1,
    number: '01',
    subtitle: 'Organisch groeien doormiddel van tikTok',
    title: 'Organic Campaign',
    whyTitle: 'Waarom organisch?',
    whyText: 'Organisch zichtbaar zijn op TikTok betekent bouwen aan langdurige merkherkenning zonder afhankelijk te zijn van advertentiebudget.<br /><br /> Wie op TikTok wil bouwen aan merkbeleving, begint met een sterk format: herkenbaar, herhaalbaar en niet tijdgebonden. <br /><br /> Zo creëer je een duurzame stroom aan bereik, herkenning en engagement, wat uiteindelijk leidt tot sterkere merkvoorkeur.',
    whatTitle: 'Wat doen wij?',
    steps: [
      {
        number: 1,
        title: 'Concepting',
        text: "We starten bij je merkwaarden en vertalen die naar een format dat past binnen de cultuur van TikTok. Zo bouwen we aan merkvoorkeur bij je doelgroep, met video's die zijn ingericht voor maximaal organisch bereik én naadloos aansluiten op lopende campagnes."
      },
      {
        number: 2,
        title: 'Productie',
        text: 'Met ons in-house team van specialisten brengen we het format tot leven: van scripting en shoot tot edit. We vinden daarbij de sweet spot tussen merkervaring en native content: voelbaar TikTok, volledig on-brand.'
      },
      {
        number: 3,
        title: 'Publicatie',
        text: 'Na publicatie stopt het niet. We monitoren actief de data: watch time, interacties en zoekgedrag. Op basis van die inzichten sturen we formats bij. Zodat elke volgende video (nog) beter presteert dan de vorige.'
      }
    ],
    logos: [
    { src: '/images/logos/jumbo-logo.svg', alt: 'Jumbo logo' },
      { src: '/images/logos/logo10.webp', alt: 'Logo 10' },
      { src: '/images/logos/logo-keukensale.png', alt: 'Keukensale logo' },
      { src: '/images/logos/nubikk.svg', alt: 'Nubikk logo' }
    ],
    video: '/videos-organic/BANNER_ORGANIC_V1.webm',
    ctaText: 'Let\'s get started',
    ctaHref: '/contact'
  },
  {
    id: 2,
    number: '02',
    subtitle: 'Betaalde advertenties voor directe resultaten',
    title: 'Paid Advertising',
    whyTitle: 'Waarom paid advertising?',
    whyText: 'Adverteren op TikTok is dé manier om snel op te schalen en gericht resultaat te behalen.<br /><br />Van brand awareness tot conversie campagnes en leadgeneratie: we zetten TikTok in als performance kanaal dat niet alleen opvalt, maar aanzet tot actie. <br /><br /> Met slimme targeting, conversiegerichte creatives en continue optimalisatie bouwen we campagnes die presteren; voor e-com merken, apps én organisaties die talent of klanten willen werven.<br /><br />Zo combineer je bereik met rendement. Creativiteit met data. Impact met schaal.',
    whatTitle: 'Wat doen wij?',
    steps: [
      {
        number: 1,
        title: 'Strategie',
        text: 'We starten met een heldere advertentie aanpak, afgestemd op jouw doel; van brand awareness tot conversie of leadgen. Op basis van je merk en het TikTok-gedrag van je doelgroep stellen we de juiste funnelstructuur en budgetverdeling op. Zo ligt er vanaf het begin een strategisch fundament dat creativiteit én resultaat met elkaar verbindt'
      },
      {
        number: 2,
        title: 'Creatie',
        text: "Goed presterende ads beginnen met sterke creatives. We starten met een testfase om te ontdekken wat voor je merk werkt: welk format trekt de aandacht, welke invalshoek converteert, en welke stijl echt binnenkomt bij je doelgroep. Daarvoor ontwikkelen we veel verschillende variaties met verschillende hooks, invalshoeken en formats."
      },
      {
        number: 3,
        title: 'Optimalisatie',
        text: 'Goede campagnes zijn nooit af; ze worden steeds beter. We monitoren dagelijks de resultaten: van scroll stop tot conversie, en van kijkgedrag tot klikratio. Op basis daarvan sturen we bij op creatives, hooks en targeting. Zo schalen we wat werkt, en verfijnen we wat beter kan.'
      }
    ],
    // logos: [
    //   { src: '/images/logos/logo1.webp', alt: 'Client logo 1' },
    //   { src: '/images/logos/logo2.svg', alt: 'Client logo 2' },
    //   { src: '/images/logos/logo3.svg', alt: 'Client logo 3' },
    //   { src: '/images/logos/logo4.svg', alt: 'Client logo 4' }
    // ],
    video: '/videos/jumbo-video.webm',
    ctaText: 'Start je campagne',
    ctaHref: '/contact'
  },
  {
    id: 3,
    number: '03',
    subtitle: 'UGC ad creatie voor authentieke connectie',
    title: 'UGC Ad Creatie',
    whyTitle: 'Waarom UGC ad creatives inzetten?',
    whyText: 'UGC staat voor User Generated Content: video’s gemaakt door echte mensen, niet door merken. En juist dat maakt het zo krachtig op TikTok. UGC ad creatives zijn dé sleutel tot vertrouwen én conversie. 84% van de consumenten vertrouwt content van anderen meer dan van merken zelf, en campagnes met UGC leveren gemiddeld tot 29% hogere conversie op. Zo krijg je het beste van twee werelden: geloofwaardige content die niet alleen opvalt, maar ook presteert.',
    whatTitle: 'Wat doen wij?',
    steps: [
      {
        number: 1,
        title: 'Concepting',
        text: 'We bedenken het creatieve concept én schrijven de scripts. Daarbij combineren we native content met het overbrengen van de juiste merkassociaties, zodat de video’s niet alleen natuurlijk aanvoelen, maar ook bouwen aan merkvoorkeur. Alles is ingericht om conversie te maximaliseren..'
      },
      {
        number: 2,
        title: 'Creator Matching',
        text: 'De juiste creator maakt het verschil tussen zomaar een video en een geloofwaardig verhaal. Op basis van contentstijl, doelgroep en merkfit zoeken we de beste match; iemand die jouw merk moeiteloos in een native TikTok kan verwerken. Met een duidelijke briefing en creatieve aansturing leveren zij content en daarna zorgen wij voor de edit.'
      },
      {
        number: 3,
        title: 'Analysing',
        text: 'Analyse is geen bijzaak - het is waar performance begint. We kijken gericht mee naar wat werkt: van hook en pacing tot tone of voice en creative angle. Het testen van meerdere ad creatives is geen nice-to-have, maar pure noodzaak om de beste variaties te vinden én te blijven verbeteren'
      }
    ],
    logos: [
      { src: '/images/logos/logo-mobielnl.svg', alt: 'Client logo 5' },
      { src: '/images/logos/logo-cookingtotem.avif', alt: 'Client logo 6' },
      { src: '/images/logos/logo-happn.png', alt: 'Client logo 7' },
    ],
    video: '/videos/keukensale.webm',
    ctaText: "Let's get started",
    ctaHref: '/contact'
  },
  {
    id: 4,
    number: '04',
    subtitle: 'Creator collaborations voor duurzame merkbeleving',
    title: 'Creator Collaborations',
    whyTitle: 'Waarom samenwerken met creators?',
    whyText: 'Creators begrijpen het platform - zij leven de taal, het tempo en de cultuur van TikTok. Hun content voelt écht, niet geproduceerd. En juist dat zorgt voor geloofwaardigheid, herkenning en vertrouwen. 82% van de consumenten geeft bovendien aan eerder aanbevelingen te volgen van micro-influencers dan van beroemdheden. Door je merk te koppelen aan de juiste creator, vergroot je je zichtbaarheid én activeer je je doelgroep op een manier wat tot conversie leidt.',
    whatTitle: 'Wat doen wij?',
    steps: [
      {
        number: 1,
        title: 'One-off Creator Collab',
        text: 'Snel een creator inzetten voor een losse campagne of specifieke ad? We matchen je merk aan een creator die perfect past bij je doelgroep, merkwaarden en doelstellingen.'
      },
      {
        number: 2,
        title: 'Always-on Creator Collab',
        text: 'Op zoek naar meer continuïteit? We matchen je merk aan een creator (of creators) die bij je merk past. Zij worden herkenbare gezichten binnen je contentstrategie, wat zorgt voor vertrouwen, consistentie en sterkere merkassociaties op TikTok.'
      },
      {
        number: 3,
        title: 'At Scale Collabs',
        text: 'Op zoek naar groots bereik en nog grotere impact? We matchen je merk aan tientallen micro-influencers tegelijk. Zo combineer je het gigantische bereik van een grootschalige campagne met de geloofwaardigheid van creators die écht resoneren met hun volgers.'
      }
    ],
    // logos: [
    //   { src: '/images/logos/logo5.png', alt: 'Client logo 5' },
    //   { src: '/images/logos/logo6.svg', alt: 'Client logo 6' },
    //   { src: '/images/logos/logo7.png', alt: 'Client logo 7' },
    //   { src: '/images/logos/logo8.png', alt: 'Client logo 8' }
    // ],
    video: '/videos/keukensale.webm',
    ctaText: 'Ontdek creators',
    ctaHref: '/contact'
  },

]

// Accordion state - first item open by default
const openItem = ref<number | null>(1)

// Function to toggle accordion items
const toggleItem = (itemId: number) => {
  if (openItem.value === itemId) {
    openItem.value = null
  } else {
    openItem.value = itemId

    // Wacht tot DOM is geüpdatet
    nextTick(() => {
      // Geef animatie wat extra tijd
      setTimeout(() => {
        const el = document.getElementById(`service-${itemId}`)
        if (el) {
          const yOffset = -20 // eventueel extra offset als er een sticky header is
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset

          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 200) // iets langere delay dan 100ms
    })
  }
}


</script>

<template>
  <section class="services__section">
    <div class="container">
      <div class="services__accordion">
        <div
          v-for="service in servicesData"
          :key="service.id"
          class="services__accordion-item"
          :id="`service-${service.id}`"
        >
          <div class="service__accordion-item_title">
            <!-- <div class="service__accordion-subtitle">{{ service.subtitle }}</div> -->
            <div
              class="title__wrapper"
              @click="toggleItem(service.id)"
            >
              <div class="title__wrapper_left">
                <div class="service__number">
                  {{ service.number }}
                </div>
                <h2 class="service_title title-font">{{ service.title }}</h2>
              </div>
              <div class="icon">
                <i
                  class="bx"
                  :class="openItem === service.id ? 'bx-chevron-up' : 'bx-chevron-down'"
                ></i>
              </div>
            </div>
          </div>
          <transition name="accordion" appear>
            <div
              v-if="openItem === service.id"
              class="service__content border-radius"
            >
              <div class="service__content_first">
                <div class="first_text">
                  <div class="title">{{ service.whyTitle }}</div>
                  <div class="text" v-html="service.whyText"></div>
                </div>
                <div class="second_text">
                  <div class="title">{{ service.whatTitle }}</div>
                  <div class="second_text_flex-list">
                    <div
                      v-for="step in service.steps"
                      :key="step.number"
                      class="flex-item"
                    >
                      <div class="item_title">
                        <div class="number">
                          <!-- <NuxtImg src="images/PIXEL__PIXEL_WIT_OUTLINE.png" /> -->
                          <!-- <NuxtImg src="images/PIXEL__PIXEL_WIT.png" /> -->
                          <NuxtImg src="/images/pixel__blue.png" />
                          <!-- <NuxtImg src="images/PIXEL__PIXEL_PAARS.png" /> -->
                          <!-- <NuxtImg src="images/PIXEL__PIXEL_GRADIENT.png" /> -->
                          <span class="number-text">{{ step.number }}</span>
                        </div>
                        <div class="title">{{ step.title }}</div>
                      </div>
                      <div class="item_text">
                        {{ step.text }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="service__content_logos">
                  <div class="logo_list">
                    <div
                      v-for="logo in service.logos"
                      :key="logo.src"
                      class="logo_item"
                    >
                      <NuxtImg :src="logo.src" :alt="logo.alt">
                    </div>
                  </div>
                </div>
              </div>
              <div class="service__content_second">
                <div class="service__content_video">
                  <video :src="service.video" autoplay muted loop playsinline webkit-playsinline style="pointer-events: none;"></video>
                </div>
                <div class="service__content_cta">
                  <Button variant="blue" :href="service.ctaHref" :title="service.ctaText">
                    {{ service.ctaText }}
                  </Button>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Accordion */
.services__accordion{
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.services__accordion-item{
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: var(--off-white);
  border-bottom: 1px solid var(--off-white);
  padding-bottom: 40px;
}

@media(max-width: 767px){
  .services__accordion-item{
    gap: 24px;
  }
}

/* Title */
.service__accordion-item_title{
  display: flex;
  flex-direction: column;
}



.title__wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.title__wrapper_left{
  display: flex;
  align-items: center;
  gap: 16px;
}

.service__number{
  font-size: 80px;
  font-weight: 300;
  font-style: italic;
}

.service_title{
  font-size: 80px;
  font-weight: 700;
}

.icon i{
  font-size: 44px;
  color: var(--off-white);
}

@media(max-width: 992px){
  .service__number,
  .service_title{
    font-size: 40px;
  }
  .service__accordion-item_title{
    gap: 24px;
  }
}

@media(max-width: 767px){
  .service__number,
  .service_title{
    font-size: 24px;
  }
  .service__accordion-subtitle{
    font-size: 14px;
  }
  .service__accordion-item_title{
    gap: 8px;
  }
}

/* Content */
.service__content{
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 40px;
  background-image: url('/images/gradient-vierkant-min.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.service__content_first{
  display: flex;
  flex-direction: column;
  gap: 80px;
  flex: 2;
}

@media(max-width: 992px){
  .service__content{
    flex-direction: column;
    gap: 40px;
    padding: 24px;
  }
}

@media(max-width: 767px){
  .service__content{
    gap: 24px;
  }
  .service__content_first{
    gap: 40px;
  }
}

/* text content first item */
.first_text,
.second_text{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.second_text{
  gap: 24px;
}

.first_text .title,
.second_text .title{
  font-size: 24px;
  font-weight: 700;
}

.first_text .text{
  font-size: 16px;
  font-weight: 400;
  /* max-width: 600px; */
}

.second_text_flex-list{
  display: flex;
  gap: 16px;
}

.second_text_flex-list .flex-item{
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.second_text_flex-list .flex-item .item_title{
  display: flex;
  align-items: center;
  gap: 8px;
}

.second_text_flex-list .flex-item .item_title .title{
  font-size: 16px;
  font-weight: 500;
  width: 100%;
}

.second_text_flex-list .flex-item .item_title .number-text{
  font-size: 18px;
  font-weight: 700;
  color: var(--off-white);
  z-index: 2;
}

.second_text_flex-list .flex-item .item_title .number{
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
}

.second_text_flex-list .flex-item .item_title .number img{
  position: absolute;
  width: 100px;
  height: 40px;
}

@media(max-width: 767px){
  .second_text_flex-list{
    flex-wrap: wrap;
  }
  .second_text_flex-list .flex-item{
    flex: unset;
    width: 100%;
  }
}

/* logos */
.service__content_logos{
  margin-top: auto;
}

.logo_list{
  display: flex;
  gap: 24px;
}

.logo_item img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  width: 150px;
  max-height: 60px;
}

/* video content second item */
.service__content_second{
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
}

.service__content_video{
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
}

.service__content_video video{
  width: 100%;
  height: 100%;
  object-fit: cover;

  aspect-ratio: 9 / 16;
  overflow: hidden;
  border-radius: 24px;
}

@media(max-width: 767px){
  .service__content_video video{
    max-height: 600px;
  }
}

/* Accordion animations */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.accordion-enter-from {
  opacity: 0;
  transform: translateY(-20px);
  max-height: 0;
}

.accordion-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 1000px;
}

/* Icon rotation animation */
.icon i {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.title__wrapper:hover .icon i {
  transform: scale(1.1);
}

@media(min-width: 992px){
  .number img {
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
  }

  .item_title:hover .number img {
    transform: rotateY(180deg);
  }
}

</style>
