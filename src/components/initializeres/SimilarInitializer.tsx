"use client";
import { useRef } from "react";
import { useStore } from "@/store/useStore";
import { SimilarStore } from "@/lib/types/storeTypes";

export default function SimilarInitializer({ data }: { data: SimilarStore[] }) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useStore.getState().setSimilarStores(data);
    initialized.current = true;
  }

  return null;
}
