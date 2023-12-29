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
  <div
    :class="`flex flex-col items-center rounded bg-${$pokemonTypeColor(
      props.pokemon.types[0]?.type.name
    )}`"
  >
    <img :src="props.pokemon.sprites.front_default" class="w-[90px]" />
    <div class="pb-4">
      {{ $displayLabel(props.pokemon.name) }}
    </div>
  </div>
</template>
