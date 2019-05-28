<template>
  <div>
    <player-object
      ref='playerObject'
      :jet-name="jetName"
      :initial-position="position"
      :initial-velocity="velocity">
    </player-object>
  </div>
</template>

<script>
import PlayerObject from './PlayerObject.vue'

export default {
  components: {
    PlayerObject
  },
  props: {
    keyMap: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      jetName: 'JET2',
      position: {
        x: 100,
        y: 0
      },
      velocity: {
        x: -1,
        y:0
      }
    }
  },
  methods: {
    // 84 to shoot
    updateVelocity () {
      console.log(this.keyMap)
      if(this.keyMap[65]) {
        this.velocity.x = this.velocity.x - 0.1
      }
      if(this.keyMap[68]) {
         this.velocity.x = this.velocity.x + 0.1
      }
      if(this.keyMap[87]) {
        this.velocity.y = this.velocity.y - 0.1
      }
      if(this.keyMap[83]) {
        this.velocity.y = this.velocity.y + 0.1
      }
    },
    update () {
      this.$refs.playerObject.update()
      this.updateVelocity()
    }
  }
}
</script>
