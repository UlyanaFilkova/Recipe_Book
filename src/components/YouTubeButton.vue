<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
  >
    <slot>YouTube</slot>
  </a>
</template>

<script setup>
import { useHomeStore } from "@/stores/homeStore";
import { toRaw, onMounted, ref, computed, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
import axiosClient from "@/axiosClient.js";

const props = defineProps({
  href: String,
});
</script>
