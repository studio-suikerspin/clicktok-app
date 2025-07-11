<script setup>
const { index, number, subtitleOnly } = defineProps({
    index: Number,
    number: Object,
    subtitleOnly: {
        default: false,
        required: false,
        type: Boolean
    }
});
</script>

<template>
    <div class="numbers__item border-radius" :class="`numbers__item-${index + 1}`">
        <div class="numbers__item-inner" v-if="subtitleOnly && number.number">
            <div v-if="number.number">
                <span class="numbers__item-title-number">{{ number.number }}</span>
                <span class="numbers__number-suffix" v-if="number.suffix">
                   {{ number.suffix }}
                </span>
                <span class="numbers__number-type" v-else>
                    {{ number.type === 'score' ? ' / 5' : number.type === 'percentage'
                    ? '%' : '' }}
                </span>
            </div>
            <div class="numbers__item-title-title" v-html="number.subtitle"></div>
        </div>

        <div class="numbers__item-inner" v-else-if="subtitleOnly && number.text && !number.number">
            <!-- <div> -->
                <span class="numbers__item--fun-fact">{{ number.text }}</span>
            <!-- </div> -->
            <div class="numbers__item-title-title">{{ number.title }}</div>
        </div>

        <div class="numbers__item-inner" v-else>
            <div :class="['numbers__item-title-title', number.title && number.title.includes('Fun fact') ? 'fun-fact' : '']">{{ number.title }}</div>
            <div v-if="number.number">
                <span class="numbers__item-title-number">{{ number.number }}</span>
                <span class="numbers__number-suffix">{{ number.type === 'score' ? ' / 5' : number.type === 'percentage'
                    ? '%' : '' }}</span>
            </div>
            <div :class="['numbers__item-title-text', number.number ? 'has-number' : '']" v-html="number.text"></div>
        </div>
    </div>
</template>

<style scoped>
.numbers__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 24px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 335px;
    transition: transform 0.3s ease-in-out;
}

.numbers__item:hover {
    transform: scale(1.05) !important;
}

.numbers__item-1 {
    background-image: url('/images/section-numbers/numbers-bg1.png');
    transform: rotate(-5deg);
}

.numbers__item-2 {
    background-image: url('/images/section-numbers/numbers-bg2.png');
    transform: rotate(7deg);
}

.numbers__item-3 {
    background-image: url('/images/section-numbers/numbers-bg3.png');
    transform: rotate(-6deg);
}

.numbers__item-4 {
    background-image: url('/images/section-numbers/numbers-bg3.png');
    transform: rotate(4deg);
}

.numbers__item-5 {
    background-image: url('/images/section-numbers/numbers-bg4.png');
    transform: rotate(-3deg);
    margin-top: 28px;
}

.numbers__item-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.numbers__item-title-title {
    font-size: 18px;
    font-weight: 900;
    font-family: 'Syne', sans-serif;
    color: var(--accent-blue);
    text-align: center;
}

.numbers__item-title-number {
    font-size: 56px;
    font-weight: 900;
    color: var(--off-white);
}

.numbers__number-suffix {
    font-size: 56px;
    font-weight: 900;
    color: var(--off-white);
}

.numbers__number-type {
    font-size: 36px;
    font-weight: 900;
    color: var(--off-white);
}

.numbers__item--fun-fact {
    font-size: 36px;
    font-weight: 900;
    color: var(--off-white);
    text-align: center;
}

.numbers__item-title-text {
    font-size: 24px;
    font-weight: 900;
    color: var(--accent-blue);
    text-transform: uppercase;
    text-align: center;
    max-width: 560px;
}

.numbers__item-title-text.has-number {
    text-align: center;
}

@media (max-width: 768px) {
    .numbers__item {
        min-height: 180px;
        position: sticky;
        top: 80px;
        height: 300px;
        z-index: 1;
        height: 260px;
    }

    .numbers__item-1 {
        transform: rotate(-2deg);
    }
    .numbers__item-2 {
        transform: rotate(2deg);
    }
    .numbers__item-3 {
        transform: rotate(-2deg);
    }
    .numbers__item-4 {
        transform: rotate(2deg);
    }
    .numbers__item-5 {
        transform: rotate(-2deg);
        margin-top: 0;
    }
    .numbers__item-inner{
        text-align: center;
    }
    .numbers__item--fun-fact{
        font-size: 16px;
        text-align: center;
    }
}

@media (max-width: 992px) {
    .numbers__item {
        min-height: 190px;
    }

    .numbers__item-title-title {
        font-size: 16px;
        text-align: center;
    }
    .numbers__item-title-number {
        font-size: 32px;
    }
    .numbers__item-title-text {
        font-size: 18px;
    }
}
</style>
