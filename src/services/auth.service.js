import { axiosProvider } from "@/api/network-provider";

export const authService = Object.freeze({
  login: async (user) => {
    const response = await axiosProvider.post("/login", {
      login: user.login.value,
      password: user.password.value,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    return response;
  },
  logout: () => {
    axiosProvider.post("/logout");
    localStorage.removeItem("user");
  },
});
