import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Auth, Widgets } from '@pages';

const routes: Array<RouteRecordRaw> = [
  {
    path: CONST.nav.login,
    component: Auth,
  },
  {
    path: CONST.nav.widgets,
    component: Widgets,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async to => {
  const publicPages = ['/login'];
  // const authRequired = !publicPages.includes(to.path);
  // const auth = useAuthStore();

  // if (authRequired && !auth.user) {
  //   auth.returnUrl = to.fullPath;

  //   return '/login';
  // }
});

export default router;
