<script setup lang="ts">
import { type PropType, ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { displayLabel } from "@/helpers/helpers";
import type Pokemon from "@/types/Pokemon";
import PokemonBasic from "@/components/Pokemon/PokemonBasic.vue";
import BaseButton from "@/components/Base/BaseButton.vue";

const props = defineProps({
  pokemon: {
    type: Object as PropType<Pokemon>,
    required: true,
  },
});
const emit = defineEmits(["resolved"]);

const { addPokemon } = usePokemonStore();

const outcome = ref<string>("");

function catchPokemon() {
  // 70% chance to catch pokemon
  const random: number = Math.random();
  if (random < 0.7) {
    // Add pokemon to captured list
    addPokemon(props.pokemon);
    outcome.value = "catch_success";
  } else {
    outcome.value = "catch_failed";
  }

  // Display outcome for a short time
  setTimeout(() => {
    emit("resolved");
  }, 1000);
}

function ignorePokemon() {
  emit("resolved");
}
</script>
<template>
  <div v-if="outcome">
    <div class="flex flex-col gap-2">
      <font-awesome-icon
        :icon="['fas', 'check-circle']"
        class="h-[40px] text-emerald-500"
        v-if="outcome == 'catch_success'"
      />
      <p data-test="catch-outcome" v-if="outcome == 'catch_success'">
        You've captured {{ displayLabel(props.pokemon.name) }}!
      </p>

      <font-awesome-icon
        :icon="['fas', 'times-circle']"
        class="h-[40px] text-red-400"
        v-if="outcome == 'catch_failed'"
      />
      <p data-test="catch-outcome" v-if="outcome == 'catch_failed'">
        {{ displayLabel(props.pokemon.name) }} got away...
      </p>
    </div>
  </div>
  <div class="flex flex-col gap-4 w-96" v-else>
    <PokemonBasic :pokemon="props.pokemon" class="mb-4" />
    <p>You've stumbled upon a wild Pokémon! What's your next move?</p>
    <div class="flex flex-col gap-2">
      <BaseButton
        id="catch-btn"
        type="danger"
        :rounded="false"
        slanted
        @click="catchPokemon"
      >
        CATCH
      </BaseButton>
      <!-- <BaseButton>BATTLE</BaseButton> -->
      <BaseButton
        id="run-btn"
        type="light"
        :rounded="false"
        slanted
        @click="ignorePokemon"
      >
        RUN
      </BaseButton>
    </div>
  </div>
</template>
