<template>
    <div class="carousel-container">
        <div :class="['carousel-wrapper', wrapperClasses]" ref="carouselWrapper">
        <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick, readonly } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

interface Props {
    effect?: 'slide' | 'fade'
    duration?: number
    ease?: string
    slidesToShow?: number
    gap?: string,
    wrapperClasses?: string
}

const props = withDefaults(defineProps<Props>(), {
    effect: 'slide',
    duration: 0.5,
    ease: 'power2.out',
    slidesToShow: 1,
    gap: '0px',
    wrapperClasses: '',
})
const emit = defineEmits(['slideChange'])

const carouselWrapper = ref(null)
const currentIndex = ref(0)

const slideCount = computed(() => {
    if (!carouselWrapper.value) return 0
    return carouselWrapper.value.children.length
})

const maxNavigationIndex = computed(() => {
    return Math.max(0, slideCount.value - 1)
})

const getSlides = () => {
    if (!carouselWrapper.value) return []
    return Array.from(carouselWrapper.value.children)
}

const animateToSlide = (index: number) => {
    const slides = getSlides()
    if (slides.length === 0) return

    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    })

    if (props.effect === 'fade') {
        slides.forEach((slide, i) => {
            if (i === index) {
                gsap.set(slide, { opacity: 0, display: 'block' })
                gsap.to(slide,
                    {
                        opacity: 1,
                        duration: props.duration,
                        ease: props.ease
                    }
                )
            } else {
                gsap.to(slide, {
                    opacity: 0,
                    duration: props.duration,
                    ease: props.ease,
                })
                gsap.set(slide, { display: 'none' })
            }
        })
    } else {
        const slideWidth = slides[0]?.offsetWidth || 0
        const gap = parseInt(props.gap) || 0
        const slideWidthWithGap = slideWidth + gap
        const translateX = -index * slideWidthWithGap

        gsap.to(carouselWrapper.value, {
            x: translateX,
            duration: props.duration,
            ease: props.ease
        })
    }

    currentIndex.value = index
    emit('slideChange', currentIndex.value)
}

const nextSlide = () => animateToSlide(currentIndex.value + 1)
const prevSlide = () => animateToSlide(currentIndex.value - 1)
const goToSlide = (index: number) => animateToSlide(index)


onMounted(async () => {
    gsap.registerPlugin(Draggable);
    await nextTick()

    const slides = getSlides()
    if (!slides.length) return

    slides[0].classList.add('active')

    if (props.effect === 'fade') {
        // Set up fade effect - hide all slides except first
        slides.forEach((slide, i) => {
            gsap.set(slide, { opacity: i === 0 ? 1 : 0 })
        })
    } else {
        // Set up slide effect
        gsap.set(carouselWrapper.value, { x: 0 })
    }

    emit('slideChange', 0)
})

// Expose methods and reactive state for external controls
defineExpose({
    nextSlide,
    prevSlide,
    goToSlide,
    currentIndex: readonly(currentIndex),
    slideCount,
    getSlides
})
</script>

<style scoped>
.carousel-container {
    overflow: hidden;
    position: relative;
    width: 100%;
}

.carousel-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    gap: v-bind(gap);
}

/* These styles will apply to slotted content */
.carousel-wrapper > :deep(*) {
    min-width: calc((100% - (v-bind(gap) * (v-bind(slidesToShow) - 1))) / v-bind(slidesToShow));
    flex-shrink: 0;
    width: 100%;
}
</style>
