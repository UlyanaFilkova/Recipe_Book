<template>
  <div class="flex flex-col p-8 justify-center items-center">
    <input
      type="text"
      name=""
      id=""
      class="rounded border-1 border-gray-600 w-full"
      placeholder="Search for meals"
    />

    <div class="flex gap-2 my-4">
      <RouterLink
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        >{{ letter }}
      </RouterLink>
    </div>

    <div
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

const store = useHomeStore();
const meals = computed(() => store.mealsByLetter);
const keyword = ref("");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const route = useRoute();
const router = useRouter();

onMounted(() => {
  keyword.value = route.params.letter;
  if (keyword.value) {
    store.searchMealsByLetter(keyword.value);
  }
});

watch(route, () => {
  keyword.value = route.params.letter;
  store.searchMealsByLetter(route.params.letter);
});
</script>
