"use client";
import { LuSearch, LuSlidersHorizontal } from "react-icons/lu";
import { useStoresStore } from "@/store/useStoresStore";

const categories = ["all", "trading", "software", "travel"];

const subcategories: Record<string, string[]> = {
  trading: ["all", "crypto", "broker-forex", "firms"],
  software: [
    "all",
    "ai",
    "tools",
    "education",
    "marketing",
    "design",
    "vpn-security",
    "productivity",
    "hosting-domains",
  ],
  travel: ["all", "booking", "hotels", "adventure"],
};

function FiltersUi() {
  const {
    category,
    subcategory,
    search,
    sortBy,
    rating,
    setCategory,
    setSubcategory,
    setSearch,
    setSortBy,
    setRating,
  } = useStoresStore();

  return (
    <section className="bg-base p-6 text-white border-b border-b-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search 300+ brands..."
                className="w-full border placeholder:text-[14px] focus-within:shadow-boxes bg-surface border-primary/30 outline-none focus-within:border-primary placeholder:font-heading pl-10 py-2 rounded-3xl text-white"
              />
              <LuSearch
                className="absolute top-3 left-4 text-content-muted"
                size={16}
              />
            </div>

            <div className="flex gap-4 items-center">
              <LuSlidersHorizontal />
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-surface border text-sm font-heading border-border outline-none focus-within:border-primary/70 px-2 py-2 rounded-[10px]">
                <option value="most_popular">Most Popular</option>
                <option value="top_rated">Top Rated</option>
                <option value="most_reviewed">Most Reviewed</option>
                <option value="most_coupons">Most Coupons</option>
              </select>

              {/* Rating */}
              <select
                value={rating ?? ""}
                onChange={(e) =>
                  setRating(e.target.value ? Number(e.target.value) : null)
                }
                className="bg-surface text-sm font-heading border border-border outline-none focus-within:border-primary/70 px-2 py-2 rounded-[8px]">
                <option value="">Any Rating</option>
                <option value="4.0">4.0+</option>
                <option value="4.5">4.5+</option>
                <option value="4.7">4.7+</option>
                <option value="5.0">5.0</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/* Categories */}
            <div className="no-scrollbar overflow-x-auto flex">
              <div className="flex gap-2 items-center">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-1.5 capitalize rounded-2xl border font-heading font-bold text-[13px] transition-all whitespace-nowrap
                      ${
                        category === c
                          ? "bg-primary text-black border-primary"
                          : "bg-base border-border text-content-muted hover:border-primary/50 hover:text-content"
                      }`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Subcategories */}
            {category !== "all" && (
              <div className="no-scrollbar overflow-x-auto flex">
                <div className="flex gap-2 items-center">
                  {subcategories[category]?.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSubcategory(s)}
                      className={`px-4 py-1 capitalize rounded-2xl border text-[12px] font-heading font-bold transition-all whitespace-nowrap
                        ${
                          subcategory === s
                            ? "bg-primary/20 text-primary border-primary/50"
                            : "bg-base border-border text-content-muted hover:border-primary/30 hover:text-content"
                        }`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FiltersUi;
