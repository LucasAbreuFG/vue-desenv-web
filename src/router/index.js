import Vue from 'vue'
import VueRouter from 'vue-router'
import Food from '../views/Food.vue'
import Restaurants from '../views/Restaurants.vue'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home', 
    component: Home
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/restaurants',
    name: 'restaurants', 
    component: Restaurants
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
