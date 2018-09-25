<template>
  <div class="intro" @mouseover="handleHover" @mouseleave="handleMouseleave">
    <h1 :style="titleStyle" v-text="titleText" v-if="hoverDuration < 100"></h1>
    <img class="img-fluid" v-if="hoverDuration > 100 && hoverDuration < 150" src="http://www.humorandmemes.com/wp-content/uploads/2017/07/whos-awesome-youre-awesome.jpg">
    <h1 :style="titleStyle" v-if="hoverDuration > 150 && hoverDuration < 200" style="font-size: 40px">Nah that's it. Really. You can stop hovering over this area now.</h1>
    <h1 :style="titleStyle" v-if="hoverDuration > 200" style="font-size: 40px">I'm impressed! If you are this bored, check my <a @click="triggerLinkTextChange" href="#" v-text="linkText"></a> Thanks for visiting! :)</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hoverDuration: 0,
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
        return 'Tae Noppakun Wongsrinoppakun'
      }
      else if (this.hoverDuration < 30) {
        return 'No this is not a bug'
      }
      else if (this.hoverDuration < 70) {
        return 'This is intentional'
      }
      else if (this.hoverDuration < 100) {
        return 'Still here' + ' ?'.repeat((this.hoverDuration - 60) / 3)
      }
      else {
        return 'hehe'
      }
    }
  },
  methods: {
    handleMouseleave () {
      clearInterval(this.interval)
      this.interval  = null
      this.linkText = 'game out here!'
      this.hoverDuration = 0
    },
    handleHover () {
      if (this.hoverDuration === 0 && this.interval === null) {
        this.interval = setInterval(this.incrementDuration, 10)
      }
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
<style>
.intro {
  background-color: white;
  display: inline-flex;
  overflow: hidden;
}

.intro h1:hover {
  cursor: pointer;
}
</style>
