import Vue from 'vue'
import Router from 'vue-router'
import Karaoke from '@/components/Karaoke'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Karaoke',
      component: Karaoke
    }
  ]
})
