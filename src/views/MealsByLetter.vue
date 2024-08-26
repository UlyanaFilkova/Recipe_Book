<template>
  <div class="flex flex-col p-8 justify-center items-center">
    <div class="flex gap-2 mb-4">
      <RouterLink
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        >{{ letter }}
      </RouterLink>
    </div>
    <LoadingSpinner v-if="loading"> </LoadingSpinner>
    <div
      v-else
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
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const store = useHomeStore();
const meals = computed(() => store.mealsByLetter);
const keyword = ref("");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const loading = ref(true); // Add a loading spinner
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  keyword.value = route.params.letter;
  if (keyword.value) {
    loading.value = true; // Set loading to true before making the API call
    await store.searchMealsByLetter(keyword.value);
    loading.value = false; // Set loading to false after the API call is complete
  }
});

watch(route, async () => {
  keyword.value = route.params.letter;
  if (keyword.value) {
    loading.value = true; // Set loading to true before making the API call
    await store.searchMealsByLetter(keyword.value);
    loading.value = false; // Set loading to false after the API call is complete
  }
});
</script>
