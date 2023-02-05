<script>
import AppButton from "@/components/common/AppButton/AppButton.vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  components: { AppButton },

  setup() {
    const store = useStore();
    const router = useRouter();
    const logout = () => {
      store.dispatch("auth/logout").then(() => {
        router.push("/login");
      });
    };

    const user = computed(() => store.getters["auth/GET_USER"]);


    return { logout, user };
  },
};
</script>

<template>
  <header class="bg-gray-800 p-3">
    <div class="container xl mx-auto px-6 flex justify-between items-center">
      <img src="src/assets/images/Logo.png" alt="logo" class="h-10" />
      <div class="flex items-center">
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
