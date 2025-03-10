import { createRouter, createWebHistory } from "vue-router";
import ProductListPage from "../components/ProductListPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/",
      name: "productos",
      component: ProductListPage,
    }
  ],
});

export default router;
