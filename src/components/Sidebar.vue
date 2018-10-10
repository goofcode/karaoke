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
                @add="onAddSong"
                @cancel="searching = false">
    </SearchView>
  </div>
</template>

<script>
import QueueView from '@/components/QueueView'
import SearchView from '@/components/SearchView'
import { ytEventBus } from './YtEventBus'

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
    },
    onAddSong: function (song) {
      this.songQueue.push(song)
      console.log(this.songQueue)
      if (this.songQueue.length === 1) {
        console.log('emit: new-song')
        ytEventBus.$emit('new-song')
      }
    },
    popNextSongId: function () {
      let song = this.songQueue.shift()
      return song.id.videoId
    }
  },
  created: function () {
    ytEventBus.$on('next-song', () => {
      if (this.songQueue.length) {
        ytEventBus.$emit('play-song', this.popNextSongId())
      } else {
        console.log('no song to play')
      }
    })
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
