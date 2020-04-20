<template>
    <div id="mycomp">
        <hr>
        <h1>This is my component</h1>
        <h2> {{ subtitle }}</h2>
        <hr>
    </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
      subtitle: 'This is the subtitle'
    };
  }
};
</script>
