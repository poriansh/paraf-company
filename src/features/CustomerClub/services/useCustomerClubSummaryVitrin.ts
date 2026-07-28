import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {CustomerClubVitrinSummary} from "@/features/CustomerClub/types/summary.types";
import {getToken} from "@/shared/utils/token";

export function useCustomerClubSummaryVitrin(userVitrinId?: number | null) {
  const token = getToken();

  return useRequest<CustomerClubVitrinSummary>({
    queryKey: ["CUSTOMER-CLUB-SUMMARY-VITRIN", String(userVitrinId ?? "")],
    url: `customer-club/summary-user-vitrin/${userVitrinId}`,
    enabled: Boolean(token && userVitrinId),
    staleTime: 2 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
