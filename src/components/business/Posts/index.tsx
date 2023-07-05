import getPosts from "@/controllers/getPosts";
import { POSTS_PER_PAGE } from "./constants";
import MorePosts from "./MorePosts";
import PostCard from "./PostCard";

export default async function Posts() {
  const { posts } = await getPosts();
  const firstPosts = posts.slice(0, POSTS_PER_PAGE);
  const remainingPosts = posts.slice(POSTS_PER_PAGE);

  return (
    <section className="flex flex-col gap-8 pt-8">
      {firstPosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
      {remainingPosts && <MorePosts posts={remainingPosts} />}
    </section>
  );
}
