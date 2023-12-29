<script setup lang="ts">
import { PropType, type ButtonHTMLAttributes } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  block: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  nativeType: {
    type: String as PropType<ButtonHTMLAttributes["type"]>,
    default: "button",
  },
});
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    class="rounded-md font-medium"
    :class="{
      'w-full': block,
      'p-2': dense,
      'p-4': !dense,
      'bg-neutral-900 hover:bg-neutral-700': type == 'primary',
      'hover:bg-neutral-700': type == 'text',
    }"
    :type="nativeType"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
