import { create } from "zustand";
import { AllStoresTypes } from "@/lib/types/storeTypes";

interface AllStoresState {
  // Raw data
  allStores: AllStoresTypes[];

  // Filters
  search: string;
  category: string;
  subcategory: string;
  rating: number | null;
  sortBy: string;

  // Pagination
  currentPage: number;
  perPage: number;

  // Setters
  setAllStores: (data: AllStoresTypes[]) => void;
  setSearch: (val: string) => void;
  setCategory: (val: string) => void;
  setSubcategory: (val: string) => void;
  setRating: (val: number | null) => void;
  setSortBy: (val: string) => void;
  setPage: (val: number) => void;
  resetFilters: () => void;
}

export const useStoresStore = create<AllStoresState>((set) => ({
  allStores: [],
  search: "",
  category: "all",
  subcategory: "all",
  rating: null,
  sortBy: "most_popular",
  currentPage: 1,
  perPage: 20,

  setAllStores: (data) => set({ allStores: data }),
  setSearch: (val) => set({ search: val, currentPage: 1 }),
  setCategory: (val) =>
    set({ category: val, subcategory: "all", currentPage: 1 }),
  setSubcategory: (val) => set({ subcategory: val, currentPage: 1 }),
  setRating: (val) => set({ rating: val, currentPage: 1 }),
  setSortBy: (val) => set({ sortBy: val, currentPage: 1 }),
  setPage: (val) => set({ currentPage: val }),
  resetFilters: () =>
    set({
      search: "",
      category: "all",
      subcategory: "all",
      rating: null,
      sortBy: "most_popular",
      currentPage: 1,
    }),
}));
