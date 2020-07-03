<template>
  <div class="general">
    <Slider text="This is the fun page" showBtn="true"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">{{ this.name }}</h2>
        <h3>
          <input type="text" v-model="name" />
        </h3>
        <h3>
          <input type="text" v-model="drink" />
        </h3>
        <h4>{{ idFromUrl }}</h4>
        <button class="btn" @click="updateName()">Update name</button>
        <button class="btn" @click="redirectToBlog()">Blog</button>
        <p>My name is {{ name }} and I'm gonna drink a cubata of {{ drink }}</p>
        <ul v-if="drink==='whiskey'">
          <li v-for="whiskey in whiskeys" :key="whiskey">{{ whiskey }}</li>
        </ul>
        <ul v-else-if="drink==='rum'">
          <li v-for="rum in rums" :key="rum">{{ rum }}</li>
        </ul>
        <p v-else>Don't drink That</p>
        <div class="clearfix"></div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from './Slider.vue';
import Sidebar from './Sidebar.vue';
export default {
  name: 'Page',
  components: {
    Slider,
    Sidebar
  },
  mounted() {
    this.idFromUrl = this.$route.params.id;
  },
  created() {
    console.log('Component created');
  },
  updated() {
    console.log('Component updated');
  },
  destroyed() {
    console.log('Component destoryed');
  },
  data() {
    return {
      idFromUrl: null,
      name: '',
      drink: '',
      whiskeys: ['James Webb', 'William Lawson\'s', 'Crockerfields'],
      rums: ['Almirante', 'Almirante extra', 'Almirante elixir']
    };
  },
  methods: {
    updateName() {
      this.name = this.name === '' ? 'Antonio' : this.name;
    },
    redirectToBlog() {
      this.$router.push('/blog');
    }
  }
};
</script>
