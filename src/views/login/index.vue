<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import Trainer from "@/types/Trainer";
import BaseInput from "@/components/Base/BaseInput.vue";
import BaseButton from "@/components/Base/BaseButton.vue";

const router = useRouter();
const authStore = useAuthStore();

const form = reactive({
  name: "",
});

function login() {
  const trainer: Trainer = { name: form.name };
  authStore.setTrainer(trainer);
  router.replace({ name: "home" });
}
</script>

<template>
  <div class="w-96 p-9 rounded-md md:bg-neutral-800">
    <h1 class="text-xl font-medium">Welcome trainer! What is your name?</h1>
    <form @submit.prevent="login">
      <div class="flex flex-col my-3">
        <input
          v-model="form.name"
          class="w-full py-2 px-3 rounded border text-neutral-900 outline-none"
          placeholder="Type name"
        />
      </div>
      <BaseButton block native-type="submit">ENTER</BaseButton>
    </form>
  </div>
</template>
