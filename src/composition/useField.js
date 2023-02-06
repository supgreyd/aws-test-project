import { ref, reactive, watch } from "vue";

export function useField(field) {
  const value = ref(field.value);
  const valid = ref(true);
  const errors = reactive({});

  const reasign = (val) => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map((name) => {
      const isValid = field.validators[name](val);
      errors[name] = !isValid;
      if (!isValid) {
        valid.value = false;
      }
    });
  };

  reasign(field.value);

  watch(value, reasign);

  return { value, valid };
}
