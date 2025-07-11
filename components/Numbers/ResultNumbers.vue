<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref, computed, nextTick } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  number: {
    type: [Number, String],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  plus: {
    type: Boolean,
    default: false,
  },
  trigger: {
    type: [Boolean, Element],
    default: true,
    required: false,
  },
});

const numberRef = ref(null);
let hasAnimatedInitial = ref(false);

// Parse the number, handling both string and number inputs
const parsedNumber = computed(() => {
  if (typeof props.number === 'number') {
    return props.number;
  }
  // Remove commas and convert to number (use parseFloat for decimals)
  return parseFloat(props.number.replace(/,/g, ''));
});

const setupScrollTrigger = () => {
    // if (!props.trigger) return; // Don't create ScrollTrigger if disabled

    ScrollTrigger.create({
        trigger: props.trigger ? props.trigger : numberRef.value,
        start: 'top 80%',
        onEnter: () => {
            if (!hasAnimatedInitial.value) {
                hasAnimatedInitial.value = true
                setTimeout(() => {
                    animateNumbers(0)
                }, 300)
            }
        },
        onEnterBack: () => {
            if (!hasAnimatedInitial.value) {
                hasAnimatedInitial.value = true
                setTimeout(() => {
                    animateNumbers(0)
                }, 300)
            }
        }
    })
}

const animateNumbers = () => {
    const element = numberRef.value
    if (!element) return

    const targetValue = parsedNumber.value

    gsap.fromTo(
        element,
        {
            textContent: 0,
        },
        {
            textContent: targetValue,
            duration: 2.5,
            ease: 'power2.out',
            snap: { textContent: 1 },
            stagger: 0.1,
            onUpdate: function () {
                const currentValue = Math.round(this.targets()[0].textContent)
                const formattedValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                element.textContent = formattedValue
            },
        },
    )
}

onMounted(async () => {
    await nextTick()
    setupScrollTrigger()
});

defineExpose({
  numberRef,
  animateNumbers
});
</script>

<template>
  <div class="numbers__result">
    <div class="numbers__result_title">{{ title }}</div>
    <div class="numbers__result_number-wrapper">
      <div ref="numberRef" class="numbers__result_number" :data-number="parsedNumber">0</div>
      <span class="plus" v-if="plus">+</span>
    </div>
    <div class="numbers__result_text">{{ text }}</div>
  </div>
</template>

<style scoped>
.numbers__result{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: var(--off-white);
  z-index: 2;
}

.numbers__result_title{
  font-size: 24px;
  font-weight: 600;
}

.numbers__result_number-wrapper{
  display: flex;
  align-items: center;
  gap: 4px;
}

.numbers__result_number{
  font-size: 40px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
}

.numbers__result_number-wrapper span{
  font-size: 40px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
}

.numbers__result_text{
  font-size: 18px;
  font-weight: 600;
  color: var(--off-white_50);
}

@media(min-width: 992px){
  .numbers__result{
    padding: 70px 0;
  }
  .numbers__result_title{
    font-size: 28px;
  }
  .numbers__result_number,
  .numbers__result_number-wrapper span{
    font-size: 48px;
  }
}
</style>
