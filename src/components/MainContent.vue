<template>
  <div class='main-content'>
    <h1 class='who-is' data-aos='fade-up' @mouseover="changeName">Who is <span class='name' v-text="name"></span></h1>
    <div class='content'>
      <div class='black'>
        <h4>Present</h4>
        <li data-aos="fade-right">A full-stack engineer at a start up in Tokyo! Working mainly with <a href="https://vuejs.org/" target="_blank">Vue.js</a> and <a href="https://rubyonrails.org/" target="_blank">Ruby on Rails</a>.</li>
      </div>
      <div class='white'>
        <h4>2016 - 2018</h4>
          <li data-aos="fade-left">A Ruby on Rails developer at a company in Boston. I was working remotely while spending my time in Brazil, the United States, Indonesia, Australia, Taiwan, Hong Kong, Singapore and Srilanka.</li>
      </div>
      <div class='black'>
        <h4>2013 - 2015</h4>
        <li data-aos="fade-right">Went to the University of Melbourne. Was Vice president of <a href="https://cissa.org.au/" target="_blank">Computer and Information System Student Association (CISSA)</a></li>
      </div>
      <div class='white'>
        <h4>2008 - 2012</h4>
        <li data-aos="fade-left">Went to Singapore for highschool.</li>
      </div>
      <div class='black'>
        <h4>1995</h4>
        <p data-aos="fade-right">Popped out into the land of smile! <img class="flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/th.svg" alt="Thailand Flag"></p>
      </div>
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
    },
    mounted() {
      AOS.init({
        duration: 1200,
      })
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
  margin-bottom: 100px;
  overflow: hidden;
}

.name {
  margin: 24px 0 0.2em !important;
  line-height: 1em !important;
  color: #990000;
  font-family: 'Indie Flower';
}

.content {
  margin: 0 20px;
  text-align: left;
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  h4 {
    margin-top: 30px;
  }
}

@media screen and (min-width: 1000px) {
  .content {
    h4, li {
      margin: 30px 100px;
    }
  }
}
@media screen and (min-width: 700px) {
  .content {
    h4, li {
      margin: 30px 50px;
    }
  }
}

@media screen and (max-width: 575px) {
  .black {
    h4 {
      font-size: 50px;
    }
  }
  .white {
    h4 {
      font-size: 50px;
    }
  }
}

.flag {
  width: 30px;
}

.name:hover span:after{
  content: 'Tae Noppakun Wongsrinoppakun';
}
.content {
  text-align: center;
}

li {
  list-style: none;
}

.black {
  padding: 20px;
  color: white;
  background-color: #414141;
}

.white {
  padding: 20px;
}

.row {
  min-height: 180px;
}

.who-is {
  margin-bottom: 50px;
}
</style>