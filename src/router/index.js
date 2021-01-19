import Vue from 'vue'
import VueRouter from 'vue-router'
import Empty from '../views/empty.vue'
+
  Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  },
  {
    path: '/jun',
    component: Empty,
    children: [
      {
        path: 'stopwatch',
        name: 'jun:stopwatch',
        component: () => import(/* webpackChunkName: "jun" */ '../views/jun/Stopwatch.vue')
      },      
      {
        path: 'image',
        name: 'jun:image',
        component: () => import(/* webpackChunkName: "jun" */ '../views/jun/ImageEx.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
