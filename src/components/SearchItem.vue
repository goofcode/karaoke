<template>
  <div class="SearchItem">
    <p>{{ song.snippet.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    song: Object
  }
}
</script>

<style scoped>
  .SearchItem{
    border: 1px black solid;
  }
</style>
