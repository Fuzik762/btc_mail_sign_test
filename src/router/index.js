import { createRouter, createWebHistory } from 'vue-router';
import { useToast } from 'vue-toastification';

const toast = useToast();

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/employee'
  },
  {
    path: '/login',
    name: 'AuthLogin',
    meta: {layout: 'auth-layout'},
    component: () => import('../pages/AuthLogin.vue')
  },
  {
    path: '/employee',
    name: 'ListEmployee',
    meta: {layout: 'dashboard-layout', auth: true},
    component: () => import('../pages/ListEmployee.vue')
  },
  {
    path: '/employee/create',
    name: 'CreateEmployee',
    meta: {layout: 'dashboard-layout', auth: true},
    component: () => import('../pages/SaveEmployee.vue')
  },
  {
    path: '/employee/edit/:id',
    name: 'EditEmployee',
    meta: {layout: 'dashboard-layout', auth: true},
    component: () => import('../pages/SaveEmployee.vue')
  },
  {
    path: '/templates',
    name: 'ListTemplates',
    meta: {layout: 'dashboard-layout', editTemplates: true, auth: true},
    component: () => import('../pages/ListTemplates.vue')
  },
  {
    path: '/templates/edit/:id',
    name: 'EditTemplates',
    meta: {layout: 'dashboard-layout', editTemplates: false, auth: true},
    component: () => import('../pages/SaveTemplates.vue')
  },
  {
    path: '/templates/create',
    name: 'CreateTemplates',
    meta: {layout: 'dashboard-layout', editTemplates: false, auth: true},
    component: () => import('../pages/SaveTemplates.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = localStorage.getItem("token_apollo");
  console.log(currentUser)
  const requireAuth = to.matched.some(r => r.meta.auth)

  if(requireAuth && !currentUser) {
    toast.warning("Вы не вошли в систему!")
    next('/login')
  } else {
    next()
  }
})

export default router;
