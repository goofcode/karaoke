<template>
  <div id="sidebar">
    <QueueView v-if="!searching"
               :song-queue="songQueue"
               @search="searching = true"
               @delete="songQueue.splice(songQueue.indexOf(arguments[0]), 1)"
               @move-up="onMoveUp"
               @move-down="onMoveDown">
    </QueueView>
    <SearchView v-else
                @add="songQueue.push(arguments[0])"
                @cancel="searching = false">

    </SearchView>
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
    // reason for splicing
    // https://stackoverflow.com/questions/41857143/vue-js-swap-array-items
    onMoveUp: function (song) {
      let idx = this.songQueue.indexOf(song)
      if (idx !== 0) {
        this.songQueue.splice(idx - 1, 2, this.songQueue[idx], this.songQueue[idx - 1])
      }
      console.log(this.songQueue)
    },
    onMoveDown: function (song) {
      let idx = this.songQueue.indexOf(song)
      if (idx !== this.songQueue.length - 1) {
        this.songQueue.splice(idx, 2, this.songQueue[idx + 1], this.songQueue[idx])
      }
      console.log(this.songQueue)
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
