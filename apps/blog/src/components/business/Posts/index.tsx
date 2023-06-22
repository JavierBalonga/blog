import strapiSdk from "@/controllers/strapi-sdk";
import { POSTS_PER_PAGE } from "./constants";
import MorePosts from "./MorePosts";
import PostCard from "./PostCard";

export default async function Posts() {
  const postsResponse = await strapiSdk.getPosts();
  const posts = postsResponse.data.posts?.data;
  const firstPosts = posts?.slice(0, POSTS_PER_PAGE);
  const remainingPosts = posts?.slice(POSTS_PER_PAGE);

  return (
    <section className="flex flex-col gap-8 py-8">
      {firstPosts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {remainingPosts && <MorePosts posts={remainingPosts} />}
    </section>
  );
}
