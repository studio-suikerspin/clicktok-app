<script setup>
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { nextTick, onMounted, ref } from 'vue'

const intro = ref()
const introText = ref()

onMounted(async () => {
    await nextTick()

    // const splitType = SplitText.create(introText.value, { type: 'lines, words, chars' })
    const splitType = SplitText.create(introText.value, { type: 'lines, words, chars', linesClass: 'intro-line' })

    gsap.timeline({ paused: true })
        .fromTo(splitType.lines, {
            autoAlpha: 0,
            y: 40
        }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.1,
            stagger: 0.1,
            delay: 0.5
        })
        .fromTo(splitType.chars, {
            autoAlpha: 0.3,
        }, {
            autoAlpha: 1,
            stagger: 0.1,
            duration: 0.3,
            ease: 'expo.inOut',
            delay: 0.5
        })
        .to(intro.value, {
            autoAlpha: 0,
            duration: 0.2,
            delay: 0.5
        }).set(intro.value, {
            display: 'none'
        })

        .play()
})
</script>

<template>
    <div class="intro" ref="intro">
        <div class="container">
            <div class="intro__text title-font" ref="introText">
                <div class="intro__text-line-first">Full service</div>
                <div class="intro__text-line-second">TikTok Agency</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    width: 100%;
    height: 100%;

    background: black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
}

.intro__text {
    position: relative;
    color: var(--off-white);
    font-size: 24px;

    overflow: visible;
    width: 100%;

    text-wrap: balance;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 40px;
}

.intro__text-line-first {
    font-size: 40px;
    font-family: 'Syne', sans-serif;
    font-style: normal;
    white-space: nowrap;
}

.intro__text-line-second {
    font-size: 150px;
    max-width: 800px;
    letter-spacing: -3px;
    line-height: 90px;
    font-weight: 900;
}

@media screen and (max-width: 767px) {
    .intro__text-line-first {
        font-size: 24px;
    }

    .intro__text-line-second {
        font-size: 80px;
        max-width: 100%;
        line-height: 35px;
    }
}
</style>
