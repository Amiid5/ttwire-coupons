"use client";
import { useFilteredStores } from "@/hooks/useFilteredStores";
import { PaginationCard } from "./Pagination";
import Image from "next/image";
import { LuTag, LuArrowRight } from "react-icons/lu";
import StarRating from "./ui/rating";
import Link from "next/link";

function AllStoresCard() {
  const { stores, totalItems, isEmpty } = useFilteredStores();

  return (
    <section className="bg-base px-2 py-6 lg:p-6 text-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Count */}
        <p className="text-content-muted text-[13px] mb-4 font-alt">
          {totalItems} stores found
        </p>

        {/* Empty state */}
        {isEmpty && (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <p className="text-content-muted font-heading text-[18px]">
              No stores found
            </p>
            <p className="text-content-muted text-[13px]">
              Try different filters or search terms
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {stores.map((s) => (
            <Link href={`/stores/${s.slug}`} key={s.id}>
              <div className="bg-surface cursor-pointer group hover:shadow-boxes hover:border-primary p-6 border rounded-[10px] border-border transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center gap-4 pb-4 border-b border-b-border">
                    <div className="flex gap-4">
                      <div className="w-[50px] h-[50px] rounded-[6px] overflow-hidden border border-border shrink-0">
                        <Image
                          src={s.logo_url}
                          width={50}
                          height={50}
                          alt={s.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold font-heading capitalize text-[16px] line-clamp-1">
                          {s.name}
                        </span>
                        <span className="text-sm text-content-muted capitalize font-heading">
                          {s.subcategory}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-primary/20 px-2 py-1.5 text-sm font-bold text-primary rounded shrink-0">
                      <LuTag size={12} />
                      {s.banner_section?.coupons_count}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <StarRating
                      starSize="text-[14px]"
                      rating={s.rating_score}
                    />
                    <div className="flex gap-1 items-center font-heading capitalize group-hover:text-primary transition-colors text-[13px]">
                      view
                      <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <PaginationCard />
      </div>
    </section>
  );
}

export default AllStoresCard;
