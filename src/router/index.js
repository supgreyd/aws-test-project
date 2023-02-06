import { createRouter, createWebHistory } from "vue-router";
import { store } from "@/store/index.js";

console.log({ store });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/views/CoursesView.vue"),
      meta: {
        layout: "LayoutPrivate",
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
      meta: {
        layout: "LayoutPublic",
      },
    },
    {
      path: "/course/:id",
      name: "course",
      component: () => import("@/views/CourseView.vue"),
      meta: {
        layout: "LayoutPrivate",
        requiresAuth: true,
      },
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("@/views/NotFoundView.vue"),
      meta: {
        layout: "LayoutPublic",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters["auth/GET_USER"]) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
