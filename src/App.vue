<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
      <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import MyComponent from './components/MyComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import LastArticles from './components/LastArticles.vue';
import FooterComponent from './components/FooterComponent.vue';

@Component({
  components: {
    HeaderComponent,
    FooterComponent
  }
})
export default class App extends Vue {}
</script>

<style>

@import './assets/css/styles.css';
</style>
