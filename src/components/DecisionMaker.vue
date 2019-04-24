<template>
  <div class=''>
    <div @click="backHome" class='header'>
      Tae
    </div>
  	<h1>Decision Maker</h1>
    <p class='small'>This application takes in your input options and chooses one at random. Perfect for those to have a hard time deciding things!</p>
    <transition name="fade" mode="out-in">
      <div v-if="result.length === 0">
        <button class='decide button' @click='decide'>Decide</button><br>
        <input @keyup.enter="add" type='text' v-model="option"> <button class='add button' @click='add'>Add option</button>
        <p v-if="options.length > 0">Your options:</p>
        <transition-group name="fade" mode="out-in">
          <p class='option' v-for="opt in options" :key="opt">
            {{ opt }}
          </p>
        </transition-group>
      </div>
      <div v-else>
        <button class='again button' @click='reset'>Again!</button><br>
        The option chosen is: {{ result }}

      </div>
    </transition>
  </div>
</template>

<script>
	export default {
    data () {
      return {
        option: '',
        options: [],
        result: ''
      }
    },
    methods: {
      add () {
        this.options.push(this.option)
        this.option = ''
      },
      decide () {
        if (this.options.length > 0) this.result = this.options[Math.floor(Math.random() * this.options.length)]
      },
      reset () {
        this.result = ''
        this.option = ''
        this.options = []
      },
      backHome () {
        window.location.href = '/'
      }
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.class {
  font-size: 5px;
}
.header {
  background-color: black;
  color: white;
  width: 100%;
  height: 20px;
  cursor: pointer;
}
.button {
  margin: 10px;
  padding: 12px 12px;

  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;

  color: #fff;
  border: 0 none;
  border-radius: 4px;

  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;

  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;

  justify-content: center;
  align-items: center;
  flex: 0 0 160px;

  box-shadow: 2px 5px 10px var(--color-smoke);

  &:hover {
    transition: all 150ms linear;

    opacity: .85;
  }

  &:active {
    transition: all 150ms linear;
    opacity: .75;
  }
}
.add {
  color: #FFFFFF;
  background: #3dd28d;
}

.decide, .again {
  color: #FFFFFF;
  background: #416dea;
}

.fade-enter {
  opacity:0;
}

.fade-enter-active{
  animation: fadein 1s;
}

.fade-leave {
  opacity:1;
}

.fade-leave-active {
  animation: fadein 1s reverse;
}


@keyframes fadein {
  from {opacity: 0;}
  to   {opacity: 1;}
}
</style>
