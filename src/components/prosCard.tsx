"use client";
import { useStore } from "@/store/useStore";
import { LuCheck, LuX } from "react-icons/lu";
function ProsCard() {
  const store = useStore((state) => state.stores);
  if (!store) return null;
  const { pros_card } = store;
  return (
    <div className="flex bg-surface flex-col gap-6 p-6 border border-border border-t-3 border-t-primary rounded-[10px]">
      <div className="flex flex-col gap-6">
        <h2 className="flex items-center gap-2 uppercase font-heading tracking-widest text-sm text-primary">
          <LuCheck />
          {pros_card.title}
        </h2>
        <div className="flex flex-col gap-4">
          {pros_card.pros.map((p, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-2 border-b border-b-border pb-4">
                <LuCheck className="text-primary" />
                <span className="text-[12px] text-content-muted font-alt">
                  {p}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProsCard;
