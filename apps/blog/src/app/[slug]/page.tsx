import Markdown from "@/components/abstract/Markdown";
import getPosts from "@/controllers/getPosts";
import { Post } from "@/types";

interface Props {
  params: { slug: string };
  searchParams: Record<string, string | string[]>;
}

export default async function PostPage(props: Props) {
  const { slug } = props.params;
  // TODO ver como cambiar el "http://localhost:3000" para que sea dinamico
  // y funcione tambien fuera del ambiente local
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`);
  const post: Post = await res.json();

  return (
    <section className="flex flex-col gap-8 pb-16">
      <header className="flex flex-col gap-4 py-8">
        <h1 className="text-6xl">{post.title}</h1>
        <p className="text-xl">{post.description}</p>
        {post.date && (
          <time dateTime={post.date} className="text-lg">
            {new Date(post.date).toLocaleDateString()}
          </time>
        )}
      </header>
      <Markdown>{post.content}</Markdown>
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const { posts } = await getPosts({ offset: 0, limit: Infinity });
  const params = posts.map((post) => ({
    slug: post.slug,
  }));
  return params;
}
