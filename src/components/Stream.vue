<template>
  <div id="stream">
    <iframe class="full" frameborder="0" scrolling="no" :src="youtubeURL">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'Stream',
  data () {
    return {
      youtubeVideoID: 'tgbNymZ7vqY'
    }
  },
  computed: {
    youtubeURL: function () {
      return 'https://www.youtube.com/embed/' + this.youtubeVideoID
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .full{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
