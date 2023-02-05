<script>
import AppForm from "@/components/common/AppForm/AppForm.vue";
import AppInput from "@/components/common/AppInput/AppInput.vue";
import AppButton from "@/components/common/AppButton/AppButton.vue";

import { useForm } from "@/hooks/useForm";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const required = (val) => !!val;
const minLength = (num) => (val) => val.length >= num;

export default {
  components: { AppButton, AppForm, AppInput },

  setup() {
    const store = useStore();
    const router = useRouter();

    const form = useForm({
      login: {
        value: "",
        validators: {
          required,
        },
      },
      password: {
        value: "",
        validators: {
          required,
          minLength: minLength(8),
        },
      },
    });

    const submit = () => {
      store.dispatch("auth/login", form).then(() => {
        router.push("/");
      });
    };

    return { form, submit };
  },
};
</script>

<template>
  <AppForm title="Login" @submit="submit">
    <template #fields>
      <AppInput v-model="form.login.value" placeholder="Enter name" label="Name" />
      <AppInput
        v-model="form.password.value"
        placeholder="Enter password"
        label="Password"
      />
    </template>
    <template #actions>
      <AppButton title="Log in" :disabled="!form.valid" />
    </template>
  </AppForm>
</template>

<style scoped></style>
