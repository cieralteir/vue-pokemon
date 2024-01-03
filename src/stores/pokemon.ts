import { onMounted, reactive, watch } from "vue";
import { defineStore } from "pinia";
import type Pokemon from "@/types/Pokemon";

export const usePokemonStore = defineStore("pokemon", () => {
  const pokemons = reactive<Pokemon[]>([]);
  // Get from localStorage if exists
  const _pokemons = localStorage.getItem("_pokemons");
  if (_pokemons) {
    pokemons.push(...JSON.parse(_pokemons));
  }

  watch(
    pokemons,
    () => {
      localStorage.setItem("_pokemons", JSON.stringify(pokemons));
    },
    { deep: true }
  );

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

  function clearPokemons() {
    pokemons.length = 0;
  }

  return { pokemons, addPokemon, getPokemon, removePokemon, clearPokemons };
});
