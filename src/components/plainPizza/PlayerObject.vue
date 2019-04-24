<template>
  <base-object :name="name" :position="position"></base-object>
</template>
<script>
import BaseObject from 'BaseObject.vue'

export default {
  components: {
    BaseObject
  },
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: Object,
      required: true
    },
    velocity: {
      type: Object,
      required: true
    }
  },
  methods: {
    updatePostion () {
      this.xPosition = this.xPosition + this.xVelocity
      this.yPosition = this.yPosition + this.yVelocity
      this.boundaryCheck()
    },
    boundaryCheck () {
      if (this.xPosition < 0) {
        this.xPosition = 0
        this.xVelocity = this.xVelocity * -1
      }
      if (this.xPosition > this.window.width) {
        this.xPosition = this.window.width
        this.xVelocity = this.xVelocity * -1
      }
      if (this.yPosition < 0) {
        this.yPosition = 0
        this.yVelocity = this.yVelocity * -1
      }
      if (this.yPosition > this.window.height) {
        this.yPosition = this.window.height
        this.yVelocity = this.yVelocity * -1
      }
    },
    updateRotationDeg () {
      this.rotateDeg = Math.atan(this.yVelocity / this.xVelocity) * 180 / Math.PI
    },
    update () {
      this.updatePostion()
      this.updateRotationDeg()
    }
  }
}
</script>
<style></style>
