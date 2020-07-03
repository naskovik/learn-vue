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
          <li><router-link active-class="active" to="/last-articles">Last Articles</router-link></li>
          <li><router-link active-class="active" to="/blog">Blog</router-link></li>
          <li><router-link active-class="active" to="/page">Page</router-link></li>
          <li><router-link active-class="active" to="/movies">Movies</router-link></li>
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
