"use client";
import { useStore } from "@/store/useStore";
import { useState } from "react";
import { formatDate, truncateWords } from "../utils/date";
import {
  LuBadgeCheck,
  LuTrendingUp,
  LuUsers,
  LuChevronDown,
} from "react-icons/lu";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { Coupon } from "../lib/types/storeTypes";
import Link from "next/link";

function CouponItem({ c }: { c: Coupon }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`${c.sort_order === 1 ? "hover:border-accent border-accent/70" : "hover:border-primary/70 border-border"} bg-surface rounded-2xl border overflow-hidden hover:shadow-boxes hover:transition-all hover:-translate-y-2`}>
      {c.sort_order === 1 && (
        <div className="bg-accent text-black p-4 w-full flex justify-between items-center capitalize text-[12px] md:text-[16px] font-heading tracking-widest">
          🔥 today best offer
          <span>{formatDate(c.expiry_date)}</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-[25%_1fr]">
        <div className="bg-base p-6 relative overflow-hidden flex flex-col gap-1 justify-center items-center border-r border-r-border">
          <div className="absolute w-[50%] h-full bg-primary/6 blur-2xl right-0"></div>
          <span className="xl:text-6xl text-4xl font-bold text-primary font-heading">
            {c.discount_amount}
          </span>
          <span className="text-[16px] font-bold font-heading uppercase">
            {c.discount_label}
          </span>
        </div>
        <div className="flex flex-col xl:flex-row gap-3 xl:gap-0 pt-4 pb-4 xl:pb-0 xl:pt-0 justify-between items-center px-6 w-full">
          <div className="flex flex-col gap-3 items-start flex-col w-full xl:w-auto">
            <div className="flex justify-between md:gap-3 gap-3 items-center">
              <span className="flex gap-2 items-center text-content-muted font-alt text-[10px]  md:text-[14px]">
                <LuBadgeCheck className="text-primary" />
                {c.is_verified === true ? "Verified" : "Unverified"}
              </span>
              <span className="flex gap-2 items-center text-content-muted font-alt text-[10px]  md:text-[14px]">
                <LuTrendingUp className="text-primary" />
                {c.success_rate}%
              </span>
              <span className="flex gap-2 items-center text-content-muted font-alt text-[10px]  md:text-[14px]">
                <LuUsers className="text-primary" />
                {c.usage_count_text}
                <span>today</span>
              </span>
            </div>
            <h2 className="text-[14px] md:text-[20px] font-heading ">
              {truncateWords(c.title, 5)}
            </h2>
          </div>

          {/* CHANGED: Changed lg:w-auto to xl:w-auto */}
          {/* BEDDELKIISA: Waxaan u beddelnay lg:w-auto mid noqda xl:w-auto */}
          <div className="relative w-full xl:w-auto">
            {c.type === "code" ? (
              <div className="w-full">
                {open ? (
                  /* CHANGED: Changed lg:max-w-md to xl:max-w-md */
                  /* BEDDELKIISA: Waxaan u beddelnay lg:max-w-md mid noqda xl:max-w-md */
                  <div className="flex items-center w-full xl:max-w-md rounded-xl border border-dashed border-accent overflow-hidden bg-surface-vibrant">
                    <div className="flex-1 px-5 py-3 text-accent font-mono font-bold tracking-widest text-[16px]">
                      {copied ? "••••••••" : c.code}
                    </div>
                    <div className="w-[1px] h-10 bg-accent/30" />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(c.code ?? "");
                        setCopied(true);
                        setShowToast(true);
                        setTimeout(() => {
                          setCopied(false);
                          setOpen(false);
                          setShowToast(false);
                        }, 3000);
                      }}
                      disabled={copied}
                      className="px-5 py-3 cursor-pointer flex items-center gap-2 text-accent font-medium hover:bg-accent/10 active:scale-95 transition-all text-sm disabled:opacity-50">
                      {copied ? (
                        <>
                          <BsCheckCircleFill size={14} /> Copied
                        </>
                      ) : (
                        <>
                          <IoCopyOutline size={16} /> Copy
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  /* CHANGED: Changed lg:max-w-md to xl:max-w-md */
                  /* BEDDELKIISA: Waxaan u beddelnay lg:max-w-md mid noqda xl:max-w-md */
                  <button
                    onClick={() => setOpen(true)}
                    className="w-full xl:max-w-md px-5 cursor-pointer py-3 text-center rounded-xl border border-dashed border-border text-content-muted bg-surface-vibrant hover:border-primary/50 hover:text-primary transition-all font-medium tracking-wide flex items-center justify-center gap-2">
                    <MdLockOutline size={16} />
                    Reveal Code
                  </button>
                )}
              </div>
            ) : (
              /* CHANGED: Changed lg:max-w-md to xl:max-w-md */
              /* BEDDELKIISA: Waxaan u beddelnay lg:max-w-md mid noqda xl:max-w-md */
              <Link
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xl:max-w-md px-5 py-3 rounded-xl bg-primary text-black font-heading font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <FiExternalLink size={16} />
                Claim Offer
              </Link>
            )}

            {showToast && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-surface-vibrant border border-primary/30 text-primary text-xs px-4 py-1 rounded-lg shadow-lg font-medium tracking-wide whitespace-nowrap">
                <BsCheckCircleFill className="inline mr-1.5" size={12} />
                Copied to clipboard!
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        onClick={() => setExpand(!expand)}
        className="border-t border-t-border capitalize cursor-pointer flex justify-center items-center py-4 font-alt text-sm gap-1">
        show details
        <LuChevronDown
          size={18}
          className={`transition-transform duration-300 ${expand ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {expand && (
        <div className="pb-6 border-t border-t-border pt-4">
          <div className="flex flex-col gap-3 px-4 text-content-muted text-sm">
            <span className="flex gap-15 ">
              <span className="capitalize text-primary font-serif">type:</span>
              <span className="uppercase font-serif text-[12px]">
                {c.type === "code" ? "code" : "offer"}
              </span>
            </span>

            <span className="flex gap-7 border-b border-b-border pb-3">
              <span className="capitalize text-primary font-serif">
                condition:
              </span>
              <span className="capitalize text-[13px]">{c.conditions_tag}</span>
            </span>
            <span className="flex gap-4 ">
              <span className="capitalize text-primary font-serif">
                description:
              </span>
              <span className="capitalize text-[13px]">{c.description}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export function CouponCard() {
  const store = useStore((state) => state.stores);
  if (!store) return null;
  const { coupons } = store;
  const sortedCoupons = [...coupons].sort(
    (a, b) => a.sort_order - b.sort_order,
  );

  return (
    <section>
      <div className="flex flex-col gap-10">
        {sortedCoupons.map((c) => (
          <CouponItem key={c.id} c={c} />
        ))}
      </div>
    </section>
  );
}
