import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {VitrinUser} from "@/features/CustomerClub/types/vitrin.types";


export function useVitrinUsers() {


  return useRequest<VitrinUser[]>({
    queryKey: ["USERS-VITRIN-ALL"],
    url: "users/vitrin/all-user",

    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

