import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import CourseView from "@/views/CourseView.vue";
import CoursesView from "@/views/CoursesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: CoursesView,
      meta: {
        layout: "LayoutPrivate",
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        layout: "LayoutPublic",
      },
    },
    {
      path: "/course/:id",
      name: "course",
      component: CourseView,
      meta: {
        layout: "LayoutPrivate",
      },
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
      meta: {
        layout: "LayoutPublic",
      },
    },
  ],
});

export default router;
