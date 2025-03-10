import { createRouter, createWebHistory } from "vue-router";
import ProductListPage from "../components/ProductListPage.vue";
import ProductDetailPage from "../components/ProductDetailPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/",
      name: "productos",
      component: ProductListPage,
    },
        {
    path: "/product/:id",
      name: "producto",
      component: ProductDetailPage,
          props:true
    }
  ],

});

export default router;
