<template>
  <div>
    <intro></intro>
    <main-content></main-content>
    <footer></footer>
  </div>
</template>

<script>
import Intro from './Intro.vue'
import MainContent from './MainContent.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Intro,
    MainContent,
    Footer
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
