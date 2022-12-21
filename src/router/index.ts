import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CONST from "@/utils/const";
import { Auth } from "@/pages";

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
