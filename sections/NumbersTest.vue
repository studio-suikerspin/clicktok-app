<script setup lang="ts">
import TypeRevealTitle from '@/components/TypeRevealTitle.vue'
import Button from '@/components//ui/Button.vue'
import BlurGlow from '@/components/blur/Blurglow.vue'

import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const numbersSectionRef = ref<HTMLElement | null>(null)
const hasAnimatedInitial = ref(false)

const animateNumbers = () => {
    const numberElements = document.querySelectorAll('.numbers__result_number')

    numberElements.forEach((element, index) => {
        const targetValue = parseFloat(element.textContent || '0')

        gsap.fromTo(element, {
            textContent: 0,
        }, {
            textContent: targetValue,
            duration: 2,
            stagger: index * 0.1,
            ease: "power1.in",
            snap: { textContent: 1 },
            onUpdate: function () {
                element.textContent = numberWithCommas(Math.ceil(this.targets()[0].textContent));
            },
            scrollTrigger: numbersSectionRef.value,
        });
    })
}

function numberWithCommas(x) {
    if (x === Math.floor(x)) {
        return x.toLocaleString('en-US')
    }

    return x.toLocaleString('en-US', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    })
}

onMounted(async () => {
    gsap.ticker.fps(30)

    await nextTick()

    animateNumbers()
})
</script>


<template>
    <section class="numbers__speak" ref="numbersSectionRef">
        <div class="container">
            <div class="numbers__speak-inner">
                <div class="numbers__speak-title">
                    <TypeRevealTitle>Let the numbers speak for themselves</TypeRevealTitle>
                </div>
                <div class="numbers__speak-results">
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">Views</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number">67400000</span>
                                +
                            </div>
                            <div class="numbers__result_text">Totaal bereik</div>
                        </div>
                    </div>
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">Creators</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number">77</span>
                                +
                            </div>
                            <div class="numbers__result_text">Aantal creators</div>
                        </div>
                    </div>
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">Campagnes</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number">43</span>
                                +
                            </div>
                            <div class="numbers__result_text">Aantal campagnes</div>
                        </div>
                    </div>
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">Klantenscore</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number">9.5</span>
                                +
                            </div>
                            <div class="numbers__result_text">Klantenscore</div>
                        </div>
                    </div>
                </div>
                <div class="numbers__speak-cta">
                    <Button variant="outline" href="/contact" class="numbers__speak-cta-button">Let's get
                        started!</Button>
                </div>

                <BlurGlow top="" left="10px" :width="'400px'" :height="'55%'" :mobileNoBlur="false"
                    :mobileNoBlurWidth="'400px'" :mobileNoBlurHeight="'50%'" />

                <BlurGlow top="" right="10px" :width="'400px'" :height="'55%'" :mobileNoBlur="true"
                    :mobileNoBlurWidth="'200px'" :mobileNoBlurHeight="'200px'" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.numbers__speak {
    overflow-x: hidden;
}

.numbers__speak-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    position: relative;
    z-index: 2;
}

.numbers__speak-title {
    max-width: 800px;
}

.numbers__speak-results-item {
    width: 100%;
    gap: 40px;
}

.numbers__speak-results {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
}

.numbers__speak-blur-glow-right {
    display: none;
}

@media(min-width: 992px) {
    .numbers__speak-results {
        gap: 24px;
        flex-direction: row;
    }
}

/* Numbers */
.numbers__result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--off-white);
    z-index: 2;
}

.numbers__speak-results {
    font-size: 18px;
    font-weight: 600;
}

.numbers__result_title {
    font-size: 18px;
}

.numbers__result_number-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 24px;
}

.numbers__result_number {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Syne', sans-serif;
    will-change: contents;
}

.numbers__result_number-wrapper span {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Syne', sans-serif;
}

.numbers__result_text {
    font-size: 18px;
    font-weight: 600;
    color: var(--off-white_50);
}

@media(min-width: 992px) {
    .numbers__result {
        padding: 70px 0;
        gap: 16px;
    }

    .numbers__result_title {
        font-size: 28px;
    }

    .numbers__result_number,
    .numbers__result_number-wrapper span {
        font-size: 48px;
    }

    .numbers__result_number-wrapper,
    .numbers__result_number-wrapper span {
        font-size: 48px;
    }
}
</style>
