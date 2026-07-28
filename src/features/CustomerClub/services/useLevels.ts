import {useRequest} from "@/infrastructure/client/api/useRequest";
import type {LevelItem} from "@/features/CustomerClub/types/level.types";
import {getToken} from "@/shared/utils/token";

/** Levels list — `id` is userVitrinId */
export function useLevels() {
  const token = getToken();

  return useRequest<LevelItem[]>({
    queryKey: ["LEVELS"],
    url: "levels",
    enabled: Boolean(token),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
