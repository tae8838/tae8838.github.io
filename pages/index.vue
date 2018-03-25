<template>
  <section class="container">
    <div>
    <nav-bar/>
      <h1 class="title">
        tae8838
      </h1>
      <app-logo/>

      <span>{{msg}}</span>

    </div>

  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import NavBar from '~/components/NavBar.vue'
import Projects from '~/components/Projects.vue'
import Links from '~/components/Links.vue'

export default {
  components: {
    AppLogo,
    NavBar
  },
  data() {
    return {
      msg: '<links/>'
    }
  }
}
</script>

<style>
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
