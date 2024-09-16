import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/pages/Home/home.vue";
import Settings from "@/components/pages/Settings/settings.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/settings", component: Settings },
  ],
  linkActiveClass: "active",
});

export default router;
