import Markdown from "@/components/abstract/Markdown";
import strapiSdk from "@/controllers/strapi-sdk";

interface Props {
  params: { slug: string };
  searchParams: Record<string, string | string[]>;
}

export default async function PostPage(props: Props) {
  const { slug } = props.params;
  const postResponse = await strapiSdk.getPost({ slug });
  const post = postResponse.data.posts?.data[0];

  return (
    <section className="flex flex-col gap-8 pb-16">
      <header className="flex flex-col gap-4 py-8">
        <h1 className="text-6xl">{post?.attributes?.title}</h1>
        <p className="text-xl">{post?.attributes?.description}</p>
        {post?.attributes?.publishedAt && (
          <time dateTime={post?.attributes.publishedAt} className="text-lg">
            {new Date(post?.attributes.publishedAt).toLocaleDateString()}
          </time>
        )}
      </header>
      {post?.attributes?.content && (
        <Markdown>{post?.attributes?.content}</Markdown>
      )}
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const postsResponse = await strapiSdk.getPosts({
    offset: 0,
    limit: 1000, // TODO this should be infinite
  });
  return postsResponse.data.posts?.data?.map((post) => ({
    slug: post.attributes?.slug,
  }));
}
