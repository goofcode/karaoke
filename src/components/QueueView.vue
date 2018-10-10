<template>
  <div id="QueueView">
    <button @click="$emit('search')">
      <i class="fa fa-search"></i>
    </button>
    <QueueItem v-for="song in songQueue" :key="song.id.videoId" :song="song"/>
  </div>
</template>

<script>
import QueueItem from '@/components/QueueItem'

export default {
  name: 'QueueView',
  components: {QueueItem},
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
