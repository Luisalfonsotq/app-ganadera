<template>
  <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f3f4f6;">
    <div style="width: 100%; max-width: 400px; padding: 2rem; background-color: white; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
      <h1 style="text-align: center; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">Registrar Usuario</h1>
      <form @submit.prevent="handleRegister" style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <label for="nombre" style="display: block; font-weight: 500;">Nombre</label>
          <input id="nombre" v-model="registerForm.nombre" type="text" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem;">
        </div>

        <div>
          <label for="email" style="display: block; font-weight: 500;">Email</label>
          <input id="email" v-model="registerForm.email" type="email" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem;">
        </div>

        <div>
          <label for="password" style="display: block; font-weight: 500;">Contraseña</label>
          <input id="password" v-model="registerForm.password" type="password" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem;">
        </div>

        <div>
          <label for="rol" style="display: block; font-weight: 500;">Rol</label>
          <select id="rol" v-model="registerForm.rol" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem;">
            <option value="administrador">Administrador</option>
            <option value="colaborador">Colaborador</option>
          </select>
        </div>

        <button type="submit" style="width: 100%; padding: 0.5rem; background-color:green; color: white; border-radius: 0.375rem; font-weight: bold; border: none; cursor: pointer;">
          Registrarse
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'public'
})
import { register } from '~/composables/useAuth.ts';

const registerForm = reactive({
  nombre: '',
  email: '',
  password: '',
  rol: 'colaborador'
});

const handleRegister = async () => {
  try {
    await register(registerForm);
    navigateTo('/admin');
  } catch (error) {
    alert(error.message);
  }
};
</script>