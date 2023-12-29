<script setup lang="ts">
import type Pokemon from "@/types/Pokemon";

const props = defineProps({
  pokemon: {
    type: Object as Pokemon,
    required: true,
  },
});
</script>

<template>
  <div class="p-4 rounded bg-neutral-700">
    {{ $displayLabel(props.pokemon.name) }}
  </div>
</template>
