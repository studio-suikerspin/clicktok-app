<template>
    <div class="carousel-controls">
        <button @click="prevSlide" :disabled="currentIndex === 0">
            ←
        </button>
        <button @click="nextSlide" :disabled="currentIndex === slideCount - 1">
            →
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

interface Props {
    targets: any | any[] // Carousel component refs
}

const props = withDefaults(defineProps<Props>(), {});

const currentIndex = ref(0)
const slideCount = ref(0)

const targetArray = computed(() => {
    if (!props.targets) return []
    return Array.isArray(props.targets) ? props.targets : [props.targets]
})

const primaryTarget = computed(() => targetArray.value[0])

const updateState = () => {
    if (primaryTarget.value) {
        currentIndex.value = primaryTarget.value.currentIndex || 0
        slideCount.value = primaryTarget.value.slideCount || 0
    }
}

const nextSlide = () => {
    targetArray.value.forEach(target => {
        if (target && typeof target.nextSlide === 'function') {
            target.nextSlide()
        }
    })
}

const prevSlide = () => {
    targetArray.value.forEach(target => {
        if (target && typeof target.prevSlide === 'function') {
            target.prevSlide()
        }
    })
}

const goToSlide = (index: number) => {
    targetArray.value.forEach(target => {
        if (target && typeof target.goToSlide === 'function') {
            target.goToSlide(index)
        }
    })
}

// Watch for changes in the primary target's state
let stateWatcher: any = null

const setupStateWatcher = () => {
    if (stateWatcher) {
        stateWatcher() // Clean up previous watcher
    }

    if (primaryTarget.value) {
        stateWatcher = watch(
            () => primaryTarget.value?.currentIndex,
            (newIndex) => {
                if (typeof newIndex === 'number') {
                    currentIndex.value = newIndex
                }
            },
            { immediate: true }
        )

        updateState()
    }
}

watch(primaryTarget, setupStateWatcher, { immediate: true })

onMounted(() => {
    setupStateWatcher()
})

onUnmounted(() => {
    if (stateWatcher) {
        stateWatcher()
    }
})

defineExpose({
    nextSlide,
    prevSlide,
    goToSlide
})
</script>

<style scoped>
.carousel-controls {
    display: flex;
    align-items: center;
    gap: 16px;
}

.carousel-controls button {
    background: transparent;
    border: 2px solid white;
    border-radius: 100%;

    font-size: 24px;
    color: white;

    width: 50px;
    height: 50px;

    transition: translate 150ms ease-out;

    cursor: pointer;
}

.carousel-controls button:active {
    translate: 0 2px;
    transition: translate 50ms ease-out;
}

.carousel-controls button:disabled {
    opacity: 0.6;
    cursor: default;
}

.carousel-controls button:not(:disabled):hover {
    translate: 0 -2px;
    transition: translate 150ms ease-out;
}
</style>
