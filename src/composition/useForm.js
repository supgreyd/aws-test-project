import { reactive, computed } from "vue";
import { useField } from "@/composition//useField.js";

export function useForm(data = {}) {
  const form = reactive({});

  for (const [key, value] of Object.entries(data)) {
    form[key] = useField(value);
  }

  const filterFormValue = (field) => field !== "valid";

  form.valid = computed(() => {
    return Object.keys(form)
      .filter(filterFormValue)
      .reduce((acc, field) => {
        acc = form[field].valid;
        return acc;
      }, true);
  });

  return form;
}
