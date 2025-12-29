import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/home.vue';
import overview from '@/views/overview.vue';

const routes = [
  {
    path: '',
    name: 'home',
    component: home,
  },
  {
    path: '/overview',
    name: 'overview',
    component: overview,
  }
];

const router = createRouter({
  history: createWebHashHistory('/Expense-tracker/'), 
  routes,
});

export default router;