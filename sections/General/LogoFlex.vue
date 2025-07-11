<script setup>

const props = defineProps({
  logos: {
    type: Array,
    required: true,
    default: () => [],
  },
  title: {
    type: String,
    required: false,
    default: null,
  },
});

const logos = [
  {
    image: '/images/logos/jumbo-logo.svg',
    title: 'Jumbo',
  },
  {
    image: '/images/logos/nubikk.svg',
    title: 'Nubikk',
  },
  {
    image: '/images/logos/logo-happn.png',
    title: 'Happn',
  },
  {
    image: '/images/logos/logo-mobielnl.svg',
    title: 'Mobiel.nl',
  },
  {
    image: '/images/logos/logo2.svg',
    title: 'Logo 2',
  },
  {
    image: '/images/logos/logo1.webp',
    title: 'Logo 1',
  },
  {
    image: '/images/logos/logo10.webp',
    title: 'Logo 10',
  },
  {
    image: '/images/logos/logo-mad-science.png',
    title: 'Logo Mad Science',
  },
];

</script>

<template>
  <div class="logo__flex">
    <div class="container">
      <div class="logo__flex_inner">
        <div v-if="title" class="logo__flex_title" v-html="title"></div>
        
        <div class="logo__wrapper">
          <NuxtImg v-for="logo in logos" :src="logo.image" :alt="logo.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.logo__flex_inner{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.logo__flex_title{
  color: var(--off-white);
  text-align: center;
  font-family: Syne;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: clamp(2.25rem, .7222rem + 4.8889vw, 5rem);
  opacity: 1;
}

.logo__flex_title span{
  color: var(--accent-blue);
}

@media(max-width: 992px){
  .logo__flex_title{
    font-size: 48px;
    line-height: 62px;
  }
}


.logo__flex{
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo__wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
}

.logo__wrapper img{
  width: 100px;
}

@media(max-width: 767px) {
  .logo__wrapper{
    justify-content: center;
  }
  .logo__wrapper img{
    width: 60px;
  }
}

</style>