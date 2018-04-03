import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from 'components/Login'
import Investigation from 'components/investigation/Investigation'
import TestMusic from 'components/testmusic/TestMusic'
import TestMovie from 'components/testmovie/TestMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [//子路由
        //{ path: '', redirect: 'Investigation' },//默认
        { path: 'investigation',name: 'investigation', component: Investigation },//
        { path: 'testMusic',name: 'testMusic', component: TestMusic },//
        { path: 'testMovie',name: 'testMovie', component: TestMovie },//

      ]
    }
  ]
})
