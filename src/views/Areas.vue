<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold my-2 text-orange-500 text-center">Areas</h1>
  </div>
  <div class="flex flex-col p-8 justify-center items-center">
    <input
      type="text"
      name=""
      id=""
      v-model="keyword"
      class="max-w-screen-xl shadow rounded border bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-11 w-full text-center"
      placeholder="Search for area"
    />
    <LoadingSpinner v-if="loading"> </LoadingSpinner>
    <div
      v-else
      class="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-16"
    >
      <RouterLink
        :to="{
          name: 'byArea',
          params: { area: area.strArea },
        }"
        v-for="(area, index) of computedAreas"
        :key="area.idArea"
        :class="[
          index % 3 === 0 ? 'first-card' : '',
          index % 3 === 1 ? 'second-card' : '',
          index % 3 === 2 ? 'third-card' : '',
        ]"
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
