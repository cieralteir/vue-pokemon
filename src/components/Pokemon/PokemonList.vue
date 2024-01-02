<script setup lang="ts">
import { ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import type Pokemon from "@/types/Pokemon";
import PokemonListCard from "@/components/Pokemon/PokemonListCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const { pokemons } = usePokemonStore();

function onPokemonClick(pokemon: Pokemon) {
  router.replace({ name: "pokemons-[name]", params: { name: pokemon.name } });
}
</script>

<template>
  <div class="grid grid-cols-6 gap-4" v-if="pokemons.length">
    <PokemonListCard
      :pokemon="pokemon"
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="onPokemonClick(pokemon)"
    />
  </div>
  <p class="text-neutral-400" v-else>Explore and catch some pokemons!</p>
</template>
