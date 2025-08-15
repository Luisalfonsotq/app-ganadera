<template>
  <div class="flex min-h-screen bg-terciario-gris flex-col">
    <!-- Header -->
    <header class="bg-primary-blanco py-4 shadow-md">
      <div class="container mx-auto px-4 flex  items-center gap-2">
        <!-- Tabler Icons: menú -->
        <i-tabler-menu-2 class="w-8 h-8 text-purple-600" />
        <NuxtLink to="/" class="text-primary-verde hover:text-red-500"> 
          <button to="/">HERDIX</button>
        </NuxtLink>

        <nav class="flex gap-4">
          <NuxtLink to="/crear" class="hover:text-red-500 ">
            <button class="bg-primary-verde rounded-xl p-2 font-bold text-white">+ Crear</button>
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Contenido -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-primary-verde text-white py-4 text-center">
      <p class="text-sm">© {{ new Date().getFullYear() }} Herdix. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

