import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MealsByName from "@/views/MealsByName.vue";
import MealsByLetter from "@/views/MealsByLetter.vue";
import MealsByIngredient from "@/views/MealsByIngredient.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/by-name/:name?",
          name: "byName",
          component: MealsByName,
        },
        {
          path: "/by-letter/:letter?",
          name: "byLetter",
          component: MealsByLetter,
        },
        {
          path: "/ingredient/:ingredient?",
          name: "byIngredient",
          component: MealsByIngredient,
        },
      ],
    },
  ],
});

export default router;
