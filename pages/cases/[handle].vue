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
  <BaseLayout>
    <template #head>
      <title>ClickTok - Case {{ item.client }}</title>
    </template>

    <template #smooth>
      <MainHeader />
      <CaseDetailHero :project="item" :is-detail-page="true" />

      <CaseSteps :project="item" />

      <section
        v-if="item.brand_value?.title || item.brand_values?.length"
        class="tabbed-content"
      >
        <div class="container">
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
                  :title="brand_value.title"
                  variant="center-title"
                  :animateOnScroll="false"
                  :showVideoControls="true"
                  :slides="[
                    {
                      videoId: '7457929797402922262',
                      video: brand_value.video,
                      blocks: [
                        {
                          title: 'Brand value',
                          subtitle: 'Surprise with ease',
                          secondTitle: brand_value.content,
                        },
                        {
                          title: 'Associaties',
                          content: brand_value.associaties,
                          reviews: [
                            {
                              name: 'Nubikk - Marit Smits - CEO',
                              review:
                                'No joke, elke video van hen presteert beter dan onze vorige topvideo.',
                              avatar:
                                'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
                            },
                            {
                              name: 'Nubikk - Eddie de Meer - CEO',
                              review:
                                'We werkten al een tijdje aan onze socials maar het bleef hangen… totdat ClickTok instapte. Ze kwamen direct met ideeën die bij ons pasten en écht werkten. Onze eerste video ging viraal en we zagen meteen effect in onze sales. Dit is geen toeval, dit is vakmanschap.',
                              avatar:
                                'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardMedium&clotheType=BlazerShirt&clotheColor=Navy&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
                            },
                          ],
                        },
                      ],
                    },
                  ]"
                />
              </TabContent>
            </TabsContent>
          </TabbedContent>

          <StayAhead
            v-else
            title="What led to these <span>formats</span>"
            :subtitle="item.hasOwnProperty('excerpt') ? item.excerpt : ''"
            variant="center-title"
            :animate-on-scroll="false"
            :show-video-controls="true"
            :slides="[
              {
                videoId: '7457929797402922262',
                video: item.brand_value.video,
                blocks: [
                  {
                    title: 'Brand value',
                    subtitle: 'Surprise with ease',
                    secondTitle: 'Hieromheen is het format gebouwd',
                    content: item.brand_value.content,
                  },
                  {
                    title: 'Associaties',
                    content: item.brand_value.associaties,
                    reviews: [
                      {
                        name: 'Nubikk - Marit Smits - CEO',
                        review:
                          'No joke, elke video van hen presteert beter dan onze vorige topvideo.',
                        avatar:
                          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
                      },
                      {
                        name: 'Nubikk - Eddie de Meer - CEO',
                        review:
                          'We werkten al een tijdje aan onze socials maar het bleef hangen… totdat ClickTok instapte. Ze kwamen direct met ideeën die bij ons pasten en écht werkten. Onze eerste video ging viraal en we zagen meteen effect in onze sales. Dit is geen toeval, dit is vakmanschap.',
                        avatar:
                          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardMedium&clotheType=BlazerShirt&clotheColor=Navy&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
                      },
                    ],
                  },
                ],
              },
            ]"
          />
        </div>
      </section>

      <LetTheNumbersSpeak class="padding-bottom" />

      <section v-if="item.reference.content" class="reference">
        <div class="container">
          <div class="reference__inner">
            <type-reveal-title>This is what our client says</type-reveal-title>

            <div class="wrapper">
              <ClientReference
                v-if="item.reference.content"
                :reference="item.reference"
              />
              <div class="fun-fact border-radius">
                <div class="fun-fact__title">Fun fact</div>
                <div class="fun-fact__content">
                  {{ item.detail_large_stat.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="section-padding">
        <LogoSlider variant="bw" />
      </div>

      <Contact />
      <Footer />
    </template>
  </BaseLayout>
</template>

<style scoped>
.reference .wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
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

.tabbed-content {
  padding-block: 160px;
}

.reference__inner {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

@media (max-width: 767px) {
  .tabbed-content {
    padding-block: 100px;
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
</style>
