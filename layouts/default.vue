<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <header class="bg-white-600 py-4 shadow">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <NuxtLink to="/" class="hover:underline">HERDIX</NuxtLink>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <!--  -->
        <nav class="flex gap-4">
          <NuxtLink to="/crear" class="hover:underline">+ Crear</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Contenido -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-green-800 text-white py-4 text-center">
      <p class="text-sm">© {{ new Date().getFullYear() }} App Ganadera. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>


