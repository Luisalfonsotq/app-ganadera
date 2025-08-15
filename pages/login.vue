<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded">
    <h1 class="text-xl font-bold mb-4">Iniciar Sesión</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" class="border p-2 w-full mb-2" />
      <input v-model="password" type="password" placeholder="Contraseña" class="border p-2 w-full mb-4" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Entrar</button>
    </form>
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

async function login() {
  error.value = '';
  try {
    const res = await fetch('http://localhost:3001/auth/login', { // ⚠️ URL ajustada a 3001
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    });

    if (!res.ok) {
      throw new Error('Credenciales inválidas');
    }

    // Ya no necesitas manejar la respuesta, la cookie se establece automáticamente
    // Solo verifica que la respuesta fue exitosa y redirige
    router.push('/admin');
  } catch (err) {
    error.value = 'Credenciales incorrectas';
  }
}
</script>