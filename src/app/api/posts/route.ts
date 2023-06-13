import getPosts from "@/controllers/getPosts";
import parseSearchParams from "@/lib/parseSearchParams";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

const querySchema = yup.object().shape({
  offset: yup.number().integer().min(0).default(0),
  limit: yup.number().integer().min(1).default(10),
});

export async function GET(req: NextRequest) {
  try {
    const params = parseSearchParams(req.nextUrl.searchParams);
    const { offset, limit } = await querySchema.validate(params);
    const postsResponse = await getPosts({ offset, limit });
    return NextResponse.json(postsResponse);
  } catch (error) {
    if (!(error instanceof Error)) {
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
