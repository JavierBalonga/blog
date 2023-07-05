import { Metadata } from "next";
import Markdown from "@/components/abstract/Markdown";
import ProgressBar from "@/components/abstract/ProgressBar";
import Time from "@/components/abstract/Time";
import getPost from "@/controllers/getPost";
import getPosts from "@/controllers/getPosts";

interface Props {
  params: { slug: string };
  searchParams: Record<string, string | string[]>;
}

export default async function PostPage(props: Props) {
  const { slug } = props.params;
  const post = await getPost({ slug });

  return (
    <section className="flex flex-col items-center gap-16 pt-8">
      <header className="flex flex-col w-full max-w-2xl gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          {post.title}
        </h1>
        <p className="text-xl text-zinc-400">{post.description}</p>
        <Time className="order-first" date={post.date} />
      </header>
      {post.content && <Markdown>{post.content}</Markdown>}
      <ProgressBar />
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const { posts } = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = props.params;
  const post = await getPost({ slug });
  const title = `Metalit0 - ${post.title || ""}`;
  const description = post.description || "";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}
