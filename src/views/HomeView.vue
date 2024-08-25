<template>
  <div class="flex flex-col p-8 justify-center items-center">
    <div class="flex gap-2">
      <RouterLink
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        >{{ letter }}
      </RouterLink>
    </div>

    <div
      class="relative flex mt-10"
      data-twe-input-wrapper-init
      data-twe-input-group-ref
    >
      <input
        type="search"
        class="peer block min-h-[auto] w-full border-0 rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 bg-white cursor-text"
        placeholder="Search"
        aria-label="Search"
        id="search-input"
        aria-describedby="search-button"
        v-model="keyword"
      />
      
      <button
        class="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-stone-500"
        type="submit"
        id="search-button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        @click="searchMeals"
      >
        <span class="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import axiosClient from "@/axiosClient.js";
import { toRaw, onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const store = useHomeStore();
const ingredients = ref([]);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});

const router = useRouter();
const keyword = ref("");

function searchMeals() {
  store.searchMealsByName(keyword.value);
  router.push({ name: "byName", params: { name: keyword.value } });
}
</script>
