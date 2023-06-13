import getPosts from "@/controllers/getPosts";
import MorePosts from "./MorePosts";
import PostCard from "./PostCard";

const POSTS_PER_PAGE = 2;

export default async function Posts() {
  const data = await getPosts({ offset: 0, limit: POSTS_PER_PAGE });
  return (
    <section className="flex flex-col gap-8 py-8">
      {data.posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
      {data.total > POSTS_PER_PAGE && (
        <MorePosts offset={POSTS_PER_PAGE} limit={1} />
      )}
    </section>
  );
}
