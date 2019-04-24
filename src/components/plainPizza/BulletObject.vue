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
      if (this.bulletXPosition < 0
        || this.bulletXPosition > this.window.width
        || this.bulletYPosition < 0
        || this.bulletYPosition > this.window.height) {
        //$emit(destory)
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
