"use client";
import { LuCircleCheck, LuClock, LuGlobe, LuUsers } from "react-icons/lu";
import { SearchAutocomplete } from "./SearchAutocomplete";

export default function HeroSection() {
  return (
    <section className="relative   border-b border-b-border bg-surface min-h-fit pt-16 pb-20 md:pt-28 md:pb-36 text-white flex flex-col justify-center items-center px-4">
      <div className="absolute w-[450px] h-[350px] blur-3xl bg-primary/12 top-0 right-0 pointer-events-none"></div>
      <div className="absolute w-[450px] h-[350px] blur-3xl bg-accent/12 left-0 bottom-0 pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-5 relative z-10">
        <div className="bg-primary/20 text-primary border border-primary/80 py-1.5 rounded-3xl font-alt px-4 text-[12px] md:text-[13px]">
          <span>36+ Verified Brands · Updated Daily</span>
        </div>

        <h1 className="text-[32px] sm:text-[44px] md:text-[64px] xl:text-[96px] text-center flex flex-col capitalize font-bold font-heading leading-tight xl:leading-none">
          Save smarter on
          <span className="text-center text-primary">everything</span>
          <span className="text-center">you already use.</span>
        </h1>

        <p className="max-w-[90%] md:max-w-[550px] xl:max-w-[700px] text-[13px] md:text-[15px] xl:text-[18px] text-center text-content-muted font-alt">
          Ttwire is the curated marketplace for verified coupons across trading
          platforms, software, and travel. Real codes, real reviews, no
          affiliate fluff.
        </p>

        {/* Search wrapped in overflow-visible container */}
        <div
          className="relative w-full max-w-[600px] mt-2 md:mt-4"
          style={{ zIndex: 100 }}>
          <SearchAutocomplete
            variant="hero"
            placeholder="Search brands — Binance, NordVPN, Booking.com…"
            showBrowseBtn={true}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
          <span className="flex gap-2 items-center text-content-muted text-[11px] md:text-[13px] font-alt">
            <LuCircleCheck className="text-primary shrink-0" />
            Hand-verified codes
          </span>
          <span className="flex gap-2 items-center text-content-muted text-[11px] md:text-[13px] font-alt">
            <LuClock className="text-primary shrink-0" />
            Updated every 24h
          </span>
          <span className="flex gap-2 items-center text-content-muted text-[11px] md:text-[13px] font-alt">
            <LuGlobe className="text-primary shrink-0" />
            Global brands
          </span>
          <span className="flex gap-2 items-center text-content-muted text-[11px] md:text-[13px] font-alt">
            <LuUsers className="text-primary shrink-0" />
            30k+ savers
          </span>
        </div>
      </div>
    </section>
  );
}
