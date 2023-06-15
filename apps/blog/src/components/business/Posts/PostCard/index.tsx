"use client";

import { GetPostsQuery } from "@/controllers/strapi-getSdk";
import Link from "next/link";

export interface PostCardProps {
  post: Exclude<GetPostsQuery["posts"], undefined | null>["data"][number];
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col gap-2 p-6 border-teal-50 border rounded-lg">
      <h4 className="text-2xl">{post.attributes?.title}</h4>
      <p>{post.attributes?.description}</p>
      {post.attributes?.publishedAt && (
        <time dateTime={post.attributes?.publishedAt}>
          {new Date(post.attributes?.publishedAt).toLocaleDateString()}
        </time>
      )}
      <div className="flex flex-row gap-4">
        {post.attributes?.tags?.data.map((tag) => (
          <span key={tag.id} className="text-sm text-gray-500">
            {tag.attributes?.name}
          </span>
        ))}
      </div>
      <Link
        className="text-blue-500 hover:underline"
        href={`/${post.attributes?.slug}`}
      >
        Read more
      </Link>
    </div>
  );
}
