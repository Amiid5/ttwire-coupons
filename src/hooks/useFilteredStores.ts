// hooks/useFilteredStores.ts
import { useMemo } from "react";
import { useStoresStore } from "@/store/useStoresStore";

export function useFilteredStores() {
  const {
    allStores,
    search,
    category,
    subcategory,
    rating,
    sortBy,
    currentPage,
    perPage,
  } = useStoresStore();

  const filtered = useMemo(() => {
    let result = [...allStores];

    // ── 1. Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.subcategory.toLowerCase().includes(q),
      );
    }

    // ── 2. Category
    if (category !== "all") {
      result = result.filter((s) => s.category === category);
    }

    // ── 3. Subcategory
    if (subcategory !== "all") {
      result = result.filter((s) => s.subcategory === subcategory);
    }

    // ── 4. Rating
    if (rating !== null) {
      result = result.filter((s) => s.rating_score >= rating);
    }

    // ── 5. Sort
    switch (sortBy) {
      case "most_popular":
        result.sort((a, b) => b.rating_count - a.rating_count);
        break;
      case "top_rated":
        result.sort((a, b) => b.rating_score - a.rating_score);
        break;
      case "most_reviewed":
        result.sort((a, b) => b.rating_count - a.rating_count);
        break;
      case "most_coupons":
        result.sort(
          (a, b) =>
            parseInt(b.banner_section?.coupons_count ?? "0") -
            parseInt(a.banner_section?.coupons_count ?? "0"),
        );
        break;
      default:
        break;
    }

    return result;
  }, [allStores, search, category, subcategory, rating, sortBy]);

  // ── 6. Pagination
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const start = (currentPage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  return {
    stores: paginated, // ← what you render
    totalItems, // ← total filtered count
    totalPages, // ← total pages
    currentPage, // ← current page number
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    isEmpty: filtered.length === 0,
  };
}
