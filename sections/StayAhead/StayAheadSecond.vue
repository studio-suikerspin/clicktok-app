<script setup>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'

import GradientBlur from '@/components/GradientBlur.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import Button from '@/components/ui/Button.vue'

const videoRefs = ref([])
let videoObserver = null

const setupVideoObserver = () => {
    videoObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target
                if (entry.isIntersecting) {
                    video.play().catch(console.warn)
                } else {
                    video.pause()
                }
            })
        },
        { threshold: 0.3 },
    )
}

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
    variant: {
        type: String,
        required: false,
    },
    animateOnScroll: {
        type: Boolean,
        required: false,
    },
    lazyLoading: {
        type: Boolean,
        default: false,
        required: false,
    },
    showVideoControls: {
        type: Boolean,
        default: false,
        required: false
    },
    isSwiper: {
        type: Boolean,
        default: false,
        required: false,
    },
    slides: {
        type: Array,
        required: false,
        default: () => [
            {
                videoId: '7457929797402922262',
                video: '/videos-nubikk/BANNER_NUBIKK_V1.webm',
                blocks: [
                    {
                        title: 'Brand value',
                        subtitle: 'Surprise with ease',
                        secondTitle: 'Vanuit deze waarde ontwikkelden we een format dat moeiteloos verrast en een warm gevoel achterlaat.',
                        content:
                            'Je merkwaarden zijn geen bijzaak – ze vormen de basis van hoe je klinkt, wat je uitstraalt en hoe mensen je onthouden. <br><br>Bij grote campagnes snapt iedereen dat.<br> Maar op TikTok lijken merken het te vergeten. Ze jagen op trends en views, zonder te bouwen aan herkenning of gevoel. - Wij doen het anders.<br><br>Ook op TikTok beginnen we bij je merkwaarden.<br> We bouwen formats die kloppen met wie je bent én hoe het platform beweegt – vanuit cultuur, context en creativiteit.<br>Zo maak je content die scoort én versterkt wie je bent. Herkenbaar. Deelbaar. On-brand.',
                    },
                    {
                        title: 'Associaties',
                        content:
                            'Associaties zijn de gevoelens en overtuigingen die mensen onbewust koppelen aan je merk. <br><br> Als je content de juiste associaties oproept, gebeurt er iets groters dan alleen views: je bouwt herkenning, vertrouwen en merkvoorkeur op.<br> En dat levert meer op dan aandacht. Het zorgt voor sterkere klantloyaliteit en op de lange termijn: meer marktaandeel. <br>Daarom bouwen wij formats die daar bewust op sturen. Zodat mensen niet alleen kijken, maar iets voelen. En het automatisch aan jouw merk koppelen.',
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
        ],
    },
})

onMounted(async () => {
    await nextTick()

    setupVideoObserver()

    videoRefs.value.forEach((video) => {
        if (video && videoObserver) {
            videoObserver.observe(video)
        }
    })
})

onUnmounted(() => {
    if (videoObserver) {
        videoObserver.disconnect()
    }
})
</script>

<template>
    <div :class="['stay__ahead', variant ? `stay__ahead--${variant}` : '']">
        <div class="gradient-blur-wrapper container">
            <GradientBlur
                :width="{ default: '40vw', sm: '50vw' }"
                :height="{ default: '40vh', sm: '40vh' }"
                :left="{ default: '2%', sm: '40%' }"
                :top="{ default: '40%', sm: '0' }"
            />
            <GradientBlur
                :width="{ default: '40vw', sm: '50vw' }"
                :height="{ default: '40vh', sm: '40vh' }"
                :right="{ default: '2%', sm: '40%' }"
                :bottom="{ default: '-20%', sm: '0' }"
            />

            <div class="stay__ahead_inner">
                <div class="stay__ahead_header">
                    <SectionTitle :title="title" :subtitle="subtitle" :animateOnScroll="props.animateOnScroll" />
                </div>

                <div class="stay__ahead_blocks_inner" v-for="(item, index) in props.slides" :key="index">
                    <div class="stay__ahead_block border-radius">
                        <img src="/images/gradient-vierkant-mobile-min.webp" :loading="props.lazyLoading ? 'lazy' : ''" />
                        <div class="title title-font">{{ item.blocks[0].title }}</div>
                        <div class="text__content">
                            <div class="title-wrap">
                                <div class="title-blue">{{ item.blocks[0].subtitle }}</div>
                                <div class="subtitle">{{ item.blocks[0].secondTitle }}</div>
                            </div>
                            <div class="general-content" v-html="item.blocks[0].content"></div>
                            <Button variant="blue" href="/contact" class="blue-btn">Let's get started!</Button>
                        </div>
                    </div>

                    <div class="stay__ahead_video border-radius">
                        <video
                            class="stay__ahead_video_inner border-radius"
                            :ref="
                                (el) => {
                                    if (el) videoRefs.push(el)
                                }
                            "
                            preload="metadata"
                            muted
                            playsinline
                            loop
                            :controls="props.showVideoControls"
                            webkit-playsinline
                            style="pointer-events: none;"
                        >
                            <source
                                :src="item.video"
                                type="video/webm"
                                width="100%"
                                height="978"
                                :loading="props.lazyLoading ? 'lazy' : ''"
                            />
                        </video>
                    </div>

                    <div class="stay__ahead_block second border-radius">
                        <img src="/images/gradient-vierkant-mobile-min.webp" :loading="props.lazyLoading ? 'lazy' : ''" />
                        <div class="title title-font">{{ item.blocks[1].title }}</div>
                        <div class="general-content" v-html="item.blocks[1].content"></div>
                        <div class="stay__ahead_reviews">
                            <ReviewCard v-for="review in item.blocks[1].reviews" :key="review.name" :review="review" />
                        </div>
                    </div>
                    </div>

                <!-- <Swiper
                    :slides-per-view="1"
                    :space-between="40"
                    :modules="[Navigation]"
                    :navigation="{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        disabledClass: 'swiper-button-disabled',
                    }"
                    class="stay__ahead_blocks"
                >
                
                    <SwiperSlide v-for="(item, index) in props.slides" :key="index" >
                        <div class="stay__ahead_blocks_inner">
                            <div class="stay__ahead_block border-radius">
                                <img src="/images/gradient-vierkant-mobile-min.webp" :loading="props.lazyLoading ? 'lazy' : ''" />
                                <div class="title title-font">{{ item.blocks[0].title }}</div>
                                <div class="text__content">
                                    <div class="title-wrap">
                                        <div class="title-blue">{{ item.blocks[0].subtitle }}</div>
                                        <div class="subtitle">{{ item.blocks[0].secondTitle }}</div>
                                    </div>
                                    <div class="general-content" v-html="item.blocks[0].content"></div>
                                    <Button variant="blue" href="/contact" class="blue-btn">Let's get started!</Button>
                                </div>
                            </div>

                            <div class="stay__ahead_video border-radius">
                                <video
                                    class="stay__ahead_video_inner border-radius"
                                    :ref="
                                        (el) => {
                                            if (el) videoRefs.push(el)
                                        }
                                    "
                                    preload="metadata"
                                    muted
                                    playsinline
                                    loop
                                    :controls="props.showVideoControls"
                                    webkit-playsinline
                                    style="pointer-events: none;"
                                >
                                    <source
                                        :src="item.video"
                                        type="video/webm"
                                        width="100%"
                                        height="978"
                                        :loading="props.lazyLoading ? 'lazy' : ''"
                                    />
                                </video>
                            </div>

                            <div class="stay__ahead_block second border-radius">
                                <img src="/images/gradient-vierkant-mobile-min.webp" :loading="props.lazyLoading ? 'lazy' : ''" />
                                <div class="title title-font">{{ item.blocks[1].title }}</div>
                                <div class="general-content" v-html="item.blocks[1].content"></div>
                                <div class="stay__ahead_reviews">
                                    <ReviewCard v-for="review in item.blocks[1].reviews" :key="review.name" :review="review" />
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                </Swiper> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.stay__ahead--center-title .stay__ahead_header {
    text-align: center;
    justify-content: center;
}

.stay__ahead_header {
    display: flex;
    align-items: end;
    justify-content: space-between;
}

.swiper-navigation {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between;
}

.swiper-navigation .swiper-button-prev,
.swiper-navigation .swiper-button-next {
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
.swiper-navigation .swiper-button-next svg {
    fill: var(--off-white);
    width: 42px;
    height: 42px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
    display: none;
}

@media (max-width: 767px) {
    .swiper-navigation {
        gap: 16px;
    }
    .swiper-navigation .swiper-button-prev,
    .swiper-navigation .swiper-button-next {
        width: 40px;
        height: 40px;
    }
    .swiper-navigation .swiper-button-prev svg,
    .swiper-navigation .swiper-button-next svg {
        width: 32px;
        height: 32px;
    }
    .stay__ahead_header {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
}

.stay__ahead_inner {
    display: flex;
    flex-direction: column;
    gap: 80px;
    position: relative;
}

@media (max-width: 767px) {
    .stay__ahead_inner {
        gap: 40px;
        width: 100%;
    }
}

.stay__ahead_blocks {
    display: flex;
    align-items: stretch;
    gap: 40px;
    width: 100%;
}

.stay__ahead_block {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 80px 24px;
    position: relative;
    overflow: hidden;
}

.stay__ahead_blocks_inner {
    display: flex;
    align-items: stretch;
    gap: 40px;
    height: auto;
}

@media (max-width: 1100px) {
    .stay__ahead_blocks_inner {
        flex-direction: column;
    }
    .stay__ahead_block {
        width: 100%;
        padding: 32px 18px;
    }
}

@media (max-width: 767px) {
    .stay__ahead_blocks_inner {
        gap: 24px;
    }
}

.stay__ahead_block img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.stay__ahead_block .title {
    font-size: 40px;
    width: 100%;
    text-align: center;
    color: var(--off-white);
}

.stay__ahead_block .text__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.stay__ahead_block .text__content .title-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--off-white);
}

.stay__ahead_block .title-blue {
    font-size: 44px;
    color: var(--accent-blue);
    font-weight: 700;
    font-style: italic;
    line-height: 100%;
}

.stay__ahead_block .subtitle {
    font-size: 22px;
    font-weight: 600;
    font-style: italic;
    line-height: 100%;
}

.stay__ahead_block .general-content {
    font-size: 16px;
    color: var(--off-white);
    line-height: 20px;
}

@media (max-width: 767px) {
    .stay__ahead_block .text__content {
        gap: 24px;
    }
    .stay__ahead_block .title-blue {
        font-size: 32px;
    }
    .stay__ahead_block .subtitle {
        font-size: 18px;
    }
}

.stay__ahead_video {
    flex: 1;
    position: sticky;
    top: 20px;
    overflow: hidden;
    aspect-ratio: 9 / 16;
    max-height: 650px;
}

.stay__ahead_video_inner {
    /* width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
    transform: translateZ(0);
    aspect-ratio: 9 / 16; */

    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media(max-width: 767px){
    .stay__ahead_video_inner {
        max-height: 600px;
    }
}
@media (max-width: 992px) {
    .stay__ahead_video {
        width: 100%;
        aspect-ratio: 13 / 16;
        position: relative;
        top: 0;
    }
}

.stay__ahead_reviews {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.stay__ahead_reviews .review-card:first-child {
    transform: rotate(-4deg);
}

.stay__ahead_reviews .review-card:last-child {
    transform: rotate(6deg);
}

.stay__ahead_reviews .review-card {
    min-width: unset;
    width: 100%;
}
</style>