<template>
  <div class="bg-gray-100">
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
