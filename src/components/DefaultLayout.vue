<template>
  <div class="h-full flex flex-col">
    <NavBar />
    <main class="">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useHomeStore } from "@/stores/homeStore";
import NavBar from "./NavBar.vue";
</script>

<style scoped>
main {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
