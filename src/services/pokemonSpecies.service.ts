import api from "@/utils/api.util";

const RESOURCE = "/pokemon-species";

export default class PokemonSpeciesService {
  static read(name: string) {
    return api.get(RESOURCE + `/${name}`);
  }
}
