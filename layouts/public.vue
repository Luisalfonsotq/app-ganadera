<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-primary-blanco text-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between  items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex  space-x-2">
          <span class="font-bold text-2xl text-primary-verde hover:text-black transition">HERDIX</span>
        </NuxtLink>

        <!-- Links -->
        <nav class="md:flex space-x-2 flex justify-end gap-2 items-center">
          <NuxtLink to="/about" class="font-bold text-primary-verde hover:text-black">
            Nosotros
          </NuxtLink>

          <!-- Botón Login -->
          <NuxtLink to="/login"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl bg-green text-white-700 transition">
            Iniciar sesión
          </NuxtLink>

          <!-- Botón registrarse -->
          <NuxtLink to="/register"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl bg-green text-white-700 transition">
            Crear cuenta
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Contenido dinámico -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-primary-verde text-white font-bold py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-xl">&copy; {{ new Date().getFullYear() }} Herdix. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>
