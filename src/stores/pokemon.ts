import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type Pokemon from "@/types/Pokemon";

export const usePokemonStore = defineStore("pokemon", () => {
  const pokemons = reactive<Pokemon[]>([]);

  function addPokemon(paylaod: Pokemon) {
    pokemons.push(paylaod);
  }

  function getPokemon(name: string): Pokemon | undefined {
    return pokemons.find((pokemon) => pokemon.name == name);
  }

  function removePokemon(name: string) {
    const index = pokemons.findIndex((pokemon) => pokemon.name == name);
    if (index > -1) {
      pokemons.splice(index, 1);
    }
  }

  return { pokemons, addPokemon, getPokemon, removePokemon };
});
