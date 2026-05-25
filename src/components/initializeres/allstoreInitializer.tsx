"use client";
import { useRef } from "react";
import { useStoresStore } from "@/store/useStoresStore";
import { AllStores } from "@/lib/types/storeTypes";

export default function AllStoreInitializer({ data }: { data: AllStores }) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useStoresStore.getState().setAllStores(data.data);
    initialized.current = true;
  }

  return null;
}
