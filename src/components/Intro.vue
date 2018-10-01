<template>
  <div class="intro">
    <div class="intro-text">
      <h3 style="height: 130px;" data-aos='fade-up'>Tae Noppakun Wongsrinoppakun</h3>
    </div>
    <div class="intro-img-wrapper">
      <img class="img-fluid intro-img" src="https://c1.staticflickr.com/2/1931/44950736571_832d14cd44_k.jpg">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hovering: false,
      someText: 'hi',
      interval: null,
      linkText: 'game out here!'
    }
  },
  methods: {
    handleMouseleave () {
      this.hovering = false
    },
    handleHover () {
      this.hovering = true
    }
  }
}
</script>
<style lang="scss">
@import url(//fonts.googleapis.com/css?family=Indie+Flower);

.intro-text h3 {
  background-color: white;
  display: inline-flex;
  position: absolute;
  background: none;
  left: 10%;
  transform: translateX(-10%);
  z-index: 1;
  top: 30px;
  color:white;
  font-family: 'Indie Flower';
  width: 40px;
  font-size: 25px;
}

.intro{
  width:100%; /*container-width*/
  overflow:hidden; /*hide bounds of image */
  margin:0;   /*reset margin of .intro tag*/
}
.intro img{
  display:block; /*remove inline-block spaces*/
  width:100%; /*make image streatch*/
  filter: alpha(opacity=40); /* msie */
  background-color:black;
  opacity: 0.7;
}

.intro-img-wrapper {
  opacity: 1;
  filter: alpha(opacity=40); /* msie */
  background-color: #000;
}

.intro-text:hover h3{
    animation: color-change 1s infinite;
}
@keyframes color-change {
    0% { color: red; }
    14% { color: orange; }
    28% { color: yellow; }
    42% { color: green; }
    56% { color: blue; }
    70% { color: indigo; }
    84% { color: violet; }
}
@media screen and (min-width: 580px) {
  .intro-text h3 {
    font-size: 40px;
  }
}
@media screen and (min-width: 1000px) {
  .intro-text h3 {
    font-size: 60px;
  }
}
</style>
