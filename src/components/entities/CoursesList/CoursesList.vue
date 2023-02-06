<script>
import { useStore } from "vuex";
import { onMounted, computed, ref, watch } from "vue";
import { usePagination } from "@/composition/usePagination";

import AppList from "@/components/common/AppList/AppList.vue";
import CourseCard from "@/components/entities/CourseCard/CourseCard.vue";
import AppPagination from "@/components/common/AppPagination/AppPagination.vue";

export default {
  components: { AppList, CourseCard, AppPagination },
  setup() {
    const store = useStore();

    const currentPage = ref(1);

    const requestParams = (page) => {
      return { paginator: "paged", per_page: 5, page: page };
    };

    const numberOfPages = ref(0);

    const fetchCourses = () => {
      store
        .dispatch("courses/fetchCourses", requestParams(currentPage.value))
        .then((res) => {
          numberOfPages.value = usePagination(res.meta);
        });
    };

    onMounted(() => {
      fetchCourses();
    });

    const courses = computed(() => store.getters["courses/GET_COURSES"]);

    watch(currentPage, fetchCourses);

    return { courses, numberOfPages, currentPage };
  },
};
</script>

<template>
  <AppList class="my-4">
    <CourseCard v-for="item in courses" :key="item.id" :item="item" />
  </AppList>
  <AppPagination v-model="currentPage" :numberOfPages="numberOfPages" />
</template>
