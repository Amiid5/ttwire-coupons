// In any component
import { useFilteredStores } from "@/hooks/useFilteredStores";
import { useStoresStore } from "@/store/useStoresStore";

export function StoresList() {
  const { stores, totalItems, totalPages, isEmpty } = useFilteredStores();
  const {
    setSearch,
    setCategory,
    setSubcategory,
    setRating,
    setSortBy,
    setPage,
    resetFilters,
  } = useStoresStore();

  return (
    <div>
      {/* Search */}
      <input onChange={(e) => setSearch(e.target.value)} />

      {/* Category tabs */}
      <button onClick={() => setCategory("all")}>All</button>
      <button onClick={() => setCategory("trading")}>Trading</button>
      <button onClick={() => setCategory("software")}>Software</button>
      <button onClick={() => setCategory("travel")}>Travel</button>

      {/* Subcategory */}
      <button onClick={() => setSubcategory("firms")}>Firms</button>

      {/* Sort */}
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="most_popular">Most Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="most_reviewed">Most Reviewed</option>
        <option value="most_coupons">Most Coupons</option>
      </select>

      {/* Rating */}
      <button onClick={() => setRating(4.0)}>4.0+</button>
      <button onClick={() => setRating(4.5)}>4.5+</button>
      <button onClick={() => setRating(null)}>Any</button>

      {/* Results count */}
      <p>{totalItems} stores found</p>

      {/* Empty state */}
      {isEmpty && <p>No stores found</p>}

      {/* Stores grid */}
      {stores.map((s) => (
        <div key={s.id}>{s.name}</div>
      ))}

      {/* Pagination */}
      <button onClick={() => setPage(currentPage - 1)}>Prev</button>
      <button onClick={() => setPage(currentPage + 1)}>Next</button>
    </div>
  );
}
