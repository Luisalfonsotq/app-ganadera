<template>
  <div class="flex min-h-screen bg-white flex-col">
    <!-- Header -->
    <header class="bg-primary-blanco shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 justify-between">
        <nav class="md:flex gap-2">
          <!-- Icons: menú -->
          <button class="">
            <i-tabler-menu-2 class="w-8 h-8 text-primary-verde hover:text-black transition" />
          </button>

          <NuxtLink to="/" class="text-primary-verde hover:text-black font-bold text-2xl">
            <button to="/">HERDIX</button>
          </NuxtLink>
        </nav>

        <nav class="flex gap-2 justify-end md:flex space-x-2 items-center">
          <NuxtLink to="/crear" class="hover:text-red-500 ">
            <button class="bg-primary-verde rounded-3xl p-2 font-bold text-white">+ Crear</button>
          </NuxtLink>

          <button>
            <i-tabler:bell class="w-8 h-8 text-primary-verde hover:text-black transition" />
          </button>
        </nav>
      </div>
    </header>

    <!-- Contenido -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-primary-verde text-white py-6 font-bold text-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-xl"> &copy; {{ new Date().getFullYear() }} Herdix. Todos los derechos reservados.</p>
      </div>

    </footer>
  </div>
</template>
