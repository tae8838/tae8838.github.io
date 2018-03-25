<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">tae8838</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-on:click="about" id="about">About</b-nav-item>
        <b-nav-item id="projects">Projects</b-nav-item>
        <b-nav-item id="links">Links</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>


<style>
.nav-item:hover {
    background-color: gray;
}
</style>

<script>
  export default {
    data () {
      return {
        body: {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          }
      }
    }
  }
</script>

<script>
  function about() {
    alert("hi!");
  }
</script>