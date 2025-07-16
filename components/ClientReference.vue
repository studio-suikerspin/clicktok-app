<script setup>
import ReviewCard from "./ReviewCard.vue";

defineProps({
  reference: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="review border-radius">
    <div class="review__content" v-text="reference.content" />

    <div class="review__person">
      <div class="person__image border-radius">
        <img :src="reference.avatar">
      </div>

      <div class="person__info">
        <div class="person__name" v-text="reference.name" />
        <div class="person__company" v-text="reference.company" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.review {
  display: flex;
  max-width: 570px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;

  background: var(--accent-dark-purple);

  margin-inline: auto;
}

.review__pixels {
  display: flex;
  align-items: center;
  gap: 10px;
}

.review__pixel {
  height: 16px;
  width: 33px;
}

.review__content {
  color: var(--off-white);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.review__person {
  display: flex;
  align-items: center;
  gap: 18px;
}

.person__image {
  width: 72px;
  height: 82px;
  overflow: hidden;
}

.person__image img {
  object-fit: cover;
  height: 100%;
}

.person__info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.person__name {
  color: var(--off-white);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.person__company {
  color: var(--off-white_50);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.reference {
  position: relative;
  overflow: clip;

  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  padding-inline: 24px;
  padding-block: 48px;
  max-width: 890px;
  width: 100%;

  background: var(--accent-dark-purple);

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
  color: var(--White_off, #fdfdfd);
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
