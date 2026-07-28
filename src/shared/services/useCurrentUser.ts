import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {CurrentUser} from "@/shared/types/user.types";
import {getToken} from "@/shared/utils/token";



export function useCurrentUser() {
  const token = getToken();

  return useRequest<CurrentUser>({
    queryKey: ["USER-ME"],
    url: "users/me",
    enabled: Boolean(token),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
