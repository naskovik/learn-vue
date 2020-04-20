<template>
  <section id="content">
    <h2 class="subheader">Last articles</h2>
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img src="../assets/logo.png" alt="Vue icon">
        </div>
        <h2>Test article</h2>
        <span class="date">5 minutes ago</span>
        <a href="#">Read more</a>
        <div class="clearfix"></div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LastArticles'
};
</script>
