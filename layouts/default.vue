<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <header class="bg-blue-600 text-white py-4 shadow">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1 class="text-lg font-bold">App Ganadera</h1>
        <nav class="flex gap-4">
          <NuxtLink to="/" class="hover:underline">Inicio</NuxtLink>
          <NuxtLink to="/login" class="hover:underline">Login</NuxtLink>
          <NuxtLink to="/register" class="hover:underline">Registro</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Contenido -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4 text-center">
      <p class="text-sm">© {{ new Date().getFullYear() }} App Ganadera. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>
