"use client";

import { PostsResponse } from "@/controllers/getPosts";
import { useCallback, useState } from "react";
import PostCard from "../PostCard";

interface MorePostsProps {
  offset: number;
  limit: number;
}

export default function MorePosts({ offset, limit }: MorePostsProps) {
  const [postsResponse, setPostsResponse] = useState<PostsResponse | null>(
    null
  );

  const handleClick = useCallback(() => {
    const url = new URL("/api/posts", "http://localhost:3000");
    url.searchParams.set("offset", String(offset));
    url.searchParams.set("limit", String(limit));
    fetch(url)
      .then((res) => res.json())
      .then((data: PostsResponse) => setPostsResponse(data));
  }, []);

  return !postsResponse ? (
    <button onClick={handleClick}>Load More</button>
  ) : (
    <>
      {postsResponse.posts.map((post) => {
        return <PostCard key={post.slug} post={post} />;
      })}
      {offset + limit < postsResponse.total && (
        <MorePosts offset={offset + limit} limit={limit} />
      )}
    </>
  );
}
