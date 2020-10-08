import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/zerkblatt',
    name: 'Zerkblatt',
    component: () => import('../views/Zerkblatt.vue')
  },
  {
    path: '/student/:salut/:firstName/:lastName',
    name: 'StudentInfo',
    component: () => import('../views/StudentInfo.vue')
  },
  {
    path: '/nesting',
    name: 'Nesting Bird',
    component: () => import('../views/Nesting.vue'),
    children:[
      {
        path:':id/home', 
        component:()=>import('../views/BlueJayHome.vue'),
        props:true
      },
      {
        path:':id/work', 
        component:()=>import('../views/BlueJayWork.vue'),
        props:true
      },
    ]
  },
  {
    path:'*',
    name: 'NestTest',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
