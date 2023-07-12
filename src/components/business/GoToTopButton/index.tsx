"use client";

import ArrowUpCircleIcon from "@/components/abstract/icons/ArrowUpCircleIcon";
import { useCallback } from "react";
import { twMerge } from "tailwind-merge";

const buttonClassName =
  "flex justify-center items-center p-2 aspect-square border border-zinc-600 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors";

export default function GoToTopButton() {
  const handleGoToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <button
      className={twMerge(buttonClassName, "go-top-button")}
      onClick={handleGoToTop}
    >
      <ArrowUpCircleIcon className="text-lg" />
    </button>
  );
}
