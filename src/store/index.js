import { createStore } from "vuex";

import { auth } from "@/store/auth/index.js";
import { courses } from "@/store/courses/index.js";

export const store = createStore({
  modules: {
    auth: auth,
    courses: courses,
  },
});
