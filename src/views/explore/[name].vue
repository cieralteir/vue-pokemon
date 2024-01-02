<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import BaseButton from "@/components/Base/BaseButton.vue";
import HabitatExplorer from "@/components/Habitat/HabitatExplorer.vue";

const route = useRoute();
const router = useRouter();

const habitatName = Array.isArray(route.params.name)
  ? route.params.name[0]
  : route.params.name;

function back() {
  router.replace({ name: "home" });
}
</script>

<template>
  <div class="flex flex-col h-full">
    <div>
      <BaseButton @click="back">GO BACK</BaseButton>
    </div>
    <div class="grow">
      <div class="flex justify-center items-center h-full">
        <HabitatExplorer :habitat-name="habitatName" />
      </div>
    </div>
  </div>
</template>
