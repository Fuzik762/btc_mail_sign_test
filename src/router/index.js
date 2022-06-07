import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'AuthLogin',
    meta: {layout: 'auth-layout'},
    component: () => import('../pages/AuthLogin.vue')
  },
  {
    path: '/employee',
    name: 'ListEmployee',
    meta: {layout: 'dashboard-layout'},
    component: () => import('../pages/ListEmployee.vue')
  },
  {
    path: '/employee/create',
    name: 'CreateEmployee',
    meta: {layout: 'dashboard-layout'},
    component: () => import('../pages/CreateEditEmployee.vue')
  },
  {
    path: '/employee/edit/:id',
    name: 'EditEmployee',
    meta: {layout: 'dashboard-layout'},
    component: () => import('../pages/CreateEditEmployee.vue')
  },
  {
    path: '/templates',
    name: 'ListTemplates',
    meta: {layout: 'dashboard-layout', editTemplates: true},
    component: () => import('../pages/ListTemplates.vue')
  },
  {
    path: '/templates/edit/:id',
    name: 'EditTemplates',
    meta: {layout: 'dashboard-layout', editTemplates: false},
    component: () => import('../pages/CreateEditTemplates.vue')
  },
  {
    path: '/templates/create',
    name: 'CreateTemplates',
    meta: {layout: 'dashboard-layout', editTemplates: false},
    component: () => import('../pages/CreateEditTemplates.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
