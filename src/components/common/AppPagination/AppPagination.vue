<script>
export default {
  props: {
    numberOfPages: {
      required: true,
      type: Number,
    },
    modelValue: {
      required: true,
      type: Number,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const setCurrentPage = (page) => {
      emit("update:modelValue", page);
    };

    return { ...props, setCurrentPage };
  },
};
</script>

<template>
  <div class="flex flex-wrap justify-center container mx-auto my-4">
    <div
      class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer"
      v-for="(page, index) in numberOfPages"
      @click="setCurrentPage(page)"
      :key="index"
    >
      {{ page }}
    </div>
  </div>
</template>
