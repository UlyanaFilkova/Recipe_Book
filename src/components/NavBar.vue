<template>
  <header
    class="sticky-header box-content bg-orange-400 text-lg font-medium text-white shadow-md h-16 flex justify-between items-stretch pl-8 pr-10"
  >
    
    <RouterLink
      :to="{ name: 'home' }"
      class="inline-flex h-full items-center hover:bg-orange-300 px-2"
      >Home</RouterLink
    >
    <nav class="flex items-center gap-1">
      <div class="relative flex">
        <input
          type="search"
          class="bg-white text-gray-700 relative text-md m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary focus:border-orange-500"
          placeholder="Search"
          aria-label="Search"
          id=""
          v-model="keyword"
          @input="searchMeals"
        />
        <span
          class="cursor-pointer flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
      </div>
      <RouterLink
        :to="{ name: 'ingredients' }"
        class="inline-flex px-3 h-full items-center hover:bg-orange-300 transition-colors"
        >Ingredients</RouterLink
      >
      <RouterLink
        :to="{ name: 'categories' }"
        class="inline-flex px-3 h-full items-center hover:bg-orange-300 transition-colors"
        >Categories</RouterLink
      >
      <RouterLink
        :to="{ name: 'areas' }"
        class="inline-flex px-3 h-full items-center hover:bg-orange-300 transition-colors"
        >Areas</RouterLink
      >
      <button @click.prevent="getRandomMeal()">Random meal</button>
    </nav>
  </header>
</template>

<style scoped>
.sticky-header {
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import MealItem from "@/components/MealItem.vue";
import axiosClient from "@/axiosClient.js";

const store = useHomeStore();
const keyword = ref("");

function searchMeals() {
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

async function getRandomMeal() {
  const response = await axiosClient.get(`/random.php`);
  const mealId = response.data.meals[0].idMeal || 0;
  router.push({ name: "mealDetails", params: { id: mealId } });
}
</script>
