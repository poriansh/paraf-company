import type {VitrinFile} from "@/features/CustomerClub/types/vitrin.types";

export interface LevelItem {
  id: number;
  name: string;
  scores: string;
  status?: boolean;
  file: VitrinFile | null;
}
