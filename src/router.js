import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login/Login.vue'
import Register from './pages/Register/Register.vue'
import HomePage from './pages/HomePage/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/homePage',
    component: HomePage
  }
   
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router