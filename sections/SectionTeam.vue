<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import GradientBlur from '@/components/GradientBlur.vue';


const team = ref([
  {
    name: 'Feie',
    role: 'Founder',
    image: '/images/contact-image3-min.webp',
  },
  {
    name: 'Jay',
    role: 'Videograaf',
    image: '/images/contact-image2-min.webp',
  },
  {
    name: 'Rens',
    role: 'Allround Creative',
    image: '/images/contact-image1-min.webp',
  },
  {
    name: 'Ciaran',
    role: 'Copywriter',
    image: '/images/contact-image5-min.webp',
  },
])
</script>

<template>
  <div class="team padding-bottom">
    <div class="container gradient-blur-wrapper">
      <GradientBlur :width="{ default: '50vw', sm: '60vw' }" :height="{ default: '50vh', sm: '80vh' }" :top="{ default: '20%', sm: '40%' }" :left="{ default: '40%', sm: '20%' }"/>
      <Swiper
        :slides-per-view="1.2"
        :space-between="20"
        :breakpoints="{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3.5, spaceBetween: 40 }
        }"
      >
        <SwiperSlide v-for="member in team" :key="member.name">
          <div class="team__item">
            <div class="team__item_image">
              <NuxtImg :src="member.image" :alt="member.name"/>
            </div>
            <div class="team__item_content">
              <div class="team__item_name">
                <h2>{{ member.name }}</h2>
              </div>
              <div class="team__item_role">
                <h3>{{ member.role }}</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
.team {
  width: 100%;
}

.team__item {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 16px;
  position: relative;
  height: 580px;
  border-radius: 24px;
  padding: 40px 18px;
}

.team__item_image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.team__item_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
}

.team__item_content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
  color: var(--off-white);
}

.team__item_name h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  font-family: 'montserrat', serif;
  font-style: italic;
}

.team__item_role h3 {
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  font-family: 'montserrat', serif;
  font-style: italic;
}

@media(max-width: 992px) {
  .team__item {
    height: 300px;
  }
}
</style>
