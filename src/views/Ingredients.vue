<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <div class="flex flex-col p-8 justify-center items-center">
    <input
      type="text"
      name=""
      id=""
      v-model="keyword"
      class="rounded border bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for ingredients"
    />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-16"
    >
      <RouterLink
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-1 shadow"
      >
        <h3 class="text-xl font-bold mb-2 text-center">
          {{ ingredient.strIngredient }}
        </h3>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import MealItem from "@/components/MealItem.vue";
import axiosClient from "@/axiosClient.js";

const store = useHomeStore();
const meals = computed(() => store.mealsByLetter);
const keyword = ref("");
const ingredients = computed(() => store.ingredients);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

const route = useRoute();
const router = useRouter();

onMounted(async () => {
  // console.dir(ingredients.value);
  // if (!ingredients.value) {
    store.getIngredients();
  
  // console.dir(ingredients.value);
  // const response = await axiosClient.get(`list.php?i=list`);
  // ingredients.value = response.data.meals;
  // console.dir(ingredients.value);
  // }
  // keyword.value = route.params.letter;
  // if (keyword.value) {
  //   store.searchMealsByLetter(keyword.value);
  // }
});
</script>
