<script setup lang="ts">
import { type PropType, type ButtonHTMLAttributes } from "vue";

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
  rounded: {
    type: Boolean,
    default: true,
  },
  slanted: {
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
    class="font-medium hover:opacity-75"
    :class="{
      'w-full': block,
      'p-2 px-4': dense,
      'p-4': !dense,
      'rounded-md': rounded,
      '-skew-x-12': slanted,
      'bg-neutral-900 ': type == 'primary',
      'bg-red-500': type == 'danger',
      'bg-blue-500': type == 'info',
      'bg-neutral-100 text-neutral-900': type == 'light',
    }"
    :type="nativeType"
    @click="emit('click')"
  >
    <div :class="{ 'skew-x-12': slanted }">
      <slot />
    </div>
  </button>
</template>
