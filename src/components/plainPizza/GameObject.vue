<template>
  <section class="container">
    <div>
      <player-one ref='playerOne' :key-map="keyMap"></player-one>
      <player-two ref='playerTwo' :key-map="keyMap"></player-two>
      <!-- <h1 class="item jet" :style="{ top: yPosition + 'px', left: xPosition + 'px', transform: 'rotate(' + rotateDeg + 'deg)'}">
        jet-game
      </h1>
      <h1 class="item" v-show="showBullet" :style="{ top: bulletYPosition + 'px', left: bulletXPosition + 'px'}">
        B
      </h1> -->
    </div>
  </section>
</template>

<script>
import PlayerOne from './PlayerOne.vue'
import PlayerTwo from './PlayerTwo.vue'

export default {
  components: {
    PlayerOne,
    PlayerTwo
  },
  data () {
    return {
      xPosition: 0,
      yPosition: 0,
      xVelocity: 0.1,
      yVelocity: 0.1,
      keyMap: {},
      gameOver: false,
      rotateDeg: 0,
      showBullet: false,
      bulletYPosition: 0,
      bulletXPosition: 0,
      bulletXVelocity: 0,
      bulletYVelocity: 0,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    startGame () {
      let that = this
      window.addEventListener('keyup', function(e) {
        that.keyMap[e.keyCode] = e.type != 'keyup'
      })
      window.addEventListener('keydown', function(e) {
        that.keyMap[e.keyCode] = e.type == 'keydown'
      })
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
      this.gameLoop()
    },

  //   updateVelocity () {
  //     if(this.keyMap[37]) {
  //       this.xVelocity = this.xVelocity - 0.1
  //     }
  //     if(this.keyMap[39]) {
  //        this.xVelocity = this.xVelocity + 0.1
  //     }
  //     if(this.keyMap[38]) {
  //       this.yVelocity = this.yVelocity - 0.1
  //     }
  //     if(this.keyMap[40]) {
  //       this.yVelocity = this.yVelocity + 0.1
  //     }
  //   },
  //   initBullet () {
  //     if (!this.showBullet) {
  //       this.showBullet = true
  //       this.bulletXPosition = this.xPosition
  //       this.bulletYPosition = this.yPosition
  //       this.bulletXVelocity = this.xVelocity
  //       this.bulletYVelocity = this.yVelocity
  //     }
  //   },
  //   updateBulletPosition () {
  //     if (this.keyMap[32]) {
  //       this.initBullet()
  //     }
  //     if (this.showBullet) {
  //       this.bulletXPosition =  this.bulletXPosition + (this.bulletXVelocity + 1) * 1.5
  //       this.bulletYPosition = this.bulletYPosition + (this.bulletYVelocity + 1) * 1.5
  //     }
  //     if (this.bulletXPosition < 0
  //       || this.bulletXPosition > this.window.width
  //       || this.bulletYPosition < 0
  //       || this.bulletYPosition > this.window.height) {
  //       this.bulletXPosition = 0
  //       this.bulletXVelocity = 0
  //       this.bulletYPosition = 0
  //       this.bulletYVelocity = 0
  //       this.showBullet = false
  //     }
  //   },

    gameLoop() {
      let that = this
      setTimeout(function () {
        that.$refs.playerOne.update()
        that.$refs.playerTwo.update()
        that.handleInputs()
        // that.updateVelocity()
        // that.updatePostion()
        // that.updateRotationDeg()
        // that.updateBulletPosition()

        that.gameLoop()
      }, 16);
    },
    handleResize() {
      this.window.width = window.innerWidth - 30;
      this.window.height = window.innerHeight - 30;
    },
    handleInputs () {
      let that = this
      window.addEventListener('keyup', function(e) {
        that.keyMap[e.keyCode] = e.type != 'keyup'
      })
      window.addEventListener('keydown', function(e) {
        that.keyMap[e.keyCode] = e.type == 'keydown'
      })
    }
  },
  created () {
    this.startGame()
  },
  // destroyed() {
  //   window.removeEventListener('resize', this.handleResize)
  // }
}
</script>

<style>
.container {
}

.item {
  position: absolute;
}

.jet {
  width: 200px;
}
</style>
