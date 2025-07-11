<script setup>
import { ref } from 'vue'
import Filters from '@/components/filters/Filters.vue';
import SectionTitle from '@/components/SectionTitle.vue';


// Reactive data for filter selection
const selectedCaseIndex = ref(0)

// Reactive data for open question (only one can be open at a time)
const openQuestionIndex = ref(0)

// Method to handle filter selection
const selectCase = (index) => {
  selectedCaseIndex.value = index
  // Reset open question to first one when changing filters
  openQuestionIndex.value = 0
}

// Method to toggle question open/closed
const toggleQuestion = (index) => {
  openQuestionIndex.value = openQuestionIndex.value === index ? -1 : index
}


const filters = [
  {
    title: 'Algemene vragen'
  },
  {
    title: 'Samenwerken'
  },
  {
    title: 'Kosten'
  }
]

const faq = [
  {
    title: 'Algemene vragen',
    questions: [
      {question: 'Wat doet ClickTok precies?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
      {question: 'Werkt ClickTok alleen met TikTok?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
      {question: 'Hoe verloopt een samenwerking met jullie?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
      {question: 'Doen jullie ook de productie zelf?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
      {question: 'Wat kost een samenwerking met ClickTok?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
    ]
  },
  {
    title: 'Samenwerken',
    questions: [
      {question: 'Hoe verloopt een samenwerking met jullie?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
      {question: 'Doen jullie ook de productie zelf?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
      {question: 'Wat kost een samenwerking met ClickTok?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
    ]
  },
  {
    title: 'Kosten',
    questions: [
      {question: 'Wat doet ClickTok precies?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
      {question: 'Doen jullie ook de productie zelf?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
      {question: 'Wat kost een samenwerking met ClickTok?', answer: 'ClickTok is een platform dat je helpt om je merk op TikTok te promoten.'},
    ]
  }

]

</script>

<template>
  <section class="faq__section">
    <div class="container">
      <div class="title__wrap">
        <SectionTitle title="FAQ" />
      </div>
    </div>
      <div class="faq__wrap">
        <Filters :filters="filters" :selectedIndex="selectedCaseIndex" @filterChange="selectCase" />
        <div class="container">
          <div class="faq__content">
            <div class="faq__item-wrap">
              <div class="faq__item" v-for="(item, index) in faq[selectedCaseIndex].questions" :key="item.question">
                <div 
                  class="faq__item-title-wrap" 
                  :class="{ 'faq__item-title-wrap--open': openQuestionIndex === index }"
                  @click="toggleQuestion(index)"
                >
                  <h3 class="faq__item-title">{{ item.question }}</h3>
                  <i 
                    class="bx bx-chevron-down"
                    :class="{ 'faq__item-icon--rotated': openQuestionIndex === index }"
                  ></i>
                </div>
                <div 
                  class="faq__item-answer-wrap"
                  :class="{ 'faq__item-answer-wrap--open': openQuestionIndex === index }"
                >
                  <p class="faq__item-answer">{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </section>
</template>

<style scoped>
.title__wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.faq__wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  color: var(--off-white);
}

.faq__content{
  display: flex;
  flex-direction: column;
  gap: 56px;
  justify-content: center;
  align-items: center;
}

.faq__item-wrap{
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 100%;
}

.faq__item{
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq__item-title-wrap{
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq__item-title-wrap:hover {
  opacity: 0.8;
}

.faq__item-title-wrap i {
  font-size: 44px;
  transition: transform 0.3s ease;
}

.faq__item-icon--rotated {
  transform: rotate(180deg);
}

.faq__item-title{
  font-size: 32px;
  font-weight: 600;
}

.faq__item-answer-wrap {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq__item-answer-wrap--open {
  max-height: 200px;
}

.faq__item-answer{
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  border-bottom: 1px solid var(--off-white);
  padding-bottom: 24px;
}

@media (max-width: 768px) {
  .faq__wrap{
    gap: 24px;
  }
  .faq__item-title{
    font-size: 18px;
  }
  .faq__item-title-wrap i {
    font-size: 24px;
  }
  .faq__item-answer{
    font-size: 14px;
  }
}

</style>