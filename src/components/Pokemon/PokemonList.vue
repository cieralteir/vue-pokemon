<script setup lang="ts">
import { ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import PokemonListCard from "@/components/Pokemon/PokemonListCard.vue";

const { pokemons } = usePokemonStore();
</script>

<template>
  <div class="grid grid-cols-6 gap-4" v-if="pokemons.length">
    <PokemonListCard
      :pokemon="pokemon"
      v-for="pokemon in pokemons"
      :key="pokemon.id"
    />
  </div>
  <p class="text-neutral-400" v-else>Explore and catch some pokemons!</p>
</template>
