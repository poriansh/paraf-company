import {removeToken} from "@/shared/utils/token";
import axios from "axios";

/**
 * Resolved API base URL for runtime HTTP requests.
 *
 * Falls back to the hosted API when `NEXT_PUBLIC_API_URL` is not provided.
 */
const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "https://wholesaler-core-v2.paraf.app/api";

/**
 * Normalized base URL without a trailing slash.
 */
export const BASE_URL = apiBaseUrl.replace(/\/$/, "");

/**
 * Preconfigured Axios instance for application HTTP requests.
 *
 * - Uses `BASE_URL` as `baseURL` and enables `withCredentials`.
 * - Response interceptor handles 401 by removing auth token and redirecting
 *   the client to `/login` when applicable.
 */
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
