<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import GuestLayout from "@/layouts/GuestLayout.vue";

const route = useRoute();

const layout = computed(() => {
  return route.meta?.public ? GuestLayout : AuthLayout;
});
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
