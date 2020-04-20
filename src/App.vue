<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <div class="center">
      <!----<LastArticles></LastArticles>-->
      <router-view></router-view>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import MyComponent from './components/MyComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import Slider from './components/Slider.vue';
import Sidebar from './components/Sidebar.vue';
import LastArticles from './components/LastArticles.vue';
import FooterComponent from './components/FooterComponent.vue';

@Component({
  components: {
    HelloWorld,
    MyComponent,
    HeaderComponent,
    Slider,
    Sidebar,
    LastArticles,
    FooterComponent
  }
})
export default class App extends Vue {}
</script>

<style>

@import './assets/css/styles.css';
</style>
