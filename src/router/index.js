import Vue from 'vue'
import VueRouter from 'vue-router'
import Food from '../views/Food.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/',
    name: 'home', 
    component: Home
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
