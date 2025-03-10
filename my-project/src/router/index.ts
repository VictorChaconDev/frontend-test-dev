import { createRouter, createWebHistory } from "vue-router";
import PerfilsView from "../components/perfils/perfilsView.vue";
import ReclutatsView from "../components/perfils/reclutatsView.vue";
import ProductListPage from "../components/ProductListPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/perfils",
      name: "perfils",
      component: PerfilsView,
    },{
    path: "/reclutats",
      name: "reclutats",
      component: ReclutatsView,
    },
    {
    path: "/",
      name: "productos",
      component: ProductListPage,
    }
  ],
});

export default router;
