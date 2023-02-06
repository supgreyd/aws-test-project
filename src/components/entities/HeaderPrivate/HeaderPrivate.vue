<script>
import AppButton from "@/components/common/AppButton/AppButton.vue";

import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { AppButton },

  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const logout = () => {
      store.dispatch("auth/logout").then(() => {
        router.push("/login");
      });
    };

    const goBack = () => router.go(-1);

    const user = computed(() => store.getters["auth/GET_USER"]);
    const displayReturnBtn = computed(() => route.name === "course");

    return { logout, goBack, displayReturnBtn, user };
  },
};
</script>

<template>
  <header class="bg-slate-200 p-3">
    <div class="container xl mx-auto px-6 flex justify-between items-center">
      <div class="flex gap-2">
        <img src="@/assets/images/Logo.png" alt="logo" class="h-10" />
        <div v-if="displayReturnBtn" class="flex items-center">
          <AppButton title="Return" @click="goBack" />
        </div>
      </div>
      <div class="flex gap-2">
        <img
          :src="user?.avatar_url"
          alt="avatar"
          class="w-10 h-10 rounded-full"
        />
        <AppButton title="Logout" @click="logout" />
      </div>
    </div>
  </header>
</template>
