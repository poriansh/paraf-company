import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {CurrentUser} from "@/shared/types/user.types";




/**
 * Fetch current authenticated user profile.
 *
 * Wrapper around `useRequest` that requests `users/me` and applies a
 * sensible `staleTime` so the user object is cached for 5 minutes.
 *
 * @returns React Query `UseQueryResult<CurrentUser>` for the current user.
 */
export function useCurrentUser() {
  return useRequest<CurrentUser>({
    queryKey: ["USER-ME"],
    url: "users/me",

    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
