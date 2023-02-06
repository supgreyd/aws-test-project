import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/views/CoursesView.vue"),
      meta: {
        layout: "LayoutPrivate",
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

export default router;
