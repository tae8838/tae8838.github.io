<template>
  <div class='game' :style="{ 'background-color': spiritualPowerColor, 'color': invertedSpiritualPowerColor }">
    <div class='info'>
      <span>Food: <food class='foodDisplay' v-for="i in foodCount"></food></span>
      <p>Population: {{humanCount + 2}}</p>
      <p>Spiritual Power: {{spiritualPower}}</p>
      <div><span>🤴</span> <span>👸</span></div>
      <holy-baby v-if="spiritualPower >= 10"></holy-baby>
      <human class='peopleDisplay' v-for="i in humanCount" :name="totalHumanCount"></human>
    </div>
    <div class='log'>
    </div>
    <div class='control'>
      <el-button type='primary' round @click="couplate">copulate</el-button>
      <el-button type='danger' round @click="sacrifice">Sacrifice</el-button>
    </div>

  </div>
</template>

<script>
  import HolyBaby from './units/HolyBaby.vue'
  import Human from './units/Human.vue'
  import Food from './units/Food.vue'
  export default {
    data () {
      return {
        foodCount: 100,
        humanCount: 0,
        spiritualPower: 0,
        children: [],
        totalHumanCount: 0,
        log: ''
      }
    },
    components: {
      Human,
      HolyBaby,
      Food
    },
    computed: {
      spiritualPowerColor () {
        return 'rgb(' +
          this.spiritualPower + ',' +
          this.spiritualPower + ',' +
          this.spiritualPower + ')'
      },
      invertedSpiritualPowerColor () {
        return 'rgb(' +
          this.invertedSpiritualPowerColorValue + ',' +
          this.invertedSpiritualPowerColorValue + ',' +
          this.invertedSpiritualPowerColorValue + ')'
      },
      invertedSpiritualPowerColorValue () {
        return 225 - this.spiritualPower
      }
    },
    methods: {
      consumeFood () {
        if (this.foodCount > 0) {
          this.foodCount -= (1 * (this.humanCount + 2))
        }
      },
      loopedEvents () {
        this.consumeFood()
        this.turnChildToFood()
      },
      couplate () {
        this.humanCount += 1
        this.totalHumanCount += 1
      },
      turnChildToFood () {
        if (this.foodCount <= 0) {
          this.humanCount -= 1
          if (this.humanCount < 0) this.gameOver()
          this.foodCount += 50 + this.spiritualPower
        }
      },
      sacrifice () {
        this.spiritualPower += 1
        this.humanCount -= 1
      },
      gameOver () {
        console.log('game over')
        this.$router.push('/gameOver')
      }
    },
    created () {
      // setInterval(this.loopedEvents, 100);
    }
  }
</script>

<style>
.game {
  padding: 2%;
  color: white;
  height: 100vh;
  display: inline-block;
}

.foodDisplay, .peopleDisplay {
  display: inline-block;
}
.info {
  padding: 2%;
  width: 100%;
  text-align: center;
}
.control {
  position: absolute;
  bottom: 0px;
  padding: 2%;
  width: 100%;
  text-align: center;
}
</style>
