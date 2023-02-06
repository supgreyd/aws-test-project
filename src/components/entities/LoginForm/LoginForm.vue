<script>
import AppForm from "@/components/common/AppForm/AppForm.vue";
import AppInput from "@/components/common/AppInput/AppInput.vue";
import AppButton from "@/components/common/AppButton/AppButton.vue";

import { useForm } from "@/composition/useForm";
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

    const submit = async () => {
      await store.dispatch("auth/login", form);
      router.push("/");
    };

    return { form, submit };
  },
};
</script>

<template>
  <AppForm title="Login" @submit="submit">
    <template #fields>
      <AppInput
        v-model="form.login.value"
        placeholder="Enter name"
        label="Name"
        id="form-login"
        :invalid="!form.login.valid && form.login.touched"
        @blur="form.login.touched = true"
      />
      <AppInput
        v-model="form.password.value"
        placeholder="Enter password"
        label="Password"
        id="form-password"
        type="password"
        :invalid="!form.password.valid && form.password.touched"
        @blur="form.password.touched = true"
      />
    </template>
    <template #actions>
      <AppButton title="Log in" :disabled="!form.valid" />
    </template>
  </AppForm>
</template>
