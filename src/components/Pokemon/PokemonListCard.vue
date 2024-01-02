<script setup lang="ts">
import { type PropType } from "vue";
import type Pokemon from "@/types/Pokemon";

const props = defineProps({
  pokemon: {
    type: Object as PropType<Pokemon>,
    required: true,
  },
});
</script>

<template>
  <div
    :class="`flex flex-col items-center rounded bg-${$pokemonTypeColor(
      props.pokemon.types[0]?.type.name
    )} hover:opacity-75 hover:cursor-pointer`"
  >
    <img :src="props.pokemon.sprites.front_default" class="w-[90px]" />
    <div class="flex gap-2 items-baseline pb-4">
      <span class="text-xs text-neutral-900">#{{ props.pokemon.id }}</span>
      {{ $displayLabel(props.pokemon.name) }}
    </div>
  </div>
</template>
