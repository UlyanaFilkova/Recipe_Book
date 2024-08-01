import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axiosClient from "@/axiosClient.js";

export const useHomeStore = defineStore("homeStore", () => {
  const meals = ref([]);
  const searchedMeals = ref([]);
 

  const searchMeals = async (keyword) => {
    const response = await axiosClient.get(`search.php?s=${keyword}`);
    searchedMeals.value = response.data.meals;
  };

  return { meals, searchedMeals, searchMeals };
});
