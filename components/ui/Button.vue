<script setup>
    const props = defineProps({
        variant: String,
        href: String,
        title: String,
        classes: String,
    });
</script>

<template>
    <a :href="href" :class="`btn btn--${variant} ${classes}`" :title="title">
        <slot />
    </a>
</template>

<style>
.btn {
    padding-block: var(--button-padding-block);
    padding-inline: var(--button-padding-inline);

    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    font-style: italic;
    text-wrap: nowrap;
    line-height: 100%;

    border: 2px solid;
    border-radius: var(--button-border-radius);
    transition: all 150ms ease;

    display: flex;
    align-items: center;
    justify-content: center;
}

.btn:hover {
    filter: brightness(0.95);
    box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
    transition: all 150ms ease;
}

.btn:active {
    filter: brightness(0.8);
    transition: all 75ms ease;
}

.btn--white {
    background: var(--off-white);
    color: var(--accent-dark-purple);
    border-color: var(--off-white);
    transition: all 150ms ease;
}

.btn--white:hover {
    background: var(--accent-blue);
    border-color: var(--accent-blue);
    color: var(--off-white);
}

.btn--blue {
    background: var(--accent-blue);
    color: var(--off-white);
    border-color: var(--accent-blue);
}

.btn--purple {
    background: var(--accent-dark-purple);
    color: var(--off-white);
    border-color: var(--accent-dark-purple);
}

.btn--outline {
    background: transparent;
    border: 2px solid var(--off-white);
    color: var(--off-white);
}

.btn--outline:hover {
    background: var(--off-white);
    color: var(--accent-dark-purple);
}

.btn--glass {
    background: #fdfdfd94;
    color: #000;
    border-color: #fdfdfd94;
}
</style>
