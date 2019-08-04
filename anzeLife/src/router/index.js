import Vue from 'vue'
import Router from 'vue-router'
import Anze from '@/anze/anze'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'anze',
      component: Anze
    }
  ]
})
