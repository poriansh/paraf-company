import {useQuery} from "@tanstack/react-query";
import {app, BASE_URL} from "@/infrastructure/client/http/axiosConfig";
import type {
  ApiResponse,
  UseRequestProps,
} from "@/infrastructure/client/api/types/model";
import {getToken} from "@/shared/utils/token";

export const useRequest = <TData, TSelected = TData>({
  queryKey,
  url,
  staleTime = 0,
  enabled = true,
  refetchInterval,
  refetchOnWindowFocus = false,
  header = {},
  retry = false,
  customBaseUrl,
  select,
}: UseRequestProps<TData, TSelected>) => {
  const token = getToken();
  return useQuery<TData, Error, TSelected>({
    queryKey,
    enabled,
    staleTime: staleTime === "Infinity" ? Infinity : staleTime,
    retry,
    refetchInterval: refetchInterval ?? false,
    refetchOnWindowFocus,
    ...(select ? {select} : {}),
    queryFn: async ({signal}) => {
      const {data} = await app.get<ApiResponse<TData>>(
        `${customBaseUrl ?? BASE_URL}/${url}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...header
          },
          signal,
        },
      );

      return data.result;
    },
  });
};
