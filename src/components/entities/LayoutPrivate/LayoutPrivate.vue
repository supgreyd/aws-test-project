<script>
import AppLayout from "@/components/common/AppLayout/AppLayout.vue";
import HeaderPrivate from "@/components/entities/HeaderPrivate/HeaderPrivate.vue";
import { RouterView } from "vue-router";
export default {
  components: { AppLayout, RouterView, HeaderPrivate },
};
</script>
<template>
  <AppLayout>
    <template #header>
      <HeaderPrivate />
    </template>
    <template #main>
      <RouterView />
    </template>
  </AppLayout>
</template>
