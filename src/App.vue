<template>
  <div class="bg-gray-100 ">
    <header class="bg-white shadow-md h-12 flex justify-between items-stretch px-8">
      <RouterLink :to="{ name: 'home' }" class="inline-flex h-full items-center">Home</RouterLink>
      <nav class="flex items-center gap-1">
        <RouterLink to="" class="inline-flex px-3 h-full items-center hover:bg-stone-300 transition-colors"
          >Search Meals</RouterLink
        >
        <RouterLink to="" class="inline-flex px-3 h-full items-center hover:bg-stone-300 transition-colors"
          >Meals by Letter</RouterLink
        >
        <RouterLink to="" class="inline-flex px-3 h-full items-center hover:bg-stone-300 transition-colors"
          >Meals by Ingredients</RouterLink
        >
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useHomeStore } from "@/stores/homeStore";

const store = useHomeStore();
</script>
