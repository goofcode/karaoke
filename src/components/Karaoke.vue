<template>
  <div id="karaoke">
    <Stream class="split left"/>
    <Sidebar class="split right"/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Stream from '@/components/Stream'

export default {
  name: 'Karaoke',
  components: {Stream, Sidebar},
  data () {
    return {
      msg: 'Welcome to Your karaoke App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .split{
    height: 100%;
    position: fixed;
    top: 0;
    overflow: hidden;
    /*z-index: 1;*/
    background-color: black;
    color: aliceblue;
  }
  .left{
    width: 75%;
    left: 0;
  }
  .right{
    width: 25%;
    right: 0;
  }

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
