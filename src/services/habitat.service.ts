import api from "@/utils/api.util";

const RESOURCE = "/pokemon-habitat";

export default class HabitatService {
  static list() {
    return api.get(RESOURCE);
  }

  static read(name: string) {
    return api.get(RESOURCE + `/${name}`);
  }
}
