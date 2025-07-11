<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  title: string;
}>();

const titleRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (titleRef.value) {
    // Animate words with ScrollTrigger
    gsap.fromTo(
      titleRef.value.querySelectorAll('.word'),
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }
});
</script>

<template>
  <div class="big__text">
      <div class="big__text_title" ref="titleRef">
        <h2 v-html="title"></h2>
      </div>
  </div>
</template>

<style>
.big__text_title {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.big__text_title h2 {
  max-width: 1550px;
}

.big__text_title .word {
  font-size: 38px;
  line-height: 1.2;
  color: var(--color-white);
  font-style: italic;
  font-weight: 900;
}

.big__text_title .big {
  font-size: 90px;
}

.big__text_title .accent {
  color: var(--accent-blue);
}

.word {
  display: inline-block;
  margin-right: 0.25em;
  opacity: 0;
  transform: translateY(50px);
}

.big__text_title .word.pixel {
  margin-left: -32px;
}

.big__text_title .word.pixel img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 33px;
  max-height: 33px;
}

@media(max-width: 1550px) {
  .big__text_title .big {
    font-size: 80px;
  }
}

@media(max-width: 1300px) {
  .big__text_title .word {
    font-size: 30px;
  }
  .big__text_title .big {
    font-size: 60px;
  }
}

@media(max-width: 992px) {
  .big__text_title h2 {
    max-width: 100%;
  }
    .big__text_title .word {
    font-size: 20px;
  }
  .big__text_title .big {
    font-size: 50px;
  }
  .big__text {
    margin-top: 0;
  }
}

@media(max-width: 768px) {
  .big__text_title .word {
    font-size: 24px;
    line-height: 40px;
  }
  .big__text_title .big {
    font-size: 32px;
  }
  .big__text_title .word.pixel {
    margin-left: -8px;
  }
  .big__text_title .word.pixel img {
    max-width: 16px;
    max-height: 16px;
  }
}


</style>
