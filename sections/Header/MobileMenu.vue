<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, watch } from 'vue'

import { mobileMenu } from '@/lib/mobileMenuStore.js'
import GradientBlur from '@/components/GradientBlur.vue';

let menuTl

onMounted(() => {
    menuTl = gsap
        .timeline({ paused: true })
        .to('.mobile-menu__background', { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' })
        .to('.mobile-menu__foreground', { x: 0, duration: 0.1, ease: 'power2.out' })
        .to('.mobile-menu__close', { x: 0, opacity: 1, duration: 0.2 })
        .to('.mobile-menu__item', { x: 0, opacity: 1, duration: 0.3, stagger: 0.1 })

    if (mobileMenu.menuOpen) {
        menuTl.progress(1)
        return
    }

    menuTl.progress(0)
})

watch(
    () => mobileMenu.menuOpen,
    (isOpen) => {
        if (isOpen) {
            menuTl.play()
            return
        }

        menuTl.reverse()
    },
)
</script>

<template>
    <div id="mobile-menu" class="mobile-menu" :class="mobileMenu.menuOpen ? 'active' : ''">
        <div class="mobile-menu__background">
            <!-- <div class="container gradient-blur-wrapper">
                <div class="mobile-menu__blur-wrapper">
                    <GradientBlur :width="{ default: '685px', sm: '60vw' }" :height="{ default: '509px', sm: '35vh' }" :left="{ default: '40px', sm: '10%' }" :bottom="{ default: '0', sm: '0' }" class="mobile-menu__blur first" />
                    <GradientBlur :width="{ default: '685px', sm: '60vw' }" :height="{ default: '509px', sm: '35vh' }" :right="{ default: '40px', sm: '10%' }" :top="{ default: '0', sm: '0' }" class="mobile-menu__blur second" />
                </div>
            </div> -->
        </div>

        <div class="mobile-menu__foreground">
            <div class="container">


                <div class="mobile-menu__header">
                    <a href="javascript:;" title="Close mobile menu" class="mobile-menu__close" @click="mobileMenu.toggle()">
                        <i class="bx bx-x"></i>
                    </a>
                </div>

                <nav class="mobile-menu__menu">
                    <a as="button" @click="mobileMenu.navigate('/')" :class="`mobile-menu__item`">
                        <div class="dot"></div>
                        Home
                    </a>
                    <a  @click="mobileMenu.navigate('/services')" :class="`mobile-menu__item`">
                        <div class="dot"></div>
                        Diensten
                    </a>
                    <a  @click="mobileMenu.navigate('/cases')" :class="`mobile-menu__item`">
                        <div class="dot"></div>
                        Cases
                    </a>
                    <a  @click="mobileMenu.navigate('/about')" :class="`mobile-menu__item`">
                        <div class="dot"></div>
                        Over ons
                    </a>
                    <a  @click="mobileMenu.navigate('/contact')" :class="`mobile-menu__item`">
                        <div class="dot"></div>
                        Contact
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<style>
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    width: 100vw;
    height: 100dvh;

    pointer-events: none;
}

.mobile-menu.active {
    pointer-events: all;
}

.mobile-menu__background {
    background-color: #000;
    background-image: url('/images/gradient-vierkant-mobile-min.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    opacity: 0;
    width: 100%;
    height: 100%;

    position: absolute;
    transform: translateX(100%);

    will-change: transform;
}

.mobile-menu__foreground {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;

    transform: translateX(100%);

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    color: white;
}

.mobile-menu__header {
    display: flex;
    align-items: center;
    justify-content: end;

    padding-block: 1rem;
}

.mobile-menu__close {
    font-size: 28px;
}

.mobile-menu__menu {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.mobile-menu__item {
    position: relative;

    transform: translateX(20%);
    opacity: 0;

    font-size: 36px;

    display: flex;
    align-items: center;
    gap: 1rem;
}

.mobile-menu__item .dot {
    display: none;
}

.mobile-menu__item.active .dot {
    display: block;

    width: 6px;
    height: 6px;

    background: var(--accent-blue);
    border-radius: 100%;
}

.mobile-menu__blur-wrapper{
    width: 100%;
    height: 100vh;
}
</style>
