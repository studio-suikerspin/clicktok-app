<script setup>
const { reference } = defineProps({
    reference: Object
})
</script>

<template>
    <div class="reference border-radius">
        <div class="reference__avatar">
            <img :src="reference.avatar" :alt="reference.name" class="reference__avatar-img">
        </div>

        <div class="reference__content">
            {{ reference.content }}
        </div>

        <div class="reference__layout">
            <div class="reference__person">
                <div class="person__name">{{ reference.name }}</div>
                <div class="person__jobtitle">{{ reference.jobTitle }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .reference {
        position: relative;
        overflow: clip;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;

        padding-inline: 24px;
        padding-block: 48px;
        max-width: 890px;
        width: 100%;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/images/gradient-vierkant-min.webp');

        transition: all 200ms ease-out;
    }

    .reference:hover {
        scale: 1.05;
        transform: rotate(0deg) !important;
        transition: all 200ms ease-out;
    }

    .reference__avatar {
        width: 62px;
        height: 62px;

        aspect-ratio: 1 / 1;

        border-radius: 100%;
        overflow: clip;
    }

    .reference__avatar-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .reference__layout {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 24px;

        width: 100%;
    }

    .reference__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .reference__content {
        color: var(--White_off, #FDFDFD);
        font-family: Montserrat;
        font-size: clamp(1.125rem, 0.9167rem + 0.6667vw, 1.5rem);
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        text-wrap: wrap;
    }

    .person__name {
        font-size: clamp(1.125rem, 0.9167rem + 0.6667vw, 1.5rem);
        font-weight: bold;
        font-style: italic;
        color: var(--off-white);
    }

    .person__jobtitle {
        font-size: clamp(1.125rem, 0.9167rem + 0.6667vw, 1.5rem);
        font-weight: 500;
        color: var(--off-white);
    }


    @media (min-width: 768px) {
        .reference {
            padding-inline: 80px;
            padding-block: 40px;
        }

        .reference__layout {
            flex-direction: row;
            align-items: center;
        }
    }
</style>
