import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    quality: 80,
    format: ['avif', 'webp', 'jpeg', 'jpg', 'png', 'gif'],
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },
  css: ['~/assets/css/main.css', 'boxicons/css/boxicons.min.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    ['@nuxtjs/google-fonts', {
      display: 'swap',
      families: {
        Montserrat: {
          wght: [100, 300, 400, 500, 600, 700, 800, 900],
          ital: [100, 300, 400, 500, 600, 700, 800, 900],
        },
        Syne: [400, 500, 600, 700, 800],
      }
    }],
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'nuxt-viewport'
  ]
})