"use client";

import { useMemo, useState } from "react";
import { GetPostsQuery } from "../../../../controllers/strapi-getSdk";
import { POSTS_PER_PAGE } from "../constants";
import PostCard from "../PostCard";

interface MorePostsProps {
  posts: Exclude<GetPostsQuery["posts"], undefined | null>["data"];
}

export default function MorePosts({ posts }: MorePostsProps) {
  const [show, setShow] = useState(false);

  const { firstPosts, remainingPosts } = useMemo(() => {
    const firstPosts = posts.slice(0, POSTS_PER_PAGE);
    const remainingPosts = posts.slice(POSTS_PER_PAGE);
    return { firstPosts, remainingPosts };
  }, [posts]);

  return !show ? (
    <button className="p-2 rounded-sm clickable" onClick={() => setShow(true)}>
      Load More
    </button>
  ) : (
    <>
      {firstPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {Boolean(remainingPosts.length) && <MorePosts posts={remainingPosts} />}
    </>
  );
}
