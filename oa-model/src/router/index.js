import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import phone from '@/views/phone.vue'
import tv from '@/views/tv.vue'
import desk from '@/views/desk.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          name: 'phone',
          path: 'phone',
          component: phone
        },
        {
          name: 'tv',
          path: 'tv',
          component: tv
        },
        {
          name: 'desk',
          path: 'desk',
          component: desk
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
})
