<template>
  <div class="max-w-lg mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4">Perfil del Usuario</h1>
    <div v-if="usuario">
      <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
      <p><strong>Email:</strong> {{ usuario.email }}</p>
      <p><strong>Rol:</strong> {{ usuario.rol }}</p>
    </div>
    <div v-else>
      <p>Aquí se dibujarán las cosas que le corresponden a este perfil admin...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const usuario = ref(null);

onMounted(async () => {
  try {
    // Hace una petición al endpoint protegido para obtener los datos del perfil
    const res = await fetch('http://localhost:3001/auth/profile');
    
    if (!res.ok) {
      // Si la petición falla (ej. 401 Unauthorized), el usuario no está autenticado
      throw new Error('No autorizado');
    }

    const data = await res.json();
    usuario.value = data;
  } catch (err) {
    console.error(err);
    // Podrías redirigir al login si falla
  }
});
</script>