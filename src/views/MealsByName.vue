<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      name=""
      id=""
      v-model="keyword"
      @change="searchMeals"
      class="rounded border-1 border-gray-600 w-full"
      placeholder="Search for meals"
    />
  </div>
  <div
    v-if="keyword"
    class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 lg:grid-cols-4"
  >
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
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
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const store = useHomeStore();
const keyword = ref("");

const meals = computed(() => store.searchedMeals);

function searchMeals() {
  store.searchMeals(keyword.value);
  router.push({ name: "byName", params: { name: keyword.value } });
}

const route = useRoute();
const router = useRouter();

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
