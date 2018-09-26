<template>
  <div class='main-content'>
    <h1 @mouseover="changeName">So who is <span class='name' v-text="name"></span></h1>
    <div class='content'>
      <h4>Present</h4><li>A full-stack engineer for a start up in Tokyo! Working with mainly <a href="https://vuejs.org/" target="_blank">Vue.js</a> and <a href="https://rubyonrails.org/" target="_blank">Ruby on Rails</a>.</li>
      <h4>2016 - 2018</h4><li>A Ruby on Rails developer at a company in Boston working remotely. While at it, I lived to Brazil, the United States, Indonesia, Australia, Taiwan, Hong Kong, Singapore and Srilanka.</li>
      <h4>2013 - 2015</h4><li>Went to University of Melbourne. Was Vice president of <a href="https://cissa.org.au/" target="_blank">Computer and Information System Student Association (CISSA)</a></li>
      <h4>2008 - 2012</h4><li>Went Singapore for highschool.</li>
      <h4>1995</h4><li>Popped out into the land of smile! <img class="flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/th.svg" alt="Thailand Flag"></li>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'Tae Nopjtpdsa Wongidmfdppkvbd??',
        hovering: true
      }
    },
    methods: {
      changeName () {
        this.name = 'Tae Noppakun Wongsrinoppakun??'
      }
    }
  }
</script>

<style lang="scss">
@mixin flag-tha() {
  @include ratio(2 / 3);
  $blue: #012169;
  $white: #FFF;
  $red: #c8102e;
  $stripe-height: percentage(1/6);

  @include lines(
    $red, $stripe-height,
    $white, $stripe-height,
    $blue, 2 * $stripe-height,
    $white, $stripe-height,
    $red, $stripe-height
  );
};
@import url(//fonts.googleapis.com/css?family=Indie+Flower);
.main-content {
  margin: 30px;
  font-family: 'Indie Flower';
}

.name {
  margin: 24px 0 0.2em !important;
  line-height: 1em !important;
  color: #990000;
  font-family: 'Indie Flower';
}

.content {
  margin: 0 100px;
  text-align: left;
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  h4 {
    margin-top: 30px;
  }
}
.flag {
  width: 30px;
}

.name:hover span:after{
  content: 'Tae Noppakun Wongsrinoppakun';
}
</style>