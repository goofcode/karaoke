<template>
  <div id="sidebar">

    <SearchBar v-on:search="onSearch"></SearchBar>

    <!-- show music list if not searching -->
    <div v-if="!searching" id="music_list">
      <MusicItem v-for="music in music_list"
                 :key="music.id"
                 :music="music"></MusicItem>
    </div>
    <!-- show search result if searching -->
    <div v-else>
      <MusicItem v-for="search_result in search_results"
                 :key="search_result.id"
                 :music="search_result"></MusicItem>
    </div>
  </div>

</template>

<script>
import SearchBar from '@/components/SearchBar'
import MusicItem from '@/components/MusicItem'

export default {
  name: 'Sidebar',
  components: {MusicItem, SearchBar},
  data () {
    return {
      searching: false,
      music_list: [
        {
          id: 'tgbNymZ7vqY',
          image: '/assets/log.png',
          title: 'qqqq'
        },
        {
          id: 'aTTfasdf',
          image: '/assets/log.png',
          title: 'wwww'
        }
      ],
      search_results: []
    }
  },
  methods: {
    onSearch: function (searchWord) {
      var karaokeSearchWord = '노래방 ' + searchWord
      alert('searching ' + karaokeSearchWord)

      this.searching = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
