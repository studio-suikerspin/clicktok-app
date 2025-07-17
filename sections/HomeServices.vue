<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { nextTick, ref, watch } from 'vue'

const selectedService = ref(0)

const services = [
    {
        number: '01',
        title: 'Organic Campaign',
        description:
            'Met een organic campaign bouwen we aan duurzame zichtbaarheid zonder advertentiebudget.<br><br> We ontwikkelen <span>formats vanuit jouw merkwaarden</span>, om zo een <span>herkenbaar merkgevoel</span> over te brengen dat blijft hangen én tot actie aanzet. In dit proces doen we alles: van <span>concepting</span> en <span>scripting</span> tot <span>shoot, edit</span> en <span>analyse</span>.<br><br> Daarnaast zetten we TikTok’s zoekmachine slim in, niet alleen om je merk vindbaar te maken, maar juist om gebruikers in de overwegingsfase te overtuigen.<br><br> Het doel? Content maken die de juiste associaties oproept en daarmee herkenning en <span>merkvoorkeur</span> opbouwt bij je doelgroep.<br><br> Deze campagnes zijn vaak langlopend en consistent, zodat je merk <span>top-of-mind</span> blijft.',
        video: 'https://r2.suikerspin.studio/BANNER_ORGANIC_V1.mp4',
        poster: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/92dbbd28-1e3b-420e-7cc4-881437257400/public',
    },
    {
        number: '02',
        title: 'Paid Advertising',
        description:
            'Met paid advertising zetten we TikTok in als <span>performance</span> kanaal – slim, schaalbaar en gericht op resultaat.<br><br> Van <span>conversiecampagnes</span> voor e-com merken tot leadgen voor personeelswerving: wij zetten je doel om in een strategie die scoort.<br><br> We denken mee in <span>targeting</span>, <span>funnelopbouw</span> en <span>boodschap</span>, en <span>runnen</span> de campagnes van opzet tot <span>optimalisatie</span>.<br><br> De creatives? Die maken we samen met ons inhouse productieteam én een groot netwerk van UGC creators.',
        video: 'https://r2.suikerspin.studio/keukensale.mp4',
        poster: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/92dbbd28-1e3b-420e-7cc4-881437257400/public',
    },
    {
        number: '03',
        title: '(UGC) Ad Creatie',
        description:
            'Met UGC ad creatives én native brand creatives maken we advertenties die aanvoelen als TikToks - maar gebouwd zijn voor conversie. UGC is geen hype, het werkt. Campagnes met user-generated content leveren gemiddeld tot 29% hogere conversie op. Daarnaast ontwikkelen we ook in-house brand creatives die je merkverhaal vertalen naar performancegerichte content, altijd afgestemd op het platform en je doelgroep. We bouwen op jouw merkwaarden en combineren die met bewezen, conversiegerichte elementen die presteren. Daarbij nemen we het volledige proces uit handen: van conceptontwikkeling en scripting tot creator matching, briefing, editing en oplevering. Dit doen we voor e-com merken, apps en organisaties die leads willen genereren.',
        video: 'https://r2.suikerspin.studio/keukensale.mp4',
        poster: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/92dbbd28-1e3b-420e-7cc4-881437257400/public',
    },
    {
        number: '04',
        title: 'Creator Collaborations',
        description:
            'Met creator collaborations koppelen we jouw merk aan geloofwaardige creators, die <span>culture-fit</span> zijn en jouw merk het gesprek van de dag maken op TikTok.<br><br> Niet zomaar samenwerkingen, maar culture-first content die bouwt aan <span>merkvoorkeur</span> én <span>beweging creëert</span>.<br><br> We <span>selecteren creators</span> op basis van content stijl, merk fit en performance, en begeleiden het volledige traject: van <span>conceptontwikkeling</span> en <span>briefing</span> tot editing en publicatie.<br><br> En dat werkt: 82% van de consumenten vertrouwt aanbevelingen van micro-influencers meer dan die van celebrities.<br><br> Het mooie van deze campagnes is dat je ze op grote schaal kunt inzetten — en toch blijft elke samenwerking voelen als een persoonlijke, <span>geloofwaardige merkuiting</span>.',
        // video: 'https://r2.suikerspin.studio/BANNER_NUBIKK_V1.webm',
    },
]

watch(selectedService, async () => {
    await nextTick()
    const videos = document.querySelectorAll('video')
    videos.forEach((v) => {
        v.pause()
        v.currentTime = 0
        v.load()
    })
})
</script>

<template>
    <div class="services">
        <div class="container">
            <div class="services__container">
                <div class="services__wrapper">
                    <SectionTitle title="Services" link="/services" link-title="Lees meer" />
                    <div class="services__inner">
                        <div class="services__left border-radius">
                            <div class="services__left-items">
                                <div
                                    v-for="(service, index) in services"
                                    :key="service.number"
                                    class="services__left-item"
                                    @click="selectedService = index"
                                >
                                    <div class="services__left-item-title">
                                        <div class="services__left-item-title-inner">
                                            <div class="number">{{ service.number }}</div>
                                            <div class="title">
                                                {{ service.title }}
                                            </div>
                                        </div>
                                        <div class="services__left-item-icon">
                                            <i class="bx bx-chevron-down" :class="{ rotate: selectedService === index }"/>
                                        </div>
                                    </div>
                                    <div class="services__left-item-content" :class="{ hidden: selectedService !== index }">
                                        <div class="services__left-item-content-text" v-html="service.description"/>
                                        <div class="services__left-item-content-link">
                                            <a href="/services">
                                                Meer informatie
                                                <i class="bx bx-arrow-back icon"/>
                                            </a>
                                        </div>
                                        <div class="services__left-item_mobile-video">
                                            <div v-if="services[selectedService].video" class="services__video_wrapper">
                                                <video
                                                :key="services[selectedService].video"
                                                :src="services[selectedService].video"
                                                preload="metadata"
                                                autoplay
                                                playsinline
                                                muted
                                                loop
                                                class="border-radius desktop-video"
                                                :poster="services[selectedService].poster"
                                                />
                                                <video
                                                :key="services[selectedService].video + '-mobile'"
                                                :src="services[selectedService].video"
                                                preload="metadata"
                                                controls="true"
                                                playsinline
                                                muted
                                                class="border-radius mobile-video"
                                                :poster="services[selectedService].poster"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="services__right border-radius">
                            <div v-if="services[selectedService].video" class="services__video_wrapper">
                                <video
                                    :key="services[selectedService].video + '-side'"
                                    :src="services[selectedService].video"
                                    preload="metadata"
                                    playsinline
                                    muted
                                    loop
                                    controls="true"
                                    webkit-playsinline
                                    class="border-radius"
                                    :poster="services[selectedService].poster"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.services__container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.services__wrapper {
    display: flex;
    flex-direction: column;
    gap: 80px;
    max-width: 1220px;
}

@media (max-width: 1024px) {
    .services__wrapper {
        gap: 40px;
    }
}

.services__inner {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    color: var(--color-white);
    gap: 12px;
    height: auto;
}

@media (max-width: 1024px) {
    .services__inner {
        flex-direction: column;
    }
}

@media (max-width: 992px) {
    .services__inner {
        max-height: 100%;
    }
}

.services__left {
    flex: 2;
    position: relative;
    background-image: url('/images/gradient-ruis-vierkant-min.webp');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 80px;
}

@media (max-width: 1024px) {
    .services__left {
        padding: 24px;
    }
}

.services__left-items {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.services__left-item {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--accent-dark-purple);
}

.services__left-item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-style: italic;
    cursor: pointer;
    transition: all 0.3s ease;
}

.services__left-item-title-inner{
    display: flex;
    align-items: center;
    gap: 24px;
}

.services__left-item-title .number {
    font-size: 24px;
    font-weight: 400;
    color: var(--accent-pink);
}

.services__left-item-title .title {
    font-size: 32px;
    font-weight: 600;
}

@media (max-width: 767px) {
    .services__left-item {
        padding-bottom: 24px;
    }
    .services__left-item-title .title {
        font-size: 20px;
    }
    .services__left-item-title .number {
        font-size: 14px;
    }
    .services__left-item-title .icon {
        font-size: 14px;
    }
}

.services__left-item-icon i {
    font-size: 32px;
    transition: transform 0.3s ease;
}

.services__left-item-icon i.rotate {
    transform: rotate(180deg);
}

.services__left-item-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    transition: all 0.3s ease;
}

.services__left-item-content.hidden {
    display: none;
}

.services__left-item-content-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
}

.services__left-item-content-text span{
    font-weight: 600;
}

.services__left-item-content-link {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--accent-pink);
    width: fit-content;
}

.services__left-item-content-link a {
    display: flex;
    align-items: center;
    gap: 16px;
}

.services__left-item-content-link .icon {
    transform: rotate(135deg);
}

.services__left-item_mobile-video{
    display: none;
}

.services__right {
    flex: 1;
    position: sticky;
    top: 20px;
    max-height: 600px;
}

.services__video_wrapper{
    display: flex;
    align-items: center;
    justify-content: center;

    max-height: 600px;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 9/16;
}

.services__right video ,
.services__left-item_mobile-video video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.mobile-video{
    display: none;
}

@media(max-width: 992px){
    .services__left-item_mobile-video{
        display: block;
    }
    .services__right {
        display: none;
    }
}

@media(max-width: 767px){
    .services__right video {
        max-height: 700px;
    }
    .services__right {
        max-height: unset;
        width: 100%;
    }
    .mobile-video{
        display: block;
    }
    .desktop-video{
        display: none;
    }
}
</style>