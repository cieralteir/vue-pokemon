<script setup lang="ts">
import PokemonList from "@/components/Pokemon/PokemonList.vue";
import HabitatList from "@/components/Habitat/HabitatList.vue";
</script>

<template>
  <div class="p-2 py-4 mb-6">
    <h1 class="mb-3 text-xl">EXPLORE</h1>
    <div class="px-4">
      <HabitatList />
    </div>
  </div>
  <div class="p-2 py-4">
    <h1 class="mb-3 text-xl">POKEMONS</h1>
    <div class="px-4">
      <PokemonList />
    </div>
  </div>
</template>
