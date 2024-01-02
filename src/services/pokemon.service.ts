import api from "@/utils/api.util";

const RESOURCE = "/pokemon";

export default class PokemonService {
  static read(name: string) {
    return api.get(RESOURCE + `/${name}`);
  }
}
