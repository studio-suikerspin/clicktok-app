<script setup>
// Layout
import BaseLayout from '@/layouts/BaseLayout.vue'

// Sections
import Header from '~/sections/Header/MainHeader.vue';
import Hero from '@/sections/MainHero.vue';
import Cases from '@/sections/Cases.vue';
import StayAhead from '@/sections/StayAhead/StayAhead.vue'
import Marquee from '~/sections/General/MainMarquee.vue';
import Services from '~/sections/HomeServices.vue';
import Reviews from '~/sections/HomeReviews.vue';
import AboutCarousel from '@/sections/About/AboutCarousel.vue'
import Contact from '@/sections/Contact/Contact.vue';
import Footer from '@/sections/General/Footer.vue';
import LetTheNumbersSpeak from '@/sections/Section-numbers/LetTheNumbersSpeak.vue';

// Components
import TypeRevealTitle from '@/components/TypeRevealTitle.vue';
import RevealingTypes from '@/sections/RevealingTypes.vue';
import LogoSlider from '@/sections/General/LogoSlider.vue';
import IntroAnimation from '@/components/IntroAnimation.vue';
import BlurGlow from '@/components/blur/Blurglow.vue'


</script>

<template>
    <BaseLayout>
        <Head>
            <title>ClickTok - Full Service TikTok Agency | Van Merkwaarden naar Virale Content</title>
            <meta name="description" content="ClickTok helpt merken groeien op TikTok met virale short-form content die past bij je merkwaarden. Van organic campaigns tot UGC creatie - alles onder één dak.">
            <meta name="keywords" content="TikTok marketing, virale content, short-form video, TikTok agency Nederland, social media marketing, UGC creatie, organic campaigns, merkstrategie TikTok">
        </Head>

        <IntroAnimation />
        <Header />
        <Hero />
        <div class="logo-slider-mobile padding-top">
            <TypeRevealTitle>Trusted by</TypeRevealTitle>
            <LogoSlider />
        </div>

        <section class="padding-top">
            <div class="container relative-container">
                <BlurGlow
top="0" left="10px" :width="'400px'" :height="'280px'" :mobile-no-blur="true"
            :mobile-no-blur-width="'400px'" :mobile-no-blur-height="'50%'" />
                <TypeRevealTitle>
                    We help brands stay ahead through <br>viral short-form content
                </TypeRevealTitle>
                <BlurGlow
top="0" right="10px" :width="'400px'" :height="'280px'" :mobile-no-blur="true"
            :mobile-no-blur-width="'400px'" :mobile-no-blur-height="'50%'" />
            </div>
        </section>

        <div class="section-padding">
            <Cases :show-first-two="true" :show-last-two="false" /> 
        </div>

        <!-- <LetTheNumbersSpeak /> -->

        <RevealingTypes :section-padding="false" />

        <StayAhead  :lazy-loading="true" />

        <div class="padding-top">
            <LetTheNumbersSpeak />
        </div>

        <Marquee />
        <Services />
        <div class="padding-top">
            <Cases :show-first-two="false" :show-last-two="true" /> 
        </div>
        <Reviews />
        <AboutCarousel />

        <Contact />

        <Footer />
    </BaseLayout>
</template>

<style>
.logo-slider-mobile{
    display: none;
}

.relative-container{
    position: relative;
}

@media(max-width: 992px){
    .logo-slider-mobile{
        display: block;
    }
}
</style>

