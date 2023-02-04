import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import CurrencyView from "@/views/CurrencyView.vue";
import СurrenciesView from "@/views/СurrenciesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: СurrenciesView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/currency/:id",
      name: "currency",
      component: CurrencyView,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
    },
  ],
});

export default router;
