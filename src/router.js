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

    // System Pages
    {
      path: '/user/login',
      component: () => import('./views/user/login'),
    },
    {
      path: '/user/forgot',
      component: () => import('./views/user/forgot'),
    },

    // Dashboards
    {
      path: '/dashboard/alpha',
      component: () => import('./views/dashboard/alpha'),
    },
    {
      path: '/dashboard/beta',
      component: () => import('./views/dashboard/beta'),
    },
    {
      path: '/dashboard/crypto',
      component: () => import('./views/dashboard/crypto'),
    },
    {
      path: '/dashboard/gamma',
      component: () => import('./views/dashboard/gamma'),
    },
    {
      path: '/dashboard/docs',
      component: () => import('./views/dashboard/docs'),
    },

    // Default Pages
    {
      path: '/pages/login-alpha',
      component: () => import('./views/pages/login-alpha'),
    },
    {
      path: '/pages/login-beta',
      component: () => import('./views/pages/login-beta'),
    },
    {
      path: '/pages/register',
      component: () => import('./views/pages/register'),
    },
    {
      path: '/pages/lockscreen',
      component: () => import('./views/pages/lockscreen'),
    },
    {
      path: '/pages/pricing-table',
      component: () => import('./views/pages/pricing-table'),
    },
    {
      path: '/pages/invoice',
      component: () => import('./views/pages/invoice'),
    },

    // Apps
    {
      path: '/apps/messaging',
      component: () => import('./views/apps/messaging'),
    },
    {
      path: '/apps/mail',
      component: () => import('./views/apps/mail'),
    },
    {
      path: '/apps/profile',
      component: () => import('./views/apps/profile'),
    },
    {
      path: '/apps/gallery',
      component: () => import('./views/apps/gallery'),
    },

    // Ecommerce
    {
      path: '/ecommerce/dashboard',
      component: () => import('./views/ecommerce/dashboard'),
    },
    {
      path: '/ecommerce/products-catalog',
      component: () => import('./views/ecommerce/products-catalog'),
    },
    {
      path: '/ecommerce/product-details',
      component: () => import('./views/ecommerce/product-details'),
    },
    {
      path: '/ecommerce/product-edit',
      component: () => import('./views/ecommerce/product-edit'),
    },
    {
      path: '/ecommerce/products-list',
      component: () => import('./views/ecommerce/products-list'),
    },
    {
      path: '/ecommerce/orders',
      component: () => import('./views/ecommerce/orders'),
    },
    {
      path: '/ecommerce/cart',
      component: () => import('./views/ecommerce/cart'),
    },

    // Layout
    {
      path: '/layout/bootstrap',
      component: () => import('./views/layout/bootstrap'),
    },
    {
      path: '/layout/card',
      component: () => import('./views/layout/card'),
    },
    {
      path: '/layout/utilities',
      component: () => import('./views/layout/utilities'),
    },
    {
      path: '/layout/typography',
      component: () => import('./views/layout/typography'),
    },
    {
      path: '/layout/mail-templates',
      component: () => import('./views/layout/mail-templates'),
    },

    // Icons
    {
      path: '/icons/fontawesome',
      component: () => import('./views/icons/fontawesome'),
    },
    {
      path: '/icons/linear',
      component: () => import('./views/icons/linear'),
    },
    {
      path: '/icons/icomoon',
      component: () => import('./views/icons/icomoon'),
    },

    // Charts
    {
      path: '/charts/chartist',
      component: () => import('./views/charts/chartist'),
    },
    {
      path: '/charts/chart',
      component: () => import('./views/charts/chart'),
    },
    {
      path: '/charts/peity',
      component: () => import('./views/charts/peity'),
    },
    {
      path: '/charts/c3',
      component: () => import('./views/charts/c3'),
    },

    // Blog
    {
      path: '/blog/feed',
      component: () => import('./views/blog/feed'),
    },
    {
      path: '/blog/post',
      component: () => import('./views/blog/post'),
    },
    {
      path: '/blog/add-blog-post',
      component: () => import('./views/blog/add-blog-post'),
    },

    // YouTube
    {
      path: '/youtube/feed',
      component: () => import('./views/youtube/feed'),
    },
    {
      path: '/youtube/view',
      component: () => import('./views/youtube/view'),
    },

    // GitHub
    {
      path: '/github/explore',
      component: () => import('./views/github/explore'),
    },
    {
      path: '/github/discuss',
      component: () => import('./views/github/discuss'),
    },

    // AntDesign
    {
      path: '/antd',
      component: () => import('./views/antd'),
    },
  ],
})
