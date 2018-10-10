<template>
  <div id="QueueView">
    <button @click="$emit('search')">
      <i class="fa fa-search"></i>
    </button>
    <SongList :song-list="songQueue"/>
  </div>
</template>

<script>
import SongList from '@/components/SongList'

export default {
  name: 'QueueView',
  components: {SongList},
  props: {
    searching: Boolean,
    songQueue: Array
  }
}
</script>

<style scoped>
  #QueueView {
    width: 90%;
    margin: auto;
  }

  button {
    /*float: right;*/
    width: 100%;
    padding: 10px 0;
    margin: auto;
    background: #ddd;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #ccc;
  }
</style>
