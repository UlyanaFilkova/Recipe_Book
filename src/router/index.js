import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MealsByName from "@/views/MealsByName.vue";
import MealsByLetter from "@/views/MealsByLetter.vue";
import MealsByIngredient from "@/views/MealsByIngredient.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";
import MealDetails from "@/views/MealDetails.vue";
import Ingredients from "@/views/Ingredients.vue";

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
          path: "/ingredients",
          name: "ingredients",
          component: Ingredients,
        },
        {
          path: "/ingredient/:ingredient?",
          name: "byIngredient",
          component: MealsByIngredient,
        },
        {
          path: "/meal/:id",
          name: "mealDetails",
          component: MealDetails,
        },
      ],
    },
  ],
});

export default router;
