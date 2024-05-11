import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import MenuView from "@/views/MenuView.vue";
import AboutView from "@/views/AboutView.vue";
import ShopView from "@/views/ShopView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/menu",
      name: "menu",
      component: MenuView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue")
    // }
  ]
});

export default router;
