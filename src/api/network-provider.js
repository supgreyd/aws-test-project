import axios from "axios";

import { API_URL } from "@/api/config";
import { accessTooken } from "@/api/access-token";

export const defaultOptions = {
  baseURL: API_URL,
  responceType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const axiosProvider = axios.create(defaultOptions);

axiosProvider.interceptors.request.use((config) => {
  const api_token = accessTooken();
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_token}`,
    },
  };
});
