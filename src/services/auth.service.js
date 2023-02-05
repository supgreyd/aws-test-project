import axios from "axios";

const API_HOST = "https://service.lms.academweb.tech/api";

class AuthService {
  async login(user) {
    const response = await axios.post(`${API_HOST}/login`, {
      login: user.login.value,
      password: user.password.value,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
