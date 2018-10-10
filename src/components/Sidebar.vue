<template>
  <div id="sidebar">
    <QueueView v-if="!searching"
               :song-queue="songQueue"
               @search="searching = true"></QueueView>
    <SearchView v-else
                @result="onSearchResult"
                @cancel="searching = false"></SearchView>
  </div>
</template>

<script>
import QueueView from '@/components/QueueView'
import SearchView from '@/components/SearchView'

export default {
  name: 'Sidebar',
  components: {SearchView, QueueView},
  data () {
    return {
      searching: false,
      songQueue: []
    }
  },
  methods: {
    onSearchResult: function (song) {
      this.songQueue.push(song)
    }
  },
  watch: {
    searching: function () {
      // alert(this.searching)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #sidebar{
    padding-top: 10px
  }

  button {
    /*float: right;*/
    width: 90%;
    height: 5%;
    padding: 10px 0;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #ccc;
  }
</style>
