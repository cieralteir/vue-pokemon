<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  habitat: {
    type: Object,
    required: true,
  },
});

const habitatLabel = computed(() =>
  props.habitat.name.toUpperCase().replace("-", " ")
);
</script>

<template>
  <div class="p-4 rounded bg-neutral-700">{{ habitatLabel }}</div>
</template>
