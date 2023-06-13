"use client";

import { SimplePost } from "@/types";
import Link from "next/link";

export interface PostCardProps {
  post: SimplePost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col gap-2 p-6 border-teal-50 border rounded-lg">
      <h4 className="text-2xl">{post.title}</h4>
      <p>{post.description}</p>
      {post.date && (
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString()}
        </time>
      )}
      <Link className="text-blue-500 hover:underline" href={`/${post.slug}`}>
        Read more
      </Link>
    </div>
  );
}
