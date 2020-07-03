<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Movies</h2>

        <div class="about" v-if="aboutMe"><p v-html="aboutMe"></p></div>

        <div class="favourite" v-if="favourite"><h3>Fav movie: {{ favourite.title }}</h3></div>

        <div id="articles">
          <div v-for="movie in upperCaseMovies" :key="movie.title">
            <Movie @favourite="markedFav(movie)" :movie="movie"></Movie>
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
  methods: {
    markedFav(movie) {
      console.log(movie);
      this.favourite = movie;
    }
  },
  computed: {
    upperCaseMovies() {
      const moviesMod = this.movies;
      moviesMod.forEach(movie => {
        movie.title = movie.title.toUpperCase();
      });

      return moviesMod;
    },
    aboutMe() {
      return `${this.myName}  ${this.surname}:<br/>${this.profession} `;
    }
  },
  filters: {
    mayus(value) { return value.toUpperCase(); }
  },
  data() {
    return {
      myName: 'Nazar',
      surname: 'Skoreyko',
      profession: 'Junior programmer',
      favourite: null,
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
