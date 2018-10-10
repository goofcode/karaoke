<template>
  <div class="SearchItem">
    <img :src="thumbnailUrl">
    <p>{{ title }}</p>
    <button v-if="!added" @click="onAdd"><i class="fa fa-plus"></i></button>
  </div>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    song: Object
  },
  data () {
    return {
      added: false
    }
  },
  computed: {
    title: function () {
      return this.song.snippet.title.substring(0, 35) + '...'
    },
    thumbnailUrl: function () {
      return this.song.snippet.thumbnails.default.url
    }
  },
  methods: {
    onAdd: function () {
      this.added = true
      this.$emit('add')
    }
  }
}
</script>

<style scoped>
  .SearchItem{
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
