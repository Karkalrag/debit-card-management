import MyDebitCards from "@/views/MyDebitCards.vue";
import MyTransactions from "@/views/MyTransactions.vue";
import DebitCardActions from "@/components/DebitCardActions.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "my-debit-cards",
      component: MyDebitCards,
    },
    {
      path: "/transactions",
      name: "my-transactions",
      component: MyTransactions,
    },
    {
      path: "/card-actions",
      name: "my-card-actions",
      component: DebitCardActions,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
