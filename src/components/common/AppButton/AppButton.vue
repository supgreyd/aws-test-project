<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "submit",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return { ...props };
  },
};
</script>

<template>
  <button class="base-btn" :type="type" :disabled="disabled">
    {{ title }}
  </button>
</template>

<style scoped>
.base-btn {
  @apply w-full text-white bg-blue-700 hover:bg-blue-800 
    focus:ring-4 focus:outline-none focus:ring-blue-300 
    font-medium rounded-lg text-sm px-5 py-2.5 text-center 
    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
}
</style>
