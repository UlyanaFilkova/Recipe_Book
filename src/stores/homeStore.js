import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axiosClient from "@/axiosClient.js";

export const useHomeStore = defineStore("homeStore", () => {
  const meals = ref([0, 1, 2]);
  const searchedMeals = ref([]);

  const searchMeal = async (keyword) => {
    const response = await axiosClient.get(`search.php?s=${keyword}`);
    searchedMeals.value = response.data.meals;
    console.dir(searchedMeals.value);
  };

  return { meals, searchedMeals, searchMeal };
});
