<template>
  <base-object :objectName="jetName" :position-x="position.x" :position-y="position.y"></base-object>
</template>
<script>
import BaseObject from './BaseObject.vue'

export default {
  components: {
    BaseObject
  },
  props: {
    jetName: {
      type: String,
      required: true
    },
    initialPosition: {
      type: Object,
      required: true
    },
    initialVelocity: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      velocity: {
        x: 1,
        y: 1
      },
      position: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    updatePostion () {
      this.position.x = this.position.x + this.velocity.x
      this.position.y = this.position.y + this.velocity.y
      this.boundaryCheck()
    },
    boundaryCheck () {
      // if (this.position.x < 0) {
      //   this.position.x = 0
      //   this.velocity.x = this.velocity.x * -1
      // }
      // if (this.position.x > this.window.width) {
      //   this.position.x = this.window.width
      //   this.velocity.x = this.velocity.x * -1
      // }
      // if (this.position.y < 0) {
      //   this.position.y = 0
      //   this.velocity.y = this.velocity.y * -1
      // }
      // if (this.position.y > this.window.height) {
      //   this.position.y = this.window.height
      //   this.velocity.y = this.velocity.y * -1
      // }
    },
    updateRotationDeg () {
      this.rotateDeg = Math.atan(this.velocity.y / this.velocity.x) * 180 / Math.PI
    },
    update () {
      this.$emit('updateVelocity')
      this.updatePostion()
      this.updateRotationDeg()
    }
  },
  created () {
    this.velocity = this.initialVelocity
    this.position = this.initialPosition
  }
}
</script>
<style></style>
