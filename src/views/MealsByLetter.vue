<template>
  let
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref } from "vue";
import axiosClient from "@/axiosClient.js";

const store = useHomeStore();
const meals = store.meals;
const ingredients = ref([]);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
</script>
