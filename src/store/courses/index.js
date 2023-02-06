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
          commit("fetchSuccess", courses.data);
          return Promise.resolve(courses.data);
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
      state.courses = courses.data;
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
