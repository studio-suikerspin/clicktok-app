<script setup>
import { nextTick, onMounted } from 'vue';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const { classes } = defineProps({
    classes: {
        required: false,
        type: String,
        default: ''
    }
})

onMounted(async () => {
    await nextTick()
    const dev = new URLSearchParams(window.location.params).get('dev') ? true : false;


    const revealTypes = gsap.utils.toArray('.reveal-type');
    revealTypes.forEach(revealType => {
        const split = SplitText.create(revealType, { type: "words, chars" })

        gsap.fromTo(split.chars, {opacity: 0.6}, {
            scrollTrigger: {
                trigger: revealType,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
                markers: dev,
            },
            opacity: 1,
            stagger: 0.1,
            duration: 0.5
        })
    })
})
</script>

<template>
    <div :class="`reveal-type ${classes}`">
        <slot></slot>
    </div>
</template>

<style scoped>
.reveal-type {
    font-family: 'Montserrat';
    font-weight: bold;
    font-style: italic;
    font-size: clamp(1.875rem, 0.5357rem + 4.2857vw, 3.75rem);
    text-align: center;
    color: var(--off-white);
    line-height: 73px;
}

@media screen and (max-width: 992px) {
    .reveal-type {
        font-size: 30px;
        line-height: 37px;
    }
}
</style>
