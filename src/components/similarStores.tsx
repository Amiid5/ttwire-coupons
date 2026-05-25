"use client";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import StarRating from "./ui/rating";
import Link from "next/link";

function SimilarStoresCard() {
  const similar = useStore((state) => state.similarStores);
  if (!similar) return null;

  return (
    <div className="bg-surface p-6 rounded-[10px]">
      <div className="flex flex-col gap-4 pb-2 ">
        {similar.map((s) => {
          return (
            <div
              key={s.id}
              className="flex  justify-between items-center font-alt border-b border-b-border pb-3">
              <div className="flex gap-4 items-center ">
                <Link href={`/stores/${s.slug}`}>
                  <div className="overflow-hidden cursor-pointer w-[40px] h-[40px] rounded border border-border">
                    <Image
                      src={s.logo_url}
                      width={40}
                      height={40}
                      alt={s.name}
                    />
                  </div>
                </Link>

                <div className="flex flex-col   text-content-muted items-start">
                  <Link href={`/stores/${s.slug}`}>
                    <span className="capitalize cursor-pointer hover:text-primary font-heading font-medium tracking-wider text-white">
                      {s.name}
                    </span>
                  </Link>
                  <div className="flex flex-col md:flex-row gap-2 items-center">
                    <StarRating
                      ratingSize="text-[10px]"
                      starSize="text-[8px]"
                      rating={s.rating_score}
                    />
                    <span className="hidden md:flex ">-</span>
                    <span className="text-[12px] w-fit">{s.city}</span>
                  </div>
                </div>
              </div>
              <Link href={`/stores/${s.slug}`}>
                <div className="w-fit py-[3px] px-2 rounded-2xl bg-accent/10 text-accent flex gap-1 items-center font-bold cursor-pointer text-[12px]">
                  {s.coupons_count}
                  <span>deals</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimilarStoresCard;
