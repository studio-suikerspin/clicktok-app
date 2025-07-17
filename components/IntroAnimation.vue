<script setup>
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { nextTick, onMounted, ref } from "vue";

const intro = ref(null);
const introText = ref(null);

let timeline = null;
let splitInstance = null;

const animationConfig = {
  lines: {
    duration: 0.1,
    stagger: 0.1,
    delay: 0.5,
    y: 40,
  },
  chars: {
    duration: 0.3,
    stagger: 0.1,
    delay: 0.5,
    ease: "expo.inOut",
  },
  fadeOut: {
    duration: 0.2,
    delay: 0.5,
  },
};

const cleanup = () => {
  if (timeline) {
    timeline.kill();
    timeline = null;
  }
  if (splitInstance) {
    splitInstance.revert();
    splitInstance = null;
  }
};

const createIntroAnimation = async () => {
  if (!introText.value || !intro.value) return;

  cleanup();

  splitInstance = SplitText.create(introText.value, {
    type: "lines, words, chars",
    linesClass: "intro-line",
  });

  gsap.set(introText.value, { autoAlpha: 1 })

  timeline = gsap.timeline({ paused: true })
    .fromTo(
      splitInstance.lines,
      {
        autoAlpha: 0,
        y: animationConfig.lines.y,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: animationConfig.lines.duration,
        stagger: animationConfig.lines.stagger,
        delay: animationConfig.lines.delay,
      }
    )
    .fromTo(
      splitInstance.chars,
      {
        autoAlpha: 0.3,
      },
      {
        autoAlpha: 1,
        stagger: animationConfig.chars.stagger,
        duration: animationConfig.chars.duration,
        ease: animationConfig.chars.ease,
        delay: animationConfig.chars.delay,
      }
    )
    .to(intro.value, {
      autoAlpha: 0,
      duration: animationConfig.fadeOut.duration,
      delay: animationConfig.fadeOut.delay,
      onComplete: () => {
        if (intro.value) {
          intro.value.style.display = "none";
        }
      },
    });

  timeline.play();
};

onMounted(async () => {
  try {
    await nextTick();
    await createIntroAnimation();
  } catch (error) {
    console.error("Animation initialization failed:", error);
    // Fallback: just hide the intro after a delay
    setTimeout(() => {
      if (intro.value) {
        intro.value.style.display = "none";
      }
    }, 2000);
  }
});

onUnmounted(() => {
  cleanup();
});
</script>

<template>
    <div ref="intro" class="intro">
      <div class="container">
        <div ref="introText" class="intro__text title-font">
          <div class="intro__text-line-first">Full service</div>
          <div class="intro__text-line-second">TikTok Agency</div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.intro {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  /* width: 100vw; */
  width: 100%;
  /* height: 100vh; */
  height: 100%;

  background: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  z-index: 999999;
}

.intro__text {
  position: relative;
  color: var(--off-white);
  font-size: 24px;

  overflow: visible;
  width: 100%;

  text-wrap: balance;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: italic;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 40px;

  opacity: 0;
  visibility: hidden;
}

.intro__text-line-first {
  font-size: 40px;
  font-family: "Syne", sans-serif;
  font-style: normal;
  white-space: nowrap;
}

.intro__text-line-second {
  font-size: 150px;
  max-width: 800px;
  letter-spacing: -3px;
  line-height: 90px;
  font-weight: 900;
}

@media screen and (max-width: 767px) {
  .intro__text-line-first {
    font-size: 24px;
  }

  .intro__text-line-second {
    font-size: 80px;
    max-width: 100%;
    line-height: 35px;
  }
}
</style>
