import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {VitrinUser} from "@/features/CustomerClub/types/vitrin.types";
import {getToken} from "@/shared/utils/token";

export function useVitrinUsers() {
  const token = getToken();

  return useRequest<VitrinUser[]>({
    queryKey: ["USERS-VITRIN-ALL"],
    url: "users/vitrin/all-user",
    enabled: Boolean(token),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

