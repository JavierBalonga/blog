import { NextResponse } from "next/server";
import getPosts from "@/controllers/getPosts";

export async function GET() {
  try {
    const postsResponse = await getPosts();
    return NextResponse.json(postsResponse);
  } catch (error) {
    if (!(error instanceof Error)) {
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
