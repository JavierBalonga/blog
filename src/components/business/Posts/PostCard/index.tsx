"use client";

import Link from "next/link";
import ArrowRigthIcon from "@/components/abstract/icons/ArrowRigthIcon";
import { SimplePost } from "../../../../types";
import Time from "../../../abstract/Time";

export interface PostCardProps {
  post: SimplePost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/${post.slug}`} className="p-6 -mx-6 rounded-2xl clickable">
      <article className="flex flex-col gap-2">
        <h2 className="text-base font-semibold tracking-tight text-zinc-100">
          {post.title}
        </h2>
        <Time className="order-first" date={post.date} />
        <p className="text-sm text-zinc-400">{post.description}</p>
        <div className="flex flex-row gap-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-400 border border-gray-400/20 px-2 py-1 bg-gray-400/10 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm font-medium text-teal-500">
          Leer mas <ArrowRigthIcon className="inline" />
        </p>
      </article>
    </Link>
  );
}
