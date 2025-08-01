<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

import CaseCard from "@/components/CaseCard.vue";

const { project } = defineProps({
  project: Object,
  isDetailPage: Boolean,
});

const animateNumbers = (slideIndex = null) => {
  const selector = "[data-number]";

  const numberElements = document.querySelectorAll(selector);

  numberElements.forEach((element) => {
    const targetValue = parseInt(element.getAttribute("data-number"));

    gsap.fromTo(
      element,
      {
        textContent: 0,
      },
      {
        textContent: targetValue,
        duration: 1.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.1,
        onUpdate: function () {
          let currentValue = Math.round(this.targets()[0].textContent);
          currentValue = currentValue
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          element.textContent = currentValue;
        },
      }
    );
  });
};

onMounted(() => animateNumbers());
</script>

<template>
  <section class="cases-hero section-padding">
    <div class="container">
    <div class="hero__inner">
      <div class="hero__content">
        <div v-if="project.client_logo">
          <NuxtImg
            class="hero__logo"
            :src="project.client_logo"
            :alt="project.client"
          />
        </div>
        <h1 v-else class="hero__title">{{ project.client }}</h1>
        <div class="hero__subtitle">
          {{ project.subtitle }}
        </div>

        <div class="hero__details">
          <div class="details">
            <div class="detail-wrap">
              <div class="label">Klant</div>
              <div class="value">{{ project.client }}</div>
            </div>

            <div class="detail-wrap">
              <div class="label">Doel</div>
              <div class="value">{{ project.target }}</div>
            </div>

            <div class="detail-wrap">
              <div class="label">Looptijd</div>
              <div class="value">{{ project.timeline }}</div>
            </div>
          </div>

          <div class="details stats">
            <div
              v-for="(stat, key) in project.stats"
              :key="key"
              class="detail-wrap"
            >
              <div class="label">{{ stat.title }}</div>
              <div class="value value--stat" :data-number="stat.stat">{{ stat.stat }}</div>
            </div>
          </div>
        </div>
      </div>

      <CaseCard
        :client="project.client"
        :featured_video="project.featured_video"
        :aspect_ratio="460 / 680"
        :autoplay="true"
        :is-detail-page="isDetailPage"
      />
    </div>
  </div>

    <img
      class="background-gradient"
      src="/images/gradient-background1.webp"
      alt="Background gradient"
    >
    <img
      class="background-gradient mobile"
      src="/images/gradient-background2.webp"
      alt="Background gradient"
    >
  </section>
</template>

<style scoped>
.cases-hero {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;

  overflow: hidden;
}

.background-gradient {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}

.cases-hero .background-gradient.mobile {
  display: none;
}

.hero__inner {
  display: grid;
  align-items: center;
  gap: 80px;


  max-width: 100%;
  margin-inline: auto;
}


.hero__logo {
  max-height: 40px;
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.case-card {
  min-width: 0;
  max-height: 650px;
}

.hero__title {
  font-size: clamp(3rem, 0.4107rem + 8.2857vw, 6.625rem);
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;

  color: var(--off-white);
}

.hero__subtitle {
  color: var(--White_off, #fdfdfd);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;

  text-wrap: balance;

  padding-block-end: 24px;
}

.hero__details {
  display: flex;
  align-items: flex-start;
  gap: 80px;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.detail-wrap {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  color: var(--off-white);
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}

.value {
color: var(--White_off, #FDFDFD);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.96px;
}

.value--stat {
  font-family: Syne;
}

@media (min-width: 768px) {
  .hero {
    padding-block: 80px;
  }

  .hero__inner {
    grid-template-columns: 55% 1fr;
  }

  .value {
    font-size: 24px;
  }
}

@media (max-width: 767px) {
  .cases-hero .background-gradient.mobile {
    display: block;
  }
  
  .cases-hero .background-gradient {
    display: none;
  }
}
</style>
