<template>
   
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useHomeStore } from "@/stores/homeStore";
import NavBar from "./components/NavBar.vue";
// const store = useHomeStore();
</script>
