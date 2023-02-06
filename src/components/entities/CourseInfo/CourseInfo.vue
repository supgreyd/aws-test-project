<script>
import { useStore } from "vuex";
import { onMounted, computed, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import AppImage from "@/components/common/AppImage/AppImage.vue";

export default {
  components: { AppImage },
  setup() {
    const store = useStore();
    const route = useRoute();

    const courseId = route.params.id;

    onMounted(() => {
      store.dispatch("courses/fetchCourse", courseId);
    });

    const course = computed(() => store.getters["courses/GET_COURSE"]);

    onUnmounted(() => store.dispatch("courses/clearCourse"));

    return { course };
  },
};
</script>

<template>
  <div v-if="!course">Loading...</div>
  <div v-else class="flex flex-col mt-10">
    <h1 class="text-3xl font-bold text-center">{{ course.name }}</h1>
    <div v-if="course.thumbnail_url" class="w-full flex justify-center">
      <AppImage :srcPath="course.thumbnail_url" />
    </div>
    <p class="mt-5 text-lg text-gray-700 leading-relaxed">
      Price: {{ course.price }}
    </p>
    <p
      v-if="course.description"
      class="mt-5 text-lg text-gray-700 leading-relaxed"
      v-html="course.description"
    />
  </div>
</template>
