<template>
  <header
    class="sticky-header bg-white shadow-md h-16 flex justify-between items-stretch px-8 pr-10"
  >
    <RouterLink :to="{ name: 'home' }" class="inline-flex h-full items-center"
      >Home</RouterLink
    >
    <nav class="flex items-center gap-1">
      <!-- <RouterLink
        :to="{ name: 'byName' }"
        class="inline-flex px-3 h-full items-center hover:bg-stone-300 transition-colors"
        >Search Meals</RouterLink
      > -->
      <!-- <RouterLink
        :to="{ name: 'byLetter' }"
        class="inline-flex px-3 h-full items-center hover:bg-stone-300 transition-colors"
        >Meals by Letter</RouterLink
      > -->

      <!-- <form class="max-w-lg w-400 mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            v-model="keyword"
            @input="searchMeals"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for meals..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form> -->
      <div class="relative flex">
        <input
          type="search"
          class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          id="exampleFormControlInput2"
          aria-describedby="button-addon2"
          v-model="keyword"
          @input="searchMeals"
        />
        <span
          class="cursor-pointer flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
          id="button-addon2"
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

      <!-- <div class="px-8 pb-0">
        <input
          type="text"
          name=""
          id=""
          v-model="keyword"
          @input="searchMeals"
          class="rounded border-1 border-gray-600 w-full h-8"
          placeholder="Search for meals"
        />
      </div> -->
      <RouterLink
        :to="{ name: 'ingredients' }"
        class="inline-flex px-3 h-full items-center hover:bg-stone-300 transition-colors"
        >Ingredients</RouterLink
      >
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

const store = useHomeStore();
const keyword = ref("");

function searchMeals() {
  store.searchMealsByName(keyword.value);
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
