<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import LayoutPrivate from "@/components/entities/LayoutPrivate/LayoutPrivate.vue";
import LayoutPublic from "@/components/entities/LayoutPublic/LayoutPublic.vue";

export default {
  components: { LayoutPrivate, LayoutPublic },

  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout);
    return { layout };
  },
};
</script>

<template>
  <component :is="layout" />
</template>
