<template>
  <div class="bg-white shadow rounded-xl flex flex-col custom-shadow">
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </RouterLink>
    <div class="p-3 grow flex flex-col justify-between">
      <RouterLink
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        class="font-semibold mb-1"
        >{{ meal.strMeal }}</RouterLink
      >
      <div class="py-2 flex justify-end">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="px-3 py-1 inline-block rounded border border-red-600 bg-red-500 hover:border-red-700 hover:bg-red-700 text-white transition-colors"
          ><slot>YouTube</slot></a
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
