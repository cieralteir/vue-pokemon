import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type Pokemon from "@/types/Pokemon";

export const usePokemonStore = defineStore("pokemon", () => {
  const pokemons = reactive<Pokemon[]>([]);

  function addPokemon(paylaod: Pokemon) {
    pokemons.push(paylaod);
  }

  return { pokemons, addPokemon };
});
