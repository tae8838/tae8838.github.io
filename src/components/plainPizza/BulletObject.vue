<template>
  <base-object :object-name="name" :position="position" :rotate-deg="rotateDeg"></base-object>
</template>
<script>
import BaseObject from './BaseObject.vue'

export default {
  components: {
    BaseObject
  },
  props: {
    name: {
      type: String,
      required: true
    },
    initialPosition: {
      type: Object,
      required: true
    },
    direction: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      speed: 40,
      rotateDeg: 0,
      position: {
        x: this.initialPosition.x,
        y: this.initialPosition.y
      }
    }
  },
  computed: {
    velocity () {
      return {
        x: this.direction.x * this.speed,
        y: this.direction.y * this.speed
      }
    }
  },
  methods: {
    updatePostion () {
      this.position.x = this.position.x + this.velocity.x
      this.position.y = this.position.y + this.velocity.y
    },
    boundaryCheck () {
      if (this.position.x < 0
        || this.position.x > window.screen.width - 50
        || this.position.y < 0
        || this.position.y > window.screen.height - 50) {
        this.$emit('destroy-bullet')
      }
    },
    updateRotationDeg () {
      this.rotateDeg = Math.atan(this.velocity.y / this.velocity.x) * 180 / Math.PI
    },
    update () {
      this.updatePostion()
      this.boundaryCheck()
      this.updateRotationDeg()
    }
  }
}
</script>
<style></style>
