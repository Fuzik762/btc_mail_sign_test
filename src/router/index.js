import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '../views/AuthView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'auth-layout' },
    component: AuthView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
