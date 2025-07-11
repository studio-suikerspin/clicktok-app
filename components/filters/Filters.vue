<script setup>
const props = defineProps({
  filters: {
    type: Array,
    required: true,
    default: () => []
  },
  selectedIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['filterChange'])

const handleFilterClick = (index) => {
  emit('filterChange', index)
}
</script>


<template>
  <div class="container">
    <ul class="filters">
      <li 
          v-for="(filter, index) in filters" 
          :key="index"
          class="filter" 
          :class="{ active: selectedIndex === index }"
          @click="handleFilterClick(index)"
      >
          <span class="filter__number">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="filter__title">{{ filter.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>

.filters {
    display: flex;
    align-items: center;
    padding-block: 20px;

    overflow-x: scroll;
    max-width: 100%;
    width: 100%;
}

.filter {
    display: flex;
    align-items: center;
    justify-content: center;
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