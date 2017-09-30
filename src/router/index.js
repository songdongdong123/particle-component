import Vue from 'vue'
import Router from 'vue-router'
import particleComponent from '@/components/particle-component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'particle-component',
      component: particleComponent
    }
  ]
})
