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
          <li><router-link to="/last-articles">Last Articles</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/page">Page</router-link></li>
          <li><router-link to="/form">Form</router-link></li>
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
