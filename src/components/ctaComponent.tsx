"use client";
import Link from "next/link";
import { LuArrowRight, LuPuzzle } from "react-icons/lu";

function CtaComponent() {
  return (
    <section className="bg-surface text-white px-4 py-16 relative overflow-hidden">
      <div className="absolute w-[450px] h-[350px] blur-3xl bg-primary/12 top-0 right-0 pointer-events-none"></div>
      <div className="absolute w-[450px] h-[350px] blur-3xl bg-accent/12 left-0 bottom-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col justify-center items-center gap-4 max-w-[600px] mx-auto text-center">
        <LuPuzzle className="text-primary text-4xl" />
        <h2 className="text-[24px] md:text-5xl font-bold font-heading">
          Stop paying full price.
        </h2>
        <span className="text-sm text-content-muted font-heading">
          Join 30,000+ people who check Ttwire before every purchase.
        </span>
        <Link
          href="/stores"
          className="flex gap-2 items-center mt-3 bg-primary px-5 py-3 rounded-full font-bold hover:shadow-boxes text-black font-heading text-[16px] transition-all">
          Explore the marketplace
          <LuArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default CtaComponent;
