<script setup>
const { title } = defineProps({
    title: {
        type: String,
        required: true,
    }
})

const titleRef = ref(null)
</script>

<template>
    <section class="cases-hero section-padding">
        <div class="container">
            <div class="cases-hero__inner">
                <h1 ref="titleRef" class="cases-hero__title montserrat-title">{{ title }}</h1>
            </div>
        </div>

        <NuxtImg provider="cloudflare" class="background-gradient" src="/images/gradient-vierkant-min.webp" alt="Background gradient" />
    </section>
</template>

<style>
.cases-hero {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 3;

    overflow: hidden;
}

.background-gradient {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
-webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}

.cases-hero__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    gap: 24px;
    color: var(--off-white);
    z-index: 2;
    min-height: 500px;
}

 

.cases-hero__title {
    position: relative;
    font-size: 150px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
}

@media (max-width: 1024px) {
    .cases-hero__title {
        font-size: 96px;
    }
}

@media (max-width: 767px) {
    .cases-hero__title {
        font-size: 72px;
    }
}
</style>
