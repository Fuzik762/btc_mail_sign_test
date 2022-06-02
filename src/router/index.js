import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'AuthLogin',
    meta: {layout: 'auth-layout'},
    component: () => import('../pages/AuthLogin.vue')
  },
  {
    path: '/list-employee',
    name: 'ListEmployee',
    meta: {layout: 'dashboard-layout'},
    component: () => import('../pages/ListEmployee.vue')
  },
  {
    path: '/create-employee',
    name: 'CreateEmployee',
    meta: {layout: 'dashboard-layout'},
    component: () => import('../pages/CreateEmployee.vue')
  },
  {
    path: '/edit-employee/:id',
    name: 'EditEmployee',
    meta: {layout: 'dashboard-layout'},
    component: () => import('../pages/CreateEmployee.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
