<template>
  <div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4 text-center text-gray-800">Perfil del Usuario</h1>

    <!-- Mensaje de carga mientras se obtienen los datos -->
    <div v-if="pending" class="text-center text-gray-500">
      <p>Cargando el perfil...</p>
    </div>

    <!-- Muestra un mensaje de error si la carga falla -->
    <div v-else-if="error" class="text-center text-red-500">
      <p>Error: {{ error }}</p>
      <p class="mt-2">
        Por favor, <a href="/login" class="text-blue-500 hover:underline">inicia sesión</a>
      </p>
    </div>

    <!-- Muestra el perfil si los datos se cargan correctamente -->
    <div v-else-if="usuario" class="space-y-4">
      <div class="p-4 bg-gray-50 rounded-lg">
        <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
        <p><strong>Email:</strong> {{ usuario.email }}</p>
        <p><strong>Rol:</strong> {{ usuario.rol }}</p>
      </div>
      <!-- Aquí se pueden cargar otros elementos del perfil -->
    </div>

    <!-- Muestra un mensaje en caso de no tener datos del usuario -->
    <div v-else class="text-center text-gray-500">
      <p>No se encontraron datos de usuario.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useApi } from '~/composables/useApi';

const usuario = ref(null);

// ** CAMBIO CLAVE: Usa desestructuración y un watcher
const { data, pending, error } = useApi('/auth/profile');

// Observa los cambios en `data`, `pending`, y `error`
watchEffect(() => {
  if (data.value) {
    usuario.value = data.value;
  }
});
</script>
