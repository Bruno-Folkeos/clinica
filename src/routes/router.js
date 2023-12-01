import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/screen/Home.vue';
import Login from '@/screen/Login.vue';
import Register from '@/screen/Register.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router