"use client";

import { useCallback, useState } from "react";
import { GetPostsResponse } from "../../../../app/api/posts/route";
import PostCard from "../PostCard";

interface MorePostsProps {
  offset: number;
  limit: number;
}

export default function MorePosts({ offset, limit }: MorePostsProps) {
  const [postsResponse, setPostsResponse] = useState<GetPostsResponse | null>(
    null
  );

  const handleClick = useCallback(() => {
    const url = new URL("/api/posts", "http://localhost:3000");
    url.searchParams.set("offset", String(offset));
    url.searchParams.set("limit", String(limit));
    fetch(url)
      .then((res) => res.json())
      .then((data: GetPostsResponse) => setPostsResponse(data));
  }, []);

  return !postsResponse ? (
    <button onClick={handleClick}>Load More</button>
  ) : (
    <>
      {postsResponse.data.map((post) => {
        return <PostCard key={post.attributes?.slug} post={post} />;
      })}
      {offset + limit < postsResponse.meta.pagination.total && (
        <MorePosts offset={offset + limit} limit={limit} />
      )}
    </>
  );
}
