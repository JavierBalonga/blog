import getPosts from "@/controllers/getPosts";
import { POSTS_PER_PAGE } from "./constants";
import MorePosts from "./MorePosts";
import PostCard from "./PostCard";

export default async function Posts() {
  const { posts } = await getPosts();

  const visiblePosts = posts.filter(({ slug }) => !slug.startsWith("_"));
  const firstPosts = visiblePosts.slice(0, POSTS_PER_PAGE);
  const remainingPosts = visiblePosts.slice(POSTS_PER_PAGE);

  return (
    <section className="flex flex-col gap-8 pt-8">
      {visiblePosts.length === 0 ? (
        <p className="text-red-400">
          Lo siento, todavía estoy trabajando en mis primeros articulos, espero
          tenerlos listos pronto.
        </p>
      ) : (
        <>
          {firstPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
          {remainingPosts.length > 0 && <MorePosts posts={remainingPosts} />}
        </>
      )}
    </section>
  );
}
