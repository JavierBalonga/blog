import strapiSdk from "@/controllers/strapi-sdk";
import MorePosts from "./MorePosts";
import PostCard from "./PostCard";

const POSTS_PER_PAGE = 2;

export default async function Posts() {
  const postsResponse = await strapiSdk.getPosts({
    offset: 0,
    limit: POSTS_PER_PAGE,
  });
  return (
    <section className="flex flex-col gap-8 py-8">
      {postsResponse.data.posts?.data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {postsResponse.data.posts?.meta.pagination.total &&
        postsResponse.data.posts.meta.pagination.total > POSTS_PER_PAGE && (
          <MorePosts offset={POSTS_PER_PAGE} limit={1} />
        )}
    </section>
  );
}
