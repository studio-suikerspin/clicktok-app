<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import GradientBlur from '@/components/GradientBlur.vue'

const props = defineProps({
  firstTitle: {
    type: String,
    required: true
  },
  secondTitle: {
    type: String,
    required: true
  },
  thirdTitle: {
    type: String,
    required: true
  }
})

onMounted(() => {
  // First title animation (from left)
  gsap.from('.three-titles__item-title.first', {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.three-titles__item-title.first',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })

  // Second title animation (from right)
  gsap.from('.three-titles__item-title.second', {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.three-titles__item-title.second',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })

  // Third title animation (from left)
  gsap.from('.three-titles__item-title.third', {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.three-titles__item-title.third',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })
})
</script>


<template>
  <div class="three-titles section-padding">
    <div class="container gradient-blur-wrapper">
      <div class="three-titles__wrapper">
        <GradientBlur :width="{ default: '20vw', sm: '50vw' }" :height="{ default: '30vh', sm: '20vh' }" :left="{ default: '5vw', sm: '40%' }" :top="{ default: '40px', sm: '0' }"  />
        <GradientBlur :width="{ default: '20vw', sm: '50vw' }" :height="{ default: '30vh', sm: '20vh' }" :right="{ default: '5vw', sm: '40%' }" :bottom="{ default: '-20px', sm: '-5%' }"/>

        <div class="three-titles__item">
          <div class="three-titles__item-title first">
            <slot name="first" />
          </div>
          <div class="three-titles__item-title second">
            <slot name="second" />
          </div>
          <div class="three-titles__item-title third">
            <slot name="third" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.three-titles {
  padding: 100px 0;
}

.three-titles__wrapper{
  width: 100%;
}

.three-titles__item{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;
}

.three-titles__item-title h2{
  font-size: 96px;
  font-weight: 800;
  font-style: italic;
  line-height: 1.2;
  text-align: center;
  color: #fff;
  line-height: 1;
}

.three-titles__item-title .highlight{
  color: var(--accent-blue);
}

.three-titles__item-title.first h2{
  transform: rotate(3deg);
}

.three-titles__item-title.second h2{
  transform: rotate(-2deg);
}

.three-titles__item-title.third h2{
  transform: rotate(3deg);
}

@media(max-width: 992px){
  .three-titles__item-title h2{
    font-size: 48px;
  }
}

@media(max-width: 768px){
  .three-titles__item{
    gap: 50px;
  }
  .three-titles__item-title h2{
    font-size: 38px;
  }
}
</style>
