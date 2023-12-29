<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {},
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <label class="block mb-2">{{ label }}</label>
    <input
      v-model="value"
      :placeholder="placeholder"
      class="w-full py-2 px-3 rounded border text-neutral-900 outline-none"
    />
  </div>
</template>
