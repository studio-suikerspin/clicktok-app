<script setup>
import { ref } from 'vue';
import GradientBlur from '@/components/GradientBlur.vue';

const offices = ref([
  {
    title: 'Amsterdam',
    text: 'Keizersgracht 520 <br /> 1017EK, Amsterdam',
    image: '/images/amsterdam-office.webp',
  },
  {
    title: '’s-Hertogenbosch',
    text: 'Rietveldenweg 68b <br /> 5222 AS, ‘s-Hertogenbosch',
    image: '/images/denbosch-office.webp',
  },
])
</script>

<template>
  <div class="offices padding-bottom">
    <div class="container gradient-blur-wrapper">
      <GradientBlur :width="{ default: '50vw', sm: '60vw' }" :height="{ default: '50vh', sm: '80vh' }" :top="{ default: '20%', sm: '40%' }" :left="{ default: '20%', sm: '20%' }"/>
      <div class="offices__inner">
        <div class="offices__item" v-for="office in offices" :key="office.title">
          <div class="offices__item_content">
            <div class="offices__item_title">
              <h2>{{ office.title }}</h2>
            </div>
            <div class="offices__item_text" v-html="office.text"></div>
          </div>
          <div class="offices__item_image">
            <img :src="office.image" :alt="office.title">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.offices {
  width: 100%;
}

.offices__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
}

.offices__item {
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
}

.offices__item_content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--off-white);
}

.offices__item_title h2{
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
}

.offices__item_text {
  font-size: 18px;
  font-weight: 400;
}


.offices__item_image {
  width: 100%;
  height: 420px;
  border-radius: 24px
}

.offices__item_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
}

@media(max-width: 992px) {
  .offices__inner {
    flex-direction: column;
  }
  .offices__item_image {
    height: 300px;
  }
}
</style>