<template>
  <div class="flex flex-col p-8 justify-center items-center">
    <div class="px-8">
      <h1
        v-if="keyword"
        class="text-4xl font-bold mb-4 pt-4 pb-8 text-orange-500"
      >
        {{ keyword }}
      </h1>
    </div>
    <div
      v-if="keyword"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full"
    >
      <MealItemShort v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import MealItemShort from "@/components/MealItemShort.vue";

const store = useHomeStore();
const meals = computed(() => store.mealsByCategory);
const keyword = ref("");

const route = useRoute();
const router = useRouter();

onMounted(async () => {
  keyword.value = route.params.category;
  if (keyword.value) {
    store.searchMealsByCategory(keyword.value);
  }
});

watch(route, () => {
  keyword.value = route.params.category;
  if (keyword.value) {
    store.searchMealsByCategory(keyword.value);
  }
});
</script>
