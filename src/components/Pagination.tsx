"use client";
import { useFilteredStores } from "@/hooks/useFilteredStores";
import { useStoresStore } from "@/store/useStoresStore";

export function PaginationCard() {
  const { totalPages, currentPage, hasNextPage, hasPrevPage } =
    useFilteredStores();
  const { setPage } = useStoresStore();

  if (totalPages <= 1) return null;

  // Build page numbers with dots
  const getPages = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {/* Prev */}
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={!hasPrevPage}
        className="px-4 py-2 rounded-lg border border-border text-content-muted hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all font-heading text-sm">
        ← Prev
      </button>

      {/* Pages */}
      {getPages().map((page, i) =>
        page === "..." ? (
          <span key={`dots-${i}`} className="text-content-muted px-1">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`w-9 h-9 rounded-lg text-sm font-heading font-bold transition-all
              ${
                page === currentPage
                  ? "bg-primary text-black shadow-[var(--shadow-primary)]"
                  : "border border-border text-content-muted hover:border-primary hover:text-primary"
              }`}>
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={!hasNextPage}
        className="px-4 py-2 rounded-lg border border-border text-content-muted hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all font-heading text-sm">
        Next →
      </button>
    </div>
  );
}
