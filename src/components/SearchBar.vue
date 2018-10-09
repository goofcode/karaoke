<template>
  <div class="search-container">
    <form v-on:submit.prevent="onSearch">
      <input type="text" placeholder="Search.." name="search" v-model="searchWord">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearch: function () {
      if (this.searchWord) { this.$emit('search', this.searchWord) }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {box-sizing: border-box;}

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .search-container {
    /*float: right;*/
  }

  input[type=text] {
    width: 70%;
    height: 5%;
    padding: 8px;
    margin: 5px;
    font-size: 17px;
    border: none;
  }

  .search-container button {
    /*float: right;*/
    width: 20%;
    height: 5%;
    padding: 10px 0;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }

  .search-container button:hover {
    background: #ccc;
  }
</style>
