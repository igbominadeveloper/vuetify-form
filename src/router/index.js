import Vue from 'vue'
import Router from 'vue-router'
import ViewFoundations from '@/components/Foundations/Foundations'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ViewFoundations
    }
  ],
  mode:'history'
})
