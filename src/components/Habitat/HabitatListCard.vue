<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  habitat: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="p-4 rounded bg-neutral-700 hover:bg-neutral-600 hover:cursor-pointer"
  >
    {{ $displayLabel(props.habitat.name) }}
  </div>
</template>
