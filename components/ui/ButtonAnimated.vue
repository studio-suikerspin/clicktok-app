<script setup>
const props = defineProps({
  text: String,
  href: String,
  variant: String,
  fullWidth: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="btn-group">
    <div :class="`btn-group__col ${fullWidth ? 'full-width' : ''}`">
      <a :href="href" :class="`btn-bounce ${variant || ''}`">
        <div class="btn-bounce-bg"></div>
        <div class="btn-bounce-text__wrap">
          <span class="btn-bounce-text">{{ text }}</span>
        </div>
      </a>
    </div>

  </div>
</template>

<style>
:root{
  --ease-elastic: linear(0, 0.55 7.5%, 0.85 12%, 0.95 14%, 1.03 16.5%, 1.09 20%, 1.13 22%, 1.14 23%, 1.15 24.5%, 1.15 26%, 1.13 28%, 1.11 31%, 1.05 39%, 1.02 43%, 0.99 47%, 0.98 52%, 0.97 59%, 1.002 81%, 1);
}

.btn-group {
  grid-column-gap: 3em;
  grid-row-gap: 3em;
  /* justify-content: center; */
  align-items: flex-start;
  display: flex;
}

.btn-group__col.full-width{
  width: 100%;
}

.btn-bounce {
  color: var(--accent-dark-purple);
  font-weight: 600;
  font-size: 16px;
  font-style: italic;
  padding-left: 1em;
  padding-right: 1em;
  font-size: 1em;
  text-decoration: none;
  position: relative;
  display: inline-block;
  width: 100%;
}

@media(max-width: 767px){
  .btn-bounce-text__wrap{
    padding-top: 1em;
    padding-bottom: 1em;
  }
}

/* Default variant (filled) */
.btn-bounce {
  color: var(--accent-dark-purple);
  font-weight: 600;
  font-size: 16px;
  font-style: italic;
  padding-left: 1em;
  padding-right: 1em;
  text-decoration: none;
  position: relative;
  display: inline-block;
  width: 100%;
}

/* Secondary variant (outline) */
.btn-bounce.secondary {
  color: var(--off-white);
}

.btn-bounce.secondary .btn-bounce-bg {
  background-color: transparent;
  border: 2px solid var(--off-white);
}

/* Blue variant */
.btn-bounce.blue {
  color: var(--off-white);
}

.btn-bounce.blue .btn-bounce-bg {
  background-color: var(--accent-blue);
}

.btn-bounce-bg {
  z-index: 0;
  background-color: var(--off-white);
  border-radius: 100em;
  position: absolute;
  inset: 0%;
}

.btn-bounce-bg.is--secondary {
  background-color: #55db9c26;
  border: 1px solid #55db9c40;
}

.btn-bounce-text {
  z-index: 1;
  display: block;
  position: relative;
  text-align: center;
}

.btn-bounce-text__wrap {
  padding-top: 1.25em;
  padding-bottom: 1.25em;
  overflow: hidden;
}

/* Only apply hover animations if they are actually not supported */
@media (hover:hover) and (pointer:fine){

  .btn-bounce,
  .btn-bounce-text,
  .btn-bounce-text__wrap{
    transition: transform 0.65s var(--ease-elastic);
  }
  
  /* Fake a duplicate text element using text shadow without blur  */
  /* We save the distance in a variable for easy use in the CSS animation */
  .btn-bounce-text{
    --text-duplicate-distance: 3em;
    text-shadow: 0px var(--text-duplicate-distance) currentColor;
  }
  
  /* Scale down the button and rotate it slightly */
  .btn-bounce:hover { transform: scale(0.92) rotate(-3deg); }
  
  /* Rotate the text wrapper in the opposite direction so it appears straight */
  .btn-bounce:hover .btn-bounce-text__wrap{ transform: rotate(3deg); }
  
  /* Move up the text span to reveal its text-shadow */
  .btn-bounce:hover .btn-bounce-text{ transform: translate(0px, calc(-1 * var(--text-duplicate-distance))); }

}
</style>