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
      {posts.length === 0 ? (
        <p className="text-red-400">
          Lo siento, todavía estoy trabajando en mis primeros articulos, espero
          tenerlos listas pronto.
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
