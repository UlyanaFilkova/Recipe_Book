<template>
  {{ meal }}
</template>
<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import axiosClient from "@/axiosClient.js";

const store = useHomeStore();
const meal = ref({});
const route = useRoute();

onMounted(async () => {
  const response = await axiosClient.get(`/list.php?i=${route.params.id}`);
  meal.value = response.data.meals[0] || {};
});
</script>
