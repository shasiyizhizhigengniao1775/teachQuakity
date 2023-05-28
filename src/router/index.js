/*
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2023-04-09 17:16:47
 * @LastEditors: 夏晓雪
 * @LastEditTime: 2023-04-14 21:24:02
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Test from '../views/Test.vue'
import Evaluate from '../views/Evaluate.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  ,
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Test
  },
  {
    path: '/evaluate',
    name: 'Evaluate',
    component:Evaluate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
