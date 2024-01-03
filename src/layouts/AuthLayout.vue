<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { usePokemonStore } from "@/stores/pokemon";
import BaseButton from "@/components/Base/BaseButton.vue";

const router = useRouter();
const authStore = useAuthStore();
const pokemonStore = usePokemonStore();

function logout() {
  authStore.setTrainer(null);
  pokemonStore.clearPokemons();
  router.replace({ name: "login" });
}
</script>

<template>
  <div class="flex flex-col h-full">
    <nav class="flex justify-between items-center p-2 px-5 bg-neutral-800">
      <div>
        <h1 class="text-xl">vue<b>pokemon</b></h1>
      </div>
      <div>
        <BaseButton type="text" dense>{{ authStore.trainer?.name }}</BaseButton>
        <BaseButton type="text" dense @click="logout">
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
        </BaseButton>
      </div>
    </nav>
    <div class="flex flex-col flex-grow container mx-auto pt-5 overflow-auto">
      <slot />
    </div>
  </div>
</template>
