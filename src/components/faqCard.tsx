"use client";
import { useStore } from "@/store/useStore";
import { useState } from "react";
import { LuPlus, LuInfo } from "react-icons/lu";

function FaqCard() {
  const store = useStore((state) => state.stores);
  const [openId, setOpenId] = useState<number | null>(null);

  if (!store) return null;
  const { faq_card } = store;

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-surface p-6 rounded-[12px] border border-border mt-12">
      <div className="flex flex-col gap-8">
        <h2 className="text-primary flex gap-2 items-center font-heading tracking-widest text-[20px]">
          <LuInfo size={16} />
          {faq_card.title}
        </h2>
        <div className="flex flex-col gap-6">
          {faq_card.questions.map((q) => {
            const isOpen = openId === q.id;
            return (
              <div
                key={q.id}
                className="flex flex-col border-b border-b-border pb-3 gap-4">
                <span
                  onClick={() => handleToggle(q.id)}
                  className="flex justify-between">
                  <span className="capitalize font-heading font-bold hover:text-primary cursor-pointer">
                    {q.question}
                  </span>
                  <LuPlus
                    className={`cursor-pointer text-primary transition-transform duration-200 ${isOpen ? "rotate-45" : "rotate-0"}`}
                  />
                </span>
                {isOpen && (
                  <span className="text-content-muted text-[14px]">
                    {q.answer}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FaqCard;
