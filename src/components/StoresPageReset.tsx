"use client";
import { useEffect } from "react";
import { useStoresStore } from "@/store/useStoresStore";

export function StoresPageReset() {
  const { setPage } = useStoresStore();

  useEffect(() => {
    setPage(1);
  }, [setPage]);

  return null;
}
