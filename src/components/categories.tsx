import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

function Categories() {
  const trading: string[] = ["Crypto", "Broker / Forex", "Firms & Platforms"];
  const software: string[] = [
    "AI",
    "Tools",
    "Education",
    "Marketing",
    "Design",
    "VPN & Security",
    "Productivity",
    "Hosting & Domains",
  ];
  const travel: string[] = ["Booking", "Hotels", "Adventure"];

  return (
    <section className="bg-base text-white min-h-fit pt-10 pb-10 border-b border-b-border px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-heading font-semibold text-[12px] md:text-[16px] uppercase">
            Browse by category
          </span>
          <h2 className="text-[22px] md:text-[36px] font-bold font-heading capitalize">
            Three worlds. One marketplace.
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:pr-3">
          {[
            {
              title: "Trading",
              count: "13 brands",
              desc: "Prop firms, brokers & crypto venues",
              tags: trading,
            },
            {
              title: "Software",
              count: "17 brands",
              desc: "AI, tools, design & productivity",
              tags: software,
            },
            {
              title: "Travel",
              count: "6 brands",
              desc: "Booking, hotels & adventures",
              tags: travel,
            },
          ].map(({ title, count, desc, tags }) => (
            <Link href="/stores" key={title} className="flex flex-col h-full">
              <div className="flex flex-col h-full gap-7 bg-surface pt-6 pb-12 px-6 rounded-2xl group border border-border cursor-pointer transition-all hover:border-primary/70 hover:shadow-boxes">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="text-primary uppercase text-[13px] font-heading">
                      {count}
                    </span>
                    <LuArrowRight
                      size={20}
                      className="text-content-muted group-hover:text-primary transition-all group-hover:translate-x-2"
                    />
                  </div>
                  <h2 className="text-3xl font-bold font-heading">{title}</h2>
                  <p className="text-content-muted text-sm font-alt">{desc}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 items-center">
                  {tags.map((t, i) => (
                    <span
                      key={i}
                      className="bg-base text-[10px] px-2 group-hover:border-primary/40 border border-border py-1 rounded-full md:px-4 md:text-[12px] transition-all">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
