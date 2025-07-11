<script setup>
import { inject } from 'vue'

const { index, number, title } = defineProps({
    index: Number,
    number: Number,
    title: String
})

const { handleFilter, isActive } = inject('tabMethods')
</script>

<template>
    <li :class="['filter', { active: isActive(index) }]" @click="() => handleFilter(index)">
        <span class="filter__number">{{ number }}</span>
        <span class="filter__title">{{ title }}</span>
    </li>
</template>

<style scoped>
.filter {
    display: flex;
    align-items: center;
    gap: 16px;

    width: 100%;

    padding-inline-end: 24px;
    padding-block-end: 30px;
    border-bottom: 1px solid white;

    pointer-events: all;
    cursor: pointer;

    opacity: 0.6;
    transition: all 150ms ease-out;
}

.filter:not(:first-child) {
    padding-inline-start: 24px;
}

.filter.active {
    opacity: 1;
    pointer-events: none;

    transition: all 150ms ease-out;
}

.filter:hover {
    opacity: 1;
    transition: all 150ms ease-out;
}

.filter__number {
    font-family: Montserrat;
    font-size: clamp(1rem, 0.9107rem + 0.2857vw, 1.125rem);
    font-style: italic;
    line-height: normal;

    color: var(--accent-pink);
}

.filter__title {
    color: var(--off-white);
    font-family: Montserrat;
    font-size: clamp(1.125rem, 0.8571rem + 0.8571vw, 1.5rem);
    font-style: italic;
    font-weight: 500;
    line-height: normal;

    text-wrap: nowrap;
}
</style>
