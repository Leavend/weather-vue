import { createRouter, createWebHistory } from 'vue-router'; // 1. Import createRouter and createWebHistory
import Home from '../views/Home.vue';
import Weather from '../views/Weather.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // 2. Use createWebHistory instead of mode: 'history'
  routes,
});

export default router;
