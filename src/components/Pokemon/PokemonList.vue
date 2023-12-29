<script setup lang="ts">
import { ref } from "vue";
import PokemonListCard from "@/components/Pokemon/PokemonListCard.vue";

const pokemons = ref([]);
</script>

<template>
  <div class="grid grid-cols-6 gap-4" v-if="pokemons.length">
    <PokemonListCard />
  </div>
  <p class="text-neutral-400" v-else>Explore and catch some pokemons!</p>
</template>
