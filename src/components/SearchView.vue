<template>
    <div id="SearchView">
      <form @submit.prevent="onSearch" @reset="$emit('cancel')">
        <input type="text" placeholder="Search.." v-model="searchWord">
        <button type="submit"><i class="fa fa-search"></i></button>
        <button type="reset"><i class="fa fa-close"></i></button>
      </form>

      <SearchItem v-for="song in searchResult" :key="song.id.videoId" :song="song"
                  @add="$emit('add', song)"/>
    </div>
</template>

<script>
import axios from 'axios'
import SearchItem from '@/components/SearchItem'

export default {
  name: 'SearchView',
  components: {SearchItem},
  data () {
    return {
      searchWord: '',
      searchResult: []
    }
  },
  methods: {
    onSearch: function () {
      if (this.searchWord) {
        axios
          .get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: this.$root.youtubeApiKey,
              q: '노래방' + this.searchWord,
              part: 'snippet',
              type: 'video'
            }
          })
          .then(response => {
            this.searchResult = response.data.items
            console.log(this.searchResult)
          })
      } else {
        alert('노래 제목을 입력해주세요')
      }
    }
  }
}
</script>

<style scoped>
  #SearchView {
    /*float: right;*/
    width: 90%;
    padding: 10px 0;
    margin: auto;
  }

    button {
        /*float: right;*/
        width: 15%;
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

    input[type=text] {
      width: 55%;
      height: 5%;
      padding: 10px;
      margin: 0 3px;
      font-size: 17px;
      border: none;
    }

</style>
