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
    invalid: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "blur"],
  setup(props, { emit }) {
    function inputHandler(e) {
      emit("update:modelValue", e.target.value);
    }
    function onBlur(e) {
      emit("blur", e);
    }
    return { ...props, inputHandler, onBlur };
  },
};
</script>

<template>
  <div class="relative">
    <label :for="id" class="base-input-label">
      {{ label }}
    </label>
    <input
      :type="type"
      :id="id"
      :class="['base-input', { invalid: invalid }]"
      :value="modelValue"
      :placeholder="placeholder"
      :invalid="invalid"
      @input="inputHandler($event)"
      @blur="onBlur($event)"
    />
    <small v-if="invalid" class="text-red-500">Field is invalid</small>
  </div>
</template>

<style scoped>
.base-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 
  sm:text-sm rounded-lg block w-full p-2.5 
  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
.base-input-label {
  @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}
.invalid {
  @apply border-red-500;
}
</style>
