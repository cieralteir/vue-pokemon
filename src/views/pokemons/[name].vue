<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { usePokemonStore } from "@/stores/pokemon";
import { displayLabel } from "@/helpers/helpers";
import PokemonDetail from "@/components/Pokemon/PokemonDetail.vue";
import BaseButton from "@/components/Base/BaseButton.vue";

const route = useRoute();
const router = useRouter();

const { getPokemon } = usePokemonStore();

const pokemonName = Array.isArray(route.params.name)
  ? route.params.name[0]
  : route.params.name;

const pokemon = getPokemon(pokemonName);

function onPokemonReleased() {
  back();
}

function back() {
  router.replace({ name: "home" });
}
</script>

<template>
  <div class="flex flex-col h-full pb-4">
    <div class="mb-4">
      <BaseButton @click="back">
        <font-awesome-icon :icon="['fas', 'arrow-left']" /> BACK
      </BaseButton>
    </div>
    <div class="grow overflow-auto">
      <div class="flex justify-center items-center">
        <div class="w-96">
          <PokemonDetail
            :pokemon="pokemon"
            @released="onPokemonReleased"
            v-if="pokemon"
          />
          <p v-else>
            {{ displayLabel(pokemonName) }} has not been caught yet.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
