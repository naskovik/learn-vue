<template>
  <header id="header">
    <div class="center">
      <div id="logo">
        <img src="../assets/logo.png" alt="logo">
        <span id="brand">
          <strong>Curso</strong>Vue
        </span>
      </div>
      <nav id="menu">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="formulario.html">Formulario</a></li>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
};
</script>
