<script setup>
const { review } = defineProps({
    review: Object
})

// const backgrounds = [
//     '/images/gradient-ruis-vierkant-min.webp',
//     '/images/gradient-ruis-vierkant-min.webp',
//     '/images/gradient-ruis-vierkant-min.webp',
//     '/images/gradient-ruis-vierkant-min.webp',
// ]

// const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)]
</script>

<template>
    <div class="review-card" :style="{ backgroundImage: `url(/images/gradient-ruis-vierkant-min.webp)` }">
        <div class="review-card__avatar">
            <NuxtImg :src="review.avatar" :alt="review.name" class="review-card__avatar-img" />
        </div>

        <div class="review-card__content">
            <div class="review-card__title">
                <div class="review-card__company">{{ review.company }}</div>
                <div class="review-card__name">{{ review.name }}</div>
            </div>

            <div class="review-card__review">
                {{ review.review }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .review-card {
        position: relative;
        overflow: clip;

        display: flex;
        align-items: flex-start;
        gap: 12px;

        padding: 22px 16px;
        min-width: 375px;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        border-radius: 8px;

        transition: all 200ms ease-out;
    }

    .review-card--small {
        min-width: unset;
    }

    .review-card:not(.review-card--small):hover {
        scale: 1.05;
        transform: rotate(0deg) !important;
        transition: all 200ms ease-out;
    }

    .review-card__avatar {
        width: 32px;
        height: 32px;

        aspect-ratio: 1 / 1;

        border-radius: 100%;
        overflow: clip;
    }

    .review-card__avatar-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .review-card__content {
        display: flex;
        flex-direction: column;
        gap: 10px;

        width: 100%;
    }

    .review-card__title {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 4px;

        color: #BFB5B5;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .review-card__company{
        color: var(--off-white);
        font-weight: 600;
        font-size: 14px;
    }

    .review-card--small .review-card__title {
        flex-direction: column;
        align-items: start;
    }

    .review-card__review {
        color: var(--White_off, #FDFDFD);
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        text-wrap: wrap;
    }
</style>
