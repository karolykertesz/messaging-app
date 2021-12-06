import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/mentors',
      component: null,
    },
    {
      path: '/mentors/:id',
      component: null,
    },
  ],
});

export default router;
