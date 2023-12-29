import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import HomeView from "@/views/home/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/explore/:name",
    name: "explore",
    component: () => import("@/views/explore/[name].vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.trainer;
  // Redirect guest to login page
  if (!isAuthenticated && !to.meta?.public) {
    return { name: "login" };
  }
  // Redirect user to home page
  if (isAuthenticated && to.meta?.public) {
    return { name: "home" };
  }
});

export default router;
