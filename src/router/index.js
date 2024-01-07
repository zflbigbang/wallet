import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/create',
      component: () => import('../views/create/Create.vue')
    },
    {
      path: '/',
      component: () => import('../views/hd/NoLogin.vue')
    },
    {
      path: '/sw',
      component: () => import('../views/backup/SecurityWords.vue')
    },
    {
      path: '/backup',
      component: () => import('../views/backup/BackUp.vue')
    },
    {
      path: '/sk',
      component: () => import('../views/export/SecurityKey.vue')
    },
    {
      path: '/export',
      component: () => import('../views/export/Export.vue')
    },
    {
      path: '/hd',
      component: () => import('../views/hd/Login.vue')
    },
    {
      path: '/manage',
      component: () => import('../views/manage/Manage.vue')
    },
    {
      path: '/accept',
      component: () => import('../views/payment/Accept.vue')
    },
    {
      path: '/to',
      component: () => import('../views/payment/To.vue')
    }
  ]
})

export default router
