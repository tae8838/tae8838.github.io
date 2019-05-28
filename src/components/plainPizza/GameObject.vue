<template>
  <section class="container">
    <div>
      <div v-if="lastGameLog">
        <p>{{lastGameLog}} {{deathDetail}}</p>
        <p>player one score: {{ p1Score }}</p>
        <p>player two score: {{ p2Score }}</p>
      </div>
      <div v-else>
        <p>p1 control: arrowkeys + spacebar</p>
        <p>p2 control: wasd + shift</p>
      </div>
      <player-object
        :key-map="keyMap"
        ref='playerOne'
        jet-name="JET1"
        :initial-position="playerOneInitialPosition"
        :initialVelocity="playerOneInitialVelocity"
        :control="playerOneControl"
        @lost="playerOneOutOfBound"
        v-if="showPlayer1">
      </player-object>
      <player-object
        :key-map="keyMap"
        ref='playerTwo'
        jet-name="JET2"
        :initial-position="playerTwoInitialPosition"
        :initialVelocity="playerTwoInitialVelocity"
        :control="playerTwoControl"
        @lost="playerTwoOutOfBound"
        v-if="showPlayer2">
      </player-object>
    </div>
  </section>
</template>

<script>
import PlayerOne from './PlayerOne.vue'
import PlayerTwo from './PlayerTwo.vue'
import PlayerObject from './PlayerObject.vue'

export default {
  components: {
    PlayerOne,
    PlayerTwo,
    PlayerObject
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
      showPlayer1: true,
      showPlayer2: true,
      window: {
        width: 0,
        height: 0
      },
      playerOneControl: {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        shoot: 32
      },
      playerTwoControl: {
        up: 87,
        down: 83,
        left: 65,
        right: 68,
        shoot: 16
      },
      playerOneInitialVelocity: {
        x: 1,
        y: 1
      },
      playerTwoInitialVelocity: {
        x: -1,
        y: -1
      },
      playerOneInitialPosition: {
        x: 0,
        y: 0
      },
      playerTwoInitialPosition: {
        x: window.screen.width - 200,
        y: window.screen.height - 200
      },
      p1Score: 0,
      p2Score: 0,
      deathDetail: '',
      lastGameLog: ''
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
    gameLoop() {
      let that = this
      setTimeout(function () {
        that.$refs.playerOne.update()
        that.$refs.playerTwo.update()
        that.handleInputs()
        that.gameLoop()
        that.detectObjectsCollision()
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
    },
    playerOneOutOfBound() {
      this.deathDetail = 'Player One jet crashed on the side of the screen.'
      this.playerOneLost()
    },
    playerTwoOutOfBound() {
      this.deathDetail = 'Player Two jet crashed on the side of the screen.'
      this.playerTwoLost()
    },
    playerOneLost () {
      this.lastGameLog = 'Player Two Won!!!'
      this.p2Score = this.p2Score + 1
      this.resetGame()
    },
    playerTwoLost () {
      this.lastGameLog = 'Player One Won!!!'
      this.p1Score = this.p1Score + 1
      this.resetGame()
    },
    resetGame () {
      this.$refs.playerOne.reset()
      this.$refs.playerTwo.reset()
    },
    detectCollision (object1, object2) {
      if (Math.abs(object1.x - object2.x) < 15 && Math.abs(object1.y - object2.y) < 15) {
        return true
      }
      return false
    },
    detectObjectsCollision () {
      if (this.detectCollision(this.$refs.playerOne.position, this.$refs.playerTwo.position)) {
        this.lastGameLog = 'Players collided with one another.'
        this.resetGame()
      }
      if (this.$refs.playerOne.$refs.bullet) {
        if (this.detectCollision(this.$refs.playerOne.$refs.bullet.position, this.$refs.playerTwo.position)) {
          this.deathDetail = 'Player Two got shot.'
          this.playerTwoLost()
        }
      }
      if (this.$refs.playerTwo.$refs.bullet) {
        if (this.detectCollision(this.$refs.playerTwo.$refs.bullet.position, this.$refs.playerOne.position)) {
          this.deathDetail = 'Player Two got shot.'
          this.playerOneLost()
        }
      }
    }
  },
  created () {
    this.startGame()
  }
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
