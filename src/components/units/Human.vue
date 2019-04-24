<template>
  <div>
    <span class="display">
      <baby v-if="lifeStage===0"></baby>
      <child v-if="lifeStage===1"></child>
      <man v-if="lifeStage===2"></man>
      <mature-man v-if="lifeStage===3"></mature-man>
      <corpse v-if="lifeStage >= 4"></corpse>
      <div>{{ displayName }}</div>
    </span>
  </div>
</template>
<script>
  import Baby from './Baby.vue'
  import Child from './Child.vue'
  import Man from './Man.vue'
  import MatureMan from './MatureMan.vue'
  import Corpse from './Corpse.vue'

  export default {
    data () {
      return {
        displayName: this.name,
        age: 0,
        lifeStage: 0
      }
    },
    props: {
      name: [String, Number]
    },
    components: {
      Baby,
      Child,
      Man,
      MatureMan,
      Corpse
    },
    methods: {
      loopedEvents () {
        this.incrementAge()
        this.grow()
      },
      incrementAge () {
        this.age += 1
      },
      grow() {
        if (this.age > 50) {
          this.lifeStage += 1
          this.age = 0
        }
      }
    },
    created () {
      setInterval(this.loopedEvents, 100);
    }
  }
</script>
<style scoped>
  .display {
    display: inline-block;
  }
  .display div {
    display: inline-block;
  }
</style>