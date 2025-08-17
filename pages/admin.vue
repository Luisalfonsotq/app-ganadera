<template>
  <div class="max-w-lg mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4">Perfil del Usuario</h1>
    <div v-if="pending">
      <p>Cargando el perfil...</p>
    </div>

    <div v-else-if="error">
      <p>Error al cargar el perfil. Por favor, intente de nuevo</p>
    </div>

    <div v-else-if="usuario">
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
import { ref} from 'vue';
import { useApi } from '~/composables/useApi';

const usuario = ref(null);
const {data, pending, error} = await useApi('/auth/profile');

if(data.value){
  usuario.value = data.value;
}
</script>
