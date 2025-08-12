<template>
  <div>
    <!-- Hero -->
    <section class="bg-green-700 text-white py-20">
      <div class="max-w-6xl mx-auto text-center px-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Gestión Inteligente de Ganado Bovino
        </h1>
        <p class="text-lg md:text-xl mb-6">
          Administra fincas, controla potreros, registra eventos y optimiza la crianza de tu ganado.
        </p>
        <!-- <NuxtLink to="/login" class="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition">
          Iniciar Sesión
        </NuxtLink> -->
        <div class="prueba text-white p-4">
          Botón azul primario
        </div>
      </div>
    </section>

    <!-- Roles -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Roles en la plataforma</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="font-bold text-lg mb-2">Administrador</h3>
            <p>Gestiona usuarios, asigna roles y supervisa todas las operaciones.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="font-bold text-lg mb-2">Supervisor</h3>
            <p>Supervisa potreros, controla actividades y coordina el equipo.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="font-bold text-lg mb-2">Veterinario</h3>
            <p>Registra controles sanitarios y seguimiento de la salud animal.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="font-bold text-lg mb-2">Colaborador</h3>
            <p>Registra eventos y apoya las labores diarias de la finca.</p>
          <button class="prueba">hola</button>

          </div>
        </div>
      </div>
    </section>

    <!-- Funcionalidades -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Funcionalidades clave</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-green-50 p-6 rounded-lg shadow">
            <h3 class="font-bold mb-2">Gestión de fincas y potreros</h3>
            <p>Organiza la información de tus terrenos, pastos y ocupaciones.</p>
          </div>
          <div class="bg-green-50 p-6 rounded-lg shadow">
            <h3 class="font-bold mb-2">Control sanitario</h3>
            <p>Registra vacunas, medicamentos y revisiones veterinarias.</p>
          </div>
          <div class="bg-green-50 p-6 rounded-lg shadow">
            <h3 class="font-bold mb-2">Registro de eventos</h3>
            <p>Documenta nacimientos, ventas y cualquier evento importante.</p>
          </div>
          <div class="bg-green-50 p-6 rounded-lg shadow">
            <h3 class="font-bold mb-2">Control por roles</h3>
            <p>Accesos personalizados según el rol asignado en la plataforma.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="bg-green-700 text-white py-12 text-center">
      <h2 class="text-3xl font-bold mb-4">Comienza a gestionar tu ganado hoy</h2>

    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'public'
})
</script>

<style scoped>
.prueba{
  color: var(--primary-verde);
  background-color: var(--primary-marron);
}
</style>
