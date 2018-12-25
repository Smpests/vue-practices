import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Me from './views/Me.vue'
import News from './views/News.vue'
import Write from './views/Write.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // // route level code-splitting
      // // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: function () {
      //   return import(/* webpackChunkName: "about" */ './views/About.vue')
      // }
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/write',
      name: 'write',
      component: Write
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
