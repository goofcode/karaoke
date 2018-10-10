<template>
  <div id="song_list">
    <p v-for="song in songList"
       :key="song.id.videoId">
        {{ song.snippet.title }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'SongList',
  props: [ 'songList' ]
}
</script>
<style scoped>
  p{
    font-size: 20px;
  }
</style>
