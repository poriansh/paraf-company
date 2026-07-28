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
export interface QueryParam<S = unknown> {
  query?: S;
  requestUrl?: string;
}

export interface ApiResponse<T> {
  result: T;
  message: string;
}

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
