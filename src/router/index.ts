import MyDebitCards from "@/views/MyDebitCards.vue";
import DebitCardActions from "@/components/DebitCardActions.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MyDebitCards,
    },
    {
      path: "/cards",
      name: "cards",
      component: MyDebitCards,
    },
    {
      path: "/payments",
      name: "payments",
      component: DebitCardActions,
    },
    {
      path: "/credit",
      name: "credit",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
