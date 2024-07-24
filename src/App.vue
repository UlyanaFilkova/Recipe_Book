<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useHomeStore } from "@/stores/homeStore";

const store = useHomeStore();
console.log(store.count);
</script>


