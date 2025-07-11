<script setup>
import TypeRevealTitle from '@/components/TypeRevealTitle.vue';
import reviews from '@/lib/reviews'
</script>

<template>
    <section class="reviews section-padding">
        <div class="container">
            <div class="reviews__inner">
                <TypeRevealTitle>What leading marketing teams say about us</TypeRevealTitle>

                <div class="reviews__grid">
                    <div class="reviews__column">
                        <div class="review border-radius" v-for="(review, key) in reviews.slice(0,2)" :key>
                            <div class="review__pixels">
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                            </div>

                            <div class="review__content" v-text="review.review"></div>

                            <div class="review__person">
                                <div class="person__image border-radius">
                                    <NuxtImg :src="review.avatar" />
                                </div>

                                <div class="person__info">
                                    <div class="person__name" v-text="review.name"></div>
                                    <div class="person__company" v-text="review.company"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="reviews__column">
                        <div class="review border-radius" v-for="(review, key) in reviews.slice(2,4)" :key>
                            <div class="review__pixels">
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                            </div>

                            <div class="review__content" v-text="review.review"></div>

                            <div class="review__person">
                                <div class="person__image">
                                    <NuxtImg :src="review.avatar"/>
                                </div>

                                <div class="person__info">
                                    <div class="person__name" v-text="review.name"></div>
                                    <div class="person__company" v-text="review.company"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="reviews__column third-column">
                        <div class="review border-radius" v-for="(review, key) in reviews.slice(4,6)" :key>
                            <div class="review__pixels">
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                                <NuxtImg src="/images/pixel-outline-wit-icon.svg" class="review__pixel"/>
                            </div>

                            <div class="review__content" v-text="review.review"></div>

                            <div class="review__person">
                                <div class="person__image border_radius">
                                    <NuxtImg :src="review.avatar"/>
                                </div>

                                <div class="person__info">
                                    <div class="person__name" v-text="review.name"></div>
                                    <div class="person__company" v-text="review.company"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <NuxtImg class="reviews__pixel" src="/images/PIXEL__PIXEL_DARK_BLUE.png"/>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.reviews .container {
    max-width: 1250px;
}

.reviews .reveal-type {
    text-wrap: balance;
}

.reviews__pixel {
    position: absolute;
    height: 800px;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    z-index: -1;
}

.reviews__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.reviews__grid {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 24px;
}

.reviews__column {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.review {
    background: var(--accent-dark-purple);
    padding: 24px;

    display: flex;
    flex-direction: column;
    gap: 18px;
}

.review__pixels {
    display: flex;
    align-items: center;
    gap: 10px;
}

.review__pixel {
    height: 16px;
    width: 33px;
}

.review__content {
    color: var(--off-white);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
}

.review__person {
    display: flex;
    align-items: center;
    gap: 18px;
}

.person__image {
    width: 72px;
    height: 82px;
    overflow: hidden;
}

.person__image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.person__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.person__name {
    color: var(--off-white);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.person__company {
    color: var(--off-white_50);
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.reviews__column.third-column{
    display: none;
}

@media screen and (min-width: 992px) {
    .reviews__inner {
        gap: 80px;
    }

    .reviews__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        gap: 40px;
    }

    .reviews__column {
        gap: 40px;
    }

    .reviews__column.third-column{
        display: flex;
    }
}
</style>
