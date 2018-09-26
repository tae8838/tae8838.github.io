<template>
  <div class="intro">
    <div class="intro-text">
      <h3 style="height: 130px;">Tae Noppakun Wongsrinoppakun</h3>
    </div>
    <div class="intro-img-wrapper">
      <img class="img-fluid intro-img" src="https://c1.staticflickr.com/2/1929/31036351628_b5ca3999eb_k.jpg">
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
  computed: {
    titleStyle () {
      return 'font-size:' + (this.hoverDuration + 20) + 'px'
    },
    titleText () {
      if (this.hoverDuration < 10) {
        return
      }
    }
  },
  methods: {
    handleMouseleave () {
      this.hovering = false
    },
    handleHover () {
      this.hovering = true
    },
    incrementDuration () {
      this.hoverDuration += 0.1
    },
    triggerLinkTextChange () {
      this.linkText = 'Okay, its not actually done yet. Stay tuned!'
    }
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 1000px) {
  .intro-text h3 {
    font-size: 80px;
  }
}
@media screen and (min-width: 700px) {
  .intro-text h3 {
    font-size: 50px;
  }
}
@import url(//fonts.googleapis.com/css?family=Indie+Flower);

.intro-text h3 {
  background-color: white;
  display: inline-flex;
  overflow: hidden;
  position: absolute;
  background: none;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  top: 10px;
  color:white;
  font-family: 'Indie Flower';
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
</style>
