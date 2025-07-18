<script setup>
import BlurGlow from '@/components/blur/Blurglow.vue'

</script>

<template>
    <div data-css-marquee="" class="marquee-css section-padding">
      <img src="/images/background__blur-2.webp" class="background__blur_marquee" />
        <div data-css-marquee-list="" class="marquee-css__list">
            <div class="marquee-css__item">
                <h2>We create formats that elevate your brand's voice.</h2>
            </div>
            <div class="marquee-css__item">
                <h2>We create formats that elevate your brand's voice.</h2>
            </div>
            <div class="marquee-css__item">
                <h2>We create formats that elevate your brand's voice.</h2>
            </div>
            <div class="marquee-css__item">
                <h2>We create formats that elevate your brand's voice.</h2>
            </div>  
        </div>
    </div>
</template>

<style>
.marquee-css {
  color: var(--off-white);
  width: 100%;
  max-width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
}

.marquee-css__list {
  flex: none;
  align-items: center;
  display: flex;
  position: relative;
  /* Add this to ensure proper animation */
  white-space: nowrap;
}

.marquee-css__item {
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  flex: 0 0 auto; /* Changed from flex: 0 to flex: 0 0 auto */
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-right: 2em; /* Increased padding for better spacing */
  display: flex;
  white-space: nowrap; /* Ensure text doesn't wrap */
}

.marquee-css__item h2 {
  font-family: 'syne', sans-serif;
  font-size: 60px;
  font-weight: 700;
  white-space: nowrap;
  margin: 0;
  color: #fff;
}

.marquee-css__item-p {
  white-space: nowrap;
  margin-bottom: 0;
  font-size: 1.5em;
  line-height: 1;
}

.marquee-css__item-svg {
  width: 1em;
}

/* CSS Keyframe Animation */
@keyframes translateX { 
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%); /* Changed from -100% to -50% for seamless loop */
  }
}

[data-css-marquee-list] {
  animation: translateX 30s linear infinite; /* Combined properties */
  /* The animation will now loop seamlessly */
}

/* Mobile responsive */
@media (max-width: 992px) {
  .marquee-css__item h2 {
    font-size: 40px;
  }
  
  .marquee-css__item {
    padding-right: 1.5em;
  }
}

.background__blur_marquee{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 60%;
}

@media(max-width: 767px){
  .background__blur_marquee{
    width: 100%;
    height: 100%;
  }
}
</style>

