<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 text-shadow rounded border-2 border-orange-600 bg-orange-500 hover:border-orange-600 hover:bg-orange-600 text-white transition-colors"
  >
    <slot>YouTube</slot>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  href: String,
});
</script>
