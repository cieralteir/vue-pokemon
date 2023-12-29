<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import BaseButton from "@/components/Base/BaseButton.vue";

const router = useRouter();
const authStore = useAuthStore();

function logout() {
  authStore.setTrainer(null);
  router.replace({ name: "login" });
}
</script>

<template>
  <div class="flex flex-col h-full">
    <nav class="flex justify-between items-center p-2 px-5 bg-neutral-800">
      <div>
        <h1 class="text-xl">vue<b>pokemon</b></h1>
      </div>
      <div class="flex gap-5">
        <BaseButton type="text" dense>{{ authStore.trainer?.name }}</BaseButton>
        <BaseButton type="text" dense @click="logout">LOGOUT</BaseButton>
      </div>
    </nav>
    <div
      class="flex flex-col flex-grow container mx-auto pt-5 xl:pb-5 overflow-auto"
    >
      <slot />
    </div>
  </div>
</template>
