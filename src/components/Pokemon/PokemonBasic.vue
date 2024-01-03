<script setup lang="ts">
import { type PropType } from "vue";
import { displayLabel, pokemonTypeColor } from "@/helpers/helpers";
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
    :class="`flex rounded bg-${pokemonTypeColor(
      props.pokemon.types[0]?.type.name
    )}`"
  >
    <div class="grow p-4">
      <p class="text-sm text-neutral-900">#{{ props.pokemon.id }}</p>
      <h2 class="mb-1 text-2xl">
        {{ displayLabel(props.pokemon.name) }}
      </h2>
      <div class="flex gap-1">
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
      <img
        :src="props.pokemon.sprites.front_default"
        class="object-fit w-[150px]"
      />
    </div>
  </div>
</template>
