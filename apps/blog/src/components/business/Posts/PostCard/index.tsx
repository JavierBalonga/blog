"use client";

import ArrowRigthIconIcon from "@/components/abstract/icons/ArrowRigthIcon";
import { GetPostsQuery } from "@/controllers/strapi-getSdk";
import Link from "next/link";
import Time from "../../../abstract/Time";

export interface PostCardProps {
  post: Exclude<GetPostsQuery["posts"], undefined | null>["data"][number];
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/${post.attributes?.slug}`}
      className="p-6 -mx-6 rounded-2xl clickable"
    >
      <article className="flex flex-col gap-2">
        <h2 className="text-base font-semibold tracking-tight text-zinc-100">
          {post.attributes?.title}
        </h2>
        <Time className="order-first" date={post.attributes?.publishedAt} />
        <p className="text-sm text-zinc-400">{post.attributes?.description}</p>
        <div className="flex flex-row gap-2">
          {post.attributes?.tags?.data.map((tag) => (
            <span
              key={tag.id}
              className="text-xs font-medium text-gray-400 border border-gray-400/20 px-2 py-1 bg-gray-400/10 rounded-md"
            >
              {tag.attributes?.name}
            </span>
          ))}
        </div>
        <p className="text-sm font-medium text-teal-500">
          Leer mas <ArrowRigthIconIcon className="inline" />
        </p>
      </article>
    </Link>
  );
}
