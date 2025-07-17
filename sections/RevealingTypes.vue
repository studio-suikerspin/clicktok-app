<script setup>
import TypeRevealTitle from '@/components/TypeRevealTitle.vue';

const props = defineProps({
    titleFirst: {
        type: String,
        required: false,
        default: 'We don\'t just make content'
    },
    titleSecond: {
        type: String,
        required: false,
        default: 'We shape how people feel about your brand'
    },
    titleThird: {
        type: String,
        required: false,
        default: 'We create impact'
    },
    sectionPadding: {
        type: Boolean,
        required: false,
        default: true
    }
})
</script>

<template>
    <section class="relative" :class="sectionPadding ? 'section-padding' : 'padding-small'">
        <div class="container ">
            <TypeRevealTitle classes="revealing-types__inner">
                <span class="max-w-4xl mx-auto">{{ titleFirst }}</span>
                <span class="max-w-4xl mx-auto">{{ titleSecond }}</span>
                <span class="max-w-4xl mx-auto">{{ titleThird }}</span>
            </TypeRevealTitle>

            <NuxtImg class="absolute top-1/2 left-1/2 -translate-1/2 bottom-0" src="/images/pixel-outline.svg" />
        </div>
    </section>
</template>

<style scoped>
.revealing-types__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.padding-small {
    padding-top: 80px;
    padding-bottom: 200px;
}

@media screen and (min-width: 992px) {
    .revealing-types__inner {
        gap: 80px;
    }
}
</style>
