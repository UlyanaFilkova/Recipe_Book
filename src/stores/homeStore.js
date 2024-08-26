import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axiosClient from "@/axiosClient.js";

export const useHomeStore = defineStore("homeStore", () => {
  const meals = ref([]);
  const mealsByName = ref([]);
  const mealsByIngredient = ref([]);
  const mealsByCategory = ref([]);
  const mealsByArea = ref([]);
  const mealsByLetter = ref([]);
  const ingredient = ref({});
  const ingredients = ref([]);
  const categories = ref([]);
  const areas = ref([]);

  const searchMealsByName = async (keyword) => {
    const response = await axiosClient.get(`search.php?s=${keyword}`);
    mealsByName.value = response.data.meals;
  };

  const searchMealsByIngredient = async (keyword) => {
    const response = await axiosClient.get(`filter.php?i=${keyword}`);
    mealsByIngredient.value = response.data.meals;
  };

  const searchMealsByCategory = async (keyword) => {
    const response = await axiosClient.get(`filter.php?c=${keyword}`);
    mealsByCategory.value = response.data.meals;
  };

  const searchMealsByArea = async (keyword) => {
    const response = await axiosClient.get(`filter.php?a=${keyword}`);
    mealsByArea.value = response.data.meals;
  };

  const searchMealsByLetter = async (keyword) => {
    const response = await axiosClient.get(
      `search.php?f=${keyword.toLowerCase()}`
    );
    mealsByLetter.value = response.data.meals;
  };

  const getIngredients = async () => {
    const response = await axiosClient.get(`list.php?i=list`);
    ingredients.value = response.data.meals;
    console.dir(ingredients.value);
  };

  // const getIngredient = async (keyword) => {
  //   const response = await axiosClient.get(`filter.php?i=${keyword}`);
  //   ingredient.value = response.data.meals[0];
  //   console.dir(ingredient.value);
  // };

  const getCategories = async () => {
    const response = await axiosClient.get(`list.php?c=list`);
    categories.value = response.data.meals;
    console.dir(categories.value);
  };
  const getAreas = async () => {
    const response = await axiosClient.get(`list.php?a=list`);
    areas.value = response.data.meals;
    console.dir(areas.value);
  };

  return {
    meals,
    mealsByName,
    mealsByIngredient,
    mealsByCategory,
    mealsByArea,
    mealsByLetter,
    ingredient,
    ingredients,
    categories,
    areas,
    searchMealsByName,
    searchMealsByIngredient,
    searchMealsByCategory,
    searchMealsByArea,
    searchMealsByLetter,
    getIngredients,
    // getIngredient,
    getCategories,
    getAreas,
  };
});
