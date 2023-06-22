import Markdown from "@/components/abstract/Markdown";
import strapiSdk from "@/controllers/strapi-sdk";
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
    <section className="flex flex-col items-center gap-8 py-16">
      <header className="flex flex-col w-full max-w-2xl gap-6 py-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          {post?.attributes?.title}
        </h1>
        <p className="text-xl text-zinc-400">{post?.attributes?.description}</p>
        <Time className="order-first" date={post?.attributes?.publishedAt} />
      </header>
      {post?.attributes?.content && (
        <Markdown>{post?.attributes?.content}</Markdown>
      )}
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
