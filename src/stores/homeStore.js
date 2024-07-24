import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useHomeStore = defineStore("homeStore", () => {
  const meals = ref([0, 1, 2]);

  return { meals };
});
