<script setup>
import TypeRevealTitle from '@/components/TypeRevealTitle.vue';
</script>

<template>
    <section class="section-padding relative">
        <div class="container ">
            <TypeRevealTitle classes="revealing-types__inner">
                <span class="max-w-4xl mx-auto">We don't just make content</span>
                <span class="max-w-4xl mx-auto">We shape how people feel about your brand</span>
                <span class="max-w-4xl mx-auto">We create impact</span>
            </TypeRevealTitle>

            <img class="absolute top-1/2 left-1/2 -translate-1/2 bottom-0" src="/images/pixel-outline.svg">
        </div>
    </section>
</template>

<style scoped>
.revealing-types__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

@media screen and (min-width: 992px) {
    .revealing-types__inner {
        gap: 80px;
    }
}
</style>
