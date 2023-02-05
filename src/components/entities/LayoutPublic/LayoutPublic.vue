<script>
import AppLayout from "@/components/common/AppLayout/AppLayout.vue";
import { RouterView } from "vue-router";
export default {
  components: { AppLayout, RouterView },
};
</script>
<template>
  <AppLayout>
    <template #main>
      <RouterView />
    </template>
  </AppLayout>
</template>
