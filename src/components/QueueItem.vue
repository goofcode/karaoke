<template>
  <div class="QueueItem">
    <img :src="thumbnailUrl">
    <p>{{ title }}</p>
    <button @click="$emit('delete')"><i class="fa fa-close"></i></button>
    <button @click="$emit('move-down')"><i class="fa fa-angle-down"></i></button>
    <button @click="$emit('move-up')"><i class="fa fa-angle-up"></i></button>
  </div>
</template>
<script>
export default {
  name: 'QueueItem',
  props: {
    song: Object
  },
  computed: {
    title: function () {
      return this.song.snippet.title.substring(0, 15) + '...'
    },
    thumbnailUrl: function () {
      return this.song.snippet.thumbnails.default.url
    }
  }
}
</script>
<style scoped>
  .QueueItem{
    border: 1px black solid;
    overflow: hidden;
  }
  img{
    float: left;
    margin: auto;
  }
  button{
    float: right;
    margin: auto;
  }
</style>
