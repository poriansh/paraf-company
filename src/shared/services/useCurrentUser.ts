import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {CurrentUser} from "@/shared/types/user.types";




export function useCurrentUser() {


  return useRequest<CurrentUser>({
    queryKey: ["USER-ME"],
    url: "users/me",

    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
