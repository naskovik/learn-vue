<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Movies</h2>
        <div id="articles">
          <div v-for="movie in movies" :key="movie.title">
            <Movie :movie="movie"></Movie>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Movie from './Movie.vue';
import Sidebar from './Sidebar.vue';
export default {
  name: 'movies',
  components: {
    Movie,
    Sidebar
  },
  data() {
    return {
      movies: [
        {
          title: 'The dark Knight',
          year: 2008,
          image:
            'https://lh3.googleusercontent.com/auIs5tjWlLYaFPGClZOJ7m5YVbnX6uBvz0X02r8TkwFKdzE53ww2MqWSS9gU0YNqoYwvpg'
        },
        {
          title: 'Gran Torino',
          year: 2008,
          image:
            'https://i.pinimg.com/564x/6f/1e/61/6f1e612bb3ca87becb4f7b90f961e4ce.jpg'
        },
        {
          title: 'Kimi no Na wa',
          year: 2016,
          image:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfkTPBXyEsoFX86C-YJGLD06qZXkyTyCPFcxf15rR552YEiUmC'
        }
      ]
    };
  }
};
</script>
