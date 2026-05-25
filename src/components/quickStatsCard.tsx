"use client";
import { useStore } from "@/store/useStore";
import { MdOutlineBarChart } from "react-icons/md";
import {
  LuStar,
  LuUsers,
  LuTag,
  LuCheck,
  LuClock,
  LuTrophy,
} from "react-icons/lu";
import { formatDate } from "../utils/date";

function QuickStatsCard() {
  const store = useStore((state) => state.stores);
  if (!store) return null;
  const { quick_stats_card } = store;
  return (
    <div className="bg-surface p-6 rounded-[10px]">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <MdOutlineBarChart className="text-primary" />
          <h2 className="uppercase text-[14px] text-white font-bold tracking-widest">
            {quick_stats_card.title}
          </h2>
        </div>
        <div className="flex flex-col text-[13px] font-alt gap-3">
          <div className="grid grid-cols-2 border-b border-b-border pb-3">
            <span className="flex text-left items-center gap-2 text-content-muted">
              <LuStar className="text-primary" />
              Rating
            </span>
            <span className="text-right font-bold">
              {quick_stats_card.rating_score}
            </span>
          </div>
          <div className="grid grid-cols-2 border-b border-b-border pb-3">
            <span className="flex text-left items-center gap-2 text-content-muted">
              <LuUsers className="text-primary" />
              Reviews
            </span>
            <span className="text-right font-bold">
              {quick_stats_card.rating_count.toLocaleString()}
            </span>
          </div>
          <div className="grid grid-cols-2 border-b border-b-border pb-3">
            <span className="flex text-left items-center gap-2 text-content-muted">
              <LuTag className="text-primary" />
              Active Coupons
            </span>
            <span className="text-right font-bold">
              {quick_stats_card.active_coupons}
            </span>
          </div>
          <div className="grid grid-cols-2 border-b border-b-border pb-3">
            <span className="flex text-left items-center gap-2 text-content-muted">
              <LuCheck className="text-primary" />
              Status
            </span>
            <span className="text-right font-bold bg-primary/10 py-0.5 px-2.5 border border-primary/50 rounded-full text-primary w-fit justify-self-end ">
              {quick_stats_card.status}
            </span>
          </div>
          <div className="grid grid-cols-2 border-b border-b-border pb-3">
            <span className="flex text-left items-center gap-2 text-content-muted">
              <LuClock className="text-primary" />
              Last Verified
            </span>
            <span className="text-right font-bold">
              {formatDate(quick_stats_card.last_verified)}
            </span>
          </div>
          <div className="grid grid-cols-2  pb-3">
            <span className="flex text-left items-center gap-2 text-content-muted">
              <LuTrophy className="text-primary" />
              Success Rate
            </span>
            <span className="text-right font-bold">
              {quick_stats_card.success_rate}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStatsCard;
