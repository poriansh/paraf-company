import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {VitrinDetail} from "@/features/CustomerClub/types/vitrin.types";
import {getToken} from "@/shared/utils/token";

export function useVitrinDetail(userVitrinId?: number | null) {
  const token = getToken();

  return useRequest<VitrinDetail>({
    queryKey: ["USERS-VITRIN-DETAIL", String(userVitrinId ?? "")],
    url: `users/vitrin/${userVitrinId}`,
    enabled: Boolean(token && userVitrinId),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
