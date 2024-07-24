<template>
    Meal List
  </template>
  
  <script setup>
  import { useHomeStore } from "@/stores/homeStore";
  import { toRaw } from "vue";
  
  const store = useHomeStore();
  const meals = store.meals;

  </script>