import { ref } from "vue";
import { defineStore } from "pinia";
import type Trainer from "@/types/Trainer";

export const useAuthStore = defineStore("auth", () => {
  const trainer = ref<Trainer | null>(null);
  // Get from localStorage if exists
  const _trainer = localStorage.getItem("_trainer");
  if (_trainer) {
    trainer.value = JSON.parse(_trainer);
  }

  function setTrainer(paylaod: Trainer | null) {
    trainer.value = paylaod;
    localStorage.setItem("_trainer", JSON.stringify(trainer.value));
  }

  return { trainer, setTrainer };
});
