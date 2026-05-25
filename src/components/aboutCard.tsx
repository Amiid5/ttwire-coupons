"use client";
import { LuInfo } from "react-icons/lu";
import { useStore } from "@/store/useStore";

function AboutCard() {
  const store = useStore((state) => state.stores);
  if (!store) return null;
  const { about_card } = store;

  return (
    <div className="bg-surface p-6 rounded-[10px] border border-border">
      <div className="flex flex-col gap-4 text-content-muted">
        <div className="flex gap-2 items-center">
          <LuInfo className="text-primary" />
          <h2 className="uppercase font-heading tracking-widest text-white  font-bold text-[14px]">
            {about_card.title}
          </h2>
        </div>
        <p className="text-[13px] font-alt">{about_card.description}</p>
      </div>
    </div>
  );
}

export default AboutCard;
