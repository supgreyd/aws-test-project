import AuthService from "@/services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { api_token: user.api_token, user: user.data }
  : { api_token: null, user: null };

export const auth = {
  namespaced: true,

  state: initialState,

  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
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
      AuthService.logout();
      commit("logout");
    },
  },

  mutations: {
    loginSuccess(state, user) {
      state.api_token = user.api_token;
      state.user = user.data;
    },
    loginFailure(state) {
      state.api_token = null;
      state.user = null;
    },
    logout(state) {
      state.api_token = null;
      state.user = null;
    },
  },

  getters: {
    GET_USER(state) {
      return state.user;
    },
  },
};
