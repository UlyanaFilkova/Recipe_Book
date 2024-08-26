<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Areas</h1>
  </div>
  <div class="flex flex-col p-8 justify-center items-center">
    <input
      type="text"
      name=""
      id=""
      v-model="keyword"
      class="rounded border bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for area"
    />
    <LoadingSpinner v-if="loading"> </LoadingSpinner>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-16"
    >
      <RouterLink
        :to="{
          name: 'byArea',
          params: { area: area.strArea },
        }"
        v-for="area of computedAreas"
        :key="area.idArea"
        class="block bg-white rounded p-3 mb-1 shadow"
      >
        <h3 class="text-xl font-bold mb-2 text-center">
          {{ area.strArea }}
        </h3>
      </RouterLink>
    </div>
    <NothingFound v-if="nothingFound" searchType="Area"> </NothingFound>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed, watch } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import NothingFound from "@/components/NothingFound.vue";

const store = useHomeStore();

const keyword = ref("");
const areas = computed(() => store.areas);
const loading = ref(true); // Add a loading spinner
const nothingFound = computed(() => computedAreas.value.length === 0);

const computedAreas = computed(() => {
  if (!computedAreas) return areas;
  return areas.value.filter((a) =>
    a.strArea.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(async () => {
  loading.value = true;
  await store.getAreas();
  loading.value = false;
});
</script>
