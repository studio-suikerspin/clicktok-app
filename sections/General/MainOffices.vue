<script setup>
import { ref } from "vue";
import Blurglow from "@/components/blur/Blurglow.vue";

defineProps({
  showText: {
    type: Boolean,
    default: false,
  },
});

const offices = ref([
  {
    title: "Amsterdam",
    address: "Keizersgracht 520 <br /> 1017EK, Amsterdam",
    text: "Ons kantoor in Amsterdam is de creatieve hub waar ideeën tot leven komen. Gevestigd in het bruisende hart van de stad, combineren we hier strategisch denken met artistieke energie. Het is de plek waar we samenwerken, experimenteren en onze beste concepten ontwikkelen.",
    image:
      "https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/0383eebd-cfee-4df7-60c8-73314a8ead00/public",
  },
  {
    title: "’s-Hertogenbosch",
    address: "Rietveldenweg 68b <br /> 5222 AS, ‘s-Hertogenbosch",
    text: "Ons kantoor in Amsterdam is de creatieve hub waar ideeën tot leven komen. Gevestigd in het bruisende hart van de stad, combineren we hier strategisch denken met artistieke energie. Het is de plek waar we samenwerken, experimenteren en onze beste concepten ontwikkelen.",
    image:
      "https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/471cc55c-6061-49f0-268a-3a59f1a60200/public",
  },
]);
</script>

<template>
  <div class="offices padding-bottom">
    <div class="container">
      <div class="offices__inner">
        <div
          v-for="office in offices"
          :key="office.title"
          class="offices__item"
        >
          <div class="offices__item_content">
            <div class="offices__item_title">
              <h2>{{ office.title }}</h2>
            </div>
            <div
              class="offices__item_text"
              v-html="showText ? office.text : office.address"
            />
          </div>
          <div class="offices__item_image">
            <img :src="office.image" :alt="office.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.offices {
  width: 100%;
  max-width: 1250px;
  margin-inline: auto;
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

.offices__item_title h2 {
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
  border-radius: 24px;
}

.offices__item_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
}

@media (max-width: 992px) {
  .offices__inner {
    flex-direction: column;
    gap: 40px;
  }
  .offices__item_image {
    height: 300px;
  }
}
</style>
