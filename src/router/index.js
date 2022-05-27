import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/list-employee',
    name: 'ListEmployee',
    meta: {layout: 'dashboard-layout'},
    component: () => import('../pages/ListEmployee.vue')
  },
  {
    path: '/login',
    name: 'AuthLogin',
    meta: {layout: 'auth-layout'},
    component: () => import('../pages/AuthLogin.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
