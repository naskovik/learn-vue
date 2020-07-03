<template>
  <div id="slider" :class="{
    'slider-big': showBtn,
    'slider-small': !showBtn
  }">
    <h1>{{ text }}</h1>
    <router-link to="/blog" class="btn-white" v-if="showBtn">See blog</router-link>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['text', 'showBtn']
};
</script>
