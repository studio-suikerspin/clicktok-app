<template>
    <ul class="filters">
        <slot></slot>
    </ul>
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
</style>
