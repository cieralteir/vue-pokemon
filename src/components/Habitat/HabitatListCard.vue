<script setup lang="ts">
import { displayLabel } from "@/helpers/helpers";

const props = defineProps({
  habitat: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="p-4 bg-neutral-700 hover:bg-neutral-600 -skew-x-12 hover:cursor-pointer"
  >
    <div class="skew-x-12">
      {{ displayLabel(props.habitat.name) }}
    </div>
  </div>
</template>
