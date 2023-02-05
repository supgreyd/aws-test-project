import { authService } from "@/services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { user: user.data } : { user: null };

export const auth = {
  namespaced: true,

  state: initialState,

  actions: {
    login({ commit }, user) {
      return authService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      authService.logout();
      commit("logout");
    },
  },

  mutations: {
    loginSuccess(state, user) {
      state.user = user.data.data;
    },
    loginFailure(state) {
      state.user = null;
    },
    logout(state) {
      state.user = null;
    },
  },

  getters: {
    GET_USER(state) {
      return state.user;
    },
  },
};
