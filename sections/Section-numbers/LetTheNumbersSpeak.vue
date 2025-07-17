<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import BlurGlow from '@/components/blur/Blurglow.vue'

import { ref, onMounted, nextTick } from 'vue'

defineProps({
    title: {
        type: String,
        required: false,
        default: 'The numbers speak for themselves',
    },
})

const numbersSectionRef = ref<HTMLElement | null>(null)

const animateNumbers = () => {
    if (!numbersSectionRef.value) return
    
    const numberElements = numbersSectionRef.value.querySelectorAll('.numbers__result_number')

    numberElements.forEach((element) => {
        const targetValue = parseFloat(element.getAttribute('data-target') || '0')
        const duration = 2000
        const startTime = performance.now()

        const update = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const currentValue = targetValue * progress

            element.textContent = numberWithCommas(Math.ceil(currentValue))

            if (progress < 1) {
                requestAnimationFrame(update)
            } else {
                element.textContent = numberWithCommas(targetValue)
            }
        }

        requestAnimationFrame(update)
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
        <div class="container">
            <div class="numbers__speak-inner">
                <div class="numbers__speak-title hidden md:block">
                  <TypeRevealTitle>{{ title }}</TypeRevealTitle>
                </div>

                <div class="numbers__speak-results">
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">Creators</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number" data-target="77">0</span>
                                +
                            </div>
                            <div class="numbers__result_text">Aantal creators</div>
                        </div>
                    </div>
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">Views</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number" data-target="88200000">0</span>
                                +
                            </div>
                            <div class="numbers__result_text">Totaal bereik</div>
                        </div>
                    </div>
                    <div class="numbers__speak-results-item">
                        <div class="numbers__result">
                            <div class="numbers__result_title">Campagnes</div>
                            <div class="numbers__result_number-wrapper">
                                <span class="numbers__result_number" data-target="23">0</span>
                                +
                            </div>
                            <div class="numbers__result_text">Aantal campagnes</div>
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
                    <Button variant="outline" href="/contact" class="numbers__speak-cta-button">Let's get
                        started!</Button>
                </div>

                <BlurGlow
top="" left="10px" :width="'400px'" :height="'55%'" :mobile-no-blur="false"
                    :mobile-no-blur-width="'400px'" :mobile-no-blur-height="'50%'" />

                <BlurGlow
top="" right="10px" :width="'400px'" :height="'55%'" :mobile-no-blur="true"
                    :mobile-no-blur-width="'200px'" :mobile-no-blur-height="'200px'" />
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
</style>
