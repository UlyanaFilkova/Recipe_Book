<template>
  <div class="flex flex-col p-8 justify-center items-center">
    <input
      type="text"
      name=""
      id=""
      class="rounded border-1 border-gray-600 w-full"
      placeholder="Search for meals"
    />

    <div class="flex gap-2 mt-3">
      <RouterLink :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">{{ letter }} </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw } from "vue";

const store = useHomeStore();
const meals = store.meals;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
