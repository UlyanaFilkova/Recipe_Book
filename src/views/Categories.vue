<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Categories</h1>
  </div>
  <div class="flex flex-col p-8 justify-center items-center">
    <input
      type="text"
      name=""
      id=""
      v-model="keyword"
      class="rounded border bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for category"
    />
    <LoadingSpinner v-if="loading"> </LoadingSpinner>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-16"
    >
      <RouterLink
        :to="{
          name: 'byCategory',
          params: { category: category.strCategory },
        }"
        v-for="category of computedCategories"
        :key="category.idCategory"
        class="block bg-white rounded p-3 mb-1 shadow"
      >
        <h3 class="text-xl font-bold mb-2 text-center">
          {{ category.strCategory }}
        </h3>
      </RouterLink>
    </div>
    <NothingFound v-if="nothingFound" searchType="Category"> </NothingFound>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed, watch } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import NothingFound from "@/components/NothingFound.vue";

const store = useHomeStore();

const keyword = ref("");
const categories = computed(() => store.categories);
const loading = ref(true); // Add a loading spinner
const nothingFound = computed(() => computedCategories.value.length === 0);

const computedCategories = computed(() => {
  if (!computedCategories) return categories;
  return categories.value.filter((c) =>
    c.strCategory.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(async () => {
  if (!categories.value.length) {
    loading.value = true;
    await store.getCategories();
    loading.value = false;
  }
});
</script>
