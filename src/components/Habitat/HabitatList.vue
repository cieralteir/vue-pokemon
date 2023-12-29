<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import HabitatService from "@/services/habitat.service";
import HabitatListCard from "@/components/Habitat/HabitatListCard.vue";

const router = useRouter();

const habitats = ref([]);

async function fetchHabitats() {
  // Fetch habitats from POKE API
  const response = await HabitatService.list().then(
    (response) => response.data.results
  );
  console.log("habitats", response);
  habitats.value = response;
}

function onHabitatClick(habitat) {
  // Navigate to habitat page
  router.replace({ name: "explore", params: { name: habitat.name } });
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
      @click="onHabitatClick(habitat)"
    />
  </div>
</template>
