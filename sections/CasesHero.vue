<script setup>
const images = [
    {
        src: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/6d9daa5f-084e-4644-3fcd-857c4050bc00/public',
        top: '10px',
        left: '10px',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/3705c6ab-8120-46d8-0d85-367cb2607100/public',
        top: '50%',
        left: '15px',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/1e11a157-9195-402b-7ba8-59f37aea4d00/public',
        top: '150px',
        left: '320px',
        class: 'hidden 2xl:block',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/299d454d-83ac-4020-6045-05a0669e2800/public',
        top: '65%',
        left: '22%',
        class: 'hidden 2xl:block',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/478acd79-4763-4665-543c-650e6c1a5000/public',
        top: '2%',
        right: '0%',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/3e78f77b-ba68-49f1-718a-7f41e29c3f00/public',
        top: '9%',
        right: '21%',
        class: 'hidden 2xl:block',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/92dbbd28-1e3b-420e-7cc4-881437257400/public',
        top: '50%',
        right: '1%',
        scale: 1 + Math.random() * 0.2
    },
    {
        src: 'https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/235d3fe9-fd49-4ee5-1e40-4a423d0aa600/public',
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
                <NuxtImg class="hero__image" src="/images/cases/cases-overview-main.png" alt="ClickTok's cases" />
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
