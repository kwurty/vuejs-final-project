import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Stocks from '../components/Stocks.vue'
import Portfolio from '../components/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '*',
    name: 'Catchall',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/vuejs-final-project/',
  routes
})

export default router
