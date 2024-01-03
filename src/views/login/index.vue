<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import type Trainer from "@/types/Trainer";
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
  <div class="w-96 p-9">
    <h1 class="text-xl font-medium">Welcome trainer! What is your name?</h1>
    <form @submit.prevent="login">
      <div class="flex flex-col my-3">
        <BaseInput v-model="form.name" placeholder="Type name" />
      </div>
      <BaseButton
        type="info"
        block
        :rounded="false"
        slanted
        native-type="submit"
        class="mt-2"
      >
        ENTER
      </BaseButton>
    </form>
  </div>
</template>
