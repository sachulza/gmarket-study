import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/Layout/:folder/:file",
    name: "Layout",
    component: () => import("@/views/Layout.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // savedPosition이 있으면 이전 위치로 돌아감
    if (savedPosition) {
      return savedPosition;
    } else {
      // 기본적으로 페이지의 최상단으로 스크롤
      return { top: 0 };
    }
  },
});

export default router;
