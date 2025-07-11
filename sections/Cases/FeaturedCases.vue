<script setup>
import Button from '@/components/ui/Button.vue'

const cases = [
    {
        title: 'Nubikk',
        image: '/images/nubikk-shoot-min.webp',
        url: '/cases/nubikk'
    },
    {
        title: 'Sportvision',
        image: '/images/sportvision-shoot-min.webp',
        url: '/cases/sportvision'
    },
    {
        title: 'Maxima Boats',
        image: '/images/london-shoot3-min.webp',
        url: '/cases/maxima-boats'
    },
]
</script>

<template>
    <section class="featured-cases">
        <div class="container">
            <div class="featured-cases__inner">
                <div class="cases-card border-radius" v-for="(item, index) in cases" :key="index">
                    <div class="cases-card__content">
                        <div class="cases-card__title">{{ item.title }}</div>
                        <Button variant="white" :href="item.url" :title="item.title"> Lees meer </Button>
                    </div>
                    <img :src="item.image" :alt="item.title" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.featured-cases__inner {
    position: relative;
    translate: 0 -100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    max-width: 1200px;
    margin-inline: auto;
}

.cases-card {
    position: relative;

    overflow: hidden;
    aspect-ratio: 9 / 16;
}

@media(max-width: 767px){
    .cases-card {
        max-height: 600px;
    }
}

.cases-card img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.cases-card__content {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 25%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding-block: 40px;
    padding-inline: 24px;
}

.cases-card__title {
    font-size: clamp(1.5rem, 1.1429rem + 1.1429vw, 2rem);
    color: white;

    font-weight: 900;
}
</style>
