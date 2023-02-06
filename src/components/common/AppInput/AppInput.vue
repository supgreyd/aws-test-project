<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Enter text",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    function inputHandler(e) {
      emit("update:modelValue", e.target.value);
    }
    return { ...props, inputHandler };
  },
};
</script>

<template>
  <div class="relative">
    <label for="floating_filled" class="base-input-label">
      {{ label }}
    </label>
    <input
      type="text"
      id="floating_filled"
      class="base-input peer"
      :value="modelValue"
      :placeholder="placeholder"
      @input="inputHandler($event)"
    />
  </div>
</template>

<style>
.base-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 
  sm:text-sm rounded-lg block w-full p-2.5 
  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
.base-input-label {
  @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}
</style>
