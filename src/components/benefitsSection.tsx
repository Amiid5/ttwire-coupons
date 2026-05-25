"use client";
import React, { ReactNode } from "react";
import { LuShieldCheck, LuTag, LuTrendingUp, LuZap } from "react-icons/lu";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

function BenefitsSection() {
  return (
    <section className="bg-base/98 text-white px-4 md:px-6 pt-8 pb-12 border-b border-b-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-sm uppercase mb-2 text-primary capitalize font-heading font-extrabold">
              Why Ttwire
            </h2>
            <span className="text-[20px] md:text-3xl font-heading font-extrabold">
              Built for people who hate paying retail.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Cards
              title="Verified codes"
              description="Every coupon is hand-tested before publishing."
              icon={<LuTag />}
            />
            <Cards
              title="Fast updates"
              description="Expired deals removed within 24 hours."
              icon={<LuZap />}
            />
            <Cards
              title="Real reviews"
              description="Only verified buyers. No paid placements."
              icon={<LuShieldCheck />}
            />
            <Cards
              title="Side-by-side"
              description="Compare brands with the same playbook."
              icon={<LuTrendingUp />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Cards({ icon, title, description }: Props) {
  return (
    <div className="flex flex-col gap-3 bg-surface p-6 rounded-[10px] border border-border hover:border-primary/70 transition-all">
      <div className="text-primary text-2xl">{icon}</div>
      <span className="text-xl md:text-2xl capitalize font-extrabold font-heading">
        {title}
      </span>
      <p className="text-sm text-content-muted font-heading">{description}</p>
    </div>
  );
}

export default BenefitsSection;
