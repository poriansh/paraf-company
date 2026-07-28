import {apiBaseUrl} from "@/core/config/env";

type FetchDataOptions = {
  url: string;
};

export async function fetchData<T>({url}: FetchDataOptions): Promise<T> {
  const res = await fetch(`${apiBaseUrl}${url}`, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}
