<template>
  <div>
    <!--
      El componente <NuxtPage /> es fundamental.
      Renderiza la página actual basada en la ruta URL,
      como 'register.vue', 'login.vue', o 'index.vue'.
    -->
    <NuxtPage />
  </div>
</template>

<style>
/*
  Aquí definimos los estilos globales que se aplican a toda la aplicación.
  Puedes modificar estos estilos para personalizar la apariencia de tu app.
*/

/* Resetea el margen y el padding por defecto del navegador */
html, body {
  margin: 0;
  padding: 0;
}

/* Establece una fuente por defecto para todo el cuerpo de la página */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
