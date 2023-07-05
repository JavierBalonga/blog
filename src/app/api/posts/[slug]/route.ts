import { NextRequest, NextResponse } from "next/server";
import getPost from "@/controllers/getPost";
import getPosts from "@/controllers/getPosts";

export async function GET(
  _req: NextRequest,
  context: { params: { slug: string } }
) {
  try {
    const { slug } = context.params;
    const post = await getPost({ slug });
    return NextResponse.json(post);
  } catch (error) {
    if (!(error instanceof Error)) {
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }
    if (error.message === "Not found") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function generateStaticParams() {
  const { posts } = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
