<template>
  <div class="bg-white shadow rounded-xl">
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </RouterLink>
    <div class="p-3">
      <RouterLink
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        class="font-semibold"
        >{{ meal.strMeal }}</RouterLink
      >
      <div class="py-2 flex justify-between">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="px-3 py-1 inline-block rounded border border-red-600 bg-red-500 hover:border-red-700 hover:bg-red-700 text-white transition-colors"
          >YouTube</a
        >
        <RouterLink
          :to="{ name: 'byLetter', params: { letter } }"
          class="px-3 py-1 inline-block text-shadow rounded border border-amber-500 bg-amber-400 hover:border-amber-500 hover:bg-amber-500 text-white transition-colors"
          >Save</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  meal: Object,
});
</script>
