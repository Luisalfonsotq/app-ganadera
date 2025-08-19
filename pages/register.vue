<template>
  <div class="flex justify-center items-center min-h-full bg-slate-200 m-2">
    <div class="max-w-full w-[400px] p-8 bg-white rounded-2 shadow-sm">
      <h1 class="text-center text-xl font-bold mb-5">Registrar Usuario</h1>

      <form @submit.prevent="handleRegister" class="flex-col gap-4">
        <div>
          <label for="nombre" class="block font-medium">Nombre</label>
          <input id="nombre" v-model="registerForm.nombre" type="text" class="w-full p-2 border border-solid border-gray-300 rounded-[0.375rem]">
        </div>

        <div>
          <label for="email" class="block font-medium">Email</label>
          <input id="email" v-model="registerForm.email" type="email" class="w-full p-2 border border-solid border-gray-300 rounded-[0.375rem]">
        </div>

        <div>
          <label for="password" class="block font-medium">Contraseña</label>
          <input id="password" v-model="registerForm.password" type="password" class="w-full p-2 border border-solid border-gray-300 rounded-[0.375rem]">
        </div>

        <div class="pb-2">
          <label for="rol" class="block font-medium">Rol</label>
          <select id="rol" v-model="registerForm.rol" class="w-full p-2 border border-solid border-gray-300 rounded-[0.375rem]" required>
            <option value="" disabled>Seleccione su rol</option>
            <option value="administrador">Administrador</option>
            <option value="supervisor">Supervisor</option>
            <option value="veterinario">Veterinario</option>
            <option value="colaborador">Colaborador</option>
          </select>
        </div>

        <button type="submit" class="w-full p-2 bg-primary-verde hover:bg-green-700 text-white font-bold border-none rounded-[0.375rem]">
          Registrarse
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { register } from '~/composables/useAuth.ts';

definePageMeta({
  layout: 'public'
})

const registerForm = reactive({
  nombre: '',
  email: '',
  password: '',
  rol: ''
});

const handleRegister = async () => {
  try {
    await register(registerForm);
    navigateTo('/admin');
  } catch (error) {
    console.log(error.message);
  }
};

watchEffect(() => {
  if(!registerForm){
    // si el usuario no ha seleccionado un rol se puede poner una lógica para evitar que se registre
  }
})
</script>