<script setup>
import { inject } from 'vue'

const { index } = defineProps({
    index: String
})

const { handleFilter, isActive } = inject('tabMethods')
</script>

<template>
    <div :class="['tab-content', isActive(index) ? 'active' : '']">
        <slot></slot>
    </div>
</template>

<style scoped>
.tab-content {
    transform: translateY(10%);
    padding-block: 48px;
}

.tab-content:not(.active) {
    opacity: 0;
    position: absolute;
    pointer-events: none;
}
</style>
