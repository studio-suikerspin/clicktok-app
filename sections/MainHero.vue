<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import UIButton from "@/components/ui/Button.vue";

import cases from "~/lib/cases";
</script>

<template>
  <section class="hero">
    <img src="/images/gradient-background1.webp" class="hero__bg" />

    <div class="hero__inner">
      <div class="hero__content">
        <h1 class="hero__headline">Full service TikTok agency</h1>

        <div class="hero__subtext">
          We bouwen formats vanuit merkwaarden om het juiste gevoel over te
          brengen, sterke associaties te creëren en zo te zorgen voor
          herkenning, activatie en conversie.
        </div>

        <div class="hero__cta-wrap">
          <UIButton variant="blue" href="/contact">
            Start een project
          </UIButton>
          <UIButton variant="outline" href="/cases">Bekijk cases</UIButton>
        </div>
      </div>

      <div class="hero__swiper">
        <Swiper
          :space-between="16"
          :initial-slide="1"
          :loop="true"
          :modules="[Navigation]"
          :navigation="{
            nextEl: '.hero__swiper-button-next',
            prevEl: '.hero__swiper-button-prev',
            addIcons: false,
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1.3,
              centeredSlides: true,
              initialSlide: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }"
        >
          <SwiperSlide v-for="caseItem in cases" :key="caseItem.id">
            <div class="hero__swiper-slide">
              <img
                class="slide-bg"
                :src="caseItem.featured_image"
                :alt="caseItem.title"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="hero__swiper-nav">
          <div class="hero__swiper-button-prev">
            <i class="bx bx-left-arrow-alt"></i>
          </div>
          <div class="hero__swiper-button-next">
            <i class="bx bx-right-arrow-alt"></i>
          </div>
        </div>
      </div>

      <div class="hero__mobile-cta">
        <UIButton variant="white" href="/contact" text="Start een project" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  &__inner {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100svh;
    overflow: hidden;
    padding-block: 6rem;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      justify-content: space-between;
      padding-block: 6rem 0;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      flex: 1;
    }
  }

  &__headline {
    font-size: 2.5rem;
    text-wrap: balance;
    font-weight: 900;
    font-style: italic;
    color: var(--off-white);
    text-align: center;
    text-transform: uppercase;
    max-width: 900px;
    line-height: 100%;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 6rem;
    }
  }

  &__subtext {
    font-size: 1rem;
    color: var(--off-white);
    text-align: center;
    max-width: 700px;

    @media screen and (min-width: 768px) {
      font-size: 1.125rem;
    }
  }

  &__cta-wrap {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      gap: 1rem;
    }
  }

  &__mobile-cta {
    display: flex;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .swiper {
    overflow: visible;

    @media screen and (min-width: 768px) {
      overflow: hidden;
    }
  }

  &__swiper {
    position: relative;
    width: 100%;

    .swiper {
      width: 100%;
      height: 100%;
    }

    @media screen and (min-width: 768px) {
    }
  }

  .swiper-slide-active {
    .hero__swiper-slide {
      transform: scale(1.05);
      transition: transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    @media screen and (min-width: 768px) {
      .hero__swiper-slide {
        transform: unset;
      }
    }
  }

  &__swiper-slide {
    display: flex;
    aspect-ratio: 3/4;
    height: 100%;
    width: 100%;
    overflow: hidden;
    transition: transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 1rem;

    .slide-bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__swiper-nav {
    position: absolute;
    height: calc(100% + 2rem);
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    width: 100%;
    z-index: 1;
    pointer-events: none;

    @media screen and (min-width: 768px) {
    }
  }

  &__swiper-button-prev,
  &__swiper-button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--off-white);
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    pointer-events: all;

    &:hover {
    }
  }
}
</style>
