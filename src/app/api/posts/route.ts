import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

const postsPath = path.join(process.cwd(), "/_posts");

interface PostMetadata {
  title?: string;
  description?: string;
  date?: string;
}

export interface SimplePost {
  slug: string;
  title?: string;
  description?: string;
  date?: string;
}

export interface PostsResponse {
  posts: SimplePost[];
}

export async function GET(
  _request: Request
): Promise<NextResponse<PostsResponse>> {
  const fileNames = await fs.promises.readdir(postsPath, { encoding: "utf-8" });

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsPath, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const { title, description, date } = data as PostMetadata;
      return { slug, title, description, date };
    })
  );

  const sortedPosts = posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    if (a.date > b.date) return 1;
    else if (a.date < b.date) return -1;
    else return 0;
  });

  return NextResponse.json({ posts: sortedPosts });
}
