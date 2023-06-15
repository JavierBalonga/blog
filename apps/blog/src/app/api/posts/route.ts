import { GetPostsQuery } from "@/controllers/strapi-getSdk";
import strapiSdk from "@/controllers/strapi-sdk";
import parseSearchParams from "@/lib/parseSearchParams";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

const querySchema = yup.object().shape({
  offset: yup.number().integer().min(0).default(0),
  limit: yup.number().integer().min(1).default(10),
});

export type GetPostsResponse = GetPostsQuery["posts"];

export async function GET(req: NextRequest) {
  try {
    const params = parseSearchParams(req.nextUrl.searchParams);
    const { offset, limit } = await querySchema.validate(params);
    const postsResponse = await strapiSdk.getPosts({ offset, limit });
    return NextResponse.json(postsResponse.data.posts as GetPostsResponse);
  } catch (error) {
    if (!(error instanceof Error)) {
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
