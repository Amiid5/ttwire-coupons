"use client";
import { useRef } from "react";
import { useStore } from "@/store/useStore";
import { Store } from "@/lib/types/storeTypes";

export default function StoreInitializer({ data }: { data: Store }) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useStore.getState().setStore(data);
    initialized.current = true;
  }

  return null;
}
