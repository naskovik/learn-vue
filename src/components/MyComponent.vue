id as div as template= 'mycomp' >
        (This as h1 as hr) is my component < /h1>
        < h2 > {{ subtitle }}(/h2> as )
        <hr>
    (/div> as )
< /template>

< script >
export default {
  name: 'MyComponent',
  data () {
    return {
      subtitle: 'This is the subtitle'
    };
  }
};
/script> as
