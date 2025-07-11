<script setup>
const images = [
    {
        src: '/images/london-shoot1-min.webp',
        top: '10px',
        left: '10px',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: '/images/london-shoot2-min.webp',
        top: '50%',
        left: '15px',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: '/images/london-shoot3-min.webp',
        top: '150px',
        left: '320px',
        class: 'hidden 2xl:block',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: '/images/nubikk-shoot-min.webp',
        top: '65%',
        left: '22%',
        class: 'hidden 2xl:block',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: '/images/shoe-shoot-min.webp',
        top: '2%',
        right: '0%',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: '/images/sportvision-shoot-min.webp',
        top: '9%',
        right: '21%',
        class: 'hidden 2xl:block',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: '/images/nubikk-shoot2-min.webp',
        top: '50%',
        right: '1%',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: '/images/couch-shoot-min.webp',
        top: '59%',
        right: '21%',
        class: 'hidden 2xl:block',
        scale: 1 + Math.random() * 0.2
    },
]
</script>

<template>
    <section class="hero">
        <div class="hero__content container">
            <h1 class="hero__title">Cases</h1>
            <div class="hero__image-wrap border-radius">
                <img class="hero__image" src="/images/cases/cases-overview-main.png" alt="ClickTok's cases" />
            </div>
        </div>
        <div class="container h-full hidden md:block">
            <div class="floating-images">
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    :class="`${image.class} floating-image__wrap border-radius`"
                    :style="`--top: ${image.top}; --right: ${image.right}; --bottom: ${image.bottom}; --left: ${image.left}; --scale: ${image.scale}`"
                >
                    <img class="floating-image" :src="image.src" alt="An image on the cases page" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    position: relative;
    max-height: 900px;
    height: 100vh;
}

.hero__content {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (width >= 48rem) {
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        z-index: 5;
    }
}

.hero__title {
    position: absolute;
    z-index: 2;

    font-size: clamp(3.75rem, 0.5357rem + 10.2857vw, 8.25rem);
    font-weight: 900;
    font-style: italic;
    color: white;
}

.hero__image-wrap {
    max-width: 375px;
    aspect-ratio: 9 / 16;
    overflow: clip;

    z-index: 1;
}

.hero__image-wrap img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.floating-images {
    position: relative;
    width: 100%;
    height: 100%;
}

.floating-image__wrap {
    position: absolute;
    overflow: clip;

    top: var(--top);
    bottom: var(--bottom);
    right: var(--right);
    left: var(--left);

    scale: var(--scale);
}

.floating-image {
    width: 250px;
    height: 100%;
    object-fit: cover;
}
</style>
