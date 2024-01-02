import type PokemonSpecies from "@/types/PokemonSpecies";

export default interface Habitat {
  id: number;
  name: string;
  pokemon_species: PokemonSpecies[];
}
