"use client";
import { useStore } from "@/store/useStore";
import { LuX } from "react-icons/lu";
function ConsCard() {
  const store = useStore((state) => state.stores);
  if (!store) return null;
  const { cons_card } = store;
  return (
    <div className="flex bg-surface flex-col gap-6 p-6 border border-border border-t-3 h-fit border-t-red-500 rounded-[10px]">
      <div className="flex flex-col gap-6">
        <h2 className="flex items-center gap-2 uppercase font-heading tracking-widest text-sm text-red-500">
          <LuX />
          {cons_card.title}
        </h2>
        <div className="flex flex-col gap-4">
          {cons_card.cons.map((p, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-2 border-b border-b-border pb-4">
                <LuX className="text-red-500" size={16} />
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

export default ConsCard;
