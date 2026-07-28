const TOKEN_STORAGE_KEY = "paraf_access_token";

export const getToken = (): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const setToken = (token: string): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const removeToken = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
};
