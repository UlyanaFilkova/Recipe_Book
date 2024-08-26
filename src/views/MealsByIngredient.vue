<template>
  <div v-if="keyword" class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500 text-center">
      {{ keyword }}
    </h1>
    <div class="">{{ ingredient.strDescription }}</div>
  </div>
  <div class="flex flex-col p-8 justify-center items-center">
    <div
      v-if="keyword"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"
    >
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import MealItem from "@/components/MealItem.vue";

const store = useHomeStore();
const meals = computed(() => store.mealsByIngredient);
const ingredients = computed(() => store.ingredients);

const ingredient = computed(() => {
  console.dir(store.ingredients);
  if (!ingredients.value || !keyword.value) return {};
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )[0];
});
const keyword = ref("");

const route = useRoute();
const router = useRouter();

onMounted(async () => {
  keyword.value = route.params.ingredient;
  if (keyword.value) {
    store.searchMealsByIngredient(keyword.value);
  }
});

watch(route, () => {
  keyword.value = route.params.ingredient;
  if (keyword.value) {
    store.searchMealsByIngredient(keyword.value);
  }
});
</script>
