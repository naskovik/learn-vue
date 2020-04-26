<template>
  <section id="content">
    <h2 class="subheader">Page</h2>
    <h3>{{ idFromUrl }}</h3>
  </section>
</template>

<script>
export default {
  name: 'Page',
  mounted () {
    this.idFromUrl = this.$route.params.id
  },
  data() {
    return {
      idFromUrl: null
    }
  }
}
</script>
