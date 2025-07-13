<script setup>
    import SectionTitle from '@/components/SectionTitle.vue';
    import Button from '@/components/ui/Button.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/autoplay';

    const props = defineProps({
        title: {
            type: String,
            default: "(Y)our way to stay ahead"
        },
        subtitle: {
            type: String,
            default: "How we turned brand values into a viral format for Nubikk."
        },
        brandValue: {
            type: String,
            default: "Brand value"
        },
        mainTitle: {
            type: String,
            default: "Surprise with ease"
        },
        bottomTitle: {
            type: String,
            default: "Hieromheen is het format gebouwd"
        },
        description: {
            type: String,
            default: "Je merkwaarden zijn geen bijzaak – ze vormen de basis van wat je doet, wat je uitstraalt en hoe mensen je onthouden. Bij grote campagnes op andere platformen snapt iedereen dat. Maar op TikTok lijken merken het te vergeten. Ze jagen op trends en views, zonder te bouwen aan herkenning of gevoel. Wij doen het anders. Ook op TikTok beginnen we bij je merkwaarden. We bouwen formats die kloppen met wie je bent én hoe het platform beweegt – vanuit cultuur, context en creativiteit. Zo maak je content die scoort én versterkt wie je bent. Herkenbaar. Shareable. On-brand."
        },
        buttonText: {
            type: String,
            default: "Let's get started"
        },
        buttonHref: {
            type: String,
            default: "/contact"
        },
        videoSrc: {
            type: String,
            default: "https://r2.suikerspin.studio/BANNER_NUBIKK_V6.webm"
        },
        associaties: {
            type: Array,
            default: () => [
                { src: "/images/nubikk/nubikkassociatie.jpg", alt: "Nubikk associaties" },
                { src: "/images/nubikk/nubikkassociatie2.jpg", alt: "Nubikk associaties" },
                { src: "/images/nubikk/nubikkassociatie3.jpg", alt: "Nubikk associaties" },
                { src: "/images/nubikk/nubikkassociatie4.jpg", alt: "Nubikk associaties" },
            ]
        },
        swiperConfig: {
            type: Object,
            default: () => ({
                slidesPerView: 4,
                spaceBetween: 24,
                speed: 7000,
                autoplayDelay: 0
            })
        }
    });
</script>

<template>
    <section class="stay__ahead">
        <div class="container">
            <div class="stay__ahead-inner">
                <SectionTitle :title="title" :subtitle="subtitle" />
                <div class="stay__ahead__block border-radius">
                    <div class="stay__ahead__content">
                        <div class="stay__ahead__content_text">
                            <div class="stay__ahead__content_text_top">
                                <div class="top__title">{{ brandValue }}</div>
                                <div class="main__title montserrat-title">{{ mainTitle }}</div>
                                <div class="bottom__title">{{ bottomTitle }}</div>
                            </div>
                            <div class="stay__ahead__content_text_middle">
                                <div class="general__text">{{ description }}</div>
                            </div>
                            <div class="stay__ahead__content_text_bottom">
                                <Button :href="buttonHref" :title="buttonText" variant="white">{{ buttonText }}</Button>
                            </div>
                        </div>
                        <div class="stay__ahead__content_video">
                            <video :src="videoSrc" autoplay muted loop playsinline webkit-playsinline class="border-radius"/>
                        </div>
                    </div>
                    <div class="stay__ahead__associaties-wrapper border-radius">
                        <div class="stay__ahead__associaties-wrapper-title">
                            <div class="title">Associaties</div>
                            <div class="text">
                                Content met de juiste associaties doet meer dan opvallen; het bouwt herkenning, vertrouwen en voorkeur op.
                            </div>
                        </div>
                        <div class="stay__ahead__associaties">
                            <div v-for="(associatie, index) in associaties" :key="`duplicate-${index}`" class="stay__ahead__associaties_inner_item">
                                <img :src="associatie.src" :alt="associatie.alt" >
                            </div>
                        </div>
                    </div>
                    
                </div>
                <!-- <div class="stay__ahead__associaties-wrapper border-radius">
                    <div class="stay__ahead__associaties-wrapper-title">
                        <div class="title">Associaties</div>
                        <div class="text">
                            Content met de juiste associaties doet meer dan opvallen; het bouwt herkenning, vertrouwen en voorkeur op.
                        </div>
                    </div>
                    <div class="stay__ahead__associaties">
                        <div v-for="(associatie, index) in associaties" :key="`duplicate-${index}`" class="stay__ahead__associaties_inner_item">
                            <img :src="associatie.src" :alt="associatie.alt" />
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<style scoped>
.stay__ahead-inner{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
}

@media(max-width: 992px){
    .stay__ahead-inner{
        gap: 40px;
    }
}

.stay__ahead__block{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1250px;
    padding: 40px;
    background-image: url('/images/gradient-ruis-vierkant-min.webp');
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
}

@media(max-width: 1500px){
    .stay__ahead__block{
        max-width: 100%;
        width: 100%;
    }
}

@media(max-width: 992px){
    .stay__ahead__block{
        padding: 0;
        max-width: 100%;
    }
}

@media(max-width: 767px){
    .stay__ahead__block{
        background-image: url('/images/gradient-mobile-noise.webp');
    }
}

.stay__ahead__content{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    gap: 80px;
    width: 100%;
}

@media(max-width: 992px){
    .stay__ahead__content{
        flex-direction: column;
        gap: 40px;
        padding: 24px;
    }
}

.stay__ahead__content_text{
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    flex: 3;
}

@media(max-width: 992px){
    .stay__ahead__content_text{
        flex: 1;
    }
}

.stay__ahead__content_text_top{
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.top__title{
    font-size: 24px;
    font-weight: 600;
    color: var(--off-white_50);
    line-height: 100%;
}

.main__title{
    font-size: 44px;
    font-weight: 700;
    color: var(--off-white);
    line-height: 100%;
}

.bottom__title{
    font-size: 18px;
    font-weight: 500;
    color: var(--accent-pink);
    line-height: 100%;
}

@media(max-width: 992px){
    .top__title{
        font-size: 18px;
    }
    .main__title{
        font-size: 24px;
    }
    .bottom__title{
        font-size: 16px;
    }
}

.stay__ahead__content_text_middle .general__text{
    font-size: 16px;
    font-weight: 400;
    color: var(--off-white);
    line-height: 130%;
    max-width: 500px;
}

.stay__ahead__content_text_bottom a{
    width: fit-content;
}

@media(max-width: 992px){
    .stay__ahead__content_text_bottom a{
        width: 100%;
    }
}

/* Video styling */
.stay__ahead__content_video{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    
    max-height: 600px;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 9/16;
}

.stay__ahead__content_video video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Associaties styling */
.stay__ahead__associaties-wrapper{
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1080px;
    width: 100%;
    padding: 0 40px;
    /* background-image: url('/images/gradient-ruis-vierkant-min.webp');
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    padding: 24px 80px; */

}

.stay__ahead__associaties-wrapper-title{
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--off-white);
}

.stay__ahead__associaties-wrapper-title .title{
    font-size: 44px;
    font-weight: 700;
    color: var(--off-white);
    line-height: 100%;
    font-style: italic;
}

.stay__ahead__associaties-wrapper-title .text{
    font-size: 16px;
    font-weight: 400;
    color: var(--off-white);
    line-height: 130%;
}



.stay__ahead__associaties{
    width: 100%;
    display: flex;
    gap: 24px;
}

.associaties-swiper {
    width: 100%;
}

.stay__ahead__associaties_inner_item{
    width: 100%;
    height: 100%;
}

.stay__ahead__associaties_inner_item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media(max-width: 992px){
    .stay__ahead__associaties{
        padding: 24px;
        padding-top: 0;
    }
}

@media(max-width: 767px){
    .stay__ahead__associaties{
        flex-direction: column;
    }
    .stay__ahead__associaties_inner_item:nth-child(3),
    .stay__ahead__associaties_inner_item:nth-child(4){
        display: none;
    }
}
</style>