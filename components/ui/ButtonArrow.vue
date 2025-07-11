<script setup>
  const props = defineProps({
    href: String,
    title: String,
    classes: String,
  });
</script>

<template>
  <a :href="href" :class="['cssbuttons-io-button', classes]">
  {{ title }}
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</a>
</template>

<style scoped>
/* From Uiverse.io by adamgiebl */ 
.cssbuttons-io-button {
  background: var(--accent-blue);
  color: var(--off-white);
  font-family: 'Montserrat', sans-serif;
  padding-block: var(--button-padding-block);
  padding-inline: var(--button-padding-inline);
  
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  font-style: italic;
  text-wrap: nowrap;

  border-radius: var(--button-border-radius);
  border: none;

  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  
  padding-right: 3.3em;
  cursor: pointer;
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em var(--accent-blue);
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: var(--accent-blue);
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}
</style>