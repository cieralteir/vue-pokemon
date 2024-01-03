<script setup lang="ts">
import { onMounted, ref } from "vue";
import type Habitat from "@/types/Habitat";
import type Pokemon from "@/types/Pokemon";
import HabitatService from "@/services/habitat.service";
import PokemonService from "@/services/pokemon.service";
import HabitatExplorerEncounter from "./HabitatExplorerEncounter.vue";

const props = defineProps({
  habitatName: {
    type: String,
    required: true,
  },
});

const habitat = ref<Habitat | null>(null);

async function fetchHabitat() {
  // Fetch habitat data from POKE API
  const response = await HabitatService.read(props.habitatName).then(
    (response) => response.data
  );
  habitat.value = response;
}

const encounter = ref<Pokemon | null>(null);

async function encounterPokemon() {
  const index: number = Math.ceil(
    Math.random() * (habitat.value?.pokemon_species.length || 0)
  );
  const pokemonName = habitat.value?.pokemon_species[index].name;
  if (pokemonName) {
    // Fetch pokemon data from POKE API
    const response = await PokemonService.read(pokemonName).then(
      (response) => response.data
    );
    encounter.value = response;
  }
}

function onEncounterResolved() {
  encounter.value = null;
  explore();
}

async function explore() {
  await new Promise((resolve) => {
    setTimeout(async () => {
      await encounterPokemon();
      resolve(true);
    }, 1000);
  });
}

onMounted(async () => {
  await fetchHabitat();
  explore();
});
</script>

<template>
  <HabitatExplorerEncounter
    :pokemon="encounter"
    @resolved="onEncounterResolved"
    v-if="encounter"
  />
  <div class="flex flex-col gap-2 items-center" v-else>
    <font-awesome-icon :icon="['fas', 'running']" class="h-[40px]" />
    <p>Exploring {{ props.habitatName }} ...</p>
  </div>
</template>
