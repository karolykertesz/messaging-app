import { createRouter, createWebHistory } from 'vue-router';
import MentorDetails from './pages/mentors/MenthorDetails.vue';
import MentorList from './pages/mentors/MentorList.vue';
import SignUp from './pages/mentors/SignUp.vue';
import NotFound from './pages/mentors/NotFound.vue';
import Contact from './pages/request/Contact.vue';
import Request from './pages/request/Request.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/mentors',
    },
    {
      path: '/mentors',
      component: MentorList,
    },
    {
      path: '/mentors/:id',
      component: MentorDetails,
      children: [{ path: 'contact', component: Contact }],
    },
    {
      path: '/signup',
      component: SignUp,
    },
    {
      path: '/request',
      component: Request,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;
