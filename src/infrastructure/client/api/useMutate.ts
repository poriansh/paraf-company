import {useMutation} from "@tanstack/react-query";
import {app, BASE_URL} from "@/infrastructure/client/http/axiosConfig";
import type {
  ApiResponse,
  MutateQuery,
  QueryParam,
} from "@/infrastructure/client/api/types/model";
import {showToast} from "@/shared/lib/toast";
import type {AxiosError} from "axios";
/**
 * Generic mutation hook wrapper using `react-query`'s `useMutation`.
 *
 * - Sends requests via the shared `app` Axios instance.
 * - Supports `customBaseUrl`, `isFormData` (toggle JSON `Content-Type`),
 *   and automatic success/error toasts (can be disabled via `hideToast`).
 *
 * @template T - Expected response `result` type contained in `ApiResponse<T>`.
 * @template S - Optional payload/request shape.
 * @param options - `MutateQuery` controlling HTTP method, url and callbacks.
 * @returns The `useMutation` object from `react-query`.
 */
const useMutate = <T, S = unknown>({
  method,
  url,
  successCallback,
  errorCallback,
  header = {},
  customBaseUrl,
  isFormData = false,
  hideToast = false,
}: MutateQuery<T>) => {
  return useMutation<
    ApiResponse<T>,
    AxiosError<{message: string}>,
    QueryParam<S>
  >({
    mutationFn: async ({query, requestUrl}: QueryParam<S>) => {
      const fullUrl = requestUrl ?? `${customBaseUrl ?? BASE_URL}/${url}`;
      const {data} = await app<ApiResponse<T>>({
        method,
        url: fullUrl,
        headers: {
          ...(isFormData ? {} : {"Content-Type": "application/json"}),

          ...header,
        },
        data: query,
      });

      return data;
    },

    onSuccess: (data) => {
      successCallback?.(data);
      if (!hideToast) {
        showToast.success(data.message);
      }
    },

    onError: (error) => {
      const message = error?.response?.data?.message ?? error.message;
      errorCallback?.(message);
      if (!hideToast) {
        showToast.error(message);
      }
    },
  });
};

export default useMutate;
