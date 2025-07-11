<script setup>
import GradientBlur from '@/components/GradientBlur.vue'
import NumbersItem from '@/components/NumbersItem.vue'
import BigText from '@/sections/General/BigText.vue'
import { gsap } from 'gsap'
import { onMounted } from 'vue'

const props = defineProps({
    numbers: {
        type: Array,
        default: () => [
            {
                number: 1221,
                text: 'Aantal creators',
            },
            {
                number: 87200000,
                text: 'Totaal bereik',
            },
            {
                number: 42,
                type: 'percentage',
                text: 'Toename in merkherkenning',
            }
        ]
    },
    title: {
        type: String,
        default: undefined
    },
    variant: {
        type: String,
        default: undefined
    },
})

let title = false

if (props.title) {
    title = props.title
}

const numbersArray = props.numbers

onMounted(() => {
    // Alleen elementen selecteren die zichtbaar zijn
    const numberElements =
        window.innerWidth <= 768
            ? document.querySelectorAll('.numbers__content.mobile .numbers__item-title-number')
            : document.querySelectorAll('.numbers__content:not(.mobile) .numbers__item-title-number')

    const items = document.querySelectorAll('.numbers__item')

    if (window.innerWidth > 768) {
        const finalRotations = [-5, 7, -6, 4, -3] // Eindrotaties
        const startRotations = [5, -7, 6, -4, 3] // Startrotaties (tegengesteld)

        // Initiele rotatie instellen
        items.forEach((item, index) => {
            gsap.set(item, { rotation: startRotations[index] })
        })

        // Animatie per item
        items.forEach((item, index) => {
            const numberElement = numberElements[index]
            const numberData = numbersArray[index]
            if (!numberData || !numberElement) return

            const value = numberData.number
            const isDecimal = !Number.isInteger(value)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            })

            tl.to(
                item,
                {
                    rotation: finalRotations[index],
                    duration: 2,
                    ease: 'power2.out',
                },
                0,
            )

            tl.from(
                numberElement,
                {
                    textContent: 0,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { textContent: 1 },
                    onUpdate: function () {
                        let currentValue = this.targets()[0].textContent
                        if (isDecimal) {
                            const progress = this.progress()
                            currentValue = (value * progress).toFixed(1)
                        } else {
                            currentValue = Math.round(currentValue)
                            currentValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                        }
                        numberElement.textContent = currentValue
                    },
                },
                0,
            )
        })
    } else {
        // Mobiele animatie (alleen cijfers)
        numberElements.forEach((element, index) => {
            const numberData = numbersArray[index]
            if (!numberData || !element) return

            const value = numberData.number
            const isDecimal = !Number.isInteger(value)

            gsap.from(element, {
                textContent: 0,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                onUpdate: function () {
                    let currentValue = this.targets()[0].textContent
                    if (isDecimal) {
                        const progress = this.progress()
                        currentValue = (value * progress).toFixed(1)
                    } else {
                        currentValue = Math.round(currentValue)
                        currentValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                    }
                    element.textContent = currentValue
                },
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            })
        })
    }
})
</script>

<template>
    <div :class="['numbers', 'padding-bottom', variant ? `numbers--${variant}` : '']">
        <div class="gradient-blur-wrapper container">
            <GradientBlur
                :width="{ default: '40vw', sm: '40vw' }"
                :height="{ default: '40vh', sm: '40vh' }"
                :left="{ default: '2%', sm: '40%' }"
                :top="{ default: '5%', sm: '-3%' }"
            />
            <GradientBlur
                :width="{ default: '40vw', sm: '40vw' }"
                :height="{ default: '40vh', sm: '40vh' }"
                :right="{ default: '2%', sm: '40%' }"
                :top="{ default: '5%', sm: '40%' }"
            />
            <GradientBlur
                :width="{ default: '40vw', sm: '40vw' }"
                :height="{ default: '40vh', sm: '40vh' }"
                :right="{ default: '40%', sm: '45%' }"
                :bottom="{ default: '-5%', sm: '-3%' }"
            />

            <div class="numbers__inner">
                <div class="numbers__content">
                    <div class="numbers__row">
                        <NumbersItem v-for="(number, index) in numbersArray.slice(0, 3)" :key="number.title" :number="number" :index="index" />
                    </div>
                    <div :class="['numbers__row', numbersArray.slice(3).length === 1 ? 'numbers__row--singular' : '']">
                        <NumbersItem v-for="(number, index) in numbersArray.slice(3)" :key="number.title" :number="number" :index="index" />
                    </div>
                </div>
                <div class="numbers__content mobile">
                    <NumbersItem
                        v-for="(number, index) in numbersArray"
                        :key="number.title"
                        :number="number"
                        :index="index"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.numbers__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    position: relative;
}

@media (max-width: 768px) {
    .numbers__inner {
        gap: 40px;
    }
}

.numbers--large-title .numbers__title {
    color: var(--off-white);
    text-align: center;
    font-family: Syne;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    font-size: clamp(2.25rem, 0.7222rem + 4.8889vw, 5rem);

    max-width: unset;
}

.numbers--large-title .numbers__title span {
    color: var(--accent-blue);
}

.numbers__title {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.numbers__content {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.numbers__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
}

.numbers__row.numbers__row--singular {
    grid-template-columns: repeat(5,1fr);
}

.numbers__row.numbers__row--singular > .numbers__item {
    grid-column-start: 2;
    grid-column-end: 5;
}

.numbers__row:not(.numbers__row--singular):last-child {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
}

.numbers__content.mobile {
    display: none;
}

@media (max-width: 768px) {
    .numbers__content.mobile {
        display: flex;
        min-height: 1000px;
        position: relative;
    }
    .numbers__content {
        display: none;
    }
}
</style>
