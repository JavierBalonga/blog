import { Metadata } from "next";
import Markdown from "@/components/abstract/Markdown";
import strapiSdk from "@/controllers/strapi-sdk";
import ProgressBar from "../../components/abstract/ProgressBar";
import Time from "../../components/abstract/Time";

interface Props {
  params: { slug: string };
  searchParams: Record<string, string | string[]>;
}

export default async function PostPage(props: Props) {
  const { slug } = props.params;
  const postResponse = await strapiSdk.getPost({ slug });
  const post = postResponse.data.posts?.data[0];

  return (
    <section className="flex flex-col items-center gap-16 pt-8">
      <header className="flex flex-col w-full max-w-2xl gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          {post?.attributes?.title}
        </h1>
        <p className="text-xl text-zinc-400">{post?.attributes?.description}</p>
        <Time className="order-first" date={post?.attributes?.publishedAt} />
      </header>
      {post?.attributes?.content && (
        <Markdown>{post?.attributes?.content}</Markdown>
      )}
      <ProgressBar />
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const postsResponse = await strapiSdk.getPosts();
  return postsResponse.data.posts?.data?.map((post) => ({
    slug: post.attributes?.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = props.params;
  const postResponse = await strapiSdk.getPost({ slug });
  const post = postResponse.data.posts?.data[0];
  const title = `Metalit0 - ${post?.attributes?.title || ""}`;
  const description = post?.attributes?.description || "";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}
