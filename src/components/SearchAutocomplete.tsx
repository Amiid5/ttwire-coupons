"use client";
import { useState, useRef, useEffect } from "react";
import { useStoresStore } from "@/store/useStoresStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LuArrowRight, LuSearch } from "react-icons/lu";

interface SearchAutocompleteProps {
  variant?: "default" | "hero";
  placeholder?: string;
  showBrowseBtn?: boolean;
  className?: string;
}

export function SearchAutocomplete({
  variant = "default",
  placeholder = "Search brands...",
  showBrowseBtn = false,
  className = "",
}: SearchAutocompleteProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const allStores = useStoresStore((state) => state.allStores);
  const { setSearch } = useStoresStore();

  const suggestions =
    query.trim().length > 0
      ? allStores
          .filter(
            (s) =>
              s.name.toLowerCase().includes(query.toLowerCase()) ||
              s.category.toLowerCase().includes(query.toLowerCase()) ||
              s.subcategory.toLowerCase().includes(query.toLowerCase()),
          )
          .slice(0, 8)
      : [];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSearch(e.target.value);
    setOpen(true);
  };

  const handleSelect = (slug: string) => {
    setQuery("");
    setOpen(false);
    router.push(`/stores/${slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative ${variant === "hero" ? "w-full max-w-[600px]" : "w-full"} ${className}px-2 `}>
      {/* Input */}
      <div
        className={`flex items-center gap-3 bg-surface-vibrant border border-border transition-all focus-within:border-primary
        ${
          variant === "hero"
            ? "rounded px-6 py-4"
            : "rounded  px-2 py-1 md:px-4 md:py-2"
        }`}>
        <LuSearch
          size={variant === "hero" ? 18 : 16}
          className="text-content-muted shrink-0"
        />

        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => query.trim() && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`bg-transparent outline-none w-full text-content placeholder:text-content-muted
            ${variant === "hero" ? "text-[16px]" : "text-[14px]"}`}
        />

        {query && (
          <button
            onClick={() => {
              setQuery("");
              setSearch("");
              setOpen(false);
            }}
            className="text-content-muted hover:text-content transition-colors shrink-0">
            ✕
          </button>
        )}

        {showBrowseBtn && (
          <button
            onClick={() => router.push("/stores")}
            className="shrink-0 bg-primary cursor-pointer text-black font-heading font-bold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 hover:opacity-90 transition-all whitespace-nowrap">
            Browse
            <LuArrowRight size={14} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && suggestions.length > 0 && (
        <div className="absolute top-full -left-4 -right-4 md:left-0 md:right-0 mt-2 bg-surface border border-border rounded-xl overflow-hidden shadow-[var(--shadow-surface)] z-50">
          {suggestions.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSelect(s.slug)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-vibrant transition-colors border-b border-border last:border-b-0">
              <div className="w-8 h-8 rounded-lg bg-surface-vibrant border border-border overflow-hidden shrink-0 flex items-center justify-center">
                {s.logo_url ? (
                  <Image
                    src={s.logo_url}
                    alt={s.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-primary font-heading font-bold text-[10px]">
                    {s.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="text-[13px] font-medium text-content capitalize">
                  {s.name}
                </div>
                <div className="text-[11px] text-content-muted capitalize">
                  {s.category} · {s.subcategory}
                </div>
              </div>
              <div className="text-[12px] text-primary font-heading font-bold shrink-0">
                ★ {s.rating_score}
              </div>
            </button>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              router.push("/stores");
            }}
            className="w-full px-4 py-3 text-center text-[12px] text-primary font-heading font-bold hover:bg-surface-vibrant transition-colors">
            View all results for "{query}" →
          </button>
        </div>
      )}

      {/* No results */}
      {open && query.trim() && suggestions.length === 0 && (
        <div className="absolute top-full -left-4 -right-4 md:left-0 md:right-0 mt-2 bg-surface border border-border rounded-xl p-4 text-center shadow-[var(--shadow-surface)] z-50">
          <p className="text-content-muted text-[13px]">
            No stores found for "<span className="text-content">{query}</span>"
          </p>
        </div>
      )}
    </div>
  );
}
