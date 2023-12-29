import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type Trainer from "@/types/Trainer";

export const useAuthStore = defineStore("auth", () => {
  const trainer = ref<Trainer | null>(null);

  function setTrainer(paylaod: Trainer | null) {
    trainer.value = paylaod;
  }

  return { trainer, setTrainer };
});
