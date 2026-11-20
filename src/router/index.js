import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const loadProject = () => import("../views/ProjectDetail.vue");

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/project/:id", name: "project-detail", component: loadProject },
    { path: "/:pathMatch(.*)*", name: "not-found", component: loadProject },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash && document.getElementById(to.hash.slice(1))) {
      return { el: to.hash };
    }
    return { top: 0 };
  },
});
