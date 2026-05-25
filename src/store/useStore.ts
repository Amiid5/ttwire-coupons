import { create } from "zustand";
import { Store, SimilarStore } from "@/lib/types/storeTypes";

interface StoreState {
  stores: Store | null;
  similarStores: SimilarStore[] | null;

  setStore: (data: Store) => void;
  setSimilarStores: (data: SimilarStore[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  stores: null,
  similarStores: null,

  setStore: (data) => set({ stores: data }),
  setSimilarStores: (data) => set({ similarStores: data }),
}));
