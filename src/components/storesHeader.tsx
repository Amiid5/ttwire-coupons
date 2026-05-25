"use client";

function StoresHeader() {
  return (
    <section className="relative bg-surface border-b border-b-border text-white md:p-16 p-6 overflow-hidden">
      <div className="absolute bg-primary/15 w-[350px] top-0 h-full blur-3xl left-0"></div>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start gap-3">
          <span className="uppercase ml-2 text-primary text-[13px] font-extrabold font-heading">
            Verified marketplace
          </span>
          <span className="flex gap-2 text-5xl font-bold font-heading">
            All<span className="text-primary">Stores</span>
          </span>
          <p className="text-sm text-content-muted">
            36 brands across 14 subcategories — real ratings, verified coupons.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StoresHeader;
