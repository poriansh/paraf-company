import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {LevelItem} from "@/features/CustomerClub/types/level.types";


/** Levels list — `id` is userVitrinId */
export function useLevels() {


  return useRequest<LevelItem[]>({
    queryKey: ["LEVELS"],
    url: "levels",

    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
