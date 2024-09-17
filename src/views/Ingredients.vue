<template>
  <div class="pt-8 pb-0 px-16">
    <h1 class="text-4xl font-bold my-2 text-orange-500 text-center">Ingredients</h1>
  </div>
  <div class="flex flex-col p-8 justify-center items-center">
    <input
      type="text"
      name=""
      id=""
      v-model="keyword"
      class="rounded border bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-11 w-full text-center"
      placeholder="Search for ingredients"
    />
    <LoadingSpinner v-if="loading"> </LoadingSpinner>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-16"
    >
      <RouterLink
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="bg-white rounded p-3 custom-shadow flex flex-col justify-center align-center"
      >
        <h3
          class="text-xl font-bold text-center justify-center flex-1 flex items-center"
        >
          {{ ingredient.strIngredient }}
        </h3>
      </RouterLink>
    </div>
    <NothingFound v-if="nothingFound" searchType="Ingredient"> </NothingFound>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed, watch } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import NothingFound from "@/components/NothingFound.vue";

const store = useHomeStore();

const keyword = ref("");
const ingredients = computed(() => store.ingredients);
const loading = ref(true);
const nothingFound = computed(() => computedIngredients.value.length === 0);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(async () => {
  loading.value = true;
  await store.getIngredients();
  loading.value = false;
});
</script>
