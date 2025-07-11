<script setup>
import Button from '@/components/ui/Button.vue'
import GradientBlur from '@/components/GradientBlur.vue'
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const cases = [
    {
        video: '/videos-organic/BANNER_ORGANIC_V1.webm',
        title: 'Nubikk',
        label: 'Organic Campaign',
        subtitle: 'Not just viral',
        content: 'De schoen was binnen no time uitverkocht en werd onderdeel van de cultuur. Zo bouwden we aan merkvoorkeur met het juiste format.',
        stats: [
            {
                title: 'views',
                stat: 1641922,
            },
            {
                title: 'likes',
                stat: 59231,
            },
            {
                title: 'shares',
                stat: 4430,
            },
        ],
    },
    {
        video: '/videos-happn/BANNER_HAPPN_V2-min.webm',
        title: 'Happn',
        subtitle: 'Culture First Content',
        label: 'UGC Ad Creatie',
        content: 'Toen Happn ons benaderde om hun TikTok-content te verzorgen, zagen we een kans om hun energieke en stijlvolle merk op een frisse, speelse manier te vertalen naar shortform videos. Ons doel was duidelijk: de unieke vibe van Happn laten spreken, en tegelijk een jongere doelgroep effectief bereiken. Met creatieve concepten, snelle edits en een scherp oog voor trends creëerden we videos die niet alleen de aandacht trokken, maar ook aansloten bij de lifestyle van Happn fans. Het resultaat? Een stijging in engagement, meer volgers en een boost in merkbeleving – allemaal dankzij content die precies de juiste snaar raakte.',
        stats: [
            {
                title: 'views',
                stat: 1641922,
            },
            {
                title: 'likes',
                stat: 59231,
            },
            {
                title: 'shares',
                stat: 4430,
            },
        ],
    },
    // {
    //     video: '/videos/jumbo-video.webm',
    //     title: 'Cooking Totem',
    //     label: 'Paid advertising',
    //     subtitle: 'Een ware hit op TikTok',
    //     content: 'Toen Nubikk ons benaderde om hun TikTok-content te verzorgen, zagen we een kans om hun energieke en stijlvolle merk op een frisse, speelse manier te vertalen naar shortform videos. Ons doel was duidelijk: de unieke vibe van Nubikk laten spreken, en tegelijk een jongere doelgroep effectief bereiken. Met creatieve concepten, snelle edits en een scherp oog voor trends creëerden we videos die niet alleen de aandacht trokken, maar ook aansloten bij de lifestyle van Nubikk fans. Het resultaat? Een stijging in engagement, meer volgers en een boost in merkbeleving – allemaal dankzij content die precies de juiste snaar raakte.',
    //     stats: [
    //         {
    //             title: 'views',
    //             stat: 1641922,
    //         },
    //         {
    //             title: 'likes',
    //             stat: 59231,
    //         },
    //         {
    //             title: 'videos',
    //             stat: 16,
    //         },
    //     ],
    // },
    // {
    //     video: '/videos/Beren.webm',
    //     title: 'Lomo Moments',
    //     subtitle: 'Een stijlvolle, creatieve campagne',
    //     label: 'Creator Collaborations',
    //     content: 'Toen Lomo Moments ons benaderde om hun TikTok-content te verzorgen, zagen we een kans om hun energieke en stijlvolle merk op een frisse, speelse manier te vertalen naar shortform videos. Ons doel was duidelijk: de unieke vibe van Lomo Moments laten spreken, en tegelijk een jongere doelgroep effectief bereiken. Met creatieve concepten, snelle edits en een scherp oog voor trends creëerden we videos die niet alleen de aandacht trokken, maar ook aansloten bij de lifestyle van Lomo Moments fans. Het resultaat? Een stijging in engagement, meer volgers en een boost in merkbeleving – allemaal dankzij content die precies de juiste snaar raakte.',
    //     stats: [
    //         {
    //             title: 'views',
    //             stat: 1641922,
    //         },
    //         {
    //             title: 'likes',
    //             stat: 59231,
    //         },
    //         {
    //             title: 'shares',
    //             stat: 4430,
    //         },
    //     ],
    // },
]

const selectedCaseIndex = ref(0)
const selectedCase = ref(cases[0])

const animateNumbers = () => {
    const numberElements = document.querySelectorAll('.service__examples__content [data-number]')

    numberElements.forEach((element, index) => {
        const targetValue = selectedCase.value.stats[index]?.stat || 0

        gsap.fromTo(
            element,
            {
                textContent: 0,
            },
            {
                textContent: targetValue,
                duration: 1.5,
                ease: 'power2.out',
                snap: { textContent: 1 },
                stagger: 0.1,
                onUpdate: function () {
                    let currentValue = Math.round(this.targets()[0].textContent)
                    currentValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                    element.textContent = currentValue
                },
            },
        )
    })
}

const selectCase = async (index) => {
    selectedCaseIndex.value = index
    selectedCase.value = cases[index]

    // Wait for DOM update then animate numbers
    await nextTick()
    animateNumbers()

    // Prevent Safari fullscreen issue by temporarily removing autoplay
    const videoElement = document.querySelector('.service__examples__video video')
    if (videoElement) {
        videoElement.pause()
        videoElement.removeAttribute('autoplay')

        // Small delay to ensure the source change is processed
        setTimeout(() => {
            videoElement.setAttribute('autoplay', '')
            videoElement.play().catch(() => {
                // Ignore play errors (autoplay might be blocked)
            })
        }, 100)
    }
}

onMounted(() => {
    // Animate numbers on initial load
    nextTick(() => {
        animateNumbers()
    })

    gsap.fromTo('.service-examples__title',
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.service-examples__title',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // Add ScrollTrigger for the stats animation when component becomes visible
  gsap.fromTo('.service__examples__content',
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.service__examples__content',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          // Animate numbers when the content section becomes visible
          nextTick(() => {
            animateNumbers()
          })
        }
      }
    }
  )
})
</script>

<template>
  <div class="container gradient-blur-wrapper">

    <GradientBlur :width="{ default: '40vw', sm: '50vw' }" :height="{ default: '40vh', sm: '40vh' }" :left="{ default: '-20%', sm: '20%' }" :top="{ default: '30%', sm: '0' }"/>
    <GradientBlur :width="{ default: '40vw', sm: '50vw' }" :height="{ default: '40vh', sm: '40vh' }" :right="{ default: '0%', sm: '20%' }" :bottom="{ default: '10%', sm: '50%' }"/>

    <div class="service-examples__title">
      <h2 class="title-font">We <span class="highlight">implement</span> this in everything we do</h2>
    </div>

    <ul class="filters">
        <li
            class="filter"
            :class="{ active: selectedCaseIndex === 0 }"
            @click="selectCase(0)"
        >
            <span class="filter__number">01</span>
            <span class="filter__title">Organic campaign</span>
        </li>

        <li
            class="filter"
            :class="{ active: selectedCaseIndex === 1 }"
            @click="selectCase(1)"
        >
            <span class="filter__number">02</span>
            <span class="filter__title">UGC ad creatie</span>
        </li>

        <!-- <li
            class="filter"
            :class="{ active: selectedCaseIndex === 1 }"
            @click="selectCase(1)"
        >
            <span class="filter__number">02</span>
            <span class="filter__title">Paid advertising</span>
        </li> -->

        <!-- <li
            class="filter"
            :class="{ active: selectedCaseIndex === 3 }"
            @click="selectCase(3)"
        >
            <span class="filter__number">04</span>
            <span class="filter__title">Creator collaborations</span>
        </li> -->
    </ul>
    <div class="service__examples__content">
      <div class="service__examples__content__item">
        <div class="service__text">
          <div class="service__text__label">{{ selectedCase.label }}</div>
          <div class="service__text__brand">
            {{ selectedCase.title }}
          </div>
          <div class="service__text__description">
            <div class="title">{{ selectedCase.subtitle }}</div>
            {{ selectedCase.content }}
          </div>
          <div class="service__button">
            <Button variant="outline" classes="w-fit"> Bekijk case </Button>
          </div>
          <div class="stats-grid" v-if="selectedCase.stats && selectedCase.stats.length > 0">
              <div class="stats-grid__stat" v-for="stat in selectedCase.stats" :key="stat.title">
                  <div class="stats-grid__stat-title">{{ stat.title }}</div>
                  <div class="stats-grid__stat-block" style="background-image: url('/images/label-gradient.svg')">
                      <span data-number="{{ stat.stat }}">{{ stat.stat }}</span>
                      +
                  </div>
              </div>
          </div>
        </div>
        <div class="service__examples__video border-radius">
            <video :src="selectedCase.video" autoplay muted loop class="border-radius" playsinline webkit-playsinline style="pointer-events: none;"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-examples__title {
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}

.service-examples__title h2 {
  font-size: 80px;
  font-weight: 700;
  color: var(--off-white);
  text-align: center;
  max-width: 1000px;
}

.service-examples__title h2 .highlight {
  color: var(--accent-blue);
}

@media(max-width: 992px) {
  .service-examples__title {
    margin-bottom: 40px;
  }
  .service-examples__title h2 {
    font-size: 32px;
  }
}

.filters {
    display: flex;
    align-items: center;
    padding-block: 20px;

    overflow-x: scroll;
    max-width: 100%;
    width: 100%;
}

.filter {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;

    padding-inline-end: 24px;
    padding-block-end: 30px;
    border-bottom: 1px solid white;

    pointer-events: all;
    cursor: pointer;

    opacity: 0.6;
    transition: all 150ms ease-out;
}

.filter:not(:first-child) {
    padding-inline-start: 24px;
}

.filter.active {
    opacity: 1;
    pointer-events: none;

    transition: all 150ms ease-out;
}

.filter:hover {
    opacity: 1;
    transition: all 150ms ease-out;
}

.filter__number {
    font-family: Montserrat;
    font-size: clamp(1rem, 0.9107rem + 0.2857vw, 1.125rem);
    font-style: italic;
    line-height: normal;

    color: var(--accent-pink);
}

.filter__title {
    color: var(--off-white);
    font-family: Montserrat;
    font-size: clamp(1.125rem, 0.8571rem + 0.8571vw, 1.5rem);
    font-style: italic;
    font-weight: 500;
    line-height: normal;

    text-wrap: nowrap;
}

/* service__examples__content */
.service__examples__content{
  padding: 50px 120px;
}

.service__examples__content__item{
  display: flex;
  gap: 80px;
}

.service__text{
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: var(--off-white);
  flex: 3;
}

.service__text__label{
  font-size: 32px;
  font-weight: 600;
}

.service__text__brand{
  font-size: 48px;
  font-weight: 600;
}

.service__text__description .title{
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 16px;
}

.service__text__description{
  font-size: 16px;
  font-weight: 400;
}

@media(max-width: 992px) {
  .service__examples__content{
    padding: 0;
  }
  .service__examples__content__item{
    flex-direction: column;
    gap: 40px;
  }
  .service__text{
    flex: 1;
    gap: 24px;
  }
  .service__text__label{
    font-size: 24px;
  }
  .service__text__brand{
    font-size: 24px;
  }
  .service__text__description .title{
    font-size: 20px;
  }
  .service__text__description{
    font-size: 14px;
  }
}


/* video */
.service__examples__video{
  flex: 2;
}

.service__examples__video video{
  width: 100%;
  height: 100%;
  object-fit: cover;

  aspect-ratio: 9 / 16;
}

@media(max-width: 992px) {
  .service__examples__video{
    flex: 1;
  }
  .service__examples__video video{
    max-height: 600px;
  }
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
}

.stats-grid__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.stats-grid__stat-title {
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 600;
    font-style: italic;
    color: var(--accent-blue);

    text-transform: capitalize;
}

.stats-grid__stat-block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: 16px;
    border-radius: 8px;

    color: var(--off-white);
    font-size: 14px;
    font-weight: 700;
    font-family: 'Montserrat';
    font-style: italic;

    background-repeat: no-repeat;
    background-size: cover;
}
</style>
