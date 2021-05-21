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
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/create-mct',
    component: function () {
      return import('../views/CreateMct.vue')
    }
  },

]

const router = new VueRouter({
  routes
})

export default router
