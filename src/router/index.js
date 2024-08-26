import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MealsByName from "@/views/MealsByName.vue";
import MealsByLetter from "@/views/MealsByLetter.vue";
import MealsByIngredient from "@/views/MealsByIngredient.vue";
import MealsByCategory from "@/views/MealsByCategory.vue";
import MealsByArea from "@/views/MealsByArea.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";
import MealDetails from "@/views/MealDetails.vue";
import Ingredients from "@/views/Ingredients.vue";
import Categories from "@/views/Categories.vue";
import Areas from "@/views/Areas.vue";

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
          path: "/categories",
          name: "categories",
          component: Categories,
        },
        {
          path: "/areas",
          name: "areas",
          component: Areas,
        },
        {
          path: "/ingredient/:ingredient?",
          name: "byIngredient",
          component: MealsByIngredient,
        },
        {
          path: "/category/:category?",
          name: "byCategory",
          component: MealsByCategory,
        },
        {
          path: "/area/:area?",
          name: "byArea",
          component: MealsByArea,
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
