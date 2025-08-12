// nuxt.config.ts
export default defineNuxtConfig({

  css: ['@/assets/css/main.css'],

  // Elimina 'tailwindcss' y 'autoprefixer' de aquí.
  // El módulo de Tailwind ya se encarga de ellos.
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },

  // Mantén el módulo de Tailwind, que es la forma correcta.
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