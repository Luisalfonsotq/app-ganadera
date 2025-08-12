<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white-700 text-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="font-bold text-lg titulo">HERDIX</span>
        </NuxtLink>

        <!-- Links -->
        <nav class="hidden md:flex space-x-6">
          <!-- <NuxtLink to="/features" class="text-green-700 hover:text-red-200 transition">Características</NuxtLink> -->
          <NuxtLink to="/about" class="font-bold nosotros">Nosotros</NuxtLink>
        </nav>

        <!-- Botón Login -->
        <NuxtLink to="/login" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded bg-green text-white-700 transition">
          Iniciar sesión
        </NuxtLink>

        <!-- Botón registrarse -->
        <NuxtLink to="/register" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded bg-green text-white-700 transition">
          Crear cuenta
        </NuxtLink>
      </div>
    </header>

    <!-- Contenido dinámico -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 text-gray-600 py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {{ new Date().getFullYear() }} BovinoApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.titulo {
  color: var(--primary-verde);
}

.nosotros {
  color: var(--primary-verde);
}
</style>
