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
  console.log("habitat", response);
  habitat.value = response;
}

const encounter = ref<Pokemon | null>(null);

async function encounterPokemon() {
  const index: number = Math.ceil(
    Math.random() * habitat.value.pokemon_species.length
  );
  const pokemonName: string = habitat.value.pokemon_species[index].name;
  console.log(pokemonName);
  // Fetch pokemon data from POKE API
  const response = await PokemonService.read(pokemonName).then(
    (response) => response.data
  );
  console.log("encounter pokemon", response);
  encounter.value = response;
}

function onEncounterResolved() {
  encounter.value = null;
  explore();
}

function explore() {
  setTimeout(() => {
    encounterPokemon();
  }, 3000);
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
  <p v-else>Exploring {{ $displayLabel(props.habitatName) }} ...</p>
</template>
