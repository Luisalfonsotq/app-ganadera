// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // RuntimeConfig para exponer variables de entorno
  runtimeConfig: {
    public: {
      // Esta variable leerá NUXT_PUBLIC_API_BASE_URL del .env
      apiBaseUrl: ''
    }
  }
})