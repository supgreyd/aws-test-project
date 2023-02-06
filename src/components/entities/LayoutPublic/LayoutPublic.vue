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
      <main class="flex items-center justify-center h-screen">
        <RouterView />
      </main>
    </template>
  </AppLayout>
</template>
