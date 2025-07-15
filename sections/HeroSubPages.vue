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

        <img class="background-gradient" src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/1a080bb2-eb2a-4194-69a2-52cda2f3d000/public" alt="Background gradient">
        <img class="background-gradient mobile" src="https://imagedelivery.net/dK2MXs8e4PBA-0PIIKLecw/84e3aa21-f7eb-449c-9faa-352ef7f4ce00/public" alt="Background gradient">
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

.cases-hero .background-gradient.mobile {
  display: none;
}

.cases-hero__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    gap: 24px;
    color: var(--off-white);
    z-index: 2;
    min-height: 300px;
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
    .cases-hero .background-gradient.mobile {
        display: block;
    }
    .cases-hero .background-gradient {
        display: none;
    }
}
</style>