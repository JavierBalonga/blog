import { GetPostQuery } from "@/controllers/strapi-getSdk";
import strapiSdk from "@/controllers/strapi-sdk";
import { NextRequest, NextResponse } from "next/server";

export type GetPostResponse = Exclude<
  GetPostQuery["posts"],
  undefined | null
>["data"][number];

export async function GET(
  _req: NextRequest,
  context: { params: { slug: string } }
) {
  try {
    const { slug } = context.params;
    const postResponse = await strapiSdk.getPost({ slug });
    return NextResponse.json(
      postResponse.data.posts?.data[0] as GetPostResponse
    );
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
