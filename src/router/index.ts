import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Auth from "../pages/Auth/Auth.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: CONST.nav.login,
    name: "auth",
    component: Auth,
  },
  {
    path: CONST.nav.widgets,
    name: "widgets",
    component: () => import("../pages/Widgets/Widgets.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
