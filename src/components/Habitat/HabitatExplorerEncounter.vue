<script setup lang="ts">
import { ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import type Pokemon from "@/types/Pokemon";
import PokemonCard from "@/components/Pokemon/PokemonCard.vue";
import BaseButton from "@/components/Base/BaseButton.vue";

const props = defineProps({
  pokemon: {
    type: Object as Pokemon,
    required: true,
  },
});
const emit = defineEmits(["resolved"]);

const { addPokemon } = usePokemonStore();

const outcome = ref<string>("");

function catchPokemon() {
  // 70% chance to catch pokemon
  const random: number = Math.random();
  console.log(random);
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
  }, 2000);
}

function ignorePokemon() {
  emit("resolved");
}
</script>
<template>
  <div v-if="outcome">
    <p v-if="outcome == 'catch_success'">
      You've captured {{ $displayLabel(props.pokemon.name) }}!
    </p>
    <p v-if="outcome == 'catch_failed'">
      Failed to caputre {{ $displayLabel(props.pokemon.name) }} ...
    </p>
  </div>
  <div class="flex flex-col gap-4 w-96" v-else>
    <PokemonCard :pokemon="props.pokemon" class="mb-4" />
    <p>You've stumbled upon a wild Pokémon! What's your next move?</p>
    <div class="flex flex-col">
      <BaseButton @click="catchPokemon">CATCH</BaseButton>
      <!-- <BaseButton>BATTLE</BaseButton> -->
      <BaseButton @click="ignorePokemon">IGNORE</BaseButton>
    </div>
  </div>
</template>
