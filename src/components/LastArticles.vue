<template>
  <div class="general">
    <Slider text="Learning VueJS" showBtn="true"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Last articles</h2>
        <div id="articles" v-if="books">
          <article class="article-item" v-for="book in books" :key="book._id">
            <div class="image-wrap">
              <img :src="`http://localhost:4092/api/get-image/${book.image}`" :alt="book.title" />
            </div>
            <h2>{{ book.title }}</h2>
            <span class="date">{{ book.date }}</span>
            <a href="#">Read more</a>
            <div class="clearfix"></div>
          </article>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Slider from './Slider.vue';
import Sidebar from './Sidebar.vue';

export default {
  name: 'LastArticles',
  components: {
    Slider,
    Sidebar
  },
  mounted() {
    this.getBooks();
  },
  data() {
    return {
      books: []
    }
  },
  methods: {
    getBooks() {
      axios.get('http://localhost:4092/api/books')
        .then(res => {
          this.books = res.data.books;
          /* Debugging line */
          // console.log(this.books);
        });
    }
  }
};
</script>
