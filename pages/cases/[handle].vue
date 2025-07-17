<script setup>
import ClientReference from "@/components/ClientReference.vue";
import TabbedContent from "@/components/tabs/TabbedContent.vue";
import Tabs from "@/components/tabs/Tabs.vue";
import Tab from "@/components/tabs/Tab.vue";
import TabContent from "@/components/tabs/TabContent.vue";
import TabsContent from "@/components/tabs/TabsContent.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import cases from "@/lib/cases";
import CaseSteps from "@/sections/CaseDetail/CaseSteps.vue";
import MainHeader from "@/sections/Header/MainHeader.vue";
import StayAhead from "@/sections/StayAhead/StayAhead.vue";
import StayAheadSecond from "@/sections/StayAhead/StayAheadSecond.vue";

import CaseDetailHero from "@/sections/CaseDetailHero.vue";
import Contact from "@/sections/Contact/Contact.vue";
import Footer from "@/sections/General/Footer.vue";
import LetTheNumbersSpeak from "@/sections/Section-numbers/LetTheNumbersSpeak.vue";
import LogoSlider from "@/sections/General/LogoSlider.vue";

const route = useRoute();
const item = cases.find((item) => item.handle === route.params.handle);

if (!item) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}
</script>

<template>
  <BaseLayout class="case-detail">
    <template #head>
      <title>ClickTok - Case {{ item.client }}</title>
    </template>

      <MainHeader />
      <CaseDetailHero :project="item" :is-detail-page="true" />

      <CaseSteps :project="item" />


      <section
        v-if="item.brand_value?.title || item.brand_values?.length"
        class="tabbed-content padding-top"
      >
        <div class="container">
          <div class="tabbed-content__inner">
            <div class="tabbed-content__title">
              <SectionTitle title="What led to these format(s)" />
            </div>
            <TabbedContent v-if="item.brand_values" :default-index="0">
              <Tabs>
                <Tab
                  v-for="(brand_value, key) in item.brand_values"
                  :key="key"
                  :index="key"
                  :number="key === 0 ? '01' : `0${key + 1}`"
                  :title="brand_value.title"
                />
              </Tabs>

              <TabsContent>
                <TabContent
                  v-for="(brand_value, key) in item.brand_values"
                  :key="key"
                  :index="key"
                >
                  <StayAhead
                    :showTitle="false"
                    brandValue="Brand value"
                    :mainTitle="brand_value.value"
                    :description="brand_value.content"
                    bottomTitle="Hieromheen is het format gebouwd"
                    :videoSrc="brand_value.video"
                    :associaties="brand_value.associaties"
                  />
                </TabContent>
              </TabsContent>
            </TabbedContent>

            <StayAhead
              v-else-if="item.brand_value && item.brand_value.value"
              :showTitle="false"
              brandValue="Brand value"
              :mainTitle="item.brand_value.value"
              bottomTitle="Hieromheen is het format gebouwd"
              :description="item.brand_value.content"
              :videoSrc="item.brand_value.video"
              :associaties="item.brand_value.associaties"
            />
          </div>
        </div>
      </section>

      <LetTheNumbersSpeak class="padding-top" />

      <section v-if="item.reference.content" class="reference padding-top">
        <div class="container">
          <div class="reference__inner">
            <type-reveal-title>This is what our client says</type-reveal-title>

            <div class="wrapper">
              <ClientReference
                v-if="item.reference.content"
                :reference="item.reference"
              />
              <div class="fun-fact border-radius" v-if="item.detail_large_stat">
                <div class="fun-fact__title">Fun fact</div>
                <div class="fun-fact__content">
                  {{ item.detail_large_stat.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="padding-top-small">
        <LogoSlider />
      </div>

      <Contact class="padding-top" />
      <Footer />
  </BaseLayout>
</template>

<style scoped>
.reference .wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.padding-top-small{
  padding-top: 120px;
}

@media screen and (max-width: 768px) {
  .padding-top-small{
    padding-top: 80px;
  }
}

.tabbed-content__inner{
  max-width: 1250px;
  width: 100%;
  margin-inline: auto;
}

.fun-fact {
  display: flex;
  max-width: 570px;
  padding: 24px;
  flex-direction: column;
  gap: 18px;
  width: 100%;

  background: var(--accent-dark-purple);

  margin-inline: auto;
}

.fun-fact__title {
  color: white;
  font-family: Syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.fun-fact__content {
  color: var(--off-white, #fdfdfd);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

#app {
  overflow-x: hidden;
}

@media (max-width: 767px) {
  .numbers__wrapper {
    padding-block: 40px;
  }
}

.hero__background-fade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 0;

  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}

.hero__content_cases {
  position: relative;
  z-index: 2;
}

@media (max-width: 767px) {
  .hero__background-fade {
    background-image: url("/images/gradient-vierkant-mobile-min.webp");
    height: 100vh;
  }
}

.hero__slider {
  padding-block: 80px;
}

.numbers {
  padding-block: 80px;
}

/* .contact__wrapper {
    padding-block: 80px;
} */

.reference__inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (max-width: 767px) {
  .tabbed-content {
    padding-block: 50px;
    padding-bottom: 0;
  }

  .numbers {
    padding-top: 0;
  }

  .client-reference {
    padding-block: 100px;
  }

  .hero__slider {
    padding-block: 0;
    padding-bottom: 100px;
  }

  .contact__wrapper {
    padding-block: 0;
    padding-bottom: 100px;
  }
}

@media screen and (min-width: 768px) {
  .reference__inner {
    gap: 80px;
  }
}


.tabbed-content__title {
  margin-bottom: 40px;
}

</style>
