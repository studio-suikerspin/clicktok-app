<script setup>
import ClientReference from '@/components/ClientReference.vue'
import GradientBlur from '@/components/GradientBlur.vue'

const { reference } = defineProps({
    reference: Object,
})
</script>

<template>
    <section class="client-reference">
        <GradientBlur
            :width="{ default: '40vw', sm: '40vw' }"
            :height="{ default: '40vh', sm: '40vh' }"
            :left="{ default: '2%', sm: '40%' }"
            :top="{ default: '8%', sm: '-3%' }"
        />
        <GradientBlur
            :width="{ default: '40vw', sm: '40vw' }"
            :height="{ default: '40vh', sm: '40vh' }"
            :left="{ default: '60%', sm: '40%' }"
            :top="{ default: '5%', sm: '-3%' }"
        />

        <div class="client-reference__inner container">
            <ClientReference
                :reference="reference"
            />
        </div>
    </section>
</template>

<style scoped>
.client-reference {
    padding-block: 160px;
    position: relative;
}

.client-reference__inner {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
