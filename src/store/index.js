import { createStore } from "vuex";

import { auth } from "@/store/auth/index.js";

export const store = createStore({
  modules: {
    auth: auth,
  },
});
