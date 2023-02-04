<script>
import AppForm from "@/components/common/AppForm/AppForm.vue";
import AppInput from "@/components/common/AppInput/AppInput.vue";
import AppButton from "@/components/common/AppButton/AppButton.vue";

import { ref } from "vue";

export default {
  components: { AppButton, AppForm, AppInput },

  setup() {
    const nickname = ref("");
    const password = ref("");
    return { nickname, password };
  },
};
</script>

<template>
  <AppForm title="Login">
    <template #fields>
      <AppInput v-model="nickname" placeholder="Enter name" label="Name" />
      <AppInput
        v-model="password"
        placeholder="Enter password"
        label="Password"
      />
    </template>
    <template #actions>
      <AppButton title="Log in" />
    </template>
  </AppForm>
</template>

<style scoped></style>
