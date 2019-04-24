import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/game.vue'
import HelloWorld from '@/components/HelloWorld'
import DecisionMaker from '@/components/DecisionMaker'
import PlainPizza from '@/components/PlainPizza'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/decision-maker',
      name: 'Decision Maker',
      component: DecisionMaker
    },
    {
      path: '/unfinished-game',
      name: 'Unfinished Game',
      component: Game
    },
    {
      path: '/plain-pizza',
      name: 'Plain Pizza',
      component: PlainPizza
    }
  ]
})
