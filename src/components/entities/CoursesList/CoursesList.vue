<script>
import { useStore } from "vuex";
import { onMounted } from "vue";
export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store
        .dispatch("courses/fetchCourses")
        .then((res) => console.log({ res }));
    });
  },
};
</script>

<template>
  <ul>
    <li></li>
  </ul>
</template>