"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MAX_SIZE = 76;
const MIN_SIZE = 42;
const minScale = MIN_SIZE / MAX_SIZE;

export default function Avatar() {
  const [imgRef, setImgRef] = useState<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!imgRef) return;
    const handleScroll = () => {
      const yTransform = window.scrollY + (MAX_SIZE - window.scrollY);
      const scale = Math.max(
        1 - (1 - minScale) * (window.scrollY / MAX_SIZE),
        minScale
      );
      imgRef.style.transform = `translate(0, ${yTransform}px) scale(${scale})`;
    };
    document.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => document.removeEventListener("scroll", handleScroll);
  }, [imgRef]);

  return (
    <Link
      className="flex justify-center items-center relative origin-top-left rounded-full bg-transparent hover:bg-zinc-700 transition-colors"
      style={{
        height: `${MAX_SIZE}px`,
        width: `${MAX_SIZE}px`,
        transform: `translate(0px, ${MAX_SIZE}px) scale(1)`,
      }}
      href="/"
      ref={setImgRef}
    >
      <Image
        className="h-16 w-16 rounded-full object-cover bg-zinc-800 m-0"
        alt="Metalit0"
        src="/avatar.png"
        width={MAX_SIZE}
        height={MAX_SIZE}
      />
    </Link>
  );
}
