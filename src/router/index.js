import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Investigation from 'components/investigation/Investigation'
import TestMusic from 'components/testmusic/TestMusic'
import TestMovie from 'components/testmovie/TestMovie'

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
    },
    {
      path:'/TestMusic',
      name: 'TestMusic',
      component: TestMusic
    },
    {
    	path:'/TestMovie',
    	name: 'TestMovie',
    	component: TestMovie
    }
  ]
})
