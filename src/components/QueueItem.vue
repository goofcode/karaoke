<template>
  <div class="QueueItem">
    <p>{{ song.snippet.title }}</p>
  </div>
</template>
<script>
export default {
  name: 'QueueItem',
  props: {
    song: Object
  }
}
</script>
<style scoped>
  .QueueItem{
    border: 1px black ;
  }
</style>
