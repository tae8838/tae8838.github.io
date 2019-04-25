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
      jetName: 'JET1',
      position: {
        x: 0,
        y: 0
      },
      velocity: {
        x: 1,
        y:0
      }
    }
  },
  methods: {
    updateVelocity () {
      if(this.keyMap[37]) {
        this.velocity.x = this.velocity.x - 0.1
      }
      if(this.keyMap[39]) {
         this.velocity.x = this.velocity.x + 0.1
      }
      if(this.keyMap[38]) {
        this.velocity.y = this.velocity.y - 0.1
      }
      if(this.keyMap[40]) {
        this.velocity.y = this.velocity.y + 0.1
      }
    },
    update () {
      this.$refs.playerObject.update()
    }
  }
}
</script>
