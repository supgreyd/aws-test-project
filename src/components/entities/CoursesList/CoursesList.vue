<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

import AppList from "@/components/common/AppList/AppList.vue";
import CourseCard from "@/components/entities/CourseCard/CourseCard.vue";

export default {
  components: { AppList, CourseCard },
  setup() {
    const store = useStore();

    onMounted(() => {
      store
        .dispatch("courses/fetchCourses")
        .then((res) => console.log({ res }));
    });

    const courses = computed(() => store.getters["courses/GET_COURSES"]);

    return { courses };
  },
};
</script>

<template>
  <AppList>
    <CourseCard v-for="item in courses" :key="item.id" :item="item" />
  </AppList>
</template>
