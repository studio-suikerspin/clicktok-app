<script setup>
import BaseLayout from "@/layouts/BaseLayout.vue";
import Header from "~/sections/Header/MainHeader.vue";
import Contact from "@/sections/Contact/Contact.vue";
import Offices from "~/sections/General/MainOffices.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import Footer from "@/sections/General/Footer.vue";
import Filters from "@/components/filters/Filters.vue";
import LogoFlex from "@/sections/General/LogoFlex.vue";
import LogoSlider from "~/sections/General/LogoSlider.vue";

// Reactive data for filter selection
const selectedCaseIndex = ref(0);

// Method to handle filter selection
const selectCase = (index) => {
  selectedCaseIndex.value = index;
};

const filters = [
  {
    title: "Work with us",
  },
  {
    title: "Collaborate as a creator",
  },
  {
    title: "Join our team",
  },
];

// Contact form configurations for each filter
const contactForms = [
  {
    type: "contact",
    title: "You are ready to <span>stay ahead</span>",
    subtitle:
      "Benieuwd wat TikTok voor jouw merk kan betekenen? Laat je gegevens achter en we plannen een (vrijblijvende) brainstormsessie in.",
    ctaText: "Let's get in touch!",
  },
  {
    type: "creator",
    title: "You’re ready to <span>create impact</span>",
    subtitle:
      "Ben jij creator en wil je samenwerken met merken die echt het verschil maken op TikTok? Laat je gegevens achter en we maken graag eens kennis met je.",
    ctaText: "Let's get in touch!",
  },
  {
    type: "job",
    title: "You’re ready to <span>create impact</span>",
    subtitle:
      "Wil jij onderdeel worden van een creatief team dat merken laat opvallen op TikTok? Laat je gegevens achter en we maken graag eens kennis met je.",
    ctaText: "Let's get in touch!",
  },
];
</script>

<template>
  <BaseLayout>
    <template #head>
      <title>ClickTok - Contact</title>
    </template>

    <template #smooth>
      <div class="contact-hero">
        <Header />
        
        <div class="contactpage__wrapper">
          <div>
            <Filters
              :filters="filters"
              :selected-index="selectedCaseIndex"
              @filter-change="selectCase"
            />
            <Contact
              :title="contactForms[selectedCaseIndex].title"
              :subtitle="contactForms[selectedCaseIndex].subtitle"
              :cta-text="contactForms[selectedCaseIndex].ctaText"
              :is-sollicitation="selectedCaseIndex === 2"
              :is-creator="selectedCaseIndex === 1"
              :form-type="contactForms[selectedCaseIndex].type"
              :no-background="true"
            />
          </div>
          <div class="logo-flex-wrapper">
            <LogoSlider variant="bw" />
          </div>
        </div>

        <img class="background-gradient" src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/1a080bb2-eb2a-4194-69a2-52cda2f3d000/public" alt="Background gradient">
        <img class="background-gradient mobile" src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/84e3aa21-f7eb-449c-9faa-352ef7f4ce00/public" alt="Background gradient">
      </div>
      <div class="contactpage__offices padding-top">
        <div class="container">
          <div class="offices__inner">
            <SectionTitle title="Offices" />
            <Offices :show-text="true" />
          </div>
        </div>
      </div>

      <Footer />
    </template>
  </BaseLayout>
</template>

<style scoped>
.contact-hero {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;

  overflow: hidden;

  padding-block: 80px;
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

.background-gradient.mobile {
  display: none;
}

@media (max-width: 767px) {
    .background-gradient.mobile {
        display: block;
    }

    .background-gradient {
        display: none;
    }
}

.offices__inner {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

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

@media (max-width: 992px) {
  .service-examples__title {
    margin-bottom: 40px;
  }
  .service-examples__title h2 {
    font-size: 32px;
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

@media (max-width: 767px) {
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

.about__logo_flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about__logo_flex_inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.about__logo_flex_inner img {
  width: 100px;
}

@media (max-width: 992px) {
  .about__logo_flex_inner {
    justify-content: center;
  }
  .about__logo_flex_inner img {
    width: 120px;
  }
}
</style>
