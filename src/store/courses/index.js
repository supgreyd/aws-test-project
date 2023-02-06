import { cousrseService } from "@/services/course.service";

export const courses = {
  namespaced: true,

  state: {
    courses: [],
    cousre: null,
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
    fetchCourse({ commit }, id) {
      return cousrseService.course(id).then(
        (course) => {
          commit("fetchCourseSuccess", course.data);
          return Promise.resolve(course.data);
        },
        (error) => {
          commit("clearCourse");
          return Promise.reject(error);
        }
      );
    },
    clearCourse({ commit }) {
      commit("clearCourse");
    },
  },

  mutations: {
    fetchSuccess(state, courses) {
      state.courses = courses.data;
    },
    fetchFeilure(state) {
      state.courses = [];
    },
    fetchCourseSuccess(state, course) {
      state.course = course.data;
    },
    clearCourse(state) {
      state.course = null;
    },
  },

  getters: {
    GET_COURSES(state) {
      return state.courses;
    },
    GET_COURSE(state) {
      return state.course;
    },
  },
};
