<template>
  <div class="general">
    <Slider text="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Slider from './Slider.vue';
export default {
  name: 'Blog',
  components: {
    Sidebar,
    Slider
  }
};
</script>
