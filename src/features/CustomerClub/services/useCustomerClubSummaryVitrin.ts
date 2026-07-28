import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {CustomerClubVitrinSummary} from "@/features/CustomerClub/types/summary.types";


export function useCustomerClubSummaryVitrin(userVitrinId?: number | null) {


  return useRequest<CustomerClubVitrinSummary>({
    queryKey: ["CUSTOMER-CLUB-SUMMARY-VITRIN", String(userVitrinId ?? "")],
    url: `customer-club/summary-user-vitrin/${userVitrinId}`,

    staleTime: 2 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
