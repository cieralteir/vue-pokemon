import { reactive } from "vue";
import { defineStore } from "pinia";
import type Habitat from "@/types/Habitat";
import HabitatService from "@/services/habitat.service";

export const useHabitatStore = defineStore("habitat", () => {
  const habitats = reactive<Habitat[]>([]);

  async function loadHabitats() {
    if (habitats.length == 0) {
      const response = await HabitatService.list().then(
        (response) => response.data.results
      );
      habitats.push(...response);
    }
  }

  return { habitats, loadHabitats };
});
