<template>
  <div class="music-item">
      <!--<img :src="image"/>-->
      <h3>{{ music.title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MusicItem',
  props: [ 'music' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {margin: 0; padding: 0;}

  /*.music-item{*/
    /*border-width: 10px;*/
    /*border-color: #8bff46;*/
    /*background: green;*/
  /*}*/
  .music-item:hover{
    background: #eee;
    cursor: pointer;
  }


  h3 {
    font: 20px/1.5 Helvetica, Verdana, sans-serif;
  }

  li img {
    float: left;
    margin: 0 15px 0 0;
  }

  li {
    font: 200 12px/1.5 Georgia, Times New Roman, serif;
    padding: 10px;
    overflow: auto;
  }
</style>
