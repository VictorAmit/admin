import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'dashboard/alpha',
    },
    {
      path: '/dashboard/alpha',
      name: 'dashboardAlpha',
      component: () => import('./views/dashboard/alpha'),
    },
    {
      path: '/dashboard/beta',
      name: 'dashboardBeta',
      component: () => import('./views/dashboard/beta'),
    },
  ],
})
