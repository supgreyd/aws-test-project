<script>
import { useRouter } from "vue-router";

import AppImage from "@/components/common/AppImage/AppImage.vue";
import AppButton from "@/components/common/AppButton/AppButton.vue";
import AppListItem from "@/components/common/AppListItem/AppListItem.vue";
export default {
  components: { AppImage, AppButton, AppListItem },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const router = useRouter();

    const navigateToCourse = (id) => router.push(`/course/${id}`);

    return { ...props, navigateToCourse };
  },
};
</script>

<template>
  <AppListItem class="bg-white shadow-lg p-6 mt-4 flex">
    <div class="w-1/3 h-auto object-cover">
      <AppImage :srcPath="item.thumbnail_url" class="h-40" />
    </div>
    <div class="w-2/3 pl-6">
      <h3 class="font-medium text-lg">{{ item.name }}</h3>
      <p class="mt-2 text-gray-700">${{ item.price }}</p>
      <AppButton
        title="Read more"
        class="max-w-fit"
        @click="navigateToCourse(item.id)"
      />
    </div>
  </AppListItem>
</template>
