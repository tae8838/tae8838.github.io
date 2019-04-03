<template>
  <div @click="dicisionMakerRedirect">
    <intro></intro>
    <main-content></main-content>
    <projects></projects>
    <footer-content></footer-content>
  </div>
</template>

<script>
import Intro from './Intro.vue'
import MainContent from './MainContent.vue'
import Projects from './Projects.vue'
import FooterContent from './FooterContent.vue'

export default {
  components: {
    Intro,
    MainContent,
    FooterContent,
    Projects
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    dicisionMakerRedirect () {
      window.location.href = '/#/decision-maker'
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
