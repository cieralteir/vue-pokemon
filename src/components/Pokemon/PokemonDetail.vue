<script setup lang="ts">
import { onMounted, type PropType, ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { displayLabel } from "@/helpers/helpers";
import type Pokemon from "@/types/Pokemon";
import type PokemonSpecies from "@/types/PokemonSpecies";
import PokemonSpeciesService from "@/services/pokemonSpecies.service";
import PokemonBasic from "@/components/Pokemon/PokemonBasic.vue";
import BaseButton from "@/components/Base/BaseButton.vue";

const props = defineProps({
  pokemon: {
    type: Object as PropType<Pokemon>,
    required: true,
  },
});
const emit = defineEmits(["released"]);

const { removePokemon } = usePokemonStore();

const pokemonSpecies = ref<PokemonSpecies | null>(null);

async function fetchPokemonSpecies() {
  // Fetch habitats from POKE API
  const response = await PokemonSpeciesService.read(props.pokemon.name).then(
    (response) => response.data
  );
  pokemonSpecies.value = response;
}

function releasePokemon(name: string) {
  removePokemon(name);
  emit("released");
}

onMounted(() => {
  fetchPokemonSpecies();
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <PokemonBasic :pokemon="props.pokemon" />
    <div class="p-4 rounded bg-neutral-100 text-neutral-900">
      <div
        class="p-2"
        v-html="pokemonSpecies.flavor_text_entries[0].flavor_text"
        v-if="pokemonSpecies && pokemonSpecies.flavor_text_entries.length"
      />
      <table class="w-full table-fixed">
        <tbody>
          <tr v-for="stat in pokemon.stats" :key="stat.stat.name">
            <td class="p-1 px-2">
              <div class="w-[150px] p-2 bg-neutral-200 font-semibold">
                {{ displayLabel(stat.stat.name) }}
              </div>
            </td>
            <td class="p-1 px-2">{{ stat.base_stat }}</td>
          </tr>
          <tr>
            <td class="p-1 px-2">
              <div class="w-[150px] p-2 bg-neutral-200 font-semibold">
                Abilities
              </div>
            </td>
            <td>
              <p
                v-for="ability in pokemon.abilities"
                :key="ability.ability.name"
              >
                {{ displayLabel(ability.ability.name) }}
              </p>
              <p v-if="pokemon.abilities.length == 0">---</p>
            </td>
          </tr>
          <tr>
            <td class="p-1 px-2">
              <div class="w-[150px] p-2 bg-neutral-200 font-semibold">
                Held Items
              </div>
            </td>
            <td>
              <p v-for="item in pokemon.held_items" :key="item.item.name">
                {{ displayLabel(item.item.name) }}
              </p>
              <p v-if="pokemon.held_items.length == 0">---</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <BaseButton
      type="info"
      :rounded="false"
      slanted
      @click="releasePokemon(props.pokemon.name)"
    >
      RELEASE
    </BaseButton>
  </div>
</template>
