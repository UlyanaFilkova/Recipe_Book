<template>
  <div class="h-full flex flex-col">
    <NavBar />
    <main>
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
  flex: 1;
  overflow-y: auto;
}
</style>
