import { cousrseService } from "@/services/course.service";

export const courses = {
  namespaced: true,

  state: {
    courses: [],
  },

  actions: {
    fetchCourses({ commit }) {
      return cousrseService.courses().then(
        (courses) => {
          commit("fetchSuccess", courses);
          return Promise.resolve(courses);
        },
        (error) => {
          commit("fetchFailure");
          return Promise.reject(error);
        }
      );
    },
  },

  mutations: {
    fetchSuccess(state, courses) {
      state.courses = courses;
    },
    fetchFeilure(state) {
      state.courses = [];
    },
  },

  getters: {
    GET_COURSES(state) {
      return state.courses;
    },
  },
};
