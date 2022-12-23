import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Auth, Widgets } from "@pages";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login", // CONST.nav.login,
    name: "auth",
    component: Auth,
  },
  {
    path: "/widgets", // CONST.nav.widgets,
    name: "widgets",
    component: Widgets,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
