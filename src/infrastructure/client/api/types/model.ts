/**
 * Parameters for mutate operations (POST/PUT/PATCH/DELETE).
 *
 * - `customBaseUrl` allows targeting other API servers.
 * - `isFormData` controls whether `Content-Type` is omitted for file uploads.
 */
export interface MutateQuery<T> {
  method: "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  successCallback?: (data: ApiResponse<T>) => void;
  errorCallback?: (error: string) => void;
  header?: Record<string, string>;
  customBaseUrl?: string;
  hideToast?: boolean;
  isFormData?: boolean;
}
/**
 * Payload wrapper passed to mutation/query functions.
 *
 * `query` is the request body or parameters. `requestUrl` can override the
 * resolved URL computed from the base URL + `url`.
 */
export interface QueryParam<S = unknown> {
  query?: S;
  requestUrl?: string;
}

/**
 * Minimal API response envelope used by the backend.
 */
export interface ApiResponse<T> {
  result: T;
  message: string;
}

/**
 * Options passed to `useRequest` hook.
 *
 * - Supports `staleTime`, `refetchInterval` and a `select` mapper.
 */
export interface UseRequestProps<TData, TSelected = TData> {
  queryKey: string[];
  url: string;
  enabled?: boolean;
  staleTime?: number | "Infinity";
  refetchInterval?: number | false;
  refetchOnWindowFocus?: boolean | "always";
  header?: Record<string, string>;
  customBaseUrl?: string;
  retry?: boolean;
  select?: (data: TData) => TSelected;
}
