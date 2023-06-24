"use client";

import ArrowUpCircleIcon from "../../abstract/icons/ArrowUpCircleIcon";

export default function AppFooter() {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="flex flex-row items-center justify-center py-6">
      <button
        className="flex justify-center items-center p-2 aspect-square border border-zinc-600 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
        onClick={handleGoToTop}
      >
        <ArrowUpCircleIcon className="text-lg" />
      </button>
    </footer>
  );
}
