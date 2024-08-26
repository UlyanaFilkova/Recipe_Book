<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { defineProps, onMounted, ref, computed, watch } from "vue";

const props = defineProps({
  searchType: {
    type: String,
    required: false,
  },
});


const message = ref('');
if (props.searchType == undefined) {
  message.value = "Nothing found";
} else {
  message.value = props.searchType + " not found";
}
</script>
