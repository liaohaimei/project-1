import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Investigation from 'components/investigation/Investigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      redirect: '/Investigation'
    },
    {
    	path:'/Investigation',
    	name: 'Investigation',
    	component: Investigation
    }
  ]
})
