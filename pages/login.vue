<script setup lang="ts">
definePageMeta({
  layout: 'public'
})

import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
  // Aquí luego conectarás con tu API NestJS
  console.log('Iniciar sesión con', email.value, password.value)
}
</script>

<template>
  <div class="flex justify-center items-center min-h-[80vh] bg-gray-50">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold text-green-700 text-center mb-6">Iniciar Sesión</h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Correo electrónico</label>
          <input
            v-model="email"
            type="email"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-500"
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Contraseña</label>
          <input
            v-model="password"
            type="password"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-500"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
        >
          Ingresar
        </button>
      </form>

      <p class="text-sm text-center mt-4">
        ¿No tienes cuenta?
        <NuxtLink to="/register" class="text-green-700 hover:underline">Regístrate aquí</NuxtLink>
      </p>
    </div>
  </div>
</template>
