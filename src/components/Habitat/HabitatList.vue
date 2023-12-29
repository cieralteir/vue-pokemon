<script setup lang="ts">
import { onMounted, ref } from "vue";
import HabitatService from "@/services/habitat.service";
import HabitatListCard from "@/components/Habitat/HabitatListCard.vue";

const habitats = ref([]);

async function fetchHabitats() {
  const response = await HabitatService.list().then(
    (response) => response.data.results
  );
  console.log("habitats", response);
  habitats.value = response;
}

onMounted(() => {
  fetchHabitats();
});
</script>

<template>
  <div class="grid grid-cols-6 gap-4">
    <HabitatListCard
      :habitat="habitat"
      v-for="habitat in habitats"
      :key="habitat.id"
    />
  </div>
</template>
