<template>
  <div class="p-8">
    <input
      type="text"
      name=""
      id=""
      v-model="keyword"
      @change="searchMeal"
      class="rounded border-1 border-gray-600 w-full"
      placeholder="Search for meals"
    />
  </div>
  <ul v-if="keyword">
    <li v-for="meal in meals" :key="meal.id">{{ meal.strMeal }}</li>
  </ul>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed } from "vue";
import axiosClient from "@/axiosClient.js";

const store = useHomeStore();
const keyword = ref("");
const meals = computed(() => store.searchedMeals);
function searchMeal() {
  store.searchMeal(keyword.value);
  console.dir(meals);
}
</script>
