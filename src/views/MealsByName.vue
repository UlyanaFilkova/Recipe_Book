<template>
  <div class="">
    <LoadingSpinner v-if="loading"> </LoadingSpinner>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full p-8"
    >
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <NothingFound v-if="nothingFound" searchType="Meal"> </NothingFound>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import MealItem from "@/components/MealItem.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import NothingFound from "@/components/NothingFound.vue";

const store = useHomeStore();
const meals = computed(() => store.mealsByName);
const keyword = ref("");
const loading = ref(true); // Add a loading spinner
const router = useRouter();
const route = useRoute();
const nothingFound = computed(() => meals.value == null);

onMounted(async () => {
  keyword.value = route.params.name;
  if (keyword.value) {
    loading.value = true; // Set loading to true before making the API call
    await store.searchMealsByName(keyword.value);
    loading.value = false; // Set loading to false after the API call is complete
  }
});

watch(route, async () => {
  keyword.value = route.params.name;
  if (keyword.value) {
    await store.searchMealsByName(keyword.value);
  }
});
</script>
