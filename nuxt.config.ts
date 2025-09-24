import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', ['@nuxtjs/google-fonts', {
    display: 'swap',
    families: {
      Montserrat: {
        wght: [100, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 300, 400, 500, 600, 700, 800, 900],
      },
      Syne: [400, 500, 600, 700, 800],
    }
  }], '@nuxt/icon', '@nuxt/image', '@nuxtjs/color-mode', 'nuxt-viewport', 'nuxt-toast', 'nuxt-gtag', '@vee-validate/nuxt'],
  image: {
    quality: 80,
    format: ['avif', 'webp', 'jpeg', 'jpg', 'png', 'gif'],
    cloudflare: {
      baseURL: 'https://clicktok.suikerspin.studio'
    }
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },
  css: ['~/assets/css/main.css', 'boxicons/css/boxicons.min.css'],
  gtag: {
    id: 'G-810CQ0CV06'
  }
})