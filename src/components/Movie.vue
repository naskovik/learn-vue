<template>
  <article class="article-item">
    <div class="image-wrap">
      <img width="132px" :src="movie.image" :alt="movie.title" :title="movie.title">
    </div>

    <h2>{{ movie.title }}</h2>
    <span class="date yeargreen">{{ movie.year }}</span>
    <a href="#">Read more</a>

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: 'Movie',
  props: ['movie']
}
</script>
