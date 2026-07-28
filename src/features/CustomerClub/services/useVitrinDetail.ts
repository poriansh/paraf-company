import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {VitrinDetail} from "@/features/CustomerClub/types/vitrin.types";


export function useVitrinDetail(userVitrinId?: number | null) {


  return useRequest<VitrinDetail>({
    queryKey: ["USERS-VITRIN-DETAIL", String(userVitrinId ?? "")],
    url: `users/vitrin/${userVitrinId}`,
    enabled: Boolean(userVitrinId),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
