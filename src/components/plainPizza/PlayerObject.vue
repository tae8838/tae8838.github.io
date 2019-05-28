<template>
  <div>
    <base-object :objectName="jetName" :position="position" :rotate-deg="rotateDeg"></base-object>
    <bullet-object
      v-if="shooting"
      ref='bullet'
      name='bullet'
      :initial-position="position"
      :direction="bulletDirection"
      @destroy-bullet="shooting = false"></bullet-object>
  </div>
</template>
<script>
import BaseObject from './BaseObject.vue'
import BulletObject from './BulletObject.vue'
export default {
  components: {
    BaseObject,
    BulletObject
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
    },
    control: {
      type: Object,
      required: true
    },
    keyMap: {
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
      },
      rotateDeg: 0,
      shooting: false,
      bulletDirection: { x: 1, y: 1 }
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
    updateVelocity () {
      if(this.keyMap[this.control.left]) {
        this.velocity.x = this.velocity.x - 0.1
      }
      if(this.keyMap[this.control.right]) {
         this.velocity.x = this.velocity.x + 0.1
      }
      if(this.keyMap[this.control.up]) {
        this.velocity.y = this.velocity.y - 0.1
      }
      if(this.keyMap[this.control.down]) {
        this.velocity.y = this.velocity.y + 0.1
      }
    },
    shootingKeyPressed () {
      if(this.keyMap[this.control.shoot] && !this.shooting) {
        this.shooting = true
        let velocityMagnetude = Math.sqrt(this.velocity.y * this.velocity.y + this.velocity.x * this.velocity.x)
        this.bulletDirection = { y: (this.velocity.y / velocityMagnetude), x: (this.velocity.x / velocityMagnetude) }
      }
    },
    updateRotationDeg () {
      this.rotateDeg = Math.atan(this.velocity.y / this.velocity.x) * 180 / Math.PI
    },
    boundaryCheck () {
      if (this.position.x < 0
        || this.position.x > window.screen.width
        || this.position.y < 0
        || this.position.y > window.screen.height) {
        this.$emit('lost')
      }
    },
    update () {
      if (this.shooting) this.$refs.bullet.update()
      this.updatePostion()
      this.updateRotationDeg()
      this.updateVelocity()
      this.shootingKeyPressed()
      this.boundaryCheck()
    },
    reset () {
      this.initVelAndPos()
      this.shooting = false
    },
    initVelAndPos() {
      this.velocity = {x: this.initialVelocity.x, y: this.initialVelocity.y}
      this.position = {x: this.initialPosition.x, y: this.initialPosition.y}
    }
  },
  created () {
    this.initVelAndPos()
  }
}
</script>
<style></style>
