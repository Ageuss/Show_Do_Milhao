import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login/Login.vue'
import Register from './pages/Register/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router