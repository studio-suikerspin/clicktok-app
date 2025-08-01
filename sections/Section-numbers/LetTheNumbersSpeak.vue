<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import BlurGlow from '@/components/blur/Blurglow.vue'
import ButtonAnimated from '@/components/ui/ButtonAnimated.vue'

import { ref, onMounted, nextTick } from 'vue'

const { gsap } = useGsap()

defineProps({
    title: {
        type: String,
        required: false,
        default: 'The numbers speak for themselves',
    },
    firstNumber: {
        type: Number,
        required: false,
        default: 77,
    },
    firstNumberText: {
        type: String,
        required: false,
        default: 'Creators',
    },
    firstNumberSubtitle: {
        type: String,
        required: false,
        default: 'Aantal creators',
    },
    secondNumber: {
        type: Number,
        required: false,
        default: 88200000,
    },
    secondNumberText: {
        type: String,
        required: false,
        default: 'Views',
    },
    secondNumberSubtitle: {
        type: String,
        required: false,
        default: 'Totaal bereik',
    },
    thirdNumber: {
        type: Number,
        required: false,
        default: 23,
    },
    thirdNumberText: {
        type: String,
        required: false,
        default: 'Campagnes',
    },
    thirdNumberSubtitle: {
        type: String,
        required: false,
        default: 'Aantal campagnes',
    },
})

const numbersSectionRef = ref<HTMLElement | null>(null)

const animateNumbers = () => {
    if (!numbersSectionRef.value) return
    
    const numberElements = numbersSectionRef.value.querySelectorAll('.numbers__result_number')

    numberElements.forEach((element) => {
        const targetValue = parseFloat(element.getAttribute('data-target') || '0')
        
        // Use GSAP TextPlugin for smooth number animation
        gsap.fromTo(element, 
            { textContent: 0 },
            {
                textContent: targetValue,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function() {
                    const currentValue = Math.round(this.targets()[0].textContent)
                    element.textContent = numberWithCommas(currentValue)
                }
            }
        )
    })
}

function numberWithCommas(x: number) {
    if (x === Math.floor(x)) {
        return x.toLocaleString('en-US')
    }

    return x.toLocaleString('en-US', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    })
}

onMounted(async () => {
    await nextTick()

    if (!numbersSectionRef.value) return

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateNumbers()
                    observer.disconnect()
                }
            })
        },
        {
            threshold: 0.5,
        }
    )

    observer.observe(numbersSectionRef.value)
})
</script>

<template>
    <section ref="numbersSectionRef" class="numbers__speak">
        <div class="container relative-container">
            <img src="/images/background__blur-min.webp" class="background__blur_numbers" />
            <div class="numbers__speak-inner">

                <!-- <div class="numbers__speak-title hidden md:block"> -->
                <div class="numbers__speak-title">
                  <TypeRevealTitle>{{ title }}</TypeRevealTitle>
                </div>

                <div class="numbers__speak-results">
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">{{ firstNumberText }}</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number" :data-target="firstNumber">0</span>
                                +
                            </div>
                            <div class="numbers__result_text">{{ firstNumberSubtitle }}</div>
                        </div>
                    </div>
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">{{ secondNumberText }}</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number" :data-target="secondNumber">0</span>
                                +
                            </div>
                            <div class="numbers__result_text">{{ secondNumberSubtitle }}</div>
                        </div>
                    </div>
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">{{ thirdNumberText }}</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number" :data-target="thirdNumber">0</span>
                                +
                            </div>
                            <div class="numbers__result_text">{{ thirdNumberSubtitle }}</div>
                        </div>
                    </div>
                    <!-- <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">Klantenscore</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number">9.5</span>
                                +
                            </div>
                            <div class="numbers__result_text">Klantenscore</div>
                        </div>
                    </div> -->
                </div>
                <div class="numbers__speak-cta">
                    <!-- <Button variant="outline" href="/contact" class="numbers__speak-cta-button">Let's get
                        started!</Button> -->
                    <ButtonAnimated text="Let's get started!" href="/contact" variant="secondary" />
                </div>
<!-- 
                <BlurGlow
top="" left="10px" :width="'400px'" :height="'55%'" :mobile-no-blur="false"
                    :mobile-no-blur-width="'400px'" :mobile-no-blur-height="'50%'" />

                <BlurGlow
top="" right="10px" :width="'400px'" :height="'55%'" :mobile-no-blur="true"
                    :mobile-no-blur-width="'200px'" :mobile-no-blur-height="'200px'" /> -->
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
    overflow: hidden;
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
    z-index: 9;
    position: relative;
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

.background__blur_numbers{
    position: absolute;
    top: 0;
    left: 35%;
    width: 570px;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;    
    opacity: 60%;
}

@media(max-width: 767px){
  .background__blur_numbers{
    width: 100%;
    height: 400px;
    object-fit: cover;
    left: 0;
    top: 30%;
  }
}
</style>
