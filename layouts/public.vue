<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-green-700 text-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="text-2xl">🐄</span>
          <span class="font-bold text-lg">BovinoApp</span>
        </NuxtLink>

        <!-- Links -->
        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="hover:text-green-200 transition">Inicio</NuxtLink>
          <NuxtLink to="/features" class="hover:text-green-200 transition">Características</NuxtLink>
          <NuxtLink to="/about" class="hover:text-green-200 transition">Nosotros</NuxtLink>
        </nav>

        <!-- Botón Login -->
        <NuxtLink
          to="/login"
          class="bg-white text-green-700 px-4 py-2 rounded hover:bg-green-100 transition"
        >
          Iniciar sesión
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
