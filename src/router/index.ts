import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Auth, Widgets } from "@pages";

const routes: Array<RouteRecordRaw> = [
  {
    path: CONST.nav.login,
    name: "auth",
    component: Auth,
  },
  {
    path: CONST.nav.widgets,
    name: "widgets",
    component: Widgets,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
