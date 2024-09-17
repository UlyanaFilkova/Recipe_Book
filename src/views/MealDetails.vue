<template>
  <LoadingSpinner v-if="loading"> </LoadingSpinner>
  <div v-else class="max-w-[800px] mx-auto p-8">
    <!-- <h1 class="text-4xl font-bold mb-5 text-orange-500 text-center">
      {{ meal.strMeal }}
    </h1> -->

    <div class="flex gap-7">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="max-w-[50%] rounded"
      />
      <div class="text-lg py-2 flex flex-col gap-4 justify-center">
        <h1 class="text-4xl font-bold mb-5 text-orange-500">
          {{ meal.strMeal }}
        </h1>
        <div class="flex flex-col gap-4">
          <div>
            <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
          </div>
          <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
          <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
        </div>
      </div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li
              v-if="
                meal[`strIngredient${ind + 1}`] &&
                meal[`strIngredient${ind + 1}`] != ' '
              "
            >
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li
              v-if="
                meal[`strMeasure${ind + 1}`] &&
                meal[`strMeasure${ind + 1}`] != ' '
              "
            >
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4 flex gap-5 justify-end">
        <YouTubeButton :href="meal.strYoutube">Go to YouTube </YouTubeButton>
        <!-- <DefaultButton :href="meal.strSource"
          >View Original Source
        </DefaultButton> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import axiosClient from "@/axiosClient.js";
import YouTubeButton from "@/components/YouTubeButton.vue";
import DefaultButton from "@/components/DefaultButton.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const store = useHomeStore();
const meal = ref({});
const route = useRoute();
const router = useRouter();
const loading = ref(true); // Add a loading spinner

onMounted(async () => {
  fetchMeal();
});

watch(route, (newRoute) => {
  if (newRoute.params.id) {
    fetchMeal();
  }
});

async function fetchMeal() {
  loading.value = true;
  const response = await axiosClient.get(`/lookup.php?i=${route.params.id}`);
  meal.value = response.data.meals[0] || {};
  loading.value = false;
  console.dir(meal.value);
}

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});
</script>
