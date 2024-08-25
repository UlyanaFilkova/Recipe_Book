<template>
  <!-- <div class="p-8 pb-0">
    <input
      type="text"
      name=""
      id=""
      v-model="keyword"
      @input="searchMeals"
      class="rounded border-1 border-gray-600 w-full"
      placeholder="Search for meals"
    />
  </div> -->
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full p-8"
  >
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import MealItem from "@/components/MealItem.vue";

const store = useHomeStore();
// const keyword = ref("");

const meals = computed(() => store.mealsByName);

// function searchMeals() {
//   store.searchMealsByName(keyword.value);
//   router.push({ name: "byName", params: { name: keyword.value } });
// }

// const route = useRoute();
// const router = useRouter();

// onMounted(() => {
//   keyword.value = route.params.name;
//   if (keyword.value) {
//     searchMeals();
//   }
// });
</script>
