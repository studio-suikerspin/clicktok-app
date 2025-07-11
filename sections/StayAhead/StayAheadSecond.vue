<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation';

import SectionTitle from '@/components/SectionTitle.vue'
import GradientBlur from '@/components/GradientBlur.vue'
import Button from '@/components/ui/Button.vue'
import ReviewCard from '@/components/ReviewCard.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  navigation: {
    type: String,
    required: true
  },
  association: {
    type: Boolean,
    required: false
  }
})

const stayAheadSlides = [
{
    videoId: '7413695052821564704',
    video: '/videos-nubikk/BANNER_NUBIKK_V1.webm',
    blocks: [
      {
        title: 'Surprise with ease',
        subtitle: 'Hieromheen is het format gebouwd',
        content: "In dit format daagden we mensen uit hun huidige schoenen te ruilen voor een nieuw paar Nubikk's. Deze directe interactie moest zorgen voor een verwarmende merkbeleving en onverwachte voldoening.",
        // values: [
        //   'Surprise with ease',
        //   'Create from Core',
        //   'Play the Algorithm, Own the Tone',
        //   'Make Relevance Last',
        // ]
      },
      {
        title: 'Associaties',
        subtitle: 'Daaruit kwamen de volgende associaties:',
        // values: [
        //   'Van merkwaarden naar viraal concept',
        //   'Performance door herkenning en interactie',
        //   'Een eigen draai aan bewezen formats',
        //   'Format gebouwd op strategie',
        // ]
        content: "De content roept direct een gevoel van moderne flair en zelfverzekerde stijl op, waardoor kijkers zich naadloos verbinden met de esthetiek. Dit creëert essentiële associaties met kwaliteit, exclusiviteit en een vooruitstrevende urban lifestyle, en bouwt zo actief aan sterke merkvoorkeur.",
        reviews: [
          {
            name: 'Nubikk - Marit Smits - CEO',
            review: 'No joke, elke video van hen presteert beter dan onze vorige topvideo.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
          },
          {
            name: 'Nubikk - Eddie de Meer - CEO',
            review: 'We werkten al een tijdje aan onze socials maar het bleef hangen… totdat ClickTok instapte. Ze kwamen direct met ideeën die bij ons pasten en écht werkten. Onze eerste video ging viraal en we zagen meteen effect in onze sales. Dit is geen toeval, dit is vakmanschap.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardMedium&clotheType=BlazerShirt&clotheColor=Navy&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
          },
        ],
      }
    ]
  }
]

const length = stayAheadSlides.length;
</script>

<template>
  <div class="stay__ahead">
    <div class="container gradient-blur-wrapper">
      <GradientBlur :width="{ default: '40vw', sm: '50vw' }" :height="{ default: '40vh', sm: '40vh' }" :left="{ default: '-20%', sm: '40%' }" :top="{ default: '40%', sm: '0' }"/>
      <GradientBlur :width="{ default: '40vw', sm: '50vw' }" :height="{ default: '40vh', sm: '40vh' }" :right="{ default: '0', sm: '40%' }" :bottom="{ default: '-20%', sm: '0' }"/>

      <div class="stay__ahead_inner">
        <div class="stay__ahead_header">
          <SectionTitle :title="title" :subtitle="subtitle" />

          <div class="swiper-navigation" v-if="navigation == 'side' && length > 1">
            <div class="swiper-button-prev">
              <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
              </svg>
            </div>
            <div class="swiper-button-next">
              <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                </svg>
            </div>
          </div>
        </div>

        <Swiper
          :slides-per-view="1"
          :space-between="40"
          :modules="[Navigation]"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled'
          }"
          class="stay__ahead_blocks"
        >
          <SwiperSlide v-for="(item, index) in stayAheadSlides" :key="index">
            <div class="stay__ahead_blocks_inner">
              <div class="stay__ahead_block border-radius">
                <NuxtImg src="/images/gradient-vierkant-mobile-min.webp" />
                <div class="main__title title-font">Brand values</div>
                <div class="text__content_title">
                  <div class="title title-font title-blue">{{ item.blocks[0].title }}</div>
                  <div class="subtitle">{{ item.blocks[0].subtitle }}</div>
                </div>
                <div class="stay__ahead_general-content" v-html="item.blocks[0].content"></div>
                <Button variant="blue" href="/contact" class="blue-btn">Let's get started!</Button>
                <!-- <div class="values">
                  <div class="value" v-for="value in item.blocks[0].values" :key="value">{{ value }}</div>
                </div> -->
              </div>

              <div class="stay__ahead_video border-radius">
                <!-- <TikTokVideo :videoId="item.videoId" /> -->
                <video class="stay__ahead_video_inner border-radius" autoplay muted playsinline loop webkit-playsinline style="pointer-events: none;">
                    <source :src="item.video" type="video/webm" width="100%" height="978" />
                </video>
              </div>

              <div class="stay__ahead_block second border-radius">
                <NuxtImg src="/images/gradient-vierkant-mobile-min.webp" />
                <div class="text__content_title">
                  <div class="title title-font title-blue">{{ item.blocks[1].title }}</div>
                  <!-- <div class="subtitle">{{ item.blocks[1].subtitle }}</div> -->
                </div>
                <!-- <div class="values">
                  <div class="value" v-for="value in item.blocks[1].values" :key="value">{{ value }}</div>
                </div> -->
                <div class="stay__ahead_general-content" v-html="item.blocks[1].content"></div>
                <div class="stay__ahead_reviews">
                    <ReviewCard v-for="review in item.blocks[1].reviews" :key="review.name" :review="review" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>

      <div class="swiper-navigation bottom" v-if="navigation == 'bottom' && length > 1">
        <div class="swiper-button-prev">
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
          </svg>
        </div>
        <div class="swiper-button-next">
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.stay__ahead_header{
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.swiper-navigation{
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
}

.swiper-navigation.bottom{
  justify-content: center;
  margin-top: 24px;
}

.swiper-navigation .swiper-button-prev,
.swiper-navigation .swiper-button-next{
  position: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  border: 1px solid var(--off-white);
  margin: 0;
}

.swiper-navigation .swiper-button-prev svg,
.swiper-navigation .swiper-button-next svg{
  fill: var(--off-white);
  width: 42px;
  height: 42px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

@media (max-width: 767px) {
  .swiper-navigation{
    gap: 16px;
  }
  .swiper-navigation .swiper-button-prev,
  .swiper-navigation .swiper-button-next{
    width: 40px;
    height: 40px;
  }
  .swiper-navigation .swiper-button-prev svg,
  .swiper-navigation .swiper-button-next svg{
    width: 32px;
    height: 32px;
  }
  .stay__ahead_header{
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
}


.stay__ahead_inner{
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
}

@media (max-width: 767px) {
  .stay__ahead_inner{
    gap: 40px;
    width: 100%;
  }
}

.stay__ahead_blocks{
  display: flex;
  align-items: stretch;
  gap: 40px;
  width: 100%;
}

.stay__ahead_block{
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 80px 24px;
  position: relative;
  overflow: hidden;
}

.stay__ahead_blocks_inner{
  display: flex;
  align-items: stretch;
  gap: 40px;
}

@media (max-width: 1100px) {
  .stay__ahead_blocks_inner{
    flex-direction: column;
  }
  .stay__ahead_block{
    width: 100%;
    padding: 32px 18px;
  }
}

@media(max-width: 767px) {
  .stay__ahead_blocks_inner{
    gap: 24px;
  }
}

.stay__ahead_video_inner {
  width: 100%;
  height: 100%;
  object-fit: cover;

  aspect-ratio: 9 / 16;
}

@media(max-width: 767px){
  .stay__ahead_video_inner {
    max-height: 600px;
  }
}

.stay__ahead_block img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.stay__ahead_block .text__content{
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.stay__ahead_block .text__content .title-wrap{
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--off-white);
}

.stay__ahead_block .main__title{
  font-size: 40px;
  width: 100%;
  text-align: center;
  color: var(--off-white);
}

.stay__ahead_block .text__content_title{
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stay__ahead_block .text__content_title .subtitle{
  color: var(--off-white);
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  line-height: 100%;
}

.stay__ahead_block .title-blue{
  line-height: 100%;
  font-family: 'Montserrat';

  font-size: 44px;
  color: var(--accent-blue);
  font-weight: 700;
  font-style: italic;
  line-height: 100%;
}

.stay__ahead_block .stay__ahead_general-content{
  font-size: 16px;
  color: var(--off-white);
  line-height: 20px;
}

.stay__ahead_block .values{
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.stay__ahead_block .value{
  font-size: 24px;
  font-weight: 600;
  line-height: 100%;
  font-family: 'Montserrat';
  font-style: italic;
  color: var(--off-white);
}



@media (max-width: 767px) {
  .stay__ahead_block .text__content{
    gap: 24px;
  }
  .stay__ahead_block .title-blue{
    font-size: 32px;
  }
  .stay__ahead_block .values{
    gap: 16px;
  }
  .stay__ahead_block .value{
    font-size: 24px;
  }
}

.stay__ahead_video{
  flex: 1;
}

.stay__ahead_video video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 992px) {
  .stay__ahead_video{
    width: 100%;
    aspect-ratio: 13 / 16;
  }
}

.stay__ahead_reviews{
  display: flex;
  flex-direction: column;
  gap: 44px;
}

.stay__ahead_reviews .review-card:first-child{
  transform: rotate(-4deg);
}

.stay__ahead_reviews .review-card:last-child{
  transform: rotate(6deg);
}

.stay__ahead_reviews .review-card{
  min-width: unset;
  width: 100%;
}

</style>
