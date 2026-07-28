import {create} from "zustand";

interface SelectedClubState {
  selectedVitrinId: number | null;
  setSelectedVitrinId: (id: number | null) => void;
}

export const useSelectedClub = create<SelectedClubState>((set) => ({
  selectedVitrinId: null,
  setSelectedVitrinId: (id) => set({selectedVitrinId: id}),
}));
