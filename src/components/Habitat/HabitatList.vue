<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useHabitatStore } from "@/stores/habitat";
import type Habitat from "@/types/Habitat";
import HabitatListCard from "@/components/Habitat/HabitatListCard.vue";

const router = useRouter();

const { habitats, loadHabitats } = useHabitatStore();

function onHabitatClick(habitat: Habitat) {
  // Navigate to habitat page
  router.replace({ name: "explore", params: { name: habitat.name } });
}

onMounted(() => {
  loadHabitats();
});
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <HabitatListCard
      :habitat="habitat"
      v-for="habitat in habitats"
      :key="habitat.id"
      @click="onHabitatClick(habitat)"
    />
  </div>
</template>
