<template>
  <div id="stream-container" class="full">
    <div id="stream"></div>
  </div>
</template>

<script>
import YouTubePlayer from 'youtube-player'
import { ytEventBus } from './YtEventBus'

export default {
  name: 'Stream',
  data () {
    return {
      player: Object,
      playing: false
    }
  },
  mounted: function () {
    // get player
    this.player = YouTubePlayer('stream')

    this.player.on('ready', () => {
      ytEventBus.$emit('next-song')
    })

    // transmit deliver youtube events to global event bus
    this.player.on('stateChange', (event) => {
      console.log('state changed to ' + event.data)

      // if video ended
      if (event.data === 0) {
        console.log('video ended')
        this.playing = false
        ytEventBus.$emit('next-song')
      }
    })

    ytEventBus.$on('play-song', videoId => {
      this.playing = true
      this.player.loadVideoById(videoId)
      this.player.playVideo()
    })

    ytEventBus.$on('new-song', () => {
      if (!this.playing) {
        console.log('emit: next-song')
        ytEventBus.$emit('next-song')
      }
    })
  },
  watch: {
    playing: function () {
      console.log('watch: ' + this.playing)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #stream{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
