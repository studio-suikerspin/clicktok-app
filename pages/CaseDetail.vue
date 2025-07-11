<script setup>
import cases from '@/lib/cases'

import BaseLayout from '@/layouts/BaseLayout.vue'
import CaseSteps from '@/sections/CaseDetail/CaseSteps.vue'
import Hero from '@/sections/CaseDetail/Hero.vue'
import Contact from '@/sections/Contact/Contact.vue'
import ClientReference from '@/sections/General/ClientReference.vue'
import Footer from '@/sections/General/Footer.vue'
import LogoFlex from '@/sections/General/LogoFlex.vue'
import Header from '@/sections/Header/Header.vue'
import { onMounted } from 'vue'
import Tab from '@/components/tabs/Tab.vue'
import TabbedContent from '@/components/tabs/TabbedContent.vue'
import TabContent from '@/components/tabs/TabContent.vue'
import Tabs from '@/components/tabs/Tabs.vue'
import TabsContent from '@/components/tabs/TabsContent.vue'


import StayAhead from '@/sections/StayAhead/StayAhead.vue'

function initAutoplayVideos(selector = 'video[autoplay]') {
  const enableAutoplay = () => {
    const videos = document.querySelectorAll(selector);
    videos.forEach(video => {
      // Video-elementen hebben de play() methode, dus gewoon aanroepen
      video.play().catch(err => {
        console.warn('Autoplay blocked for video:', video, err);
      });
    });

    window.removeEventListener('click', enableAutoplay);
    window.removeEventListener('touchstart', enableAutoplay);
    window.removeEventListener('scroll', enableAutoplay);
  };

  window.addEventListener('click', enableAutoplay);
  window.addEventListener('touchstart', enableAutoplay);
  window.addEventListener('scroll', enableAutoplay);
}



const { handle } = defineProps({
    handle: String,
})

const item = cases.find((item) => item.handle === handle)

if (!item) {
    window.location = '/404'
}

const numbers = [];
if (item.detail_stats) {
    numbers.push(...item.detail_stats)
}
if (item.detail_large_stat?.title) {
    numbers.push(item.detail_large_stat)
}

onMounted(() => {
    initAutoplayVideos()
})
</script>

<template>
    <BaseLayout>
        <template #head>
            <title>ClickTok - Case {{ item.client }}</title>
        </template>

        <template #smooth>
            <div class="hero__wrapper">
                <div class="hero__background-fade"></div>
                <div class="hero__content_cases">
                    <Header />
                    <Hero :project="item" isDetailPage="true" />
                </div>
            </div>

            <CaseSteps :project="item" />

            <section class="tabbed-content" v-if="item.brand_value?.title || item.brand_values?.length">
                <div class="container">
                    <TabbedContent v-if="item.brand_values" :default-index="0">
                        <Tabs>
                            <Tab v-for="(brand_value, key) in item.brand_values" :key="key" :index="key" :number="key === 0 ? '01' : `0${key + 1}`" :title="brand_value.title" />
                        </Tabs>

                        <TabsContent>
                            <TabContent v-for="(brand_value, key) in item.brand_values" :key="key" :index="key">
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
                                                            review: 'No joke, elke video van hen presteert beter dan onze vorige topvideo.',
                                                            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
                                                        },
                                                        {
                                                            name: 'Nubikk - Eddie de Meer - CEO',
                                                            review: 'We werkten al een tijdje aan onze socials maar het bleef hangen… totdat ClickTok instapte. Ze kwamen direct met ideeën die bij ons pasten en écht werkten. Onze eerste video ging viraal en we zagen meteen effect in onze sales. Dit is geen toeval, dit is vakmanschap.',
                                                            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardMedium&clotheType=BlazerShirt&clotheColor=Navy&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
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
                        :animateOnScroll="false"
                        :showVideoControls="true"
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
                                                review: 'No joke, elke video van hen presteert beter dan onze vorige topvideo.',
                                                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
                                            },
                                            {
                                                name: 'Nubikk - Eddie de Meer - CEO',
                                                review: 'We werkten al een tijdje aan onze socials maar het bleef hangen… totdat ClickTok instapte. Ze kwamen direct met ideeën die bij ons pasten en écht werkten. Onze eerste video ging viraal en we zagen meteen effect in onze sales. Dit is geen toeval, dit is vakmanschap.',
                                                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardMedium&clotheType=BlazerShirt&clotheColor=Navy&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]"
                    />
                </div>
            </section>

            <ClientReference :reference="item.reference" v-if="item.reference.content" />

            <div class="logo-flex-wrapper padding-bottom">
                <LogoFlex title="We've also <span>worked</span> for" />
            </div>
            <Contact />
            <Footer />
        </template>
    </BaseLayout>
</template>

<style scoped>
/* .gradient-wrap {
    position: relative;
    background-image: url(/images/gradient-vierkant-min.webp);
    background-size: cover;
    background-repeat: no-repeat;
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    height: 90vh;
    z-index: -1;

    padding-bottom: 10%;
} */

#app {
    overflow-x: hidden;
}

@media(max-width: 767px) {
    .numbers__wrapper{
        padding-block: 40px;
    }
}

.hero__background-fade {
    position: absolute; /* of absolute als fixed problemen geeft */
    top: 0;
    left: 0;
    width: 100%;
    height: 85vh;
    background-image: url('/images/gradient-vierkant-min.webp');
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

@media(max-width: 767px) {
    .hero__background-fade {
        background-image: url('/images/gradient-vierkant-mobile-min.webp');
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

@media(max-width: 767px) {
    .tabbed-content {
        padding-block: 100px;
    }
    .numbers{
        padding-top: 0;
    }
    .client-reference{
        padding-block: 100px;
    }
    .hero__slider{
        padding-block: 0;
        padding-bottom: 100px;
    }
    .contact__wrapper{
        padding-block: 0;
        padding-bottom: 100px;
    }
}
</style>
