export const useGsap = () => {
  const nuxtApp = useNuxtApp();

  return {
    gsap: nuxtApp.$gsap,
    ScrollTrigger: nuxtApp.$ScrollTrigger,
    SplitText: nuxtApp.$SplitText,
    TextPlugin: nuxtApp.$TextPlugin
  }
}

export const waitForRefs = (...refs: Array<Ref<HTMLElement | null>>) => {
  const refsAreReady = ref(false);

  onMounted(async () => {
    await nextTick();

    const checkReferences = () => refs.every(ref => ref.value !== null);

    while (!checkReferences()) {
      await nextTick();
    }

    refsAreReady.value = true;
  })

  return { refsAreReady };
}