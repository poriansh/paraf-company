import {removeToken} from "@/shared/utils/token";
import axios from "axios";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "https://wholesaler-core-v2.paraf.app/api";

export const BASE_URL = apiBaseUrl.replace(/\/$/, "");

export const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

app.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      removeToken();

      if (
        typeof window !== "undefined" &&
        window.location.pathname !== "/login"
      ) {
        window.location.replace("/login");
      }
    }

    return Promise.reject(error);
  },
);
