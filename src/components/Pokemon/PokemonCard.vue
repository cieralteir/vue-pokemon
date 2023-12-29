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
    :class="`flex p-4 rounded bg-${$pokemonTypeColor(
      props.pokemon.types[0]?.type.name
    )}`"
  >
    <div class="grow">
      <p class="mb-1 text-sm text-neutral-900">#{{ props.pokemon.id }}</p>
      <h2 class="mb-3 text-2xl">
        {{ $displayLabel(props.pokemon.name) }}
      </h2>
      <div class="flex gap-2">
        <div
          class="px-2 rounded-full border text-sm"
          v-for="pokemonType in props.pokemon.types"
          :key="pokemonType.type.name"
        >
          {{ pokemonType.type.name }}
        </div>
      </div>
    </div>
    <div>
      <img :src="props.pokemon.sprites.front_default" class="object-fit w-[150px]" />
    </div>
  </div>
</template>
