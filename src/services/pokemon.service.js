import api from "@/utils/api.util";

const RESOURCE = "/pokemon";

export default class PokemonService {
  static read(name) {
    return api.get(RESOURCE + `/${name}`);
  }
}
