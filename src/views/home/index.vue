<script setup lang="ts">
import PokemonList from "@/components/Pokemon/PokemonList.vue";
import HabitatList from "@/components/Habitat/HabitatList.vue";
</script>

<template>
  <div class="mb-8">
    <h1 class="mb-3 text-xl">POKEMONS</h1>
    <PokemonList />
  </div>
  <div>
    <h1 class="mb-3 text-xl">EXPLORE</h1>
    <HabitatList />
  </div>
</template>
