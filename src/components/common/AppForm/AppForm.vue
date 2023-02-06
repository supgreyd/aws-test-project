<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  emits: ["submit"],
  setup(props, { emit }) {
    function submitHandler(e) {
      emit("submit", e);
    }
    return { ...props, submitHandler };
  },
};
</script>

<template>
  <div class="base-form">
    <form class="space-y-6" action="#" @submit.prevent="submitHandler($event)">
      <h5 class="base-form-title">{{ title }}</h5>
      <slot name="fields" />
      <slot name="actions" />
    </form>
  </div>
</template>

<style scoped>
.base-form {
  @apply mx-auto my-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700;
}
.base-form-title {
  @apply text-xl font-medium text-gray-900 dark:text-white;
}
</style>
